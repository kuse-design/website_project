import { createServer } from 'node:http'
import handler from '../api/contact.js'

// Mimics how Vercel invokes a Node function: Express-shaped req/res, no CORS
// headers, no static file layer. `send` and `app` are present because both
// real runtimes provide them and express-rate-limit reaches for both.
function mockRes() {
  const res = {
    statusCode: 0,
    headers: {},
    body: null,
    headersSent: false,
    writableEnded: false,
    _listeners: {},
  }
  res.on = (event, fn) => {
    ;(res._listeners[event] ||= []).push(fn)
    return res
  }
  // A real ServerResponse emits 'finish' once the reply is flushed; the rate
  // limiter relies on that being observable.
  const flush = (payload) => {
    res.body = payload
    res.headersSent = true
    res.writableEnded = true
    setImmediate(() => (res._listeners.finish || []).forEach((fn) => fn()))
    return res
  }
  res.status = (code) => { res.statusCode = code; return res }
  res.json = flush
  res.send = flush
  res.setHeader = (k, v) => { res.headers[k] = v }
  res.end = () => res
  return res
}

// Each scenario gets its own IP so the 5-per-10-minutes budget is not consumed
// by the tests that run before it.
let nextIp = 1
const freshIp = () => `203.0.113.${nextIp++}`

async function call(method, body, ip = freshIp()) {
  const req = {
    method,
    body,
    headers: { 'x-forwarded-for': `${ip}, 10.0.0.1` },
    ip,
    app: { get: () => false },
    socket: { remoteAddress: ip },
  }
  const res = mockRes()
  await handler(req, res)
  return res
}

const results = []
function check(name, pass, detail = '') {
  results.push({ name, pass, detail })
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ` :: ${detail}` : ''}`)
}

console.log('--- method guard ---')
{
  const r = await call('GET', undefined)
  check('GET rejected with 405', r.statusCode === 405, `got ${r.statusCode}`)
}

console.log('\n--- validation ---')
{
  const r = await call('POST', { name: '', email: 'nope', phone: '', message: '' })
  const f = r.body?.fields || {}
  check('empty payload -> 400', r.statusCode === 400, `got ${r.statusCode}`)
  check('flags name/email/phone/message', !!(f.name && f.email && f.phone && f.message),
    Object.keys(f).join(','))
}
{
  const r = await call('POST', {
    name: 'A', email: 'user@example.com', phone: '0801', message: 'x'.repeat(6000),
  })
  check('oversized message -> 400', r.statusCode === 400, `got ${r.statusCode}`)
  check('message length enforced', !!(r.body?.fields?.message), JSON.stringify(r.body?.fields))
}

console.log('\n--- HTML injection is neutralised ---')
{
  const XSS = '<img src=x onerror=alert(1)>'
  const r = await call('POST', {
    name: XSS,
    email: 'x@example.com',
    phone: '0801',
    subject: '<b>bold</b>',
    message: `hello ${XSS}`,
  })
  check('payload with markup still accepted as mail (200)', r.statusCode === 200, `got ${r.statusCode}`)
}

console.log('\n--- header injection is stripped ---')
{
  const r = await call('POST', {
    name: 'Eve\r\nBcc: attacker@evil.test',
    email: 'eve@example.com',
    phone: '0801',
    subject: 'hi\r\nX-Injected: yes',
    message: 'body',
  })
  check('CRLF in name/subject does not break send', r.statusCode === 200, `got ${r.statusCode}`)
}

console.log('\n--- honeypot ---')
{
  const r = await call('POST', {
    name: 'Bot', email: 'bot@example.com', phone: '0', message: 'spam',
    company_website: 'http://spam.example',
  })
  check('honeypot returns fake success (200)', r.statusCode === 200, `got ${r.statusCode}`)
}

console.log('\n--- genuine submission ---')
{
  const r = await call('POST', {
    name: 'Real Visitor',
    email: 'visitor@example.com',
    phone: '08031234567',
    subject: 'Account enquiry',
    message: 'I would like to open a savings account.\nPlease call me.',
  })
  check('valid submission -> 200', r.statusCode === 200, JSON.stringify(r.body))
}

console.log('\n--- rate limit (default 5 / 10 min) ---')
{
  let limited = 0
  for (let i = 0; i < 9; i++) {
    const r = await call('POST', {
      name: `Spammer ${i}`, email: 's@example.com', phone: '0', message: 'spam',
    }, '198.51.100.99')
    if (r.statusCode === 429) limited++
  }
  check('further submissions get 429', limited > 0, `${limited}/9 rejected`)
}

console.log('\n--- a different IP is unaffected ---')
{
  const r = await call('POST', {
    name: 'Other User', email: 'o@example.com', phone: '0', message: 'hello',
  }, '198.51.100.200')
  check('fresh IP still allowed', r.statusCode === 200, `got ${r.statusCode}`)
}

const failed = results.filter((r) => !r.pass)
console.log(`\n${results.length - failed.length}/${results.length} passed`)
process.exit(failed.length ? 1 : 0)
