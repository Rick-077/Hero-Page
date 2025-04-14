import React, { useState } from 'react';
import './Navbar.css';
import slogo from './images/Logo.svg';
import './Footer.css';

const Footer = () => {

return (
    <footer className="footer-container">
        <div className="footer-content">
            <div className="footer-links">
                <a href="https://cdn.discordapp.com/attachments/1264339140724392007/1358379059838713940/BetterBank_whitepaper_1.7.pdf?ex=67fd83d5&is=67fc3255&hm=4f66398febaaa45cafd9dec61ad735fe3309d0617aa6bf3fd46e8e70e3ca3c5f&" className="footer-link">Whitepaper</a>
                <a href="https://discord.gg/zPzF29vUrn" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a>
                <a href="https://x.com/BetterBank_io" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            </div>
        </div>
    </footer>
);
};

export default Footer;