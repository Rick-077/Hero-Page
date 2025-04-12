import React from 'react';
import './Circle.css';
import Traveler from './images/Traveler.png'
import Book from './images/Book.jpg'
import ReadingMAn from './images/ReadingMan.png'

const Circle = () => {
    return (
      <div className="circle">
        
        {/* Add 4 images with different rotation angles */}
        <div className="inner-image-green l1" style={{ '--angle': '343deg' }}>
        <img className='image-inner' src={Traveler} alt="" />
        <div className='image-green'>
        wildlands
        </div>
        </div>
        <div className="inner-image-green l2" style={{ '--angle': '54deg' }}>
        <img className='image-inner' src={Traveler} alt="" />
        <div className='image-green'>
        wildlands testnet
        </div>
        </div>
        <div className="inner-image l3" style={{ '--angle': '129deg' }}>
        <img className='image-inner' src={Traveler} alt="" />
        <div className='image-word'>
        stronghold testnet
        </div>
        </div>
        <div className="inner-image l4" style={{ '--angle': '200deg' }}>
        <img className='image-inner' src={ReadingMAn} alt="" />
        <div className='image-word'>
        STRONGHOLD
        </div>
        </div>
        <div className="inner-image l5" style={{ '--angle': '270deg' }}>
        <img className='image-inner' src={Book} alt="" />
        <div className='image-mix'>
          Documentation
        </div>
        </div>
      </div>
    );
  };

export default Circle;