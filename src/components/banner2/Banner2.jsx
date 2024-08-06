import React from 'react';
import './Banner2.css';

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="banner2-content">
        <div className="banner2-left">
          <span className="paper-plane-icon">✈️</span> {/* Replace with an appropriate icon if needed */}
          <span className="banner2-text">Sign up to Newsletter</span>
        </div>
        <div className="banner2-right">
          <span className="banner2-subtext">...and receive <strong>$20 coupon for first shopping.</strong></span>
          <input type="email" placeholder="Email address" className="banner2-input" />
          <button className="banner2-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
