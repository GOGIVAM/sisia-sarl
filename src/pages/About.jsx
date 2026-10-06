// Généré par scripts/convert.mjs depuis legacy/About.html : contenu d'origine conservé.
import PageShell from '../components/PageShell.jsx';
import { useT } from '../i18n/index.jsx';
import fr from '../i18n/fr/About.json';
import en from '../i18n/en/About.json';
import Link from '../components/LocLink.jsx';
import Web3Form from '../components/Web3Form.jsx';
import css0 from '../styles/About.css?inline';
import css1 from '../styles/service-page.css?inline';

export default function About() {
  const t = useT(fr, en);
  return (
    <PageShell htmlAttrs={{"style":"font-size: 16px;","lang":"en"}} bodyAttrs={{"data-path-to-root":"./","data-include-products":"false","class":"u-body u-xl-mode","data-lang":"en"}}>
      <meta name="keywords" content="À propos SISIA, Solutions industrielles, Ingénierie, Automatisme, Électricité industrielle" />
      <meta name="description" content={t("kbspetb")} />
      <title>{t("k1tt8qo5")}</title>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"http://schema.org\",\"@type\":\"Organization\",\"name\":\"SISIA SARL\",\"logo\":\"images/sisia.png\",\"sameAs\":[\"https://facebook.com/sisiasarl\",\"https://www.linkedin.com/company/1188846\"]}" }} />
      <meta name="theme-color" content="#2E5AAC" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("k1tt8qo5")} />
      <meta name="twitter:description" content={t("k10hkhwj")} />
      <meta property="og:title" content={t("k1tt8qo5")} />
      <meta property="og:description" content={t("k10hkhwj")} />
      <meta property="og:type" content="website" />
      <meta name="referrer" content="origin" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />
      <style data-source="About.css" dangerouslySetInnerHTML={{ __html: css0 }} />
      <style data-source="service-page.css" dangerouslySetInnerHTML={{ __html: css1 }} />

      <div className="bg-shapes">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="bg-shape bg-shape-4"></div>
        <div className="bg-shape bg-shape-5"></div>
      </div>
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
                      <Link className="u-button-style u-nav-link active" to="/a-propos">{t("kkmzffx")}</Link>
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
      <section className="u-align-center u-clearfix u-container-align-center u-container-align-center-xs u-valign-top-xs u-white u-section-1" id="sec-57cb">
        <div className="skrollable u-container-align-center u-container-style u-expanded-width-lg u-expanded-width-xl u-expanded-width-xs u-group u-image u-shading u-image-1" data-image-width="1980" data-image-height="1321" data-animation-name="flipIn" data-animation-duration="1500" data-animation-delay="0" data-animation-direction="X">
          <div className="u-container-layout u-valign-top u-container-layout-1">
            <h1 className="u-align-center u-text u-text-body-alt-color u-text-default u-text-1">{t("k1k9lb2v")}</h1>
          </div>
        </div>
        <div className="custom-expanded data-layout-selected u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-align-center u-container-style u-image u-image-round u-layout-cell u-radius u-right-cell u-size-26-lg u-size-26-xl u-size-60-md u-size-60-sm u-size-60-xs u-image-2" data-image-width="740" data-image-height="1110" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-container-layout-2"></div>
              </div>
              <div className="u-align-center u-container-align-center u-container-style u-layout-cell u-left-cell u-palette-1-light-3 u-radius u-shape-round u-size-34-lg u-size-34-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="700" data-animation-direction="X">
                <div className="u-container-layout u-valign-middle u-container-layout-3">
                  <h3 className="u-align-center u-text u-text-2">{t("k9itcw7")}</h3>
                  <p className="u-align-center u-text u-text-font u-text-3">{t("k1pusp7g")}</p>
                  <div className="u-expanded-width u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                      <div className="u-container-align-center u-container-style u-list-item u-repeater-item">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                          <h3 className="u-align-center u-text u-text-palette-1-base u-text-4" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">300+</h3>
                          <h6 className="u-align-center u-text u-text-palette-1-base u-text-5">{t("k1h2jh84")}</h6>
                        </div>
                      </div>
                      <div className="u-container-align-center u-container-style u-list-item u-repeater-item">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                          <h3 className="u-align-center u-text u-text-palette-1-base u-text-6" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">5+</h3>
                          <h6 className="u-align-center u-text u-text-palette-1-base u-text-7">{t("kyl7ryy")}</h6>
                        </div>
                      </div>
                      <div className="u-container-align-center u-container-style u-list-item u-repeater-item">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6">
                          <h3 className="u-align-center u-text u-text-palette-1-base u-text-8" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">17</h3>
                          <h6 className="u-align-center u-text u-text-palette-1-base u-text-9">{t("k12n58dg")}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="u-active-grey-80 u-align-center u-border-2 u-border-active-grey-80 u-border-hover-grey-80 u-border-palette-1-light-1 u-btn u-btn-round u-button-style u-hover-grey-80 u-none u-radius-50 u-btn-1">{t("k1ovdr4p")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-left u-clearfix u-container-align-left u-white u-section-2" id="carousel_8047">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-align-center u-text u-text-default u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500">{t("k66xl15")}</h2>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
              <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250" style={{ width: "300px", minWidth: "250px" }}>
                <div className="u-container-layout u-similar-container u-valign-top">
                  <h4 className="u-align-center u-text u-text-palette-1-base" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }}>{t("k1rkb06b")}</h4>
                  <p className="u-align-center u-text">{t("k1wqgs7q")}</p>
                </div>
              </div>
              <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="400" style={{ width: "300px", minWidth: "250px" }}>
                <div className="u-container-layout u-similar-container u-valign-top">
                  <h4 className="u-align-center u-text u-text-palette-1-base" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }}>{t("k9os8r0")}</h4>
                  <p className="u-align-center u-text">{t("khufwmt")}</p>
                </div>
              </div>
              <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="550" style={{ width: "300px", minWidth: "250px" }}>
                <div className="u-container-layout u-similar-container u-valign-top">
                  <h4 className="u-align-center u-text u-text-palette-1-base" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }}>{t("k1172jzf")}</h4>
                  <p className="u-align-center u-text">{t("kfhvmov")}</p>
                </div>
              </div>
              <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="700" style={{ width: "300px", minWidth: "250px" }}>
                <div className="u-container-layout u-similar-container u-valign-top">
                  <h4 className="u-align-center u-text u-text-palette-1-base" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }}>{t("kc72sgk")}</h4>
                  <p className="u-align-center u-text">{t("k1awqjyj")}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/contact" className="u-active-grey-80 u-align-center u-border-2 u-border-active-grey-80 u-border-hover-grey-80 u-border-palette-1-light-1 u-btn u-btn-round u-button-style u-hover-grey-80 u-none u-radius u-btn-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="900">{t("k1ovdr4p")}</Link>
        </div>
        <section className="u-clearfix u-container-align-left-md u-container-align-left-sm u-container-align-left-xl u-container-align-left-xs u-section-3" id="sec-fd1e">
          <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
            <h2 className="u-align-left u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="0">{t("k1193puq")}</h2>
            <div className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                <div className="u-container-style u-list-item u-repeater-item u-list-item-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                  <div className="u-container-layout u-similar-container u-container-layout-1">
                    <span className="u-align-left u-icon u-icon-circle u-palette-1-light-1 u-text-white u-icon-1" data-animation-name="customAnimationIn" data-animation-duration="2000">
                      <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 54 54">
                        <use xlinkHref="#svg-da1d" />
                      </svg>
                      <svg className="u-svg-content" viewBox="0 0 54 54" x="0px" y="0px" id="svg-da1d" style={{ enableBackground: "new 0 0 54 54" }}>
                        <g>
                          <path d={"M27,8c-9.374,0-17,7.626-17,17c0,7.112,4.391,13.412,11,15.9V50c0,0.553,0.447,1,1,1h1v2c0,0.553,0.447,1,1,1h6\r\n\t\tc0.553,0,1-0.447,1-1v-2h1c0.553,0,1-0.447,1-1v-9.1c6.609-2.488,11-8.788,11-15.9C44,15.626,36.374,8,27,8z M30,49\r\n\t\tc-0.553,0-1,0.447-1,1v2h-4v-2c0-0.553-0.447-1-1-1h-1v-5h8v5H30z M31.688,39.242C31.277,39.377,31,39.761,31,40.192V42h-8v-1.808\r\n\t\tc0-0.432-0.277-0.815-0.688-0.95C16.145,37.214,12,31.49,12,25c0-8.271,6.729-15,15-15s15,6.729,15,15\r\n\t\tC42,31.49,37.855,37.214,31.688,39.242z"} />
                          <path d="M27,6c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v4C26,5.553,26.447,6,27,6z" />
                          <path d="M51,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.553,24,51,24z" />
                          <path d="M7,24H3c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.553,24,7,24z" />
                          <path d={"M43.264,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293\r\n\t\ts0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.654,6.932,43.264,7.322z"} />
                          <path d={"M12.15,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293\r\n\t\ts0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.541,38.045,12.15,38.436z"} />
                          <path d={"M41.85,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828c0.195,0.195,0.451,0.293,0.707,0.293\r\n\t\ts0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.85,38.436z"} />
                          <path d={"M12.15,11.564c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.828-2.828\r\n\t\tc-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12.15,11.564z"} />
                          <path d={"M27,13c-6.617,0-12,5.383-12,12c0,0.553,0.447,1,1,1s1-0.447,1-1c0-5.514,4.486-10,10-10c0.553,0,1-0.447,1-1\r\n\t\tS27.553,13,27,13z"} />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-2">{t("k131z0ae")}</h5>
                    <p className="u-text u-text-3">{t("k1lrc8wn")}</p>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item u-list-item-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                  <div className="u-container-layout u-similar-container u-container-layout-2">
                    <span className="u-align-left u-icon u-icon-circle u-palette-1-light-1 u-text-white u-icon-2" data-animation-name="customAnimationIn" data-animation-duration="2000">
                      <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 54 54">
                        <use xlinkHref="#svg-3d64" />
                      </svg>
                      <svg className="u-svg-content" viewBox="0 0 54 54" x="0px" y="0px" id="svg-3d64" style={{ enableBackground: "new 0 0 54 54" }}>
                        <g>
                          <path d={"M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571\r\n\t\tc0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571\r\n\t\tc-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78\r\n\t\tC22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571\r\n\t\tc-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571\r\n\t\tc0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052\r\n\t\tc0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966\r\n\t\tc0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42\r\n\t\tc0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052\r\n\t\tc0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553\r\n\t\tc0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114\r\n\t\tS45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22\r\n\t\tC52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571\r\n\t\tc0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854\r\n\t\tc-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052\r\n\t\tc0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572\r\n\t\tc-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294\r\n\t\tC10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052\r\n\t\tc1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553\r\n\t\tc0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78\r\n\t\tC23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64\r\n\t\tc1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104\r\n\t\tl-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"} />
                          <path d={"M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7\r\n\t\ts7,3.141,7,7S30.859,34,27,34z"} />
                        </g>
                      </svg>
                    </span>
                    <h5 className="u-text u-text-4">{t("k2v8war")}</h5>
                    <p className="u-text u-text-5">{t("k10pbg0p")}</p>
                  </div>
                </div>
                <div className="u-container-style u-list-item u-repeater-item u-list-item-3" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                  <div className="u-container-layout u-similar-container u-container-layout-3">
                    <span className="u-align-left u-icon u-icon-circle u-palette-1-light-1 u-text-white u-icon-3" data-animation-name="customAnimationIn" data-animation-duration="2000">
                      <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 60 60">
                        <use xlinkHref="#svg-13e3" />
                      </svg>
                      <svg className="u-svg-content" viewBox="0 0 60 60" x="0px" y="0px" id="svg-13e3" style={{ enableBackground: "new 0 0 60 60" }}>
                        <path d={"M55.014,45.389l-9.553-4.776C44.56,40.162,44,39.256,44,38.248v-3.381c0.229-0.28,0.47-0.599,0.719-0.951\r\n\tc1.239-1.75,2.232-3.698,2.954-5.799C49.084,27.47,50,26.075,50,24.5v-4c0-0.963-0.36-1.896-1-2.625v-5.319\r\n\tc0.056-0.55,0.276-3.824-2.092-6.525C44.854,3.688,41.521,2.5,37,2.5s-7.854,1.188-9.908,3.53c-1.435,1.637-1.918,3.481-2.064,4.805\r\n\tC23.314,9.949,21.294,9.5,19,9.5c-10.389,0-10.994,8.855-11,9v4.579c-0.648,0.706-1,1.521-1,2.33v3.454\r\n\tc0,1.079,0.483,2.085,1.311,2.765c0.825,3.11,2.854,5.46,3.644,6.285v2.743c0,0.787-0.428,1.509-1.171,1.915l-6.653,4.173\r\n\tC1.583,48.134,0,50.801,0,53.703V57.5h14h2h44v-4.043C60,50.019,58.089,46.927,55.014,45.389z M14,53.262V55.5H2v-1.797\r\n\tc0-2.17,1.184-4.164,3.141-5.233l6.652-4.173c1.333-0.727,2.161-2.121,2.161-3.641v-3.591l-0.318-0.297\r\n\tc-0.026-0.024-2.683-2.534-3.468-5.955l-0.091-0.396l-0.342-0.22C9.275,29.899,9,29.4,9,28.863v-3.454\r\n\tc0-0.36,0.245-0.788,0.671-1.174L10,23.938l-0.002-5.38C10.016,18.271,10.537,11.5,19,11.5c2.393,0,4.408,0.553,6,1.644v4.731\r\n\tc-0.64,0.729-1,1.662-1,2.625v4c0,0.304,0.035,0.603,0.101,0.893c0.027,0.116,0.081,0.222,0.118,0.334\r\n\tc0.055,0.168,0.099,0.341,0.176,0.5c0.001,0.002,0.002,0.003,0.003,0.005c0.256,0.528,0.629,1,1.099,1.377\r\n\tc0.005,0.019,0.011,0.036,0.016,0.054c0.06,0.229,0.123,0.457,0.191,0.68l0.081,0.261c0.014,0.046,0.031,0.093,0.046,0.139\r\n\tc0.035,0.108,0.069,0.215,0.105,0.321c0.06,0.175,0.123,0.356,0.196,0.553c0.031,0.082,0.065,0.156,0.097,0.237\r\n\tc0.082,0.209,0.164,0.411,0.25,0.611c0.021,0.048,0.039,0.1,0.06,0.147l0.056,0.126c0.026,0.058,0.053,0.11,0.079,0.167\r\n\tc0.098,0.214,0.194,0.421,0.294,0.621c0.016,0.032,0.031,0.067,0.047,0.099c0.063,0.125,0.126,0.243,0.189,0.363\r\n\tc0.108,0.206,0.214,0.4,0.32,0.588c0.052,0.092,0.103,0.182,0.154,0.269c0.144,0.246,0.281,0.472,0.414,0.682\r\n\tc0.029,0.045,0.057,0.092,0.085,0.135c0.242,0.375,0.452,0.679,0.626,0.916c0.046,0.063,0.086,0.117,0.125,0.17\r\n\tc0.022,0.029,0.052,0.071,0.071,0.097v3.309c0,0.968-0.528,1.856-1.377,2.32l-2.646,1.443l-0.461-0.041l-0.188,0.395l-5.626,3.069\r\n\tC15.801,46.924,14,49.958,14,53.262z M58,55.5H16v-2.238c0-2.571,1.402-4.934,3.659-6.164l8.921-4.866\r\n\tC30.073,41.417,31,39.854,31,38.155v-4.018v-0.001l-0.194-0.232l-0.038-0.045c-0.002-0.003-0.064-0.078-0.165-0.21\r\n\tc-0.006-0.008-0.012-0.016-0.019-0.024c-0.053-0.069-0.115-0.152-0.186-0.251c-0.001-0.002-0.002-0.003-0.003-0.005\r\n\tc-0.149-0.207-0.336-0.476-0.544-0.8c-0.005-0.007-0.009-0.015-0.014-0.022c-0.098-0.153-0.202-0.32-0.308-0.497\r\n\tc-0.008-0.013-0.016-0.026-0.024-0.04c-0.226-0.379-0.466-0.808-0.705-1.283c0,0-0.001-0.001-0.001-0.002\r\n\tc-0.127-0.255-0.254-0.523-0.378-0.802l0,0c-0.017-0.039-0.035-0.077-0.052-0.116h0c-0.055-0.125-0.11-0.256-0.166-0.391\r\n\tc-0.02-0.049-0.04-0.1-0.06-0.15c-0.052-0.131-0.105-0.263-0.161-0.414c-0.102-0.272-0.198-0.556-0.29-0.849l-0.055-0.178\r\n\tc-0.006-0.02-0.013-0.04-0.019-0.061c-0.094-0.316-0.184-0.639-0.26-0.971l-0.091-0.396l-0.341-0.22\r\n\tC26.346,25.803,26,25.176,26,24.5v-4c0-0.561,0.238-1.084,0.67-1.475L27,18.728V12.5v-0.354l-0.027-0.021\r\n\tc-0.034-0.722,0.009-2.935,1.623-4.776C30.253,5.458,33.081,4.5,37,4.5c3.905,0,6.727,0.951,8.386,2.828\r\n\tc1.947,2.201,1.625,5.017,1.623,5.041L47,18.728l0.33,0.298C47.762,19.416,48,19.939,48,20.5v4c0,0.873-0.572,1.637-1.422,1.899\r\n\tl-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713c-0.297,0.421-0.586,0.794-0.837,1.079L42,34.123v4.125\r\n\tc0,1.77,0.983,3.361,2.566,4.153l9.553,4.776C56.513,48.374,58,50.78,58,53.457V55.5z"} />
                      </svg>
                    </span>
                    <h5 className="u-text u-text-6">{t("kv0t3gj")}</h5>
                    <p className="u-text u-text-7">{t("ka2vika")}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="u-align-left u-text u-text-default u-text-8" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"></p>
            <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-round u-radius u-image-1" src="/images/cheerful-man-showing-draft-woman.jpg" data-image-width="740" data-image-height="925" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500" />
          </div>
        </section>
        <section className="u-align-center u-clearfix u-container-align-center u-palette-1-light-3 u-section-4" id="carousel_00b6">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-align-center u-font-satisfy u-text u-text-default u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500">{t("ks1nizw")}</h2>
            <div className="u-expanded-width u-list u-list-1">
              <div className="u-repeater u-repeater-1">
                <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white u-list-item-1" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250">
                  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                    <h3 className="u-align-center u-text u-text-palette-1-light-1 u-text-2" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">20+</h3>
                    <h6 className="u-align-center u-text u-text-3">{t("kgwndk5")}</h6>
                  </div>
                </div>
                <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white u-list-item-2" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                    <h3 className="u-align-center u-text u-text-palette-1-light-1 u-text-4" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">300+</h3>
                    <h6 className="u-align-center u-text u-text-5">{t("k10oc199")}</h6>
                  </div>
                </div>
                <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white u-list-item-3" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">
                  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                    <h3 className="u-align-center u-text u-text-palette-1-light-1 u-text-6" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">50+</h3>
                    <h6 className="u-align-center u-text u-text-7">{t("k12w729s")}</h6>
                  </div>
                </div>
                <div className="u-container-align-center u-container-style u-list-item u-radius-50 u-repeater-item u-shape-round u-white u-list-item-4" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="1000">
                  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                    <h3 className="u-align-center u-text u-text-palette-1-light-1 u-text-8" data-animation-name="counter" data-animation-event="scroll" data-animation-duration="3000">5+</h3>
                    <h6 className="u-align-center u-text u-text-9">{t("k1p6hzsq")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-clearfix u-container-align-center-lg u-container-align-center-md u-container-align-center-xl u-palette-1-light-3 u-valign-bottom u-section-5" id="carousel_a244">
          <h2 className="u-align-center u-text u-text-default u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500">{t("k1fc69ex")}</h2>
          <p className="u-align-center u-text u-text-default u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("kkvt8ue")}</p>
          <div className="u-expanded-width u-layout-horizontal u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-1" data-image-width="740" data-image-height="1110" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-1">
                  <div className="u-black u-container-align-left u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-1">
                    <div className="u-container-layout u-valign-top u-container-layout-2">
                      <h3 className="u-align-left u-text u-text-default u-text-3" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("klcb7ip")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-4" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("kanl74b")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-2" data-image-width="1380" data-image-height="920" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-3">
                  <div className="u-black u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-2">
                    <div className="u-container-layout u-valign-top u-container-layout-4">
                      <h3 className="u-align-left u-text u-text-default u-text-5" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("k1067bq6")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-6" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("kr3hli")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-3" data-image-width="1380" data-image-height="920" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-5">
                  <div className="u-black u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-3">
                    <div className="u-container-layout u-valign-top u-container-layout-6">
                      <h3 className="u-align-left u-text u-text-default u-text-7" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("k1aovx25")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-8" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("kfzndaj")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-4" data-image-width="1380" data-image-height="920" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-7">
                  <div className="u-black u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-4">
                    <div className="u-container-layout u-valign-top u-container-layout-8">
                      <h3 className="u-align-left u-text u-text-default u-text-9" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("k5s1ek0")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-10" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("k1umlnn8")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-5" data-image-width="1380" data-image-height="1104" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-9">
                  <div className="u-black u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-5">
                    <div className="u-container-layout u-valign-top u-container-layout-10">
                      <h3 className="u-align-left u-text u-text-default u-text-11" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("k1ey7ofs")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-12" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("k1ok2kvu")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-container-style u-image u-list-item u-repeater-item u-shading u-image-6" data-image-width="1380" data-image-height="920" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-11">
                  <div className="u-black u-container-style u-expanded-width u-group u-opacity u-opacity-55 u-group-6">
                    <div className="u-container-layout u-valign-top u-container-layout-12">
                      <h3 className="u-align-left u-text u-text-default u-text-13" style={{ color: "#DC2F3C !important", fontWeight: "500 !important" }} data-animation-name="customAnimationIn" data-animation-duration="1750" data-animation-delay="500">{t("k1dwjci5")}</h3>
                      <p className="u-align-left u-text u-text-default u-text-14" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">{t("k1rzeii7")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="u-absolute-vcenter u-gallery-nav u-gallery-nav-prev u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-white u-gallery-nav-1" href="#" role="button">
              <span aria-hidden="true">
                <svg viewBox="0 0 451.847 451.847">
                  <path d={"M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0\r\nc12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744\r\nc-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"} />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 451.847 451.847">
                  <path d={"M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0\r\nc12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744\r\nc-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"} />
                </svg>
              </span>
            </a>
            {" "}
            <a className="u-absolute-vcenter u-gallery-nav u-gallery-nav-next u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-white u-gallery-nav-2" href="#" role="button">
              <span aria-hidden="true">
                <svg viewBox="0 0 451.846 451.847">
                  <path d={"M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744\r\nL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284\r\nc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"} />
                </svg>
              </span>
              <span className="sr-only">
                <svg viewBox="0 0 451.846 451.847">
                  <path d={"M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744\r\nL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284\r\nc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"} />
                </svg>
              </span>
            </a>
          </div>
        </section>
        <section className="u-clearfix u-container-align-center u-palette-1-light-3 u-section-6" id="carousel_82e8">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-align-left u-container-style u-layout-cell u-size-27-lg u-size-27-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                    <div className="u-container-layout u-valign-middle u-container-layout-1">
                      <img className="u-image u-image-round u-radius u-image-1" src="/images/IMG_20190506_145257.jpg" alt={t("k1gql1og")} data-image-width="976" data-image-height="918" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="700" />
                    </div>
                  </div>
                  <div className="u-container-align-left u-container-style u-layout-cell u-size-33-lg u-size-33-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <h2 className="u-align-left u-text u-text-1">{t("k1dk5fie")}</h2>
                      <ul className="u-align-left u-custom-list u-spacing-10 u-text u-text-2">
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k1pucjwp")}
                        </li>
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k12i2goc")}
                        </li>
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k86rjdp")}
                        </li>
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k1oybkfz")}
                        </li>
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k18zkpu6")}
                        </li>
                        <li style={{ paddingLeft: "9px" }}>
                          <div className="u-list-icon u-text-palette-1-light-1">
                            <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6b0f">
                              <path d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z" fill="currentColor" />
                            </svg>
                          </div>
                          {t("k1meojr6")}
                        </li>
                      </ul>
                      <a href="#" className="u-active-grey-80 u-align-center u-border-2 u-border-active-grey-80 u-border-hover-grey-80 u-border-palette-1-light-1 u-btn u-btn-round u-button-style u-hover-grey-80 u-none u-radius u-btn-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">{t("kh03c8o")}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-align-center u-clearfix u-container-align-center u-section-12" id="carousel_4581">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-28-lg u-size-28-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                    <div className="u-container-layout u-valign-top u-container-layout-1">
                      <h3 className="u-align-left u-text u-text-1">{t("khqm8ih")}</h3>
                      <div className="u-expanded-width u-form u-grey-5 u-radius-50 u-form-1">
                        <Web3Form action="https://api.web3forms.com/submit" className="u-clearfix u-form-spacing-20 u-form-vertical u-inner-form" name="form" style={{ padding: "30px" }}>
                          <input type="hidden" name="access_key" value="8d668814-d685-4d27-ae26-fbd31f28b884" />
                          {" "}
                          <input type="hidden" name="subject" value="Nouveau message de contact de SISIA" />
                          {" "}
                          <input type="hidden" name="from_name" value="Formulaire SISIA" />
                          {" "}
                          <input type="hidden" name="redirect" value="https://sissia-sarl.cm" />
                          {" "}
                          <input type="checkbox" name="botcheck" className="botcheck" style={{ display: "none" }} />
                          <div className="u-form-group u-form-name">
                            <label htmlFor="name-b064" className="u-label">{t("k4el6o6")}</label>
                            <input type="text" placeholder={t("kp2tbqf")} id="name-b064" name="name" className="u-border-none u-input u-input-rectangle u-radius-20" required />
                          </div>
                          <div className="u-form-email u-form-group">
                            <label htmlFor="email-b064" className="u-label">{t("kinbfc7")}</label>
                            <input type="email" placeholder={t("k1itsg8w")} id="email-b064" name="email" className="u-border-none u-input u-input-rectangle u-radius-20" required />
                          </div>
                          <div className="u-form-group u-form-message">
                            <label htmlFor="message-b064" className="u-label">{t("k1cam7ic")}</label>
                            <textarea placeholder={t("k1c4mtvv")} rows="4" cols="50" id="message-b064" name="message" className="u-border-none u-input u-input-rectangle u-radius-20" required />
                          </div>
                          <div className="u-align-left u-form-group u-form-submit">
                            <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-palette-1-base u-radius-30 u-btn-1">{t("k1vatbdb")}</a>
                            {" "}
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                          </div>
                          <div className="u-form-send-message u-form-send-success">{t("kyzmf2p")}</div>
                          <div className="u-form-send-error u-form-send-message">{t("k1aaa7th")}</div>
                        </Web3Form>
                      </div>
                    </div>
                  </div>
                  <div className="u-container-align-left-lg u-container-align-left-xl u-container-style u-layout-cell u-size-32-lg u-size-32-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                    <div className="u-container-layout u-valign-top u-container-layout-2">
                      <img className="custom-expanded u-image u-image-round u-radius u-image-1" src="/images/installation1-1024x683-1.jpg" alt="" data-image-width="1380" data-image-height="920" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="u-align-center u-clearfix u-container-align-center u-footer u-palette-1-dark-3 u-footer" id="sec-143b">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-align-left u-container-style u-layout-cell u-size-32-xl u-size-36-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <h2>{t("kf8eewn")}</h2>
                      <p>{t("klbefy2")}</p>
                    </div>
                  </div>
                  <div className="u-container-align-left u-container-style u-layout-cell u-size-24-lg u-size-28-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                    <div className="u-container-layout u-valign-middle u-container-layout-2">
                      <a href="#" className="u-active-white u-align-left u-border-active-white u-border-hover-white u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-1-base u-radius-50 u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-1" data-animation-name="customAnimationIn" data-animation-duration="1000" data-animation-delay="700">{" " + t("k1y0xgct") + ""}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-border-2 u-border-grey-60 u-expanded-width u-line u-line-horizontal u-opacity u-opacity-50 u-line-1"></div>
            <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-2">
              <div className="u-layout">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-size-20-lg u-size-20-xl u-size-30-md u-size-30-sm u-size-30-xs u-layout-cell-3">
                    <div className="u-container-layout u-valign-top u-container-layout-3">
                      <a href="" className="u-image u-logo u-image-1" data-image-width="581" data-image-height="268">
                        <img src="/images/logo-smart-white.png" className="u-logo-image u-logo-image-1" />
                      </a>
                      <p className="u-text u-text-default u-text-3">{t("kslsd0i")}</p>
                      <p className="u-text u-text-default u-text-4">
                        <span className="u-file-icon u-icon u-text-white u-icon-1">
                          <img src="/images/2838912-05a28158.png" alt="" />
                        </span>
                        {" " + t("k17kuw9r") + ""}
                        <br />
                        {t("keasi26")}
                      </p>
                      <p className="u-text u-text-default u-text-palette-1-light-1 u-text-5">
                        <a href="#" className="u-active-none u-border-1 u-border-active-white u-border-hover-white u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-dark-1 u-btn u-button-link u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-text-palette-1-base u-btn-2">{t("k1j7wnjb")}</a>
                      </p>
                      <div className="u-social-icons u-social-icons-1">
                        <a className="u-social-url" title={t("kpn9s1d")} target="_blank" href="https://www.facebook.com/profile.php?id=100064127498498">
                          <span className="u-icon u-social-facebook u-social-icon u-text-palette-1-base u-icon-2">
                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                              <use xlinkHref="#svg-0b86" />
                            </svg>
                            <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-0b86">
                              <path fill="currentColor" d={"M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2\r\nc0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"} />
                            </svg>
                          </span>
                        </a>
                        {" "}
                        <a className="u-social-url" title={t("ky4jnpb")} target="_blank" href="https://www.linkedin.com/company/sisia-sarl">
                          <span className="u-icon u-social-icon u-social-linkedin u-text-palette-1-base u-icon-3">
                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                              <use xlinkHref="#svg-linkedin-footer" />
                            </svg>
                            <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-linkedin-footer">
                              <path fill="currentColor" d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9c-6.2,0-11.2-5-11.2-11.2c0-6.2,5-11.2,11.2-11.2c6.2,0,11.2,5,11.2,11.2C35.3,25.9,30.3,30.9,24.1,30.9z M97.5,96.8H78.3V68.7c0-6.7-0.1-15.3-9.3-15.3c-9.3,0-10.7,7.3-10.7,14.8v28.6H39V38.8h18.5v7.9h0.3c2.6-4.9,8.9-10,18.3-10c19.6,0,23.2,12.9,23.2,29.6v31.5H97.5z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-container-style u-layout-cell u-shape-rectangle u-size-21-lg u-size-21-xl u-size-30-md u-size-30-sm u-size-30-xs u-layout-cell-4">
                    <div className="u-container-layout u-container-layout-4">
                      <h3 className="u-align-left u-text u-text-6">{t("keiewc2")}</h3>
                      <p className="u-text u-text-palette-1-base u-text-7">
                        <span className="u-file-icon u-icon u-text-palette-1-base u-icon-5" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                          <img src="/images/1257-bfbf4257.png" alt="" />
                        </span>
                        {" "}
                        <a href="tel:+237676246478" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-btn-3" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">(+237) 676 24 64 78</a>
                      </p>
                      <p className="u-text u-text-palette-1-light-2 u-text-8">
                        {t("ka8ue4a")}
                        <br />
                        {t("kkg2ph9")}
                      </p>
                      <div className="u-border-2 u-border-grey-60 u-expanded-width u-line u-line-horizontal u-opacity u-opacity-50 u-line-2"></div>
                      <p className="u-text u-text-default u-text-9">
                        <span className="u-file-icon u-icon u-text-palette-1-base u-icon-6" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                          <img src="/images/542689-2f61b179.png" alt="" />
                        </span>
                        {" "}
                        <a href="mailto:sisia-sarl@outlook.fr" className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-active-palette-1-light-2 u-text-hover-palette-1-light-2 u-btn-4">{t("kyktgtw")}</a>
                      </p>
                    </div>
                  </div>
                  <div className="u-container-align-left u-container-style u-layout-cell u-shape-rectangle u-size-19-lg u-size-19-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-5">
                    <div className="u-container-layout u-container-layout-5">
                      <h3 className="u-align-left u-text u-text-10">{t("k41uetg")}</h3>
                      <ul className="u-align-left u-text u-text-11" style={{ listStyle: "none", padding: "0", margin: "0", lineHeight: "1.8" }}>
                        <li>
                          <Link to="/" className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-light-3 u-text-body-alt-color u-text-hover-palette-1-light-3">{t("klf64h9")}</Link>
                        </li>
                        <li>
                          <Link to="/a-propos" className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-light-3 u-text-body-alt-color u-text-hover-palette-1-light-3">{t("kkmzffx")}</Link>
                        </li>
                        <li>
                          <Link to="/services" className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-light-3 u-text-body-alt-color u-text-hover-palette-1-light-3">{t("k1fc69ex")}</Link>
                        </li>
                        <li>
                          <Link to="/contact" className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-light-3 u-text-body-alt-color u-text-hover-palette-1-light-3">{t("kw3fq2r")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section className="u-backlink u-clearfix u-grey-80"></section>
      </section>
    </PageShell>
  );
}
