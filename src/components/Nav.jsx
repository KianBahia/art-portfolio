import { NavLink } from 'react-router-dom';
import { artist } from '../data/artist.js';

export default function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav__brand">
        {artist.name}
      </NavLink>
      <nav className="nav__links">
        <NavLink to="/" end className="nav__link">
          Work
        </NavLink>
        <NavLink to="/calendars" className="nav__link">
          Calendars
        </NavLink>
        <NavLink to="/about" className="nav__link">
          About
        </NavLink>
      </nav>
    </header>
  );
}
