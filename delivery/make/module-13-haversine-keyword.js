const R = 3959;

function hav(a, b, c, d) {
  const e = (c - a) * Math.PI / 180;
  const f = (d - b) * Math.PI / 180;
  const g =
    Math.sin(e / 2) ** 2 +
    Math.cos(a * Math.PI / 180) *
    Math.cos(c * Math.PI / 180) *
    Math.sin(f / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(g), Math.sqrt(1 - g));
}

function parseCSV(t) {
  const lines = (t || "").split("\n").filter(l => l.trim());
  return lines.map(l => {
    const out = [];
    let cur = "";
    let q = false;
    for (let i = 0; i < l.length; i++) {
      if (l[i] === '"') q = !q;
      else if (l[i] === "," && !q) {
        out.push(cur.trim());
        cur = "";
      } else cur += l[i];
    }
    out.push(cur.trim());
    return out;
  });
}

let lat = parseFloat(input.photoLat) || 0;
let lng = parseFloat(input.photoLng) || 0;

if (!lat || !lng) {
  lat = parseFloat(input.projectLat) || 0;
  lng = parseFloat(input.projectLng) || 0;
}

const n = parseCSV(input.neighborhoodsCSV).slice(1);
const k = parseCSV(input.keywordsCSV);
const bH = k[1] || [];
const kR = k.slice(2);

let best = null;
let bd = Infinity;

for (const r of n) {
  const nm = (r[2] || "").replace(/^\d+\.\s*/, "");
  const la = parseFloat(r[3]);
  const lo = parseFloat(r[4]);
  const ra = parseFloat(r[5] || 1.5);
  if (!nm || !la || !lo) continue;

  const d = hav(lat, lng, la, lo);
  if (d <= ra && d < bd) {
    bd = d;
    best = { name: nm, distance: d.toFixed(3) };
  }
}

const nb = best ? best.name : "Greater Baton Rouge";
const bi = (new Date().getDate() % Math.max(bH.length - 2, 1)) + 2;
const ri = Math.floor(new Date().getDate() / 7) % Math.max(kR.length, 1);
const kw = (kR[ri] && kR[ri][bi]) || "AC Repair";

return {
  neighborhood: nb,
  keyword: kw,
  distance: best ? best.distance : "N/A",
  isOrphan: !best,
  postText: `${kw} in ${nb} | Air Titan AC Repair LLC`,
  photoUrl: input.photoUrl || ""
};
