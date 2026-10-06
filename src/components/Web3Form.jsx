import { useEffect, useRef, useState } from 'react';

/**
 * Formulaire envoyé à Web3Forms (même clé et mêmes champs que le site d'origine).
 * Reprend les messages de succès / erreur du gabarit Nicepage (.u-form-send-success / .u-form-send-error).
 * Le bouton "Send" (lien .u-btn-submit) déclenche l'envoi comme avant.
 */
export default function Web3Form({ action, children, ...rest }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const ref = useRef(null);

  // Affiche le message adéquat (équivalent du .show()/.hide() de nicepage.js)
  useEffect(() => {
    const f = ref.current;
    if (!f) return;
    const ok = f.querySelector('.u-form-send-success');
    const ko = f.querySelector('.u-form-send-error');
    if (ok) ok.style.display = status === 'success' ? 'block' : 'none';
    if (ko) ko.style.display = status === 'error' ? 'block' : 'none';
  }, [status]);

  async function submit(form) {
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot
    setStatus('sending');
    try {
      const res = await fetch(action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        setStatus('success');
        form.reset();
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    submit(e.currentTarget);
  }

  function onClick(e) {
    const btn = e.target.closest('.u-btn-submit');
    if (!btn) return;
    e.preventDefault();
    submit(e.currentTarget);
  }

  return (
    <form {...rest} ref={ref} onSubmit={onSubmit} onClick={onClick} data-status={status}>
      {children}
    </form>
  );
}
