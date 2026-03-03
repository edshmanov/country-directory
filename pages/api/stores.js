import { put, list } from '@vercel/blob';
const { STORES } = require('../../src/data');
async function getStores() {
  try {
    const { blobs } = await list({ prefix: 'stores.json' });
    if (blobs.length > 0) { const res = await fetch(blobs[0].url); return await res.json(); }
  } catch (e) {}
  return null;
}
async function saveStores(data) {
  return put('stores.json', JSON.stringify(data), { access: 'public', addRandomSuffix: false });
}
export default async function handler(req, res) {
  if (req.method === 'GET') {
    let stores = await getStores();
    if (!stores) { stores = STORES; await saveStores(stores); }
    return res.status(200).json(stores);
  }
  if (req.method === 'POST') {
    const item = req.body;
    let stores = await getStores() || [...STORES];
    const idx = stores.findIndex(s => s.id === item.id);
    if (idx >= 0) stores[idx] = { ...stores[idx], ...item };
    else stores.push(item);
    await saveStores(stores);
    return res.status(200).json({ ok: true });
  }
  return res.status(405).end();
}
