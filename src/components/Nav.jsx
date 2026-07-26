import { NavLink } from 'react-router-dom';
import { artist } from '../data/artist.js';

export default function Nav() {
  // Also scroll up when the target is the page you're already on
  // (in that case the route doesn't change, so ScrollToTop won't fire).
  const toTop = () => window.scrollTo(0, 0);
  return (
    <header className="nav">
      <NavLink to="/" className="nav__brand" onClick={toTop}>
        {artist.name}
      </NavLink>
      <nav className="nav__links">
        <NavLink to="/" end className="nav__link" onClick={toTop}>
          Work
        </NavLink>
        <NavLink to="/calendars" className="nav__link" onClick={toTop}>
          Calendars
        </NavLink>
        <NavLink to="/about" className="nav__link" onClick={toTop}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
