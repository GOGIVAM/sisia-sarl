// Généré par scripts/convert.mjs depuis legacy/Untitled-2.html : contenu d'origine conservé.
import PageShell from '../components/PageShell.jsx';
import { useT } from '../i18n/index.jsx';
import { brandTitle } from '../seo.js';
import fr from '../i18n/fr/Maquette.json';
import en from '../i18n/en/Maquette.json';
import Link from '../components/LocLink.jsx';
import css0 from '../styles/Untitled-1.css?inline';

export default function Maquette() {
  const t = useT(fr, en);
  return (
    <PageShell htmlAttrs={{"lang":"fr"}} bodyAttrs={{}}>
      <title>{brandTitle(t("k1f5e4n1"))}</title>
      <style data-source="Untitled-1.css" dangerouslySetInnerHTML={{ __html: css0 }} />

      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <p className="contact-info">
                {"" + t("keoh238") + " "}
                <a href="tel:+237691052985">+237 6 91 05 29 85</a>
              </p>
              <div className="social-links">
                <a href="#" aria-label={t("k1bs8hg1")}>
                  <i className="icon-facebook"></i>
                </a>
                {" "}
                <a href="#" aria-label={t("k1oncmp0")}>
                  <i className="icon-twitter"></i>
                </a>
                {" "}
                <a href="#" aria-label={t("k4bnti3")}>
                  <i className="icon-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="header-main-content">
              <div className="logo">
                <img src="/images/logo-smart3.png" alt={t("k1gc0izn")} />
              </div>
              <nav className="nav">
                <button className="nav-toggle" aria-label={t("kafugeo")}>
                  <span></span>
                  {" "}
                  <span></span>
                  {" "}
                  <span></span>
                </button>
                <ul className="nav-menu">
                  <li>
                    <Link to="/" className="active">{t("klf64h9")}</Link>
                  </li>
                  <li>
                    <Link to="/a-propos">{t("kkmzffx")}</Link>
                  </li>
                  <li>
                    <Link to="/equipe">{t("kikf7q1")}</Link>
                  </li>
                  <li>
                    <Link to="/services">{t("k1fc69ex")}</Link>
                  </li>
                  <li>
                    <Link to="/faq">{t("khfim9n")}</Link>
                  </li>
                  <li>
                    <Link to="/blog">{t("k1b1mnjj")}</Link>
                  </li>
                  <li>
                    <Link to="/blog/articles">{t("k1jdup01")}</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="btn-contact">{t("kw3fq2r")}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="hero-background">
          <img src="/images/53e3dc404b5bad14f6da8c7dda793678153bdee757596c48732e7bdd9244cd5ab0_1280.jpg" alt={t("kmb4o5j")} />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-in">{t("kldigz9")}</h1>
            <p className="hero-subtitle animate-in">{t("k1unc4uy")}</p>
          </div>
        </div>
      </section>
      <section className="services-cards">
        <div className="container">
          <div className="services-grid">
            <div className="service-card animate-slide-up">
              <div className="service-icon">
                <img src="/images/17176822.png" alt={t("kksmo62")} />
              </div>
              <h3>{t("kksmo62")}</h3>
              <p>{t("krdtsuo")}</p>
              <Link to="/services" className="service-link">{t("kjo3j40")}</Link>
            </div>
            <div className="service-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="service-icon">
                <img src="/images/3403129.png" alt={t("k1i3q76j")} />
              </div>
              <h3>{t("k1i3q76j")}</h3>
              <p>{t("kbpep8m")}</p>
              <Link to="/services" className="service-link">{t("kjo3j40")}</Link>
            </div>
            <div className="service-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon">
                <img src="/images/2668384.png" alt={t("k1pzj40g")} />
              </div>
              <h3>{t("k1pzj40g")}</h3>
              <p>{t("k1srv94m")}</p>
              <Link to="/services" className="service-link">{t("kjo3j40")}</Link>
            </div>
            <div className="service-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="service-icon">
                <img src="/images/5214062-77e7122e.png" alt={t("k37jgx8")} />
              </div>
              <h3>{t("k1d1aa6w")}</h3>
              <p>{t("kv8cnjk")}</p>
              <Link to="/services" className="service-link">{t("kjo3j40")}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-section">
        <div className="container">
          <h2 className="section-title animate-in">{t("k78xuhn")}</h2>
          <div className="manage-grid">
            <div className="manage-item animate-slide-up">
              <div className="manage-image">
                <img src="/images/japanese-culture-house-entrance.jpg" alt={t("knw42do")} />
              </div>
              <div className="manage-content">
                <h3>{t("k881kll")}</h3>
                <p>{t("k3g2fxd")}</p>
              </div>
            </div>
            <div className="manage-item animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="manage-image">
                <img src="/images/télécharger (1).webp" alt={t("koefpwa")} />
              </div>
              <div className="manage-content">
                <h3>{t("k1sfmcia")}</h3>
                <p>{t("k1di4p5w")}</p>
              </div>
            </div>
            <div className="manage-item animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="manage-image">
                <img src="/images/man-holding-smartphone-with-home.jpg" alt={t("k1m5rg1n")} />
              </div>
              <div className="manage-content">
                <h3>{t("k3a0gxp")}</h3>
                <p>{t("kmiea7w")}</p>
              </div>
            </div>
            <div className="manage-item animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="manage-image">
                <img src="/images/OIP (3).webp" alt={t("k64duch")} />
              </div>
              <div className="manage-content">
                <h3>{t("k1072yg4")}</h3>
                <p>{t("k1xrhkhl")}</p>
              </div>
            </div>
            <div className="manage-item animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="manage-image">
                <img src="/images/télécharger.webp" alt={t("k1c4n9m1")} />
              </div>
              <div className="manage-content">
                <h3>{t("k1ilcqpt")}</h3>
                <p>{t("k1lmqpn0")}</p>
              </div>
            </div>
            <div className="manage-item animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="manage-image">
                <img src="/images/high-angle-man-working-eco-frien.jpg" alt={t("kyr9q4n")} />
              </div>
              <div className="manage-content">
                <h3>{t("kv5bq4g")}</h3>
                <p>{t("kew76o8")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section cta-1">
        <div className="cta-overlay"></div>
        <div className="cta-background">
          <img src="/images/digital-tablet-screen-with-smart-home-controller-wooden-table5.jpg" alt={t("k1g7sj9z")} />
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="animate-in">{t("k185grzj")}</h2>
            <p className="animate-in">{t("k1g63gg1")}</p>
            <Link to="/services" className="btn btn-primary animate-in">{t("k3vdvkv")}</Link>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image animate-slide-left">
              <img src="/images/ingnieur-mle-de-travail-sur-l-ordinateur-portable-dans-usine-noir-vrifiant-le-contrle-la-qualit-tat-machine-service-et-1979237911.jpg" alt={t("k1qbp002")} />
            </div>
            <div className="about-text animate-slide-right">
              <h2 className="section-title">{t("kzi1p13")}</h2>
              <p>{t("k8pd4fc")}</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number" data-target="300">0</span>
                  {" "}
                  <span className="stat-label">{t("k1h2jh84")}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-target="5">0</span>
                  {" "}
                  <span className="stat-label">{t("kyl7ryy")}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-target="17">0</span>
                  {" "}
                  <span className="stat-label">{t("k12n58dg")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title animate-in">{t("k165hhry")}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-slide-up">
              <div className="testimonial-content">
                <p>{t("kfaejvk")}</p>
              </div>
              <div className="testimonial-author">
                <strong>{t("k1svhuyg")}</strong>
                {" "}
                <span>{t("k1msogxy")}</span>
              </div>
            </div>
            <div className="testimonial-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="testimonial-content">
                <p>{t("ko2dbf1")}</p>
              </div>
              <div className="testimonial-author">
                <strong>{t("k1ah1hhm")}</strong>
                {" "}
                <span>{t("ki1uj9l")}</span>
              </div>
            </div>
            <div className="testimonial-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="testimonial-content">
                <p>{t("kcwxuqs")}</p>
              </div>
              <div className="testimonial-author">
                <strong>{t("k1v92jbj")}</strong>
                {" "}
                <span>{t("k1msogxy")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title animate-in">{t("k19mvwk2")}</h2>
          <p className="section-subtitle animate-in">{t("k1lv9br6")}</p>
          <div className="gallery-grid">
            <div className="gallery-item animate-slide-up">
              <img src="/images/IMG_20190506_145257.jpg" alt={t("k1uqs2j2")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
            <div className="gallery-item animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <img src="/images/IMG_20220407_112748.jpg" alt={t("k1ugsgu3")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
            <div className="gallery-item animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <img src="/images/automatisme-industriel-1-1.jpg" alt={t("k1u6sv54")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
            <div className="gallery-item animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <img src="/images/electricite-industrielle-induselec_1-450x285.jpg" alt={t("k1w4q2zx")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
            <div className="gallery-item animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <img src="/images/47165362-02.jpeg" alt={t("k1vuqhay")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
            <div className="gallery-item animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <img src="/images/53e3dc404b5bad14f6da8c7dda793678153bdee757596c48732e7bdd9244cd5ab0_1280.jpg" alt={t("k1vkqvlz")} />
              <div className="gallery-overlay">
                <span>{t("kt0gc5e")}</span>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <Link to="/services" className="btn btn-secondary">{t("ki7j5qb")}</Link>
          </div>
        </div>
      </section>
      <section className="cta-section cta-2">
        <div className="cta-overlay"></div>
        <div className="cta-background">
          <img src="/images/homepage-hero-devices-camera-v2.png" alt={t("k1g7sj9z")} />
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="animate-in">{t("k15zac1g")}</h2>
            <p className="animate-in">{t("k1dl6im3")}</p>
            <Link to="/services" className="btn btn-primary animate-in">{t("k1rlv4uu")}</Link>
          </div>
        </div>
      </section>
      <section className="supervision-section">
        <div className="container">
          <div className="supervision-content">
            <div className="supervision-text animate-slide-left">
              <h2 className="section-title">{t("k1kq1kcj")}</h2>
              <div className="supervision-features">
                <div className="feature-item">
                  <h3>{t("k8ce3kj")}</h3>
                  <p>{t("k31thc3")}</p>
                </div>
                <div className="feature-item">
                  <h3>{t("khfcr87")}</h3>
                  <p>{t("k16oy56l")}</p>
                </div>
                <div className="feature-item">
                  <h3>{t("kdfdrek")}</h3>
                  <p>{t("k1o23nh2")}</p>
                </div>
                <div className="feature-item">
                  <h3>{t("kqprkmz")}</h3>
                  <p>{t("kxw1mxq")}</p>
                </div>
              </div>
            </div>
            <div className="supervision-image animate-slide-right">
              <img src="/images/676.jpg" alt={t("k1ik3uck")} />
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <h2 className="section-title animate-in">{t("kikf7q1")}</h2>
          <p className="section-subtitle animate-in">{t("k1k1koib")}</p>
          <div className="team-grid">
            <div className="team-card animate-slide-up">
              <div className="team-image">
                <img src="/images/PDG.jpeg" alt={t("k1uy48dl")} />
              </div>
              <h3>{t("k1t2y70f")}</h3>
              <p>{t("k1c080yq")}</p>
            </div>
            <div className="team-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="team-image">
                <img src="/images/PDG.jpeg" alt={t("k1t2y70f")} />
              </div>
              <h3>{t("k1t2y70f")}</h3>
              <p>{t("k1c080yq")}</p>
            </div>
            <div className="team-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="team-image">
                <img src="/images/PDG.jpeg" alt={t("k1t2y70f")} />
              </div>
              <h3>{t("k1t2y70f")}</h3>
              <p>{t("k1c080yq")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title animate-in">{t("kzspu51")}</h2>
          <p className="section-subtitle animate-in">{t("k1jkvzl7")}</p>
          <div className="faq-accordion">
            <div className="faq-item">
              <button className="faq-question">
                <span>{t("kglver6")}</span>
                {" "}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{t("k1mx5m0a")}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{t("kstwi2r")}</span>
                {" "}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{t("k1lt7fm4")}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{t("k1vgnso4")}</span>
                {" "}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{t("knq95hf")}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{t("k1si7w2j")}</span>
                {" "}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{t("k8k76qr")}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{t("kzntlux")}</span>
                {" "}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{t("kjbagub")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-wrapper animate-slide-left">
              <h2>{t("khqm8ih")}</h2>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder={t("k1uoyk3h")} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t("k1g2ax5b")} required />
                </div>
                <div className="form-group">
                  <textarea placeholder={t("kneylzg")} rows="5" required />
                </div>
                <button type="submit" className="btn btn-primary">{t("ku2s3wf")}</button>
              </form>
            </div>
            <div className="contact-image animate-slide-right">
              <img src="/images/installation1-1024x683-1.jpg" alt={t("kw3fq2r")} />
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe src={"https://maps.google.com/maps?output=embed&q=Douala+3e+Ngodi-Bakoko+Chefferie+Cameroun&t=m"} width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy"></iframe>
      </section>
      <footer className="footer">
        <div className="footer-cta">
          <div className="container">
            <div className="footer-cta-content">
              <div className="footer-cta-text">
                <h2>{t("kf8eewn")}</h2>
                <p>{t("klbefy2")}</p>
              </div>
              <Link to="/contact" className="btn btn-primary">{t("k1y0xgct")}</Link>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <img src="/images/logo-smart-white.png" alt={t("k1gc0izn")} className="footer-logo" />
                <p>{t("kslsd0i")}</p>
                <p className="footer-address">
                  {t("k17kuw9r")}
                  <br />
                  {t("keasi26")}
                </p>
                <div className="social-links">
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                  {" "}
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                  {" "}
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h3>{t("keiewc2")}</h3>
                <p className="footer-contact">
                  <strong>
                    {"📞 "}
                    <a href="tel:+237691052985">(+237) 691 05 29 85</a>
                  </strong>
                </p>
                <p>
                  {t("ka8ue4a")}
                  <br />
                  {t("kkg2ph9")}
                </p>
                <p className="footer-email">
                  <strong>
                    {"✉️ "}
                    <a href="mailto:sisia-sarl@outlook.fr">{t("kyktgtw")}</a>
                  </strong>
                </p>
              </div>
              <div className="footer-col">
                <h3>{t("k14k3d3p")}</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/">{t("klf64h9")}</Link>
                  </li>
                  <li>
                    <Link to="/a-propos">{t("kkmzffx")}</Link>
                  </li>
                  <li>
                    <Link to="/services">{t("k1fc69ex")}</Link>
                  </li>
                  <li>
                    <Link to="/faq">{t("khfim9n")}</Link>
                  </li>
                  <li>
                    <Link to="/blog">{t("k1b1mnjj")}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{t("kw3fq2r")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </PageShell>
  );
}
