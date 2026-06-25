import { verifyAdminToken, getTokenFromReq } from '../_lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = getTokenFromReq(req);
  const user = await verifyAdminToken(token);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const tokenBlob = process.env.BLOB_READ_WRITE_TOKEN;
  if (!tokenBlob) {
    return res.status(503).json({
      error: 'Uploads require BLOB_READ_WRITE_TOKEN',
      hint: 'Add a Vercel Blob token, or paste image URLs in the CMS instead.',
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }

  const { filename, base64, contentType } = body || {};
  if (!filename || !base64) {
    return res.status(400).json({ error: 'filename and base64 are required' });
  }

  const safeName = String(filename).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120);
  const buf = Buffer.from(String(base64), 'base64');
  if (buf.length > 2_500_000) {
    return res.status(413).json({ error: 'File too large (max ~2.5MB)' });
  }

  const mime = contentType && /^image\/[a-z0-9.+_-]+$/i.test(contentType)
    ? contentType
    : 'application/octet-stream';

  try {
    const { put } = await import('@vercel/blob');
    const path = `mason-cms/uploads/${Date.now()}-${safeName}`;
    const blob = await put(path, buf, {
      access: 'public',
      token: tokenBlob,
      contentType: mime,
    });
    return res.status(200).json({ ok: true, url: blob.url });
  } catch (e) {
    console.error('[cms/upload]', e);
    return res.status(500).json({ error: 'Upload failed', detail: String(e.message || e) });
  }
}
