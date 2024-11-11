import React from 'react';
import './Footer.css';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
            <p className={darkMode ? 'dark-text' : ''}>
                © 2024. Silicon. All rights reserved. Credit: MadrasThemes
            </p>
        </footer>
    );
};

export default Footer;
