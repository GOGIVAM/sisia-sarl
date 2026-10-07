import RevealText from '../components/RevealText.jsx';
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

/** Liste des partenaires : un bloc par domaine d'activité (au lieu de filtres et de cartes répétées). */
export default function Partners() {
  const lang = useLang();
  const u = useUi(UI);
  const groups = Object.entries(CATEGORIES)
    .map(([key, c]) => ({ key, c, items: PARTNERS.filter((p) => p.category === key) }))
    .filter((g) => g.items.length);
  return (
    <PageShell htmlAttrs={{}} bodyAttrs={BODY}>
      <title>{u('metaPartnersTitle')}</title>
      <meta name="description" content={u('metaPartnersDesc')} />
      <SiteHeader />
      <main id="contenu">
        <section className="page-hero" style={{ '--hero': 'url(/images/lukas-hron-Gz5eVQzkNrs-unsplash.jpg)' }}>
          <div className="page-hero__inner">
            <span className="kicker">{u('partnersKicker')}</span>
            <RevealText as="h1" text={u('listTitle')} />
            <p>{u('listLead')}</p>
          </div>
        </section>

        <div className="partner-groups">
          {groups.map(({ key, c, items }) => (
            <section key={key} className="partner-group" id={key}>
              <header className="partner-group__head" data-mo>
                <div>
                  <h2>{c[lang]}</h2>
                  <p>{c.intro[lang]}</p>
                </div>
                <span className="partner-group__count">{items.length} {u('groupCount')}</span>
              </header>
              <ul className="partner-rows">
                {items.map((p) => (
                  <li key={p.slug} data-mo>
                    <Link to={`/partenaires/${p.slug}`} className="partner-row">
                      <div className="partner-row__logo"><PartnerLogo partner={p} /></div>
                      <div className="partner-row__main">
                        <h3>{p.name}</h3>
                        <p>{p.tagline[lang]}</p>
                      </div>
                      <dl className="partner-row__meta">
                        <div><dt>{u('originLabel')}</dt><dd>{p.country[lang]}</dd></div>
                        {p.hq && <div><dt>{u('hqLabel')}</dt><dd>{p.hq}</dd></div>}
                      </dl>
                      <span className="partner-row__go" aria-label={u('seeProfile')}>{'›'}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
