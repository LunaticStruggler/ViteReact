import React from 'react';
import './Features2.css';

function Features2({ darkMode }) {
  return (
    <section className={`features2-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="left-column">
            <h2>Make your money transfer simple and clear</h2>
            <ul className="features-list">
              <li>
                <img src="/ViteReact/Images/Icons/checkmark.png" alt="Checkmark icon" className="icon-checkmark" />
                Banking transactions are free for you
              </li>
              <li>
                <img src="/ViteReact/Images/Icons/checkmark.png" alt="Checkmark icon" className="icon-checkmark" />
                No monthly cash commission
              </li>
              <li>
                <img src="/ViteReact/Images/Icons/checkmark.png" alt="Checkmark icon" className="icon-checkmark" />
                Manage payments and transactions online
              </li>
            </ul>
            <a href="#" className="cta-button">Learn more</a>
          </div>
          <div className="right-column">
            <img src="/ViteReact/Images/Miscellaneous/graf.png" alt="Graph image" />
          </div>
        </div>

        <div className="row">
          <div className="left-column">
            <img src="/ViteReact/Images/Miscellaneous/kort.png" alt="Card image" />
          </div>

          <div className="right-column">
            <h2>Receive payment from international bank details</h2>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>

            <div className="features-icons">
              <div className="feature">
                <img src="/ViteReact/Images/Icons/icon1.png" alt="Icon 1" />
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>

              <div className="feature">
                <img src="/ViteReact/Images/Icons/icon3.png" alt="Icon 3" />
                <p>A elementum et imperdiet enim, pretium etiam facilisi. Aenean quam mauris.</p>
              </div>
            </div>

            <a href="#" className="cta-button">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features2;
