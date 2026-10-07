import { useLayoutEffect, useRef } from 'react';
import { useLegacyBehaviors } from '../hooks/useLegacyBehaviors.js';
import { useMotion } from '../hooks/useMotion.js';
import LangSwitcher from './LangSwitcher.jsx';
import { useLang, useUi } from '../i18n/index.jsx';
import { UI } from '../i18n/ui.js';
import SeoJsonLd from './SeoJsonLd.jsx';
import MobileBar from './MobileBar.jsx';

/**
 * Enveloppe commune des pages.
 * - reporte les attributs <html>/<body> d'origine (classes u-body, data-*),
 * - branche les comportements qui étaient assurés par nicepage.js / carousel.js,
 * - ajoute la couche d'expérience : lien d'évitement, progression de lecture, retour en haut, motion.
 */
export default function PageShell({ htmlAttrs = {}, bodyAttrs = {}, children }) {
  const lang = useLang();
  const u = useUi(UI);
  const barRef = useRef(null);
  const topRef = useRef(null);

  useLayoutEffect(() => {
    const body = document.body;
    const prev = { cls: body.className, attrs: {} };
    for (const [k, v] of Object.entries(bodyAttrs)) {
      if (k === 'class') body.className = v;
      else { prev.attrs[k] = body.getAttribute(k); body.setAttribute(k, v); }
    }
    document.documentElement.lang = lang;
    return () => {
      body.className = prev.cls;
      for (const [k, v] of Object.entries(prev.attrs)) v === null ? body.removeAttribute(k) : body.setAttribute(k, v);
    };
  }, [htmlAttrs, bodyAttrs, lang]);

  useLegacyBehaviors();
  useMotion(barRef, topRef);

  return (
    <>
      <a className="skip-link" href="#contenu" onClick={(e) => { const el = document.getElementById('contenu') || document.querySelector('section'); if (el) { e.preventDefault(); el.setAttribute('tabindex', '-1'); el.focus(); el.scrollIntoView(); } }}>{u('skip')}</a>
      <div className="scroll-progress" ref={barRef} aria-hidden="true" />
      <LangSwitcher />
      <SeoJsonLd />
      {children}
      <MobileBar />
      <button type="button" className="to-top" ref={topRef} aria-label={u('top')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5l-7 7m7-7l7 7M12 5v14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );
}
