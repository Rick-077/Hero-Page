import React from 'react';
import './Circle.css';
import Traveler from './images/Traveler.png';
import Traveler2 from './images/Traveler2.png';
import Book from './images/Book.jpg';
import ReadingMan from './images/ReadingMan.png';
import ReadingMan2 from './images/ReadingMan2.png';

const Circle = () => {
  const items = [
    {
      src: Traveler,
      alt: 'wildlands',
      label: 'wildlands',
      className: 'inner-image-green',
      angle: '343deg',
      imageClass: 'image-green',
      link:  'https://share.proto.io/SF6XXG/fullscreen/'
    },
    {
      src: Traveler2,
      alt: 'wildlands testnet',
      label: 'wildlands testnet',
      className: 'inner-image-green',
      angle: '54deg',
      imageClass: 'image-green',
      link:  'https://share.proto.io/SF6XXG/fullscreen/'
    },
    {
      src: ReadingMan2,
      alt: 'stronghold testnet',
      label: 'stronghold testnet',
      className: 'inner-image',
      angle: '129deg',
      imageClass: 'image-word',
      link:  'https://share.proto.io/SF6XXG/fullscreen/'
    },
    {
      src: ReadingMan,
      alt: 'STRONGHOLD',
      label: 'STRONGHOLD',
      className: 'inner-image',
      angle: '200deg',
      imageClass: 'image-word',
      link:  'https://share.proto.io/SF6XXG/fullscreen/'
    },
    {
      src: Book,
      alt: 'Documentation',
      label: 'Documentation',
      className: 'inner-image-mix',
      angle: '270deg',
      imageClass: 'image-mix',
      link:  'https://betterbanks-organization.gitbook.io/better-bank'
    },
  ];

  return (
    <div className="circle">
      {items.map((item, index) => (
        <a href= {item.link}
          key={index}
          className={`${item.className} l${index + 1} link`}
          style={{ '--angle': item.angle }}
        >
          <img className="image-inner" src={item.src} alt={item.alt} />
          <div 
            style={{ '--angle': item.angle }} 
            className={item.imageClass}
          >
            {item.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Circle;
