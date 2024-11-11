import React, { useState } from 'react';
import './Newsletter.css';
import axios from 'axios';

const Newsletter = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Please enter a valid email address.');
      setIsValid(false);
      setTimeout(() => {
        setErrorMessage('');
        setIsValid(true);
      }, 3000);
      return;
    }

    try {
      const response = await axios.post('https://win24-assignment.azurewebsites.net/api/subscribe', {
        email: email,
      });
      if (response.status === 200) {
        setSuccessMessage('Subscription successful!');
        setEmail('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      setErrorMessage('Subscription failed. Please try again.');
      console.error('Error subscribing:', error);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <section className={`newsletter-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="newsletter-box">
        <div className="newsletter-icon">
          <img src="/ViteReact/Images/Icons/Bell.png" alt="Bell Icon" />
        </div>
        <div className={`newsletter-text ${darkMode ? 'dark-text' : ''}`}>
          Subscribe to our newsletter to stay informed about the latest updates
        </div>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <div className="email-input-wrapper">
            <img src="/ViteReact/Images/Icons/envelope.png" alt="Envelope Icon" className="email-icon" />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`email-input ${darkMode ? 'dark-input' : ''}`}
            />
          </div>
          <button type="submit" className={`subscribe-button ${darkMode ? 'dark-button' : ''}`}>Subscribe</button>
        </form>
        {successMessage && <p className={`success-message ${darkMode ? 'dark-text' : ''}`}>{successMessage}</p>}
        {errorMessage && <p className={`error-message ${darkMode ? 'dark-text' : ''}`}>{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
