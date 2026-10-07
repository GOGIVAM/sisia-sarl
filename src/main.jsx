import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/nicepage.css';
import './styles/site.css';
import './styles/theme.css';
import './styles/gallery.css';
import './styles/shapes.css';
import './styles/modern-carousels.css';
import './styles/nav.css';
import './styles/reference.css';
import './styles/partners.css';
import './styles/pages.css';
import './styles/refine.css';
import './styles/mobile.css';
import './styles/motion2.css';
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
