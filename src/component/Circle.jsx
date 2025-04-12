import React from 'react';
import './Circle.css';
import Traveler from './images/Traveler.png';
import Book from './images/Book.jpg';
import ReadingMan from './images/ReadingMan.png';

const Circle = () => {
  const items = [
    {
      src: Traveler,
      alt: 'wildlands',
      label: 'wildlands',
      className: 'inner-image-green',
      angle: '343deg',
    },
    {
      src: Traveler,
      alt: 'wildlands testnet',
      label: 'wildlands testnet',
      className: 'inner-image-green',
      angle: '54deg',
    },
    {
      src: Traveler,
      alt: 'stronghold testnet',
      label: 'stronghold testnet',
      className: 'inner-image',
      angle: '129deg',
    },
    {
      src: ReadingMan,
      alt: 'STRONGHOLD',
      label: 'STRONGHOLD',
      className: 'inner-image',
      angle: '200deg',
    },
    {
      src: Book,
      alt: 'Documentation',
      label: 'Documentation',
      className: 'inner-image',
      angle: '270deg',
    },
  ];

  return (
    <div className="circle">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.className} l${index + 1}`}
          style={{ '--angle': item.angle }}
        >
          <img className="image-inner" src={item.src} alt={item.alt} />
          <div className={item.className === 'inner-image-green' ? 'image-green' : item.className === 'inner-image' && 'image-word'}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Circle;
