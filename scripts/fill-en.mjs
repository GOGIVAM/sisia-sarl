// Propage les traductions EN existantes aux textes FR identiques et liste les clés encore vides.
import fs from 'node:fs';
import path from 'node:path';
const dir = (l) => path.join(import.meta.dirname, '..', 'src', 'i18n', l);
const files = fs.readdirSync(dir('fr')).filter((f) => f.endsWith('.json'));
const known = new Map();
const data = {};
for (const f of files) {
  const fr = JSON.parse(fs.readFileSync(path.join(dir('fr'), f), 'utf8'));
  const en = JSON.parse(fs.readFileSync(path.join(dir('en'), f), 'utf8'));
  data[f] = { fr, en };
  for (const k of Object.keys(fr)) if (en[k]) known.set(fr[k], en[k]);
}
const extra = JSON.parse(fs.existsSync(path.join(import.meta.dirname, 'en-extra.json')) ? fs.readFileSync(path.join(import.meta.dirname, 'en-extra.json'), 'utf8') : '{}');
for (const [k, v] of Object.entries(extra)) known.set(k, v);
const missing = {};
for (const f of files) {
  const { fr, en } = data[f];
  let changed = false;
  for (const k of Object.keys(fr)) {
    if (!en[k] && known.has(fr[k])) { en[k] = known.get(fr[k]); changed = true; }
    if (!en[k]) missing[fr[k]] = (missing[fr[k]] || 0) + 1;
  }
  if (changed) fs.writeFileSync(path.join(dir('en'), f), JSON.stringify(en, null, 1));
}
console.log(JSON.stringify(missing, null, 1));
