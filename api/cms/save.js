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

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || 'null');
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Expected JSON object' });
  }

  const tokenBlob = process.env.BLOB_READ_WRITE_TOKEN;
  if (!tokenBlob) {
    return res.status(200).json({
      ok: true,
      persisted: false,
      message:
        'Set BLOB_READ_WRITE_TOKEN on Vercel to save to Blob. After the first successful save, set CONTENT_BLOB_URL to the returned URL. Until then, use Export in the admin panel and commit content.json to git.',
      data: body,
    });
  }

  try {
    const { put } = await import('@vercel/blob');
    const json = JSON.stringify(body, null, 2);
    const blob = await put('mason-cms/content.json', json, {
      access: 'public',
      token: tokenBlob,
      addRandomSuffix: false,
      contentType: 'application/json',
    });
    return res.status(200).json({
      ok: true,
      persisted: true,
      url: blob.url,
      hint: 'Set CONTENT_BLOB_URL in Vercel to this url so the live site serves this JSON.',
    });
  } catch (e) {
    console.error('[cms/save]', e);
    return res.status(500).json({ error: 'Save failed', detail: String(e.message || e) });
  }
}
