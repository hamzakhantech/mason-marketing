/**
 * /api/contact — Vercel serverless function
 * IP + geolocation are read from Vercel's automatic request headers
 * (x-forwarded-for, x-vercel-ip-city, x-vercel-ip-country, x-vercel-ip-country-region)
 * so no client-side ipapi.co call is needed.
 *
 * SETUP: Add RESEND_API_KEY to Vercel Environment Variables.
 * Verify masononsite.com as a sending domain in resend.com.
 */

const RESEND_API = 'https://api.resend.com/emails';
const FROM       = 'MASON Contact <connect@masononsite.com>';
const TO_PRIMARY = 'connect@masononsite.com';
const TO_OWNER   = 'amoeed1221@gmail.com';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY not set in Vercel environment variables.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const {
    name, email, phone, company, role, reason, projects, message,
    // Device / OS captured client-side
    device, os, timestamp
  } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  // ── IP + geolocation from Vercel headers (server-side, always works) ──
  const rawIp  = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '';
  const ip     = rawIp.split(',')[0].trim() || 'unknown';

  // Vercel injects these automatically on every edge request
  const city    = decodeURIComponent(req.headers['x-vercel-ip-city']           || '');
  const region  = req.headers['x-vercel-ip-country-region'] || '';
  const country = req.headers['x-vercel-ip-country']        || '';
  const lat     = req.headers['x-vercel-ip-latitude']        || '';
  const lon     = req.headers['x-vercel-ip-longitude']       || '';

  const locationStr = [city, region, country].filter(Boolean).join(', ') || 'unknown';
  const coordsStr   = lat && lon ? ` (${parseFloat(lat).toFixed(3)}, ${parseFloat(lon).toFixed(3)})` : '';

  const metaTable = `
    <table style="border-collapse:collapse;width:100%;margin-top:12px;font-size:13px;font-family:monospace">
      <tr style="background:#f0ece3"><th colspan="2" style="padding:8px 12px;text-align:left;border:1px solid #ddd;font-family:'IBM Plex Sans',sans-serif;font-size:13px">📍 Submission Metadata</th></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666;white-space:nowrap">Timestamp</td><td style="padding:6px 10px;border:1px solid #ddd">${timestamp || new Date().toISOString()}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666;white-space:nowrap">IP Address</td><td style="padding:6px 10px;border:1px solid #ddd">${ip}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666;white-space:nowrap">Location</td><td style="padding:6px 10px;border:1px solid #ddd">${locationStr}${coordsStr}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666;white-space:nowrap">Device</td><td style="padding:6px 10px;border:1px solid #ddd">${device || 'unknown'}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666;white-space:nowrap">OS</td><td style="padding:6px 10px;border:1px solid #ddd">${os || 'unknown'}</td></tr>
    </table>`;

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family:'IBM Plex Sans',Arial,sans-serif;max-width:640px;margin:0 auto;color:#0E0E0E">
  <div style="background:#0E0E0E;padding:20px 28px;border-bottom:3px solid #f0a84a">
    <span style="font-family:monospace;font-size:22px;font-weight:700;color:#F2EEE5;letter-spacing:-0.02em">MAS<span style="color:#f0a84a">◉</span>N</span>
    <span style="font-family:monospace;font-size:11px;color:rgba(242,238,229,.5);margin-left:12px;text-transform:uppercase;letter-spacing:.08em">Contact Form</span>
  </div>
  <div style="padding:28px;background:#F2EEE5;border:1px solid #ddd">
    <h2 style="margin:0 0 20px;font-size:20px;font-weight:600">New enquiry from ${name}</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px">
      <tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600;width:130px">Name</td><td style="padding:8px 12px;border:1px solid #ddd">${name}</td></tr>
      <tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Email</td><td style="padding:8px 12px;border:1px solid #ddd"><a href="mailto:${email}" style="color:#f0a84a">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Phone</td><td style="padding:8px 12px;border:1px solid #ddd"><a href="tel:${phone}" style="color:#f0a84a">${phone}</a></td></tr>` : ''}
      ${company ? `<tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Company</td><td style="padding:8px 12px;border:1px solid #ddd">${company}</td></tr>` : ''}
      ${role ? `<tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Role</td><td style="padding:8px 12px;border:1px solid #ddd">${role}</td></tr>` : ''}
      ${reason ? `<tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Reason</td><td style="padding:8px 12px;border:1px solid #ddd">${reason}</td></tr>` : ''}
      ${projects ? `<tr><td style="padding:8px 12px;background:#EAE4D6;border:1px solid #ddd;font-weight:600">Projects</td><td style="padding:8px 12px;border:1px solid #ddd">${projects}</td></tr>` : ''}
    </table>
    <h3 style="margin:24px 0 8px;font-size:15px;font-weight:600;text-transform:uppercase;letter-spacing:.04em">Message</h3>
    <div style="background:#fff;border:1px solid #ddd;border-left:3px solid #f0a84a;padding:16px;font-size:15px;line-height:1.7;white-space:pre-wrap">${message.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    ${metaTable}
  </div>
  <div style="padding:16px 28px;background:#0E0E0E;font-family:monospace;font-size:11px;color:rgba(242,238,229,.4);text-transform:uppercase;letter-spacing:.06em">
    MASON · masononsite.com · Automated notification
  </div>
</body>
</html>`;

  const payload = {
    from:     FROM,
    to:       [TO_PRIMARY, TO_OWNER],
    reply_to: email,
    subject:  `[MASON] ${reason || 'Enquiry'} — ${name}${company ? ` @ ${company}` : ''} · ${locationStr}`,
    html,
  };

  try {
    const r = await fetch(RESEND_API, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('[contact] Resend error', r.status, data);
      return res.status(502).json({ error: 'Email delivery failed', detail: data });
    }
    return res.status(200).json({ ok: true, id: data.id });
  } catch (err) {
    console.error('[contact] fetch error', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
