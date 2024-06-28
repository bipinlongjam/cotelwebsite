import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo">COTEL 
        <p>STAYS</p></div>
      {isMobile ? (
        <>
          <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </div>
          {menuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="#explore" className="nav-link">Explore Residences</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </>
      ) : (
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="#explore" className="nav-link">Explore Residences</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
