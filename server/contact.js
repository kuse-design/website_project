import { rateLimit, ipKeyGenerator } from 'express-rate-limit'
import {
  validateContactPayload,
  sendContactMail,
  isConfigured,
  MailerConfigError,
} from './mailer.js'

/**
 * The /api/contact request pipeline, shared by both runtimes.
 *
 *   api/contact.js    Vercel  ->  handleContact({ req, res })
 *   server/index.js   Express ->  app.post('/api/contact', contactRoute)
 *
 * Both platforms hand us Express-shaped req/res objects, so the same code
 * serves both without adaptation.
 */

const WINDOW_MS = Number(process.env.CONTACT_RATE_WINDOW_MS || 10 * 60 * 1000)
const MAX_PER_WINDOW = Number(process.env.CONTACT_RATE_LIMIT || 5)

// Every real request reaches the app through a reverse proxy (Vercel's edge, or
// nginx/Caddy in front of a VPS). Express therefore sees the proxy's address as
// req.ip, which would collapse every visitor into one shared bucket. Which
// header to believe depends on the deployment, so it is explicit rather than
// guessed from a permissive default.
const TRUST_FORWARDED_FOR =
  process.env.TRUST_PROXY === 'true' || Boolean(process.env.VERCEL)

function clientIp(req) {
  if (TRUST_FORWARDED_FOR) {
    const forwarded = req.headers?.['x-forwarded-for']
    if (typeof forwarded === 'string' && forwarded.length) {
      return forwarded.split(',')[0].trim()
    }
  }
  if (req.ip) return req.ip
  return req.socket?.remoteAddress || 'unknown'
}

/**
 * Per-IP cap. On a long-running Express process this is a real limit. On Vercel
 * each instance keeps its own counter, so it raises the floor rather than
 * enforcing a hard global cap — see DEPLOY.md for the durable-store option if
 * the endpoint is ever abused.
 *
 * keyGenerator is supplied because the default one reads Express's
 * `trust proxy` setting, which is unavailable in the serverless runtime.
 * ipKeyGenerator still applies the IPv6 /64 bucketing the default would.
 */
const limiter = rateLimit({
  windowMs: WINDOW_MS,
  limit: MAX_PER_WINDOW,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  keyGenerator: (req) => ipKeyGenerator(clientIp(req)),
  validate: {
    trustProxy: false,
    xForwardedForHeader: false,
  },
  message: {
    error: 'Too many messages sent from this connection. Please try again later.',
  },
})

// Honeypot: a real visitor never sees or fills this field, so anything in it is
// a bot. It is answered with a success shape so the bot does not learn to retry.
const HONEYPOT_FIELD = 'company_website'

export async function handleContact({ req, res }) {
  if (!isConfigured()) {
    console.error('[contact] SMTP is not configured; set SMTP_* and CONTACT_EMAIL.')
    return res.status(503).json({
      error: 'The contact form is temporarily unavailable. Please email info@kaizenmfb.com.',
    })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}

  if (body[HONEYPOT_FIELD]) {
    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  }

  const { ok, errors, value } = validateContactPayload(body)
  if (!ok) {
    return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors })
  }

  try {
    await sendContactMail(value)
  } catch (err) {
    if (err instanceof MailerConfigError) {
      console.error('[contact] configuration error:', err.message)
      return res.status(503).json({ error: 'The contact form is temporarily unavailable.' })
    }
    // The SMTP error text can contain credentials' host and auth details, so it
    // is logged for the operator but never returned to the browser.
    console.error(`[contact] send failed from ${clientIp(req)}:`, err.message)
    return res.status(500).json({
      error: 'We could not send your message right now. Please try again, or email info@kaizenmfb.com.',
    })
  }

  return res.status(200).json({ success: true, message: 'Message sent successfully' })
}

/**
 * Wraps the pipeline with the rate limiter.
 *
 * The limiter answers blocked requests itself and never calls its `next`
 * callback, so resolving only from inside `next` would leave this promise
 * pending forever — on Vercel that holds the function invocation open until it
 * times out. The response `finish` event is the reliable signal that the reply
 * is on its way, whichever path produced it.
 */
export function contactRoute(req, res) {
  return new Promise((resolve) => {
    let settled = false
    const done = () => {
      if (settled) return
      settled = true
      resolve()
    }

    // Rejected before the limiter runs, so a wrong verb cannot spend a real
    // visitor's quota. Kept here rather than in the Express layer so the Vercel
    // function gets the same behaviour.
    if ((req.method || 'POST').toUpperCase() !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).json({ error: 'Method not allowed' })
      return done()
    }

    if (typeof res.on === 'function') {
      res.on('finish', done)
      res.on('close', done)
    }

    limiter(req, res, async (err) => {
      if (err) {
        console.error('[contact] rate limiter error:', err.message)
        if (!res.headersSent) res.status(500).json({ error: 'Something went wrong. Please try again.' })
        return done()
      }
      try {
        await handleContact({ req, res })
      } catch (unexpected) {
        console.error('[contact] unhandled error:', unexpected)
        if (!res.headersSent) {
          res.status(500).json({ error: 'Something went wrong. Please try again.' })
        }
      }
      done()
    })
  })
}
