const COOKIE = 'mason_admin';

function getSecret() {
  const s = process.env.JWT_SECRET || process.env.ADMIN_JWT_SECRET;
  if (s && s.length >= 16) return new TextEncoder().encode(s);
  if (process.env.VERCEL) {
    throw new Error('JWT_SECRET (or ADMIN_JWT_SECRET) must be set to 16+ characters on Vercel');
  }
  return new TextEncoder().encode('local-dev-only-jwt-secret-32');
}

async function signAdminToken() {
  const { SignJWT } = await import('jose');
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(getSecret());
}

async function verifyAdminToken(token) {
  if (!token || typeof token !== 'string') return null;
  try {
    const { jwtVerify } = await import('jose');
    const { payload } = await jwtVerify(token, getSecret());
    if (payload.role !== 'admin') return null;
    return payload;
  } catch {
    return null;
  }
}

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  header.split(';').forEach((part) => {
    const i = part.indexOf('=');
    if (i === -1) return;
    const k = part.slice(0, i).trim();
    const v = decodeURIComponent(part.slice(i + 1).trim());
    out[k] = v;
  });
  return out;
}

function getTokenFromReq(req) {
  const raw = req.headers.cookie || '';
  return parseCookies(raw)[COOKIE] || null;
}

function buildSetCookie(token, maxAgeSec = 28800) {
  const parts = [
    `${COOKIE}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${maxAgeSec}`,
  ];
  if (process.env.VERCEL) parts.push('Secure');
  return parts.join('; ');
}

function buildClearCookie() {
  const parts = [`${COOKIE}=`, 'Path=/', 'HttpOnly', 'SameSite=Lax', 'Max-Age=0'];
  if (process.env.VERCEL) parts.push('Secure');
  return parts.join('; ');
}

export {
  COOKIE,
  signAdminToken,
  verifyAdminToken,
  getTokenFromReq,
  buildSetCookie,
  buildClearCookie,
};
