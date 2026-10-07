import PageShell from '../components/PageShell.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import Link from '../components/LocLink.jsx';
import { SERVICES, SERVICE_GROUPS, WHY, STATS, SERVICES_LEAD, SERVICES_HERO_SUB } from '../data/services.js';
import { useLang, useUi } from '../i18n/index.jsx';
import { UI } from '../i18n/ui.js';
import '../styles/site.css';

const BODY = { class: 'u-body u-clearfix u-xl-mode' };
const ORDER = ['electric', 'security', 'trade'];

/** Nos services : trois pôles, une ligne par service (image, résumé, lien), puis arguments et chiffres. */
export default function ServicesPage() {
  const lang = useLang();
  const u = useUi(UI);
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{u('metaServicesTitle')}</title>
      <meta name="description" content={u('metaServicesDesc')} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero" style={{ '--hero': 'url(/images/lukas-hron-Gz5eVQzkNrs-unsplash.jpg)' }}>
          <div className="page-hero__inner">
            <span className="kicker">{u('servicesKicker')}</span>
            <h1>{u('servicesTitle')}</h1>
            <p>{SERVICES_HERO_SUB[lang]}. {SERVICES_LEAD[lang]}.</p>
            <nav className="svc-jump" aria-label={u('servicesTitle')}>
              {ORDER.map((g) => <a key={g} href={`#${g}`}>{SERVICE_GROUPS[g].title[lang]}</a>)}
            </nav>
          </div>
        </section>

        <div className="svc-groups">
          {ORDER.map((g, gi) => {
            const items = SERVICES.filter((s) => s.group === g);
            return (
              <section key={g} id={g} className="svc-group">
                <header className="svc-group__head" data-mo>
                  <span className="svc-group__num">{String(gi + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{SERVICE_GROUPS[g].title[lang]}</h2>
                    <ul className="svc-group__bullets">
                      {SERVICE_GROUPS[g].bullets.map((b) => <li key={b.fr}>{b[lang]}</li>)}
                    </ul>
                  </div>
                </header>
                <ul className="svc-list">
                  {items.map((s) => (
                    <li key={s.route} data-mo>
                      <Link to={s.route} className="svc-row">
                        <div className="svc-row__img"><img src={s.img} alt={s.name[lang]} loading="lazy" decoding="async" /></div>
                        <div className="svc-row__body">
                          <h3>{s.name[lang]}</h3>
                          <p>{s.sub[lang]}</p>
                        </div>
                        <span className="svc-row__more">{u('seeService')} <i aria-hidden="true">{'→'}</i></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="svc-why">
          <div className="svc-why__inner">
            <h2 data-mo>{u('whyTitle')}</h2>
            <ul className="svc-why__grid">
              {WHY.map((w) => (
                <li key={w.title.fr} data-mo>
                  <h3>{w.title[lang]}</h3>
                  <p>{w.text[lang]}</p>
                </li>
              ))}
            </ul>
            <ul className="svc-stats">
              {STATS.map((s) => (
                <li key={s.label.fr} data-mo>
                  <b data-animation-name="counter" data-animation-duration="2000">{s.value}</b>
                  <span>{s.label[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="svc-cta">
          <div className="svc-cta__inner">
            <p>{u('servicesCta')}</p>
            <Link to="/contact" className="btn-pill">{u('contactCta')}</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
