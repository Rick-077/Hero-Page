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
          <p className="hero-stats-label">Total value on platform</p>
          <p className="hero-stats-value">$2,323,432.23</p>
        </div>
      </div>
      <div style={{ marginTop: '50px', width: '100%', display:'flex', flexDirection: 'row', justifyContent:'center'}}>
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
