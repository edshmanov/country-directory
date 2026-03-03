import { put, list } from '@vercel/blob';
export const config = { api: { bodyParser: false } };
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const chunks = []; for await (const c of req) chunks.push(c);
    const buf = Buffer.concat(chunks);
    const ct = req.headers['content-type'] || '';
    const bm = ct.match(/boundary=(.+)/);
    if (!bm) return res.status(400).json({ error: 'no boundary' });
    const parts = parse(buf, bm[1]);
    const file = parts.find(p => p.filename);
    const sid = parts.find(p => p.name === 'storeId');
    const cap = parts.find(p => p.name === 'caption');
    if (!file || !sid) return res.status(400).json({ error: 'missing' });
    const storeId = sid.data.toString();
    const ext = file.filename.split('.').pop() || 'jpg';
    const blob = await put(`photos/${storeId}/${Date.now()}.${ext}`, file.data, { access: 'public', contentType: file.ct || 'image/jpeg' });
    const { blobs } = await list({ prefix: 'stores.json' });
    if (blobs.length) {
      const r = await fetch(blobs[0].url); const stores = await r.json();
      const s = stores.find(x => x.id === storeId);
      if (s) { if (!s.photos) s.photos = [];
        s.photos.push({ url: blob.url, caption: cap ? cap.data.toString() : '', status: 'pending', date: new Date().toISOString() });
        await put('stores.json', JSON.stringify(stores), { access: 'public', addRandomSuffix: false });
      }
    }
    return res.status(200).json({ ok: true, url: blob.url });
  } catch (e) { return res.status(500).json({ error: e.message }); }
}
function parse(buf, boundary) {
  const parts = [], bb = Buffer.from('--' + boundary);
  let s = buf.indexOf(bb) + bb.length + 2;
  while (s < buf.length) { let e = buf.indexOf(bb, s); if (e === -1) break;
    const p = buf.slice(s, e - 2), h = p.indexOf('\r\n\r\n');
    if (h === -1) { s = e + bb.length + 2; continue; }
    const hs = p.slice(0, h).toString(), d = p.slice(h + 4);
    const nm = hs.match(/name="([^"]+)"/), fn = hs.match(/filename="([^"]+)"/), ctm = hs.match(/Content-Type:\s*(.+)/i);
    parts.push({ name: nm?.[1]||'', filename: fn?.[1]||null, ct: ctm?.[1]?.trim()||null, data: d });
    s = e + bb.length + 2;
    if (buf.indexOf(Buffer.from('--'+boundary+'--'), e) === e) break;
  }
  return parts;
}
