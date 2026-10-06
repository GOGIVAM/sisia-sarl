# SISIA SARL : site web (React)

Site vitrine bilingue (FR / EN) de SISIA SARL, converti depuis l'export Nicepage d'origine (conservé dans `legacy/`).

- Vite + React 19 + React Router 7
- Pré-rendu statique de toutes les pages au build (SEO), hydratation côté client
- Multilingue par URL : français par défaut, anglais sous `/en/...`
- Pages partenaires : `/partenaires` et `/partenaires/<slug>` (données dans `src/data/partners.js`)
- `sitemap.xml` (avec hreflang) et `robots.txt` générés au build

## Commandes

```bash
npm install
npm run dev        # développement
npm run build      # build + pré-rendu + sitemap (sortie : dist/)
npm run build:spa  # build client seul (sans pré-rendu)
```

## Structure

| Dossier | Rôle |
| --- | --- |
| `legacy/` | Site HTML d'origine (archive, source de la conversion) |
| `scripts/convert.mjs` | Convertit `legacy/*.html` en composants `src/pages/*.jsx` et extrait les textes |
| `src/i18n/fr`, `src/i18n/en` | Dictionnaires de textes par page (clé identique FR / EN) |
| `src/data/partners.js` | Partenaires (logos dans `public/partners/`) |
| `src/hooks/` | Menu, animations, carrousels, motion (révélation, parallaxe, progression) |
| `src/styles/site.css` | Design, accessibilité et motion |

Ajouter ou corriger un texte : modifier `legacy/<page>.html`, lancer `node scripts/convert.mjs`, puis traduire les nouvelles clés dans `src/i18n/en/` (`npm run i18n:fill` reprend les traductions déjà connues et liste le reste).

## Déploiement sur Vercel

1. Importer le dépôt GitHub dans Vercel (framework : Vite, `vercel.json` déjà configuré).
2. Variable d'environnement : `VITE_SITE_URL` = domaine public final (par défaut `https://sisia-sarl.com`). Elle alimente canonical, hreflang, sitemap et robots.
3. Domaine : ajouter le domaine dans Vercel > Settings > Domains, puis, chez Camoo, modifier uniquement :
   - l'enregistrement `A` de `sisia-sarl.com` vers `76.76.21.21`
   - le `CNAME` de `www` vers `cname.vercel-dns.com`
   Conserver les enregistrements `MX`, `TXT` (SPF, DKIM) et les `CNAME` mail/pop/imap/smtp/webmail : ils servent aux courriels.
4. Les anciennes URL `*.html` sont redirigées en 301 vers les nouvelles routes (`vercel.json`).
