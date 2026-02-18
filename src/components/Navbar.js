import React, { useState } from 'react'; //
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track if menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Digitalbank</div>

      {/* Hamburger Icon - Only visible on mobile via CSS */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* The Links - We add a dynamic class "active" when isOpen is true */}
      <div className={isOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
      </div>

      <button className="invite-btn desktop-only">Request Invite</button>
    </nav>
  );
}