import React, { useState } from 'react';
import './Navbar.css';
import slogo from './images/Logo.svg';
import Banner1 from  './images/banner-desktop.svg';
import Banner2 from  './images/banner.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className='nav'>
    <nav className="navbar-container">
      {/* Logo */}
        <div className="logo-icon">
          <img src={slogo} alt="Logo" className="logo" onContextMenu={(e) => e.preventDefault()} draggable="false" />
        </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
  <a className="nav-link" href="https://betterbank.io/">Home</a>
  <a className="nav-link" href="https://testnet.betterbank.io/">Testnet</a>
  <a className="nav-link" href="https://share.proto.io/SF6XXG/fullscreen/">UI showcase</a>
  <a className="nav-link" href="https://t.me/better_bank">Telegram</a>
  <a className="nav-link" href="https://discord.gg/zPzF29vUrn">discord</a>
  <a className="nav-link" href="https://betterbank.io/gitbook">Docs</a>
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
    <a href="https://presale.betterbank.io/presale/">
<picture>
    <source media="(max-width: 768px)" srcSet= {Banner2} />
    <source media="(min-width: 769px)" srcSet= {Banner1} />
    <img className='banner' src= {Banner1} alt="" />
  </picture>
</a>
</div>
  );
};

export default Navbar;