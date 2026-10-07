/**
 * Effets liés au défilement, inspirés de la page d'accueil WinPlus :
 * parallaxe des heros, fondu du texte du hero, traits de séparation qui se tracent,
 * boutons "magnétiques" (souris), compteur de section pour le rail de parcours.
 * Tout est coupé si prefers-reduced-motion.
 */
const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Parallaxe douce de l'image de fond + fondu/décalage du contenu du hero pendant le défilement. */
export function setupHeroScroll(signal) {
  if (reduced()) return;
  const heroes = [...document.querySelectorAll('.page-hero, .sd-hero, #carousel_3dba')];
  if (!heroes.length) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    heroes.forEach((h) => {
      const r = h.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh) return;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      h.style.setProperty('--py', `${Math.round(p * 70)}px`);
      const inner = h.querySelector('.page-hero__inner, .sd-hero__inner, .u-container-layout-1');
      if (inner) {
        inner.style.opacity = String(1 - p * 0.85);
        inner.style.transform = `translate3d(0, ${Math.round(p * 38)}px, 0)`;
      }
    });
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { signal, passive: true });
  update();
  signal.addEventListener('abort', () => heroes.forEach((h) => {
    h.style.removeProperty('--py');
    const inner = h.querySelector('.page-hero__inner, .sd-hero__inner, .u-container-layout-1');
    if (inner) { inner.style.opacity = ''; inner.style.transform = ''; }
  }));
}

/** Les filets de séparation des sections se tracent de gauche à droite à l'arrivée à l'écran. */
export function setupLineDraw(signal) {
  if (reduced() || !('IntersectionObserver' in window)) return;
  const els = [...document.querySelectorAll('.svc-group, .partner-group, .ab-block, .ab-intro, .sd-brands, .sd-others, .logo-wall, .supervision-section, .testimonials-section')];
  els.forEach((e) => e.classList.add('line'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('line-in'); io.unobserve(en.target); } });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  els.forEach((e) => io.observe(e));
  signal.addEventListener('abort', () => { io.disconnect(); els.forEach((e) => e.classList.remove('line', 'line-in')); });
}

/** Boutons magnétiques : suivent légèrement le curseur (souris uniquement, jamais sur tactile). */
export function setupMagnetic(signal) {
  if (reduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const sel = '.btn-pill, .hero-btn, .nav-cta, .carousel-cta, .supervision-btn';
  const strength = 0.28;
  const over = (e) => {
    const el = e.target.closest?.(sel);
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${(e.clientX - (r.left + r.width / 2)) * strength}px`);
    el.style.setProperty('--my', `${(e.clientY - (r.top + r.height / 2)) * strength}px`);
  };
  const out = (e) => {
    const el = e.target.closest?.(sel);
    if (!el) return;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };
  document.addEventListener('mousemove', over, { signal, passive: true });
  document.addEventListener('mouseout', out, { signal, passive: true });
}

/** Rail de parcours : retourne l'index de l'étape active selon le défilement. */
export function trackSteps(sections, onChange, signal) {
  if (!sections.length) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const mid = window.innerHeight * 0.4;
    let idx = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) idx = i; });
    onChange(idx);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { signal, passive: true });
  window.addEventListener('resize', update, { signal });
  update();
}

/** Parallaxe douce des images de contenu : l'image dérive à l'intérieur de son cadre. */
export function setupImageParallax(signal) {
  if (reduced()) return;
  const frames = [...document.querySelectorAll('.sd-details__img, #sec-31fd .u-layout-row > .u-layout-cell:first-child, #sec-faec .u-layout-row > div:last-child, #carousel_4581 .u-layout-row > div:last-child, .svc-row__img')]
    .filter((f) => f.querySelector('img'));
  if (!frames.length) return;
  frames.forEach((f) => f.setAttribute('data-px', ''));
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    frames.forEach((f) => {
      const r = f.getBoundingClientRect();
      if (r.bottom < -80 || r.top > vh + 80) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      const img = f.querySelector('img');
      img.style.setProperty('--ty', Math.round(p * -26) + 'px');
    });
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { signal, passive: true });
  update();
  signal.addEventListener('abort', () => frames.forEach((f) => { f.removeAttribute('data-px'); f.querySelector('img')?.style.removeProperty('--ty'); }));
}
