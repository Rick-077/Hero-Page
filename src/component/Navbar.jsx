import React, { useState } from 'react';
import './Navbar.css';
import slogo from './images/Logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo*/}
      <div className="logo-icon">
        <img src={slogo} alt="Logo" className="logo" />
      </div>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
  <a className="nav-link" href="https://betterbank.io/">Home</a>
  <a className="nav-link" href="https://presale.betterbank.io/presale/">Presale</a>
  <a className="nav-link" href="https://testnet.betterbank.io/">Testnet</a>
  <a className="nav-link" href="https://share.proto.io/SF6XXG/fullscreen/">Test page</a>
  <a className="nav-link" href="https://t.me/better_bank">Telegram</a>
</div>

      {/* App Button*/}
      <div className="app-button">
        <a className="app-button-text" href="https://share.proto.io/SF6XXG/fullscreen/">go to app</a>
      </div>

      {/* Hamburger Button - only visible on mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;