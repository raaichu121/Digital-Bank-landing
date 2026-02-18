import React from 'react';

export default function ContactPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries.</p>
      </header>

      <div className="contact-grid">
        {/* Left Column: Contact Boxes */}
        <div className="contact-info">
          <div className="horizontal-card contact-item-box">
            <div className="info-item">
              <h4>Email</h4>
              <p>support@digitalbank.com</p>
            </div>
          </div>

          <div className="horizontal-card contact-item-box">
            <div className="info-item">
              <h4>Address</h4>
              <p>123 Fintech Lane, London, UK</p>
            </div>
          </div>

          <div className="horizontal-card contact-item-box">
            <div className="info-item">
              <h4>Phone</h4>
              <p>+44 20 7946 0000</p>
            </div>
          </div>
        </div>

        {/* Right Column: The Form Box */}
        <div className="contact-form-container">
          <form className="horizontal-card contact-form-box">
            <h3 className="form-title">Send a Message</h3>
            
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help?"></textarea>
            </div>

            <button type="button" className="invite-btn form-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}