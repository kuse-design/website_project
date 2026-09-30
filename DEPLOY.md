# Deploying

## How the contact form works in production

The form posts to a **relative** URL:

```
POST /api/contact
```

There is no API hostname configured anywhere, and that is deliberate.

| Environment | Who answers `/api/contact` |
|---|---|
| Local dev | Vite's dev proxy forwards it to Express on `:3001` (`vite.config.js`) |
| Vercel (current) | `api/contact.js` — a serverless function on the same hostname |
| Self-hosted Node | Express in `server/index.js`, which also serves `dist/` |

Because the site and the endpoint share an origin in every environment, the
browser never issues a cross-origin request. That removes CORS, preflight
failures, and the class of "it works locally but not deployed" bugs entirely.

`api/contact.js` and `server/index.js` both delegate to `server/contact.js`, so
validation, rate limiting, escaping and the email template exist once. Editing
one place changes both runtimes.

---

## Deploying to Vercel

### 1. Push the code

```bash
git add -A
git commit -m "Add Vercel contact endpoint and single-origin API"
git push
```

`.env` is gitignored and is **not** deployed. The values must be added in the
dashboard.

### 2. Import the project

Vercel → **Add New → Project** → import the repo. It detects Vite and reads
`vercel.json`, which sets the build command, output directory, the SPA rewrite,
and the function timeout.

### 3. Add the environment variables (required)

Vercel → Project → **Settings → Environment Variables** → add each of:

| Variable | Value | Notes |
|---|---|---|
| `SMTP_HOST` | `smtp.gmail.com` | |
| `SMTP_PORT` | `587` | |
| `SMTP_SECURE` | `false` | `true` only for port 465 |
| `SMTP_USER` | your Gmail address | The From address comes from this |
| `SMTP_PASS` | your **app password** | Not your account password — see below |
| `CONTACT_EMAIL` | the inbox that should receive enquiries | Currently a personal test inbox in `.env`; change this for launch |

Optional:

| Variable | Default | Purpose |
|---|---|---|
| `CONTACT_FROM` | `SMTP_USER` | Set only if your provider authorises a different From domain |
| `CONTACT_RATE_LIMIT` | `5` | Submissions allowed per IP per window |
| `CONTACT_RATE_WINDOW_MS` | `600000` | Window length (10 minutes) |

Apply to **Production**, **Preview** and **Development** as appropriate. A
missing variable makes `/api/contact` return `503` with a readable message
rather than failing silently.

### 4. Get a Gmail app password

Gmail refuses plain account passwords over SMTP.

1. Turn on 2-Step Verification on the Google account.
2. Open <https://myaccount.google.com/apppasswords>.
3. Create a password named e.g. `vercel-contact-form`.
4. Use the 16-character result as `SMTP_PASS` (no spaces).

### 5. Deploy and verify

```bash
curl -X POST https://<your-domain>/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Deploy check","email":"you@example.com","phone":"08000000000","message":"Smoke test."}'
```

Expect `{"success":true,...}` and an email in `CONTACT_EMAIL`. Then check that a
deep link like `https://<your-domain>/team` loads — that exercises the SPA
rewrite.

---

## Self-hosting later (Node host)

One process serves the built site and the API, so it is the same single-origin
model as Vercel.

```bash
npm install --omit=dev
npm run build
PORT=3001 node server/index.js
```

Put nginx/Caddy in front for TLS. If the API ends up on a *different* hostname
from the site, set `ALLOWED_ORIGINS=https://kaizenmfb.com` — with it unset the
server refuses cross-origin browser calls rather than allowing them by
accident.

---

## Operational notes

**Rate limiting is per instance on Vercel.** The counter lives in memory, so a
burst is spread across instances rather than stopped by one shared bucket. That
is adequate for a contact form. If it is ever abused, put a durable store behind
it (Vercel KV / Upstash Redis) and swap the `MemoryStore` in `server/contact.js`.

**Do not commit `.env`.** It holds an SMTP password and is already gitignored.

**Changing the API URL.** There is deliberately no `VITE_API_URL` any more. If
you ever need the endpoint on another host, set `ALLOWED_ORIGINS` server-side
and pass an absolute URL in `CONTACT_ENDPOINT` in `src/pages/ContactPage.jsx`.

**Gmail sending caps.** Consumer Gmail allows roughly 500 messages a day. Past
that, submissions still return `200` but Gmail silently drops them. Move to
Brevo, Postmark, or SES for production volume.

## Regression test

`scripts/test-contact.mjs` exercises the exact code path Vercel runs — method
guard, validation, length caps, HTML escaping, header sanitisation, honeypot,
rate limiting and a real send:

```bash
node scripts/test-contact.mjs
```

It sends real emails. Rate-limit values can be overridden per run, e.g.
`CONTACT_RATE_LIMIT=50 node scripts/test-contact.mjs`.
