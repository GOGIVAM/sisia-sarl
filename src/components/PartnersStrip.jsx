import Link from './LocLink.jsx';
import PartnerLogo from './PartnerLogo.jsx';
import { PARTNERS } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useUi } from '../i18n/index.jsx';

function Row({ items, dir, label }) {
  const doubled = [...items, ...items];
  return (
    <div className={`logo-row logo-row--${dir}`} role="group" aria-label={label}>
      <ul className="logo-row__track">
        {doubled.map((p, i) => {
          const dup = i >= items.length;
          return (
            <li key={p.slug + i} aria-hidden={dup ? 'true' : undefined}>
              <Link to={`/partenaires/${p.slug}`} className="logo-tile" title={p.name} tabIndex={dup ? -1 : undefined}>
                <PartnerLogo partner={p} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Mur de logos partenaires : deux rangées défilant en sens opposés, pause au survol. */
export default function PartnersStrip() {
  const u = useUi(UI);
  const half = Math.ceil(PARTNERS.length / 2);
  const countries = new Set(PARTNERS.map((p) => p.country.fr)).size;
  return (
    <section className="logo-wall" id="partenaires" aria-labelledby="partenaires-titre">
      <div className="logo-wall__head">
        <span className="kicker">{u('partnersKicker')}</span>
        <h2 id="partenaires-titre">{u('partnersStripTitle')}</h2>
        <p>{u('partnersLead')}</p>
        <div className="logo-wall__stats">
          <span><b>{PARTNERS.length}</b> {u('statBrands')}</span>
          <span><b>{countries}</b> {u('statCountries')}</span>
        </div>
      </div>
      <div className="logo-wall__rows">
        <Row items={PARTNERS.slice(0, half)} dir="left" label={u('partnersTitle') + ' 1'} />
        <Row items={PARTNERS.slice(half)} dir="right" label={u('partnersTitle') + ' 2'} />
      </div>
      <div className="logo-wall__cta">
        <Link to="/partenaires" className="btn-pill">{u('partnersStripCta')} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
