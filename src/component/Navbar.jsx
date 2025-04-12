import React, { useState } from 'react';
import './Navbar.css';
import slogo from './images/Logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo - far left */}
      <div className="logo-icon">
        <img src={slogo} alt="Logo" className="logo" />
      </div>

      {/* Links - left side after logo */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
  <div className="nav-link active">Home</div>
  <div className="nav-link">link 1</div>
  <div className="nav-link">link 1</div>
  <div className="nav-link">link 1</div>
</div>

      {/* App Button - far right with auto margin */}
      <div className="app-button">
        <div className="app-button-text">go to app</div>
      </div>

      {/* Hamburger Button - only visible on mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;