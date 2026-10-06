import Link from '../components/LocLink.jsx';
import { UI } from '../i18n/ui.js';
import { useUi } from '../i18n/index.jsx';

export default function NotFound() {
  const u = useUi(UI);
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', fontFamily: 'Ubuntu, sans-serif', padding: 24 }}>
      <title>{u('notFoundTitle')}</title>
      <meta name="robots" content="noindex" />
      <div>
        <h1 style={{ fontSize: 72, margin: 0, color: '#2e5aac' }}>404</h1>
        <p>{u('notFoundText')}</p>
        <Link to="/" className="btn-pill">{u('home')}</Link>
      </div>
    </main>
  );
}
