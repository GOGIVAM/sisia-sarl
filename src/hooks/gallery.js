/** Galerie "Nos réalisations" : visionneuse plein écran (clic, clavier, balayage tactile). */
export function setupGallery(signal) {
  const items = [...document.querySelectorAll('.u-gallery .u-gallery-item')];
  if (!items.length) return;
  const fr = (document.documentElement.lang || 'fr') !== 'en';
  const imgs = items.map((it) => it.querySelector('img')?.getAttribute('src')).filter(Boolean);
  let box = null;
  let idx = 0;

  const show = (i) => {
    idx = (i + imgs.length) % imgs.length;
    box.querySelector('.lightbox__img').src = imgs[idx];
    box.querySelector('.lightbox__count').textContent = `${idx + 1} / ${imgs.length}`;
  };
  const close = () => {
    if (!box) return;
    const b = box;
    box = null;
    b.classList.remove('is-open');
    setTimeout(() => b.remove(), 300);
    document.body.style.overflow = '';
  };
  const open = (i) => {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = `
      <button class="lightbox__close" aria-label="${fr ? 'Fermer' : 'Close'}">×</button>
      <button class="lightbox__prev" aria-label="${fr ? 'Précédent' : 'Previous'}">‹</button>
      <img class="lightbox__img" alt="">
      <button class="lightbox__next" aria-label="${fr ? 'Suivant' : 'Next'}">›</button>
      <div class="lightbox__count"></div>`;
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    show(i);
    requestAnimationFrame(() => box && box.classList.add('is-open'));
    box.addEventListener('click', (e) => {
      if (e.target.closest('.lightbox__close') || e.target === box) close();
      else if (e.target.closest('.lightbox__prev')) show(idx - 1);
      else if (e.target.closest('.lightbox__next')) show(idx + 1);
    });
    let x0 = 0;
    box.addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].screenX; }, { passive: true });
    box.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - x0;
      if (dx < -50) show(idx + 1);
      if (dx > 50) show(idx - 1);
    });
  };

  items.forEach((it, i) => {
    it.setAttribute('role', 'button');
    it.setAttribute('tabindex', '0');
    it.setAttribute('aria-label', `${fr ? 'Agrandir la réalisation' : 'Enlarge project'} ${i + 1}`);
    it.addEventListener('click', () => open(i), { signal });
    it.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    }, { signal });
  });
  document.addEventListener('keydown', (e) => {
    if (!box) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  }, { signal });
  signal.addEventListener('abort', () => {
    if (box) { box.remove(); box = null; document.body.style.overflow = ''; }
  });
}
