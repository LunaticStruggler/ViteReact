import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ darkMode, onToggleDarkMode }) {
  const handleThemeToggle = () => {
    onToggleDarkMode(); 
  };

  return (
    <header className={darkMode ? 'dark-mode' : ''}>
      <nav>
        <Link to="/" className="logo">
          <img src="/ViteReact/public/Images/Logos/logga.PNG" alt="Silicon Logo" />
          <h1>Silicon</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#features-section" className={darkMode ? 'dark-text' : ''}><strong>Features</strong></a>
          </li>
        </ul>
        <div className="header-right">
          <div className="theme-switch">
            <span className={darkMode ? 'dark-text' : ''}>Dark Mode</span>
            <input type="checkbox" id="theme-toggle" checked={darkMode} onChange={handleThemeToggle} />
            <label htmlFor="theme-toggle"></label>
          </div>
          <a href="#" className={`sign-in ${darkMode ? 'dark-mode' : ''}`}>
            <img src="/ViteReact/public/Images/Icons/login.png" alt="Sign Up Icon" className="sign-in-icon" />
            Sign in / up
          </a>
          <Link to="/contact" className={`header-contact-link ${darkMode ? 'dark-text' : ''}`}>
            <strong>Contact</strong>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
