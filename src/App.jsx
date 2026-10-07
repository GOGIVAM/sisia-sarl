import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes.js';
import { LangProvider, localize } from './i18n/index.jsx';
import NotFound from './pages/NotFound.jsx';

const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const Partners = lazy(() => import('./pages/Partners.jsx'));
const PartnerDetail = lazy(() => import('./pages/PartnerDetail.jsx'));
const extraRoutes = [
  { path: '/services', Component: ServicesPage },
  { path: '/partenaires', Component: Partners },
  { path: '/partenaires/:slug', Component: PartnerDetail },
];

/** Remonte en haut à chaque changement de page, ou vers l'ancre #... si présente. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Anciennes URLs *.html : redirigées vers la nouvelle route correspondante. */
const legacyRedirects = [
  ...routes.map((r) => ['/' + r.legacy, r.path]),
  ['/Home.html', '/'],
];

export default function App() {
  return (
    <LangProvider>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          {[...routes.filter((r) => r.path !== '/services'), ...extraRoutes].flatMap(({ path, Component }) => [
            <Route key={path} path={path} element={<Component />} />,
            <Route key={'en' + path} path={localize(path, 'en')} element={<Component />} />,
          ])}
          {legacyRedirects.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LangProvider>
  );
}
