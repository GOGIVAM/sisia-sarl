/** Composants Nicepage reproduits à la main : accordéon (FAQ) et listes horizontales à flèches. */

/** Accordéon : un clic ouvre/ferme le volet (comportement "collapsed by default" de Nicepage). */
export function setupAccordion(signal) {
  document.querySelectorAll('.u-accordion').forEach((acc) => {
    const items = [...acc.querySelectorAll('.u-accordion-item')];
    const single = !acc.classList.contains('u-accordion-multi');
    items.forEach((item) => {
      const link = item.querySelector('.u-accordion-link');
      const pane = item.querySelector('.u-accordion-pane');
      if (!link || !pane) return;
      link.setAttribute('role', 'button');
      link.setAttribute('tabindex', '0');
      link.setAttribute('aria-expanded', pane.classList.contains('u-accordion-active') ? 'true' : 'false');
      if (pane.id) link.setAttribute('aria-controls', pane.id);
      const toggle = () => {
        const open = !pane.classList.contains('u-accordion-active');
        if (open && single) {
          items.forEach((o) => {
            o.querySelector('.u-accordion-pane')?.classList.remove('u-accordion-active');
            const l = o.querySelector('.u-accordion-link');
            l?.classList.remove('active');
            l?.setAttribute('aria-expanded', 'false');
          });
        }
        pane.classList.toggle('u-accordion-active', open);
        link.classList.toggle('active', open);
        link.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      link.addEventListener('click', (e) => { e.preventDefault(); toggle(); }, { signal });
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      }, { signal });
    });
  });
}

/** Listes horizontales (.u-list) avec flèches précédente / suivante : défilement d'une carte, en boucle. */
export function setupListNav(signal) {
  document.querySelectorAll('.u-gallery-nav').forEach((nav) => {
    const host = nav.closest('.u-list') || nav.parentElement;
    const list = host && host.querySelector('.u-repeater');
    if (!list) return;
    const next = nav.classList.contains('u-gallery-nav-next');
    nav.setAttribute('role', 'button');
    nav.setAttribute('aria-label', next ? 'Suivant' : 'Précédent');
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      const item = list.querySelector('.u-repeater-item');
      const step = item ? item.getBoundingClientRect().width : list.clientWidth / 2;
      const max = list.scrollWidth - list.clientWidth;
      let target = list.scrollLeft + (next ? step : -step);
      if (next && list.scrollLeft >= max - 4) target = 0;
      if (!next && list.scrollLeft <= 4) target = max;
      list.scrollTo({ left: target, behavior: 'smooth' });
    }, { signal });
  });
}
