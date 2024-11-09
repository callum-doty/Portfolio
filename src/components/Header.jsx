import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath, useNavigate, useLocation } from "react-router-dom";
import '../styles/Header.css';

function CustomLink({ to, children, onClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [experienceScrollPending, setExperienceScrollPending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top (header) when navigating to a new route or on initial page load
  useEffect(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  // Scrolls to the "projects" section if pending after navigation
  useEffect(() => {
    if (experienceScrollPending) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      setExperienceScrollPending(false);
    }
  }, [experienceScrollPending, location]);

  const handleExperienceClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      // If not on home page, navigate to home, then scroll after navigation completes
      setExperienceScrollPending(true);
      navigate('/', { replace: true });
    } else {
      // If already on home page, just scroll to projects
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="header" id="header">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img 
            src="/assets/logo_callumdoty.png" 
            alt="Callum Doty Logo" 
            className="logo-img" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <CustomLink to="/About">About</CustomLink>
          <li>
            <a 
              href="#projects" 
              onClick={handleExperienceClick}
              className={location.pathname === '/' && document.getElementById('projects')?.getBoundingClientRect().top < window.innerHeight ? 'active' : ''}
            >
              Experience
            </a>
          </li>
          <CustomLink to="/Blog">Blog</CustomLink>
        </ul>
      </div>
    </nav>
  );
}
