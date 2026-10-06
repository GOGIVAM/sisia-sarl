import { useEffect, useLayoutEffect } from 'react';

const SELECTOR = [
  '.u-list-item', '.u-layout-cell', '.testimonial-card', '.supervision-section .u-text',
  'section h1.u-text', 'section h2.u-text', 'section h3.u-text',
  'section img.u-image:not(.u-logo-image)', '[data-mo]',
].join(',');
const EXCLUDE = '.services-carousel, .u-menu, .u-sidenav, .review-modal, header, [data-animation-name]:not([data-animation-name=""]), .u-section-1 .u-parallax';

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Révélation progressive au défilement (décalage entre éléments voisins). */
function setupReveal(signal) {
  if (reduced() || !('IntersectionObserver' in window)) return;
  const all = [...document.querySelectorAll(SELECTOR)].filter((el) => !el.closest(EXCLUDE) && !el.matches('[data-animation-name]:not([data-animation-name=""])'));
  // seuls les éléments les plus externes sont animés
  const set = new Set(all);
  const targets = all.filter((el) => {
    let p = el.parentElement;
    while (p) { if (set.has(p)) return false; p = p.parentElement; }
    return true;
  });
  const seen = new Map();
  targets.forEach((el) => {
    const parent = el.parentElement;
    const i = seen.get(parent) ?? 0;
    seen.set(parent, i + 1);
    el.style.setProperty('--mo-delay', `${Math.min(i, 5) * 90}ms`);
    el.classList.add('mo');
    // variantes : deux colonnes face a face entrent par les cotes, les images zooment
    const sibs = [...parent.children].filter((c) => set.has(c));
    if (el.matches('.u-layout-cell') && sibs.length === 2) el.classList.add(i === 0 ? 'mo-left' : 'mo-right');
    else if (el.matches('img')) el.classList.add('mo-zoom');
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      en.target.classList.add('mo-in');
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => io.observe(el));
  // filet de securite : un element deja au-dessus du bas de la fenetre ne reste jamais cache
  const sweep = () => targets.forEach((el) => {
    if (!el.classList.contains('mo-in') && el.getBoundingClientRect().top < window.innerHeight) { io.unobserve(el); el.classList.add('mo-in'); }
  });
  const t = setTimeout(sweep, 1200);
  window.addEventListener('scroll', sweep, { signal, passive: true });
  signal.addEventListener('abort', () => {
    clearTimeout(t);
    io.disconnect();
    targets.forEach((el) => el.classList.remove('mo', 'mo-in'));
  });
}

/** Chargement différé des images hors premier écran. */
function setupLazyImages() {
  const vh = window.innerHeight;
  document.querySelectorAll('img:not([loading])').forEach((img) => {
    const r = img.getBoundingClientRect();
    if (r.top > vh * 1.2) img.loading = 'lazy';
    img.decoding = 'async';
  });
}

/** Barre de progression de lecture et bouton "haut de page". */
function setupScrollUi(bar, topBtn, signal) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (topBtn) topBtn.classList.toggle('is-visible', window.scrollY > 600);
    document.body.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { signal, passive: true });
  window.addEventListener('resize', update, { signal });
  update();
}

/** Léger effet de parallaxe sur les images de fond des sections .u-parallax. */
function setupParallax(signal) {
  if (reduced()) return;
  const secs = [...document.querySelectorAll('.u-parallax')];
  if (!secs.length) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    secs.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      s.style.backgroundPosition = `center calc(50% + ${Math.round(p * -40)}px)`;
    });
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { signal, passive: true });
  update();
}

export function useMotion(barRef, topRef) {
  useLayoutEffect(() => {
    const c = new AbortController();
    setupReveal(c.signal);
    return () => c.abort();
  }, []);
  useEffect(() => {
    const c = new AbortController();
    setupLazyImages();
    setupScrollUi(barRef.current, topRef.current, c.signal);
    setupParallax(c.signal);
    return () => c.abort();
  }, [barRef, topRef]);
}
