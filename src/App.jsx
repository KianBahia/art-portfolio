import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Gallery from './components/Gallery.jsx';
import Calendars from './components/Calendars.jsx';
import About from './components/About.jsx';
import { artist } from './data/artist.js';

export default function App() {
  return (
    <div className="app">
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
