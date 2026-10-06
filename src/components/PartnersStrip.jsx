import Link from './LocLink.jsx';
import PartnerLogo from './PartnerLogo.jsx';
import { PARTNERS } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useUi } from '../i18n/index.jsx';

/** Bandeau défilant de logos partenaires (accueil). Défilement CSS, pause au survol, coupé si "reduced motion". */
export default function PartnersStrip() {
  const u = useUi(UI);
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners-strip" id="partenaires" aria-label={u('partnersTitle')}>
      <div className="partners-strip__head">
        <span className="kicker">{u('partnersKicker')}</span>
        <h2>{u('partnersStripTitle')}</h2>
      </div>
      <div className="partners-strip__viewport">
        <ul className="partners-strip__track">
          {items.map((p, i) => (
            <li key={p.slug + i} aria-hidden={i >= PARTNERS.length ? 'true' : undefined}>
              <Link to={`/partenaires/${p.slug}`} tabIndex={i >= PARTNERS.length ? -1 : undefined} title={p.name}>
                <PartnerLogo partner={p} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="partners-strip__cta">
        <Link to="/partenaires" className="btn-pill">{u('partnersStripCta')}</Link>
      </div>
    </section>
  );
}
