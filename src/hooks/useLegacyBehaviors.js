import { useEffect, useLayoutEffect } from 'react';
import { setupGallery } from './gallery.js';
import { setupAccordion, setupListNav } from './widgets.js';

const ANIM_ALIASES = { flipIn: (el) => 'flipIn' + (el.getAttribute('data-animation-direction') || 'X') };

/** Menu hors-champ (hamburger) : la classe open se pose sur le <nav class=u-menu>, comme nicepage.js. */
function setupMenu(signal) {
  const body = document.body;
  const open = (nav) => { nav.classList.add('open'); body.classList.add('u-offcanvas-opened'); document.body.style.overflow = 'hidden'; };
  const close = (nav) => { nav.classList.remove('open'); body.classList.remove('u-offcanvas-opened'); document.body.style.overflow = ''; };

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const burger = t.closest('.u-hamburger-link');
    if (burger) {
      e.preventDefault();
      const nav = burger.closest('.u-menu');
      if (nav) nav.classList.contains('open') ? close(nav) : open(nav);
      return;
    }
    const opened = document.querySelector('.u-menu.open');
    if (!opened) return;
    if (t.closest('.u-menu-close') || t.closest('.u-menu-overlay') || t.closest('.u-sidenav a[href]:not([href="#"])')) close(opened);
  }, { signal });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const opened = document.querySelector('.u-menu.open');
    if (opened) close(opened);
  }, { signal });
}

/** Animations d'entrée au défilement (data-animation-*), compteurs inclus. */
function setupAnimations(signal) {
  const els = [...document.querySelectorAll('[data-animation-name]')].filter((el) => el.getAttribute('data-animation-name'));
  if (!els.length) return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const runCounter = (el) => {
    const original = el.textContent;
    const m = original.match(/^(\D*)([\d\s.,]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[2].replace(/\s/g, '').replace(',', '.'));
    if (Number.isNaN(target)) return;
    const duration = Number(el.getAttribute('data-animation-duration')) || 2000;
    const decimals = (m[2].split(/[.,]/)[1] || '').length;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = m[1] + (target * p).toFixed(decimals) + m[3];
      if (p < 1 && !signal.aborted) requestAnimationFrame(tick);
      else el.textContent = original;
    };
    requestAnimationFrame(tick);
  };

  const play = (el) => {
    const name = el.getAttribute('data-animation-name');
    if (name === 'counter') { if (!reduce) runCounter(el); return; }
    el.style.visibility = '';
    if (reduce) return;
    const cls = ANIM_ALIASES[name] ? ANIM_ALIASES[name](el) : name;
    const d = el.getAttribute('data-animation-duration');
    const delay = el.getAttribute('data-animation-delay');
    if (d) el.style.animationDuration = d + 'ms';
    if (delay) el.style.animationDelay = delay + 'ms';
    el.classList.add('animated', cls);
  };

  els.forEach((el) => {
    if (el.getAttribute('data-animation-name') !== 'counter' && !reduce) el.style.visibility = 'hidden';
  });
  if (!('IntersectionObserver' in window)) { els.forEach(play); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { io.unobserve(en.target); play(en.target); } });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
  signal.addEventListener('abort', () => io.disconnect());
}

/** Carrousel "Nos métiers" (.services-carousel). */
function setupServicesCarousel(signal) {
  const root = document.querySelector('.services-carousel');
  if (!root) return;
  const slides = [...root.querySelectorAll('.carousel-slide')];
  const indicators = [...root.querySelectorAll('.indicator')];
  if (!slides.length) return;
  let current = 0;
  let timer;
  const show = (i) => {
    slides.forEach((s) => s.classList.remove('active', 'prev'));
    indicators.forEach((x) => x.classList.remove('active'));
    slides[i]?.classList.add('active');
    indicators[i]?.classList.add('active');
    slides[(i - 1 + slides.length) % slides.length]?.classList.add('prev');
  };
  const go = (i) => { current = (i + slides.length) % slides.length; show(current); };
  const restartBar = () => {
    const ind = indicators[current];
    if (!ind) return;
    ind.classList.remove('active');
    void ind.offsetWidth;
    ind.classList.add('active');
  };
  const start = () => { clearInterval(timer); restartBar(); timer = setInterval(() => go(current + 1), 6000); };
  root.querySelector('.next-btn')?.addEventListener('click', () => { go(current + 1); start(); }, { signal });
  root.querySelector('.prev-btn')?.addEventListener('click', () => { go(current - 1); start(); }, { signal });
  indicators.forEach((ind, i) => ind.addEventListener('click', () => { go(i); start(); }, { signal }));
  root.addEventListener('mouseenter', () => clearInterval(timer), { signal });
  root.addEventListener('mouseleave', start, { signal });
  let x0 = 0;
  root.addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].screenX; }, { signal, passive: true });
  root.addEventListener('touchend', (e) => {
    const x1 = e.changedTouches[0].screenX;
    if (x1 < x0 - 50) { go(current + 1); start(); }
    if (x1 > x0 + 50) { go(current - 1); start(); }
  }, { signal });
  root.setAttribute('tabindex', '0');
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { go(current - 1); start(); }
    if (e.key === 'ArrowRight') { go(current + 1); start(); }
  }, { signal });
  start();
  signal.addEventListener('abort', () => clearInterval(timer));
}

/** Carrousel de témoignages + avatars + modale d'avis. */
function setupTestimonials(signal) {
  const track = document.querySelector('.testimonials-track');
  const cards = [...document.querySelectorAll('.testimonial-card')];
  if (!track || !cards.length) return;
  const indicators = [...document.querySelectorAll('.testimonial-indicator')];
  const perView = () => (window.innerWidth <= 767 ? 1 : window.innerWidth <= 991 ? 2 : 3);
  let per = perView();
  let max = Math.ceil(cards.length / per) - 1;
  let index = 0;
  let timer;
  const update = () => {
    const offset = index * (cards[0].offsetWidth + 30) * per;
    track.style.transform = `translateX(-${offset}px)`;
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
  };
  const next = () => { index = index + 1 > max ? 0 : index + 1; update(); };
  const prev = () => { index = index - 1 < 0 ? max : index - 1; update(); };
  document.querySelector('.testimonial-next')?.addEventListener('click', next, { signal });
  document.querySelector('.testimonial-prev')?.addEventListener('click', prev, { signal });
  indicators.forEach((ind, i) => ind.addEventListener('click', () => { index = i; update(); }, { signal }));
  const start = () => { clearInterval(timer); timer = setInterval(next, 5000); };
  start();
  track.addEventListener('mouseenter', () => clearInterval(timer), { signal });
  track.addEventListener('mouseleave', start, { signal });
  window.addEventListener('resize', () => {
    per = perView();
    max = Math.ceil(cards.length / per) - 1;
    if (index > max) index = max;
    update();
  }, { signal });
  let x0 = 0;
  const carousel = track.closest('.testimonials-carousel') || track;
  carousel.addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].screenX; }, { signal, passive: true });
  carousel.addEventListener('touchend', (e) => {
    const x1 = e.changedTouches[0].screenX;
    if (x1 < x0 - 50) next();
    if (x1 > x0 + 50) prev();
  }, { signal });
  signal.addEventListener('abort', () => clearInterval(timer));

  // Avatars : initiales du client
  cards.forEach((card) => {
    const avatar = card.querySelector('.avatar');
    const nameEl = card.querySelector('.client-info h4');
    if (!avatar || !nameEl) return;
    const names = nameEl.textContent.trim().split(' ');
    const initials = (names.length >= 2 ? names[0][0] + names[1][0] : names[0][0] + (names[0][1] || '')).toUpperCase();
    avatar.querySelector('img')?.remove();
    if (!avatar.textContent.trim()) avatar.textContent = initials;
  });

  // Modale d'ajout d'avis
  const btn = document.querySelector('.add-review-btn');
  const modal = document.querySelector('.review-modal');
  if (!btn || !modal) return;
  const closeModal = () => { modal.classList.remove('active'); document.body.style.overflow = ''; };
  btn.addEventListener('click', () => { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }, { signal });
  document.querySelector('.modal-close')?.addEventListener('click', closeModal, { signal });
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); }, { signal });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  }, { signal });
  const form = document.querySelector('.review-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre témoignage ! Il sera publié après validation.');
    form.reset();
    closeModal();
  }, { signal });
  signal.addEventListener('abort', () => { document.body.style.overflow = ''; });
}

/** Active tous les comportements historiques sur la page montée. */
export function useLegacyBehaviors() {
  // masque les éléments animés avant la première peinture (évite le flash)
  useLayoutEffect(() => {
    const c = new AbortController();
    setupAnimations(c.signal);
    return () => c.abort();
  }, []);

  useEffect(() => {
    const c = new AbortController();
    setupMenu(c.signal);
    setupServicesCarousel(c.signal);
    setupTestimonials(c.signal);
    setupGallery(c.signal);
    setupAccordion(c.signal);
    setupListNav(c.signal);
    return () => {
      c.abort();
      document.body.classList.remove('u-offcanvas-opened');
      document.body.style.overflow = '';
    };
  }, []);
}
