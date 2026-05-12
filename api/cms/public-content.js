const { readFile } = require('fs/promises');
const { join } = require('path');
const { verifyAdminToken, getTokenFromReq } = require('../_lib/auth.js');

async function readLocalContentJson() {
  const p = join(process.cwd(), 'content.json');
  const raw = await readFile(p, 'utf8');
  return JSON.parse(raw);
}

async function readRemoteContentJson(url) {
  const r = await fetch(url, { cache: 'no-store' });
  if (!r.ok) throw new Error('Remote content fetch failed');
  return r.json();
}

async function getMergedPublicContent() {
  const blobUrl = process.env.CONTENT_BLOB_URL;
  if (blobUrl) {
    try {
      return await readRemoteContentJson(blobUrl);
    } catch (e) {
      console.warn('[public-content] CONTENT_BLOB_URL fetch failed, falling back to disk', e.message);
    }
  }
  return readLocalContentJson();
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const data = await getMergedPublicContent();
    return res.status(200).json(data);
  } catch (e) {
    console.error('[cms/public-content]', e);
    return res.status(500).json({ error: 'Could not load site content' });
  }
};
