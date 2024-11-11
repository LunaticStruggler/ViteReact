import React from 'react';
import './HowItWorks.css';

function HowItWorks({ darkMode }) {
  return (
    <section className={`how-it-works ${darkMode ? 'dark-mode' : ''}`}>
      <div className="section-header">
        <h2 className={darkMode ? 'dark-text' : ''}>How does it work?</h2>
      </div>
      <div className="phones-container">
        <img src="/ViteReact/Images/Phones/leftphon.png" alt="Phone Left" className="phone phone-left" />
        <img src="/ViteReact/Images/Phones/midphone.png" alt="Phone Center" className="phone phone-center" />
        <img src="/ViteReact/Images/Phones/rightphone.png" alt="Phone Right" className="phone phone-right" />
      </div>
      <div className="section-description">
        <h3 className={darkMode ? 'dark-text' : ''}>Latest transaction history</h3>
        <p className={darkMode ? 'dark-text' : ''}>
          Explore how our app tracks your latest transactions in real-time and offers a seamless experience.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
