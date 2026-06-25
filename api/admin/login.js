import { createHash, timingSafeEqual } from 'crypto';
import { signAdminToken, buildSetCookie } from '../_lib/auth.js';

function sha256hex(s) {
  return createHash('sha256').update(String(s), 'utf8').digest('hex');
}

function safeEqualPassword(expected, given) {
  const a = Buffer.from(sha256hex(expected), 'utf8');
  const b = Buffer.from(sha256hex(given), 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(503).json({
      error: 'Admin is not configured',
      hint: 'Set ADMIN_PASSWORD and JWT_SECRET in Vercel project environment variables.',
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }
  const password = body && body.password != null ? String(body.password) : '';

  if (!safeEqualPassword(expected, password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  try {
    const token = await signAdminToken();
    res.setHeader('Set-Cookie', buildSetCookie(token));
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[admin/login]', e);
    return res.status(503).json({
      error: 'Auth misconfigured',
      hint: e.message,
    });
  }
}
