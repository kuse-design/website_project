import nodemailer from 'nodemailer'

/**
 * Shared contact-mail logic. Imported by every runtime that serves
 * /api/contact so the validation, sanitisation and message layout exist in
 * exactly one place:
 *
 *   - api/contact.js    Vercel serverless function (current deployment)
 *   - server/index.js   Express, for self-hosting later
 *
 * Keeping it here is the point: the two runtimes cannot drift apart, and a
 * security fix applies to both at once.
 */

const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  subject: 200,
  message: 5000,
}

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/

export class MailerConfigError extends Error {
  constructor(missing) {
    super(
      `Contact email is not configured. Missing environment variable(s): ${missing.join(', ')}`
    )
    this.name = 'MailerConfigError'
    this.missing = missing
  }
}

/**
 * Escapes the five XML-significant characters. Every value interpolated into
 * the HTML body goes through this: without it a visitor can post markup as
 * their name or message and have it render inside the notification email.
 */
export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Strips CR/LF. These values are used in mail headers (Subject, Reply-To, From
 * display name), and a bare newline there lets a caller append arbitrary
 * headers of their own.
 */
function headerSafe(value) {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim()
}

function collapse(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

export function validateContactPayload(payload) {
  const body = payload && typeof payload === 'object' ? payload : {}

  const errors = {}

  const name = collapse(body.name)
  const email = collapse(body.email)
  const phone = collapse(body.phone)
  const subject = collapse(body.subject)
  const message = String(body.message ?? '').replace(/\r\n/g, '\n').trim()

  if (!name) errors.name = 'Name is required.'
  else if (name.length > LIMITS.name) errors.name = `Name must be under ${LIMITS.name} characters.`

  if (!email) errors.email = 'Email address is required.'
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = 'Please provide a valid email address.'

  if (!phone) errors.phone = 'Phone number is required.'
  else if (phone.length > LIMITS.phone) errors.phone = `Phone must be under ${LIMITS.phone} characters.`

  if (!message) errors.message = 'Message is required.'
  else if (message.length > LIMITS.message)
    errors.message = `Message must be under ${LIMITS.message} characters.`

  if (subject.length > LIMITS.subject)
    errors.subject = `Subject must be under ${LIMITS.subject} characters.`

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    value: { name, email, phone, subject, message },
  }
}

function readEnv() {
  const required = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  }

  const missing = Object.keys(required).filter((key) => !required[key])
  if (missing.length) throw new MailerConfigError(missing)

  return {
    host: required.SMTP_HOST,
    port: Number(required.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    user: required.SMTP_USER,
    pass: required.SMTP_PASS,
    to: required.CONTACT_EMAIL,
    from: process.env.CONTACT_FROM || required.SMTP_USER,
  }
}

/**
 * Built on first use rather than at import time. Serverless runtimes freeze or
 * discard module scope between invocations, and a transport created during cold
 * start can hold a socket that is already dead by the time a request arrives.
 */
let cachedEnv = null
export function getEnv() {
  if (!cachedEnv) cachedEnv = readEnv()
  return cachedEnv
}

let cached = null
export function getTransport() {
  if (cached) return cached

  const env = getEnv()

  cached = nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure: env.secure,
    auth: { user: env.user, pass: env.pass },
    // The message is built entirely from strings below, never from user-supplied
    // URLs or file paths. Pinning both keeps the file-read/SSRF advisories in
    // nodemailer's history closed even if that assumption is later broken.
    disableFileAccess: true,
    disableUrlAccess: true,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  })

  return cached
}

function row(label, value) {
  return `<tr>
            <td style="padding:10px;border-bottom:1px solid #eee;width:34%;vertical-align:top;"><strong>${label}</strong></td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${value}</td>
          </tr>`
}

function buildMessage({ name, email, phone, subject, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeSubject = escapeHtml(subject)
  // Escape first, then turn newlines into <br>. Reversing the order would let a
  // visitor smuggle raw tags through the replacement.
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f1ea;">
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-top:4px solid #c9a227;">
    <h2 style="color:#c9a227;padding:24px 24px 0;margin:0;font-size:20px;">New Contact Form Submission</h2>
    <p style="padding:0 24px;margin:6px 0 0;color:#6e6b66;font-size:14px;">Received from the Kaizen MFB website contact form.</p>
    <table style="width:100%;border-collapse:collapse;padding:8px 24px 4px;">
      ${row('Name:', safeName)}
      ${row('Email:', safeEmail)}
      ${row('Phone:', safePhone)}
      ${row('Subject:', safeSubject || 'N/A')}
    </table>
    <div style="padding:8px 24px 24px;">
      <p style="margin:0 0 8px;color:#6e6b66;font-size:14px;"><strong>Message</strong></p>
      <div style="line-height:24px;color:#141414;">${safeMessage}</div>
    </div>
  </div>
</body></html>`

  const text = [
    'New contact form submission (Kaizen MFB website)',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Subject: ${subject || 'N/A'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  return { html, text }
}

export async function sendContactMail(value) {
  const env = getEnv()
  const transport = getTransport()
  const { html, text } = buildMessage(value)

  const mailOptions = {
    from: `"Kaizen MFB Contact" <${env.from}>`,
    to: env.to,
    // Reply-To is attacker-influenced, so it is header-sanitised like any header.
    replyTo: headerSafe(value.email),
    subject: headerSafe(value.subject) || `New Contact Form: ${headerSafe(value.name)}`,
    html,
    text,
  }

  return transport.sendMail(mailOptions)
}

export function isConfigured() {
  try {
    getEnv()
    return true
  } catch {
    return false
  }
}
