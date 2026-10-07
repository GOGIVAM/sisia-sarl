import Link from './LocLink.jsx';
import PartnerLogo from './PartnerLogo.jsx';
import { PARTNERS } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useUi } from '../i18n/index.jsx';

function Row({ items, dir }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className={`lm-row lm-row--${dir}`}>
      <ul className="lm-track">
        {doubled.map((p, i) => {
          const dup = i >= items.length;
          return (
            <li key={p.slug + i} aria-hidden={dup ? 'true' : undefined}>
              <Link to={`/partenaires/${p.slug}`} className="lm-tile" title={p.name} tabIndex={dup ? -1 : undefined}>
                <PartnerLogo partner={p} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Mur de logos : deux rangées de cellules grises défilant en sens inverse (pause au survol, immobile si "reduced motion"). */
export default function PartnersStrip() {
  const u = useUi(UI);
  const half = Math.ceil(PARTNERS.length / 2);
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
      </div>
      <div className="lm-rows">
        <Row items={PARTNERS.slice(0, half)} dir="left" />
        <Row items={PARTNERS.slice(half)} dir="right" />
      </div>
    </section>
  );
}
