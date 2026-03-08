import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, personal } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-badge">{personal.initials}</span>
          <div>
            <strong>{personal.name}</strong>
            <small>AI Engineer Portfolio</small>
          </div>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <a className="button ghost compact mobile-only" href={personal.cv} target="_blank" rel="noreferrer">
            <Download size={16} />
            CV
          </a>
        </nav>

        <div className="nav-actions">
          <a className="button ghost compact desktop-only" href={personal.cv} target="_blank" rel="noreferrer">
            <Download size={16} />
            Download CV
          </a>
          <button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
