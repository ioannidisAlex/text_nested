import React, { useState, useEffect } from 'react';
import './Accordion.css';

function Accordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      updateAccordionHeight();
    };

    window.addEventListener('resize', handleResize);

    // Initial setup
    updateAccordionHeight();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateAccordionHeight = () => {
    const accordionElement = document.querySelector('.accordion');
    if (accordionElement) {
      const height = window.innerHeight - accordionElement.getBoundingClientRect().top;
      accordionElement.style.height = `${height}px`;
    }
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={`accordion ${isAccordionOpen ? 'active' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        Section 1
      </div>
      <div className={`accordion-content ${isAccordionOpen ? 'slide-up' : ''}`}>
        Content for Section 1
      </div>
      <div className="accordion-header" onClick={toggleAccordion}>
        Section 2
      </div>
      <div className={`accordion-content ${isAccordionOpen ? 'slide-up' : ''}`}>
        Content for Section 2
      </div>
    </div>
  );
}

export default Accordion;
