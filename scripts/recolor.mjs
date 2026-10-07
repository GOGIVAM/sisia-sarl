// Passage palette : bleu -> rouge (rôle de l'orange de la référence), noir et gris clair en neutres.
// Usage : node scripts/recolor.mjs   (idempotent). Le convertisseur applique aussi recolor() aux CSS de page.
import fs from 'node:fs';
import path from 'node:path';

export function recolor(css) {
  return css
    .replace(/#2e5aac/gi, '#E02027')
    .replace(/rgb\(\s*46\s*,\s*90\s*,\s*172\s*\)/gi, 'rgb(224, 32, 39)')
    .replace(/rgba\(\s*46\s*,\s*90\s*,\s*172\s*,/gi, 'rgba(224, 32, 39,')
    .replace(/#244a8f/gi, '#B9151B')
    .replace(/#1d3f80/gi, '#A31018')
    .replace(/#14264d/gi, '#0b0d12')
    .replace(/#e8edf5/gi, '#F4F4F4');
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const files = [
    'src/styles/nicepage.css', 'src/styles/theme.css', 'src/styles/shapes.css', 'src/styles/site.css', 'src/styles/gallery.css',
    'src/styles/modern-carousels.css', 'src/styles/nav.css', 'src/components/LangSwitcher.css', 'src/components/PartnerLogo.jsx',
  ];
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const a = fs.readFileSync(f, 'utf8');
    const b = recolor(a);
    if (a !== b) { fs.writeFileSync(f, b); console.log('recolor', f); }
  }
  // jetons de couleur
  let t = fs.readFileSync('src/styles/theme.css', 'utf8');
  const set = (name, value) => { t = t.replace(new RegExp(`(--${name}:\\s*)[^;]+;`), `$1${value};`); };
  set('black', '#0a0a0a'); set('black-2', '#141414'); set('navy', '#0a0a0a'); set('navy-2', '#1a1a1a');
  set('brand', '#e02027'); set('brand-600', '#b9151b'); set('sky', '#fdecec'); set('sky-2', '#f6f6f6');
  set('ink', '#0a0a0a'); set('muted', '#5b5f66'); set('bg', '#ffffff'); set('line', '#e6e6e6'); set('red', '#e02027');
  fs.writeFileSync('src/styles/theme.css', t);
  console.log('jetons mis à jour');
}
