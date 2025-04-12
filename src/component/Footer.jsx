import React, { useState } from 'react';
import './Navbar.css';
import slogo from './images/Logo.svg';
import './Footer.css';

const Footer = () => {

return (
    <footer className="footer-container">
        <div className="footer-content">
            <div className="footer-links">
                <a href="#whitepaper" className="footer-link">Whitepaper</a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            </div>
        </div>
    </footer>
);
};

export default Footer;