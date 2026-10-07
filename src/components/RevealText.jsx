/**
 * Titre révélé mot par mot (fondu + glissement décalé), comme le RevealText de WinPlus.
 * Accessible : le texte complet est dans aria-label, les mots découpés sont aria-hidden.
 * Animation CSS pure (pas de dépendance), donc compatible pré-rendu.
 */
export default function RevealText({ text, as: Tag = 'h1', delay = 0.1, className }) {
  const words = String(text).split(' ');
  return (
    <Tag aria-label={text} className={className}>
      {words.map((w, i) => (
        <span key={i} className="rw" aria-hidden="true" style={{ animationDelay: `${(delay + i * 0.06).toFixed(2)}s` }}>
          {w}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
