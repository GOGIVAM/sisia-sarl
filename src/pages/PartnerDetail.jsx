import { useParams } from 'react-router-dom';
import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import Link from '../components/LocLink.jsx';
import PartnerLogo from '../components/PartnerLogo.jsx';
import NotFound from './NotFound.jsx';
import { CATEGORIES, PARTNERS, partnerBySlug } from '../data/partners.js';
import { UI } from '../i18n/ui.js';
import { useLang, useUi } from '../i18n/index.jsx';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };

export default function PartnerDetail() {
  const { slug } = useParams();
  const lang = useLang();
  const u = useUi(UI);
  const p = partnerBySlug[slug];
  if (!p) return <NotFound />;
  const cat = CATEGORIES[p.category];
  const same = PARTNERS.filter((x) => x.slug !== p.slug && x.category === p.category);
  const rest = PARTNERS.filter((x) => x.slug !== p.slug && x.category !== p.category);
  const more = [...same, ...rest].slice(0, 4);
  const title = lang === 'en' ? `${p.name}, partner of SISIA SARL` : `${p.name}, partenaire de SISIA SARL`;
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{title}</title>
      <meta name="description" content={p.summary[lang]} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={p.summary[lang]} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero page-hero--partner">
          <div className="page-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">SISIA</Link> <span aria-hidden="true">/</span> <Link to="/partenaires">{u('partnersTitle')}</Link> <span aria-hidden="true">/</span> <span>{p.name}</span>
            </nav>
            <span className="kicker">{cat[lang]}</span>
            <h1>{p.name}</h1>
            <p>{p.summary[lang]}</p>
          </div>
        </section>

        <section className="partner-detail">
          <div className="partner-detail__grid">
            <aside className="partner-detail__side" data-mo>
              <div className="partner-detail__logo"><PartnerLogo partner={p} /></div>
              <dl>
                <dt>{u('country')}</dt><dd>{p.country[lang]}</dd>
                <dt>{u('sector')}</dt><dd>{cat[lang]}</dd>
              </dl>
              {p.website && (
                <a className="btn-pill btn-pill--ghost" href={p.website} target="_blank" rel="noopener noreferrer">{u('website')} ↗</a>
              )}
            </aside>
            <div className="partner-detail__main">
              <h2 data-mo>{u('activity')}</h2>
              <p data-mo>{p.summary[lang]}</p>
              <h2 data-mo>{u('focus')}</h2>
              <ul className="focus-list">
                {p.focus[lang].map((f) => <li key={f} data-mo>{f}</li>)}
              </ul>
              <h2 data-mo>{u('sisiaCan')}</h2>
              <p data-mo>{u('sisiaCanLead')}</p>
              <h3 data-mo>{u('relatedServices')}</h3>
              <ul className="service-links">
                {cat.services.map((s) => (
                  <li key={s} data-mo><Link to={s}>{u(s)} <i aria-hidden="true">→</i></Link></li>
                ))}
              </ul>
              <div className="cta-card" data-mo>
                <p>{u('contactLead')}</p>
                <Link to="/contact" className="btn-pill">{u('contactCta')}</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-page partners-page--more">
          <h2 className="section-title">{u('otherPartners')}</h2>
          <ul className="partners-grid partners-grid--compact">
            {more.map((x) => (
              <li key={x.slug} className="partner-card" data-mo>
                <Link to={`/partenaires/${x.slug}`} className="partner-card__link">
                  <div className="partner-card__logo"><PartnerLogo partner={x} /></div>
                  <div className="partner-card__body"><h3>{x.name}</h3></div>
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/partenaires" className="btn-pill btn-pill--ghost">{u('backToPartners')}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
