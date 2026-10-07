import RevealText from '../components/RevealText.jsx';
import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import Link from '../components/LocLink.jsx';
import PartnerLogo from '../components/PartnerLogo.jsx';
import NotFound from './NotFound.jsx';
import { SERVICE_DETAILS } from '../data/serviceDetails.js';
import { SERVICES } from '../data/services.js';
import { CATEGORIES, PARTNERS } from '../data/partners.js';
import { useLang, useUi } from '../i18n/index.jsx';
import { UI } from '../i18n/ui.js';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };
const abs = (p) => (!p || /^(https?:|\/)/.test(p) ? p : '/' + p);

function Icon({ icon }) {
  if (!icon) return null;
  return <svg viewBox={icon.vb} aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon.html }} />;
}

/** Page d'un service : accroche, prestations, fonctionnalités, marques partenaires liées, autres services. */
export default function ServiceDetailPage({ route }) {
  const lang = useLang();
  const u = useUi(UI);
  const d = SERVICE_DETAILS[route];
  const meta = SERVICES.find((s) => s.route === route);
  if (!d || !meta) return <NotFound />;
  // marques liées : les catégories dont la liste de services contient cette page
  const cats = Object.entries(CATEGORIES).filter(([, c]) => c.services.includes(route)).map(([k]) => k);
  const brands = PARTNERS.filter((p) => cats.includes(p.category) || p.sisia.some((s) => s.route === route)).slice(0, 6);
  const others = SERVICES.filter((s) => s.group === meta.group && s.route !== route);
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{`SISIA | ${d.h1[lang]}`}</title>
      <meta name="description" content={d.sub[lang]} />
      <SiteHeader />
      <main id="contenu">
        <section className="sd-hero" style={{ '--hero': `url(${abs(d.bg)})` }}>
          <div className="sd-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">SISIA</Link> <span aria-hidden="true">/</span> <Link to="/services">{u('servicesTitle')}</Link> <span aria-hidden="true">/</span> <span>{meta.name[lang]}</span>
            </nav>
            <span className="kicker">{d.badge[lang]}</span>
            <RevealText as="h1" text={d.h1[lang]} />
            <p>{d.sub[lang]}</p>
            <div className="sd-hero__actions">
              <Link to="/contact" className="hero-btn hero-btn--primary">{d.details ? d.details.cta[lang] : d.ctaBtn[lang]}</Link>
              <Link to="/services" className="hero-btn hero-btn--ghost">{u('allServices')}</Link>
            </div>
          </div>
        </section>

        <section className="sd-main">
          <div className="sd-main__inner">
            <header className="sd-intro" data-mo>
              <h2>{d.introTitle[lang]}</h2>
              <p>{d.introText[lang]}</p>
            </header>

            <ul className="sd-cards">
              {d.cards.map((c, i) => (
                <li key={c.title.fr} data-mo>
                  <span className="sd-card__icon"><Icon icon={c.icon} /></span>
                  <span className="sd-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{c.title[lang]}</h3>
                  <p>{c.text[lang]}</p>
                </li>
              ))}
            </ul>

            {d.highlight && (
              <aside className="sd-highlight" data-mo>
                <span className="sd-card__icon"><Icon icon={d.highlight.icon} /></span>
                <div><h3>{d.highlight.title[lang]}</h3><p>{d.highlight.text[lang]}</p></div>
              </aside>
            )}

            {d.details && (
              <div className="sd-details">
                <div className="sd-details__img" data-mo><img src={abs(d.details.img)} alt={d.details.alt[lang]} loading="lazy" decoding="async" /></div>
                <div className="sd-details__body" data-mo>
                  <h2>{d.details.title[lang]}</h2>
                  <ul className="plain-list">{d.details.list.map((x) => <li key={x.fr}>{x[lang]}</li>)}</ul>
                  <Link to="/contact" className="btn-pill">{d.details.cta[lang]}</Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {brands.length > 0 && (
          <section className="sd-brands">
            <div className="sd-brands__inner">
              <h2 data-mo>{u('brandsTitle')}</h2>
              <ul className="sd-brands__grid">
                {brands.map((p) => (
                  <li key={p.slug} data-mo>
                    <Link to={`/partenaires/${p.slug}`} className="lm-tile" title={p.name}><PartnerLogo partner={p} /></Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="sd-others">
            <div className="sd-others__inner">
              <h2 data-mo>{u('otherServices')}</h2>
              <ul className="svc-list">
                {others.map((s) => (
                  <li key={s.route} data-mo>
                    <Link to={s.route} className="svc-row">
                      <div className="svc-row__img"><img src={abs(s.img)} alt={s.name[lang]} loading="lazy" decoding="async" /></div>
                      <div className="svc-row__body"><h3>{s.name[lang]}</h3><p>{s.sub[lang]}</p></div>
                      <span className="svc-row__more">{u('seeService')} <i aria-hidden="true">{'→'}</i></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="svc-cta">
          <div className="svc-cta__inner">
            <div><p><b>{d.ctaTitle[lang]}</b></p><p className="svc-cta__sub">{d.ctaText[lang]}</p></div>
            <Link to="/contact" className="btn-pill">{d.ctaBtn[lang]}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
