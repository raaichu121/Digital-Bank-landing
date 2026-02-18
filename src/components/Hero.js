import React from 'react';
// 1. Import the image
import phoneMockup from '../assets/active-states.jpg'; 
<div className="hero-image-container">
  <img src={phoneMockup} alt="phones" className="hero-mobile-img" />
</div>

export default function Hero() {
  return (
        <section className="hero">
        <div className="hero-text">
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online...</p>
          <button className="invite-btn">Request Invite</button>
        </div>
        
        <div className="hero-image-container">
          <img src={phoneMockup} alt="phones" className="hero-mobile-img" />
        </div>
      </section>
  );
}
