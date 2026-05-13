/**
 * /api/contact — Vercel serverless function
 * Receives contact form submissions and emails them via Resend
 * to connect@masononsite.com AND amoeed1221@gmail.com.
 *
 * SETUP (one-time, takes 2 minutes):
 * 1. Go to https://resend.com and create a free account
 * 2. Add & verify masononsite.com as a sending domain
 * 3. Generate an API key
 * 4. In Vercel dashboard → your project → Settings → Environment Variables
 *    Add:  RESEND_API_KEY = re_xxxxxxxxxxxx
 * That's it. No code changes needed.
 */

const RESEND_API = 'https://api.resend.com/emails';
const FROM       = 'MASON Contact <connect@masononsite.com>';
const TO_PRIMARY = 'connect@masononsite.com';
const TO_OWNER   = 'amoeed1221@gmail.com';

export default async function handler(req, res) {
  // CORS — allow the marketing site origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Email service not configured. Please set RESEND_API_KEY in Vercel environment variables.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const {
    name, email, company, role, reason, projects, message,
    // Metadata captured client-side
    ip, city, country, region, timestamp, device, os
  } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  const metaTable = `
    <table style="border-collapse:collapse;width:100%;margin-top:12px;font-size:13px;font-family:monospace">
      <tr style="background:#f5f5f5"><th colspan="2" style="padding:8px;text-align:left;border:1px solid #ddd;font-family:sans-serif">📍 Submission Metadata</th></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666">Timestamp</td><td style="padding:6px 10px;border:1px solid #ddd">${timestamp || 'unknown'}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666">IP Address</td><td style="padding:6px 10px;border:1px solid #ddd">${ip || 'unknown'}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666">Location</td><td style="padding:6px 10px;border:1px solid #ddd">${[city, region, country].filter(Boolean).join(', ') || 'unknown'}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666">Device</td><td style="padding:6px 10px;border:1px solid #ddd">${device || 'unknown'}</td></tr>
      <tr><td style="padding:6px 10px;border:1px solid #ddd;color:#666">OS</td><td style="padding:6px 10px;border:1px solid #ddd">${os || 'unknown'}</td></tr>
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
    MASON · masononsite.com · This is an automated notification
  </div>
</body>
</html>`;

  const payload = {
    from: FROM,
    to:   [TO_PRIMARY, TO_OWNER],
    reply_to: email,
    subject:  `[MASON Contact] ${reason || 'Enquiry'} — ${name}${company ? ` @ ${company}` : ''}`,
    html,
  };

  try {
    const r = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
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
    return res.status(500).json({ error: 'Internal error sending email' });
  }
}
