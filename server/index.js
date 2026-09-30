// Evaluated before ./contact.js, which reads its configuration at module scope.
import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { contactRoute } from './contact.js'
import { isConfigured } from './mailer.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')

const app = express()
const PORT = Number(process.env.PORT) || 3001

/**
 * The API is same-origin on Vercel, so CORS is only relevant when this server
 * is fronted by a separately-hosted frontend. It is therefore opt-in: with no
 * ALLOWED_ORIGINS set, cross-origin browser calls are refused rather than
 * silently allowed.
 */
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      // Same-origin and non-browser callers (curl, health checks, tests) send
      // no Origin header and are always allowed.
      if (!origin) return callback(null, true)
      if (allowedOrigins.length === 0) return callback(null, false)
      callback(null, allowedOrigins.includes(origin))
    },
    credentials: true,
  })
)

app.use(express.json({ limit: '32kb' }))

// Bound for every method, not just POST, so handleContact's own method guard
// answers a wrong verb with 405 instead of letting it fall through to the SPA
// catch-all below and returning index.html with a 200.
app.all('/api/contact', contactRoute)

app.all('/api/health', (_req, res) => {
  res.json({ status: 'ok', mailConfigured: isConfigured() })
})

// Anything under /api is an endpoint, never a page. Responding 404 here keeps a
// mistyped API path from being answered with the SPA shell.
app.all(/^\/api(\/|$)/, (_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Serve the production build when it exists, so a single Node process can host
// the whole site. This makes the self-host path identical to Vercel: one origin,
// no CORS, no second process to forget to start.
if (existsSync(DIST)) {
  app.use(express.static(DIST, { index: false, maxAge: '1h' }))
  app.get('*', (_req, res) => res.sendFile(join(DIST, 'index.html')))
} else {
  app.get('/', (_req, res) =>
    res
      .status(200)
      .type('text/plain')
      .send('API is running. Run `npm run build` to serve the site from this process.')
  )
}

app.use((err, _req, res, _next) => {
  if (err?.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Message is too large.' })
  }
  console.error('[server] unhandled error:', err)
  res.status(500).json({ error: 'Something went wrong. Please try again.' })
})

if (!isConfigured()) {
  console.warn('[server] SMTP not configured - /api/contact will return 503 until SMTP_* and CONTACT_EMAIL are set.')
}

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
  console.log(allowedOrigins.length ? `CORS origins: ${allowedOrigins.join(', ')}` : 'CORS: same-origin only')
  console.log(`Mail configured: ${isConfigured()}`)
})
