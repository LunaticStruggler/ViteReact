import React from 'react';
import './Contact.css';

function Contact({ darkMode }) {
  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <section className="contact-preview-section">
        <h1>Any questions?</h1>
        <h1>Check out the FAQs</h1>
        <p>Still have unanswered questions and need to get in touch?</p>

        <div className="contact-preview-boxes">
          <div className={`contact-preview-box ${darkMode ? 'dark-mode' : ''}`}>
            <img src="public/Images/Icons/telephone.png" alt="Phone" />
            <div>
              <p>Still have questions?</p>
              <a href="ContactPage.jsx">
                Contact us
                <img src="public/Images/Icons/purplearrow.png" alt="Arrow" />
              </a>
            </div>
          </div>
          <div className={`contact-preview-box ${darkMode ? 'dark-mode' : ''}`}>
            <img src="public/Images/Icons/message.png" alt="Message" />
            <div>
              <p>Don't like phone calls?</p>
              <a href="ContactPage.jsx">
                Contact us
                <img src="public/Images/Icons/greenarrow.png" alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
