import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/nicepage.css';
import './styles/site.css';
import './components/LangSwitcher.css';
import App from './App.jsx';

const root = document.getElementById('root');
const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages pré-rendues au build (SEO) : on hydrate ; sinon rendu client classique.
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
