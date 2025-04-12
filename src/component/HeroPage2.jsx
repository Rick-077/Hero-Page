import React from 'react';
import leftBg from './images/betterbankbackground1.jpg';
import rightBg from './images/betterbankbackground2.jpg';
import slogo from './images/Logo.svg';
import Navbar from './Navbar.jsx';
import './HeroPage2.css';
import TreeRender from './Tree.jsx';
import Footer from './Footer.jsx';
const HeroPage2 = () => {
  return (
 <body>
    <div className="hero-container">
      <div className="hero-bg left" style={{ backgroundImage: `url(${leftBg})` }}>
        <div className="gradient-overlay left" />
      </div>

      <div className="hero-bg right" style={{ backgroundImage: `url(${rightBg})` }}>
        <div className="gradient-overlay right" />
      </div>
      < Navbar/>
      <div className='content'>
      <div className="hero-content">
        <img src={slogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Betterbank</h1>
        <b className="hero-subtitle">Where finance meets freedom</b>
        <div className="hero-stats">
          <p className="hero-stats-label">Total value on platform</p>
          <p className="hero-stats-value">$2,323,432.23</p>
        </div>
      </div>
      <div style={{ marginTop: '50px' }} className="">
        < TreeRender/>
      </div>
      </div>
    </div>
    <Footer/>
 </body>
  );
};

export default HeroPage2;
