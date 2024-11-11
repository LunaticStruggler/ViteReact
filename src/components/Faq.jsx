import React, { useState } from 'react';
import './Faq.css';

const Faq = ({ faqData, darkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  if (!faqData || faqData.length === 0) {
    return <div>No FAQs available</div>;
  }

  return (
    <section className={`faq-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="faq-items">
        {faqData.map((faqItem, index) => (
          <div
            className={`faq-item ${expandedIndex === index ? 'expanded' : ''} ${darkMode ? 'dark-mode' : ''}`}
            onClick={() => toggleFaq(index)}
            key={index}
          >
            <h4 className={darkMode ? 'dark-text' : ''}>{faqItem.question}</h4>
            <img src="/ViteReact/public/Images/Icons/arrow.png" alt="dropdown" />
            {expandedIndex === index && (
              <p className={darkMode ? 'dark-text' : ''}>{faqItem.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
