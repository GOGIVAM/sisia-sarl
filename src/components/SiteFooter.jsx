// Généré par scripts/convert.mjs depuis legacy/Contact.html (<footer>)
import { useT } from '../i18n/index.jsx';
import fr from '../i18n/fr/SiteFooter.json';
import en from '../i18n/en/SiteFooter.json';
import Link from './LocLink.jsx';

export default function SiteFooter() {
  const t = useT(fr, en);
  return (
      <footer className="u-align-center u-clearfix u-container-align-center u-footer u-palette-1-dark-3 u-footer" id="sec-143b">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-align-left u-container-style u-layout-cell u-size-32-xl u-size-36-lg u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h2 className="u-align-left u-text u-text-default u-text-1">{t("kf8eewn")}</h2>
                    <p className="u-align-left u-text u-text-default u-text-2">{t("klbefy2")}</p>
                  </div>
                </div>
                <div className="u-container-align-left u-container-style u-layout-cell u-size-24-lg u-size-28-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <Link to="/contact" className="u-active-white u-align-left u-border-active-white u-border-hover-white u-border-none u-btn u-btn-round u-button-style u-hover-white u-palette-1-base u-radius-50 u-text-active-black u-text-body-alt-color u-text-hover-black u-btn-1" data-animation-name="customAnimationIn" data-animation-duration="1000" data-animation-delay="700">{" " + t("k1y0xgct") + ""}</Link>
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
                    <Link to="/" className="u-image u-logo u-image-1" data-image-width="581" data-image-height="268">
                      <img src="/images/logo-smart-white.png" className="u-logo-image u-logo-image-1" />
                    </Link>
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
                      <a href="https://www.google.com/maps/search/?api=1&query=Douala+3e+Ngodi-Bakoko+Chefferie+Cameroun" target="_blank" rel="noopener noreferrer" className="u-active-none u-border-1 u-border-active-white u-border-hover-white u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-dark-1 u-btn u-button-link u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-text-palette-1-base u-btn-2">{t("k1j7wnjb")}</a>
                    </p>
                    <div className="u-social-icons u-social-icons-1">
                      <a className="u-social-url" title={t("kpn9s1d")} target="_blank" rel="noopener" href="https://facebook.com/sisiasarl">
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
                      <a className="u-social-url" title={t("ky4jnpb")} target="_blank" rel="noopener" href="https://www.linkedin.com/company/1188846">
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
  );
}
