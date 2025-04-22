import React from 'react';
import slogo from './images/Logo.svg';
import Navbar from './Navbar.jsx';
import './HeroPage2.css';
import TreeRender from './Tree.jsx';
import Footer from './Footer.jsx';
const HeroPage2 = () => { 
  return (
 <main className='main'>
    <div className="hero-container">
      < Navbar/>
      <div className='content'>
      <div className="hero-content">
        <img src={slogo} alt="Logo" className="hero-logo" onContextMenu={(e) => e.preventDefault()} draggable="false" />
        <h1 className="hero-title">BetterBank</h1>
        <b className="hero-subtitle">Where finance meets freedom</b>
        <div className="hero-stats">
          <p className="hero-stats-label">Total value on platform 
            <br />(Coming Soon)</p>
          <p className="hero-stats-value">$--,---,---</p>
        </div>
      </div>
      <div className='treeR'>
        <TreeRender />
      </div>
    </div>
  </div>
  <div className="footer">
    <Footer />
  </div>
 </main>
  );
};

export default HeroPage2;
