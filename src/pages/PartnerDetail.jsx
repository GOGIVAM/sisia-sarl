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

/** Fiche constructeur : faits, gammes, secteurs, puis ce que SISIA fait autour de la marque. */
export default function PartnerDetail() {
  const { slug } = useParams();
  const lang = useLang();
  const u = useUi(UI);
  const p = partnerBySlug[slug];
  if (!p) return <NotFound />;
  const cat = CATEGORIES[p.category];
  const same = PARTNERS.filter((x) => x.slug !== p.slug && x.category === p.category);
  const title = `SISIA | ${p.name}`;
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{title}</title>
      <meta name="description" content={`${p.name} : ${p.tagline[lang]}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={p.tagline[lang]} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero page-hero--partner" style={{ '--hero': 'url(/images/lukas-hron-Gz5eVQzkNrs-unsplash.jpg)' }}>
          <div className="page-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">SISIA</Link> <span aria-hidden="true">/</span> <Link to="/partenaires">{u('partnersTitle')}</Link> <span aria-hidden="true">/</span> <span>{p.name}</span>
            </nav>
            <span className="kicker">{cat[lang]}</span>
            <h1>{p.name}</h1>
            <p>{p.tagline[lang]}</p>
          </div>
        </section>

        <section className="partner-detail">
          <div className="partner-detail__grid">
            <aside className="partner-detail__side" data-mo>
              <div className="partner-detail__logo"><PartnerLogo partner={p} /></div>
              <dl>
                <dt>{u('originLabel')}</dt><dd>{p.country[lang]}</dd>
                {p.hq && (<><dt>{u('hqLabel')}</dt><dd>{p.hq}</dd></>)}
                {p.founded && (<><dt>{u('foundedLabel')}</dt><dd>{p.founded}</dd></>)}
              </dl>
              {p.website && (
                <a className="btn-pill btn-pill--ghost" href={p.website} target="_blank" rel="noopener noreferrer">{u('officialSite')} {'↗'}</a>
              )}
            </aside>

            <div className="partner-detail__main">
              <h2 data-mo>{u('aboutMaker')}</h2>
              <p data-mo>{p.about[lang]}</p>

              <div className="partner-cols">
                <div data-mo>
                  <h3>{u('linesTitle')}</h3>
                  <ul className="plain-list">{p.lines[lang].map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div data-mo>
                  <h3>{u('industriesTitle')}</h3>
                  <ul className="plain-list">{p.industries[lang].map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>

              <h2 data-mo>{u('sisiaDo')}</h2>
              <ul className="service-links">
                {p.sisia.map((s) => (
                  <li key={s.route} data-mo>
                    <Link to={s.route}>
                      <b>{u(s.route)}</b>
                      <span>{s[lang]}</span>
                      <i aria-hidden="true">{'→'}</i>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="cta-card" data-mo>
                <p>{u('contactLead')}</p>
                <Link to="/contact" className="btn-pill">{u('contactCta')}</Link>
              </div>
            </div>
          </div>
        </section>

        {same.length > 0 && (
          <section className="partners-page partners-page--more">
            <h2 className="section-title">{u('sameField')}</h2>
            <ul className="partner-rows partner-rows--narrow">
              {same.map((x) => (
                <li key={x.slug}>
                  <Link to={`/partenaires/${x.slug}`} className="partner-row">
                    <div className="partner-row__logo"><PartnerLogo partner={x} /></div>
                    <div className="partner-row__main"><h3>{x.name}</h3><p>{x.tagline[lang]}</p></div>
                    <span className="partner-row__go" aria-hidden="true">{'›'}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <Link to="/partenaires" className="btn-pill btn-pill--ghost">{u('backToPartners')}</Link>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </PageShell>
  );
}
