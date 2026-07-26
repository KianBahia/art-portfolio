import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Gallery from './components/Gallery.jsx';
import Calendars from './components/Calendars.jsx';
import About from './components/About.jsx';
import { artist } from './data/artist.js';

// Jump to the top whenever the route changes (e.g. Calendars -> Work).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Casual-save deterrent: block the right-click menu and drag-to-save on
  // artwork images only (links, text, etc. keep their normal menu).
  // NOTE: this only stops casual saving — it cannot prevent a determined
  // user (dev tools, screenshots). Real protection is serving web-resolution
  // images, not print-quality masters.
  useEffect(() => {
    const isArt = (el) => el?.tagName === 'IMG';
    const onContext = (e) => {
      if (isArt(e.target)) e.preventDefault();
    };
    const onDrag = (e) => {
      if (isArt(e.target)) e.preventDefault();
    };
    document.addEventListener('contextmenu', onContext);
    document.addEventListener('dragstart', onDrag);
    return () => {
      document.removeEventListener('contextmenu', onContext);
      document.removeEventListener('dragstart', onDrag);
    };
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Gallery />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {artist.name}
        </span>
      </footer>
    </div>
  );
}
