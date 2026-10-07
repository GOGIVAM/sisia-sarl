import Link from './LocLink.jsx';
import PartnerLogo from './PartnerLogo.jsx';
import { PARTNERS } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useUi } from '../i18n/index.jsx';

/** Grille de logos partenaires : cellules grises, sans animation, un lien par fiche. */
export default function PartnersStrip() {
  const u = useUi(UI);
  const countries = new Set(PARTNERS.map((p) => p.country.fr)).size;
  return (
    <section className="logo-wall" id="partenaires" aria-labelledby="partenaires-titre">
      <div className="logo-wall__inner">
        <div className="logo-wall__head">
          <h2 id="partenaires-titre">
            <b>{PARTNERS.length}</b> {u('statBrands')} · <b>{countries}</b> {u('statCountries')}
          </h2>
          <Link to="/partenaires" className="logo-wall__more">{u('partnersStripCta')}</Link>
        </div>
        <ul className="logo-grid">
          {PARTNERS.map((p) => (
            <li key={p.slug}>
              <Link to={`/partenaires/${p.slug}`} className="logo-tile" title={p.name}>
                <PartnerLogo partner={p} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
