// Scroll.jsx
import React from 'react';
import './Carousel.css';  // Import custom styles

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="marquee-div">
        <marquee className="marquee-content">
          Here we have some trending courses which are important in present IT companies
        </marquee>
      </div>
    </div>
  );
};

export default Scroll;
