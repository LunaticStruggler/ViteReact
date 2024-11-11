import React from 'react';
import './Features.css';

function Features({ darkMode }) {
  return (
    <section id="features-section" className={`features-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="company-logos">
        <img src="/ViteReact/Images/Logos/logo1.png" alt="Company 1" />
        <img src="/ViteReact/Images/Logos/logo2.png" alt="Company 2" />
        <img src="/ViteReact/Images/Logos/logo3.png" alt="Company 3" />
        <img src="/ViteReact/Images/Logos/logo4.png" alt="Company 4" />
        <img src="/ViteReact/Images/Logos/logo5.png" alt="Company 5" />
        <img src="/ViteReact/Images/Logos/logo6.png" alt="Company 6" />
      </div>
      <div className="features-container">
        <div className="phone-image">
          <img src="/ViteReact/Images/Phones/secondphone.png" alt="App on Phone" />
        </div>
        <div className="features-content">
          <h2>App Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.</p>
          <div className="features-list">
            {[
              { icon: 'icon1.png', title: 'Easy Payments', description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.' },
              { icon: 'icon2.png', title: 'Data Security', description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.' },
              { icon: 'icon3.png', title: 'Cost Statistics', description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.' },
              { icon: 'icon4.png', title: 'Support 24/7', description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.' },
              { icon: 'icon5.png', title: 'Regular Cashback', description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.' },
              { icon: 'icon6.png', title: 'Top Standards', description: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.' }
            ].map((feature, index) => (
              <div className="feature-item" key={index}>
                <img src={`/ViteReact/Images/Icons/${feature.icon}`} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
