import React from 'react';
import './Hero.css';

function Hero({ darkMode }) {
  return (
    <section className={`hero ${darkMode ? 'dark-mode' : ''}`}>
      <div className="hero-text">
        <h2>Manage All Your</h2>
        <h2>Money in One App</h2>
        <p>We offer you a new generation of mobile banking.</p>
        <p>Save, spend & manage money in your pocket.</p>
        <div className="app-buttons">
          <a href="#"><img src="/ViteReact/public/Images/Miscellaneous/appstore.png" alt="App Store" /></a>
          <a href="#"><img src="/ViteReact/public/Images/Miscellaneous/playstore.png" alt="Google Play" /></a>
        </div>
        <div className="discover-more-container">
          <a href="#" className="discover-more">
            <img src="/ViteReact/public/Images/Icons/button.png" alt="Arrow" />
          </a>
          <span className="discover-text">Discover more</span>
        </div>
      </div>
      <div className="hero-image">
        <img src="/ViteReact/public/Images/Phones/correctphone.png" alt="App Preview" />
      </div>
    </section>
  );
}

export default Hero;
