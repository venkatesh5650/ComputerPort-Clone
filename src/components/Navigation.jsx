import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/cloud', label: 'Cloud & Virtualisation' },
  { to: '/security', label: 'Security' },
  { to: '/partners', label: 'Partners' },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`glass navigation-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" onClick={closeMenu} style={{ textDecoration: 'none' }}>
            <span className="text-gradient" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
              Computer Port
            </span>
          </NavLink>

          <div className="nav-links">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav-item ${isActive ? 'active-link' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/testimonials">
              <button className="btn-secondary" style={{ marginRight: '0.75rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Testimonials
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Contact Us
              </button>
            </Link>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer glass ${menuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-links">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `mobile-nav-item ${isActive ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/testimonials" className="mobile-nav-item" onClick={closeMenu}>
            Testimonials
          </NavLink>
        </div>
        <div className="mobile-drawer-actions">
          <Link to="/contact" onClick={closeMenu}>
            <button className="btn-primary" style={{ width: '100%' }}>Contact Us</button>
          </Link>
        </div>
      </div>

      {menuOpen && <div className="drawer-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Navigation;
