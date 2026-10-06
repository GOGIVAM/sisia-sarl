import { StaticRouter } from 'react-router-dom';
import { prerender } from 'react-dom/static';
import App from './App.jsx';

/** Rend une URL en HTML statique (utilisé par scripts/prerender.mjs au moment du build). */
export async function render(url) {
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  const chunks = [];
  const reader = prelude.getReader();
  const dec = new TextDecoder();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(dec.decode(value, { stream: true }));
  }
  return chunks.join('');
}
