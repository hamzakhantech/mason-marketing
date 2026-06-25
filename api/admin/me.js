import { verifyAdminToken, getTokenFromReq } from '../_lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const token = getTokenFromReq(req);
  const user = await verifyAdminToken(token);
  if (!user) return res.status(401).json({ ok: false });
  return res.status(200).json({ ok: true, role: user.role });
}
