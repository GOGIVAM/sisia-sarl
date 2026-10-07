import { useEffect, useState } from 'react';
import { trackSteps } from '../hooks/scrollFx.js';

/**
 * Rail de parcours collant (inspiré du parcours WinPlus) : une pastille par étape,
 * l'étape en cours est mise en avant, un trait de progression se remplit.
 * `steps` = [{ id, label }] ; chaque section cible porte l'attribut id correspondant.
 */
export default function JourneyRail({ steps }) {
  const [active, setActive] = useState(-1);
  const [shown, setShown] = useState(false);

  const ids = steps.map((s) => s.id).join(',');
  useEffect(() => {
    const c = new AbortController();
    const sections = ids.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    trackSteps(sections, (i) => { setActive(i); setShown(i >= 0); }, c.signal);
    return () => c.abort();
  }, [ids]);

  const pct = active < 0 ? 0 : (active / Math.max(1, steps.length - 1)) * 100;
  return (
    <nav className={`jrail${shown ? ' is-on' : ''}`} aria-label="Parcours">
      <span className="jrail__line" aria-hidden="true"><i style={{ height: pct + '%' }} /></span>
      <ol>
        {steps.map((s, i) => (
          <li key={s.id} className={i === active ? 'is-active' : i < active ? 'is-done' : ''}>
            <a href={`#${s.id}`} onClick={(e) => { const el = document.getElementById(s.id); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
              <b>{String(i + 1).padStart(2, '0')}</b><span>{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
