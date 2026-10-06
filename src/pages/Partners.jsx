import { useState } from 'react';
import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import Link from '../components/LocLink.jsx';
import PartnerLogo from '../components/PartnerLogo.jsx';
import { CATEGORIES, PARTNERS } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useLang, useUi } from '../i18n/index.jsx';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };

export default function Partners() {
  const lang = useLang();
  const u = useUi(UI);
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? PARTNERS : PARTNERS.filter((p) => p.category === cat);
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{u('metaPartnersTitle')}</title>
      <meta name="description" content={u('metaPartnersDesc')} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero">
          <div className="page-hero__inner">
            <span className="kicker">{u('partnersKicker')}</span>
            <h1>{u('partnersTitle')}</h1>
            <p>{u('partnersLead')}</p>
          </div>
        </section>
        <section className="partners-page">
          <div className="partners-filters" role="tablist" aria-label={u('sector')}>
            <button type="button" role="tab" aria-selected={cat === 'all'} className={cat === 'all' ? 'is-on' : ''} onClick={() => setCat('all')}>{u('all')}</button>
            {Object.entries(CATEGORIES).map(([k, c]) => (
              <button key={k} type="button" role="tab" aria-selected={cat === k} className={cat === k ? 'is-on' : ''} onClick={() => setCat(k)}>{c[lang]}</button>
            ))}
          </div>
          <ul className="partners-grid">
            {list.map((p) => (
              <li key={p.slug} className="partner-card" data-mo>
                <Link to={`/partenaires/${p.slug}`} className="partner-card__link">
                  <div className="partner-card__logo"><PartnerLogo partner={p} /></div>
                  <div className="partner-card__body">
                    <span className="chip">{CATEGORIES[p.category][lang]}</span>
                    <h2>{p.name}</h2>
                    <p>{p.summary[lang]}</p>
                    <span className="partner-card__more">{u('seeService')} <i aria-hidden="true">→</i></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
