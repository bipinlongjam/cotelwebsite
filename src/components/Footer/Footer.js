import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.jpeg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-section footer-logo'>
      <img src={logo} alt="logo" className='logo-img' />
    </div>
    <div className='footer-section footer-contact'>
      <h3 className='contact-text'>Contact Us :</h3>
      <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> email@example.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +123 456 7890</p>
        </div>
    </div>
    <div className='footer-section footer-social'>
      <h3 className='social-text'>Get in Touch</h3>
      <div className='social-icons'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
    </div>
    <hr />
    <p className="designed-by">Designed by Bipin Longjam</p>
  </div>
  )
}

export default Footer
