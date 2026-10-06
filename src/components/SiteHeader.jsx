// Généré par scripts/convert.mjs depuis legacy/Contact.html (<header>)
import { useT } from '../i18n/index.jsx';
import fr from '../i18n/fr/SiteHeader.json';
import en from '../i18n/en/SiteHeader.json';
import Link from './LocLink.jsx';
import { useActiveNav } from '../hooks/useActiveNav.js';

export default function SiteHeader() {
  const t = useT(fr, en);
  useActiveNav();
  return (
      <header className=" u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-clearfix u-header u-section-row-container" id="sec-0168" style={{ backgroundImage: "none" }}>
        <div className="u-section-rows">
          <div className="u-clearfix u-container-align-center-xs u-palette-1-dark-3 u-section-row u-section-row-1">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <p className="u-align-center-xs u-text u-text-default u-text-1">
                {"" + t("ke4jfn8") + " "}
                <a href="tel:+237676246478" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">+237 676 24 64 78</a>
              </p>
              <div className="u-hidden-sm u-hidden-xs u-social-icons u-social-icons-1">
                <a className="u-social-url" title={t("kpn9s1d")} target="_blank" rel="noopener" href="https://facebook.com/sisiasarl">
                  <span className="u-icon u-social-facebook u-social-icon u-text-palette-1-base u-icon-1">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                      <use xlinkHref="#svg-5e14" />
                    </svg>
                    <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-5e14">
                      <path fill="currentColor" d={"M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2\r\nc0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"} />
                    </svg>
                  </span>
                </a>
                {" "}
                <a className="u-social-url" title={t("ky4jnpb")} target="_blank" rel="noopener" href="https://www.linkedin.com/company/1188846">
                  <span className="u-icon u-social-icon u-social-linkedin u-text-palette-1-base u-icon-2">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                      <use xlinkHref="#svg-linkedin" />
                    </svg>
                    <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-linkedin">
                      <path fill="currentColor" d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9c-6.2,0-11.2-5-11.2-11.2c0-6.2,5-11.2,11.2-11.2c6.2,0,11.2,5,11.2,11.2C35.3,25.9,30.3,30.9,24.1,30.9z M97.5,96.8H78.3V68.7c0-6.7-0.1-15.3-9.3-15.3c-9.3,0-10.7,7.3-10.7,14.8v28.6H39V38.8h18.5v7.9h0.3c2.6-4.9,8.9-10,18.3-10c19.6,0,23.2,12.9,23.2,29.6v31.5H97.5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="u-clearfix u-section-row u-section-row-2" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
            <div className="u-clearfix u-sheet u-valign-middle u-valign-middle-xxl u-sheet-2">
              <a href="#" className="u-image u-logo u-image-1" data-image-width="581" data-image-height="268">
                <img src="/images/logo-smart3.png" className="u-logo-image u-logo-image-1" />
              </a>
              <nav className="u-dropdown-icon u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD" role="navigation">
                <div className="menu-collapse" style={{ fontSize: "1rem", letterSpacing: "0px", fontWeight: "700" }}>
                  <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-1-base u-hamburger-link-1" href="#" tabIndex="-1" aria-label={t("k1ey0tzw")} aria-controls="07e9">
                    <svg className="u-svg-link" viewBox="0 0 24 24">
                      <use xlinkHref="#menu-hamburger" />
                    </svg>
                    {" "}
                    <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <rect y="1" width="16" height="2" />
                        <rect y="7" width="16" height="2" />
                        <rect y="13" width="16" height="2" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="u-custom-menu u-nav-container">
                  <ul className="u-nav u-unstyled u-nav-1" role="menubar">
                    <li className="u-nav-item" role="none">
                      <Link className="u-button-style u-nav-link" to="/">{t("klf64h9")}</Link>
                    </li>
                    <li className="u-nav-item" role="none">
                      <Link className="u-button-style u-nav-link" to="/a-propos">{t("kkmzffx")}</Link>
                    </li>
                    <li className="u-nav-item" role="none">
                      <Link className="u-button-style u-nav-link" to="/services">{t("k1fc69ex")}</Link>
                    </li>
                    <li className="u-nav-item" role="none">
                      <Link className="u-button-style u-nav-link" to="/partenaires">{t("k1ruzyud")}</Link>
                    </li>
                    <li className="u-nav-item" role="none">
                      <Link className="u-button-style u-nav-link" to="/contact">{t("kw3fq2r")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse" id="07e9" role="region" aria-label={t("k14jszik")}>
                  <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                    <div className="u-inner-container-layout u-sidenav-overflow">
                      <div className="u-menu-close" tabIndex="-1" aria-label={t("koob172")}></div>
                      <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3">
                        <li className="u-nav-item">
                          <Link className="u-button-style u-nav-link" to="/">{t("klf64h9")}</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-nav-link" to="/a-propos">{t("kkmzffx")}</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-nav-link" to="/services">{t("k1fc69ex")}</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-nav-link" to="/partenaires">{t("k1ruzyud")}</Link>
                        </li>
                        <li className="u-nav-item">
                          <Link className="u-button-style u-nav-link" to="/contact">{t("kw3fq2r")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                </div>
                <style className="menu-style" dangerouslySetInnerHTML={{ __html: "@media (max-width: 939px) {\r\n                    [data-responsive-from=\"MD\"] .u-nav-container {\r\n                        display: none;\r\n                    }\r\n                    [data-responsive-from=\"MD\"] .menu-collapse {\r\n                        display: block;\r\n                    }\r\n                }" }} />
              </nav>
            </div>
          </div>
        </div>
      </header>
  );
}
