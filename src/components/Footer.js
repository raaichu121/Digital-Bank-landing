import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-socials">
          <h2 style={{color: '#fff'}}>Digitalbank</h2>
          <div className="social-icons">
            {/* Add your social icons here */}
            
          </div>
        </div>
        
        <div className="footer-links">
          <div className="col">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="col">
            <Link to="/careers">Careers</Link>
            <Link to="/support">Support</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer-cta">
          <button className="invite-btn">Request Invite</button>
          <p>© Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}