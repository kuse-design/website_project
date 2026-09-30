// Side-effect import, so dotenv's side effect runs before server/contact.js is
// evaluated. A static import plus a dotenv.config() call in this file's body
// would be too late — the contact module reads its config at module scope.
import 'dotenv/config'

import { contactRoute } from '../server/contact.js'

/**
 * Vercel serverless function backing POST /api/contact.
 *
 * Vercel serves this from the same hostname as the static site, so the browser
 * calls it same-origin: no CORS preflight, and no second origin that can drift
 * out of sync. That is what makes the form behave identically in production and
 * in development.
 *
 * Environment variables are set in the Vercel dashboard — see DEPLOY.md.
 * dotenv is a harmless no-op there, and it lets this exact function run locally.
 */
export default async function handler(req, res) {
  await contactRoute(req, res)
}
