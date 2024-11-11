import React from 'react';
import './Testimonials.css';

function Testimonials({ testimonials, darkMode }) {
  if (!testimonials || testimonials.length === 0) {
    return <div className={`loading ${darkMode ? 'dark-text' : ''}`}>No testimonials available.</div>; 
  }

  return (
    <section className={`testimonials-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="content-row">
          <div className={`title-column ${darkMode ? 'dark-text' : ''}`}>
            <h2>Clients are</h2>
            <h2>Loving Our App</h2>
          </div>

          {testimonials.map((testimonial) => (
            <div className={`testimonial-card ${darkMode ? 'dark-card' : ''}`} key={testimonial.id}>
              <img
                src="Images/Icons/quotes.png"
                alt="Quote Icon"
                className="quote-icon"
              />
              <div className={`rating ${darkMode ? 'dark-text' : ''}`}>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className={`testimonial-text ${darkMode ? 'dark-text' : ''}`}>
                {testimonial.message}
              </p>
              <div className="testimonial-footer">
                <img
                  src={testimonial.avatarUrl || "Images/Miscellaneous/default-avatar.png"} 
                  alt="User Avatar"
                  className="avatar-img"
                />
                <div>
                  <p className={`client-name ${darkMode ? 'dark-text' : ''}`}>{testimonial.name}</p>
                  <p className={`client-position ${darkMode ? 'dark-text' : ''}`}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
