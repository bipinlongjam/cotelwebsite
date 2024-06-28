import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi, faShieldAlt, faSnowflake, faTv, faCouch} from '@fortawesome/free-solid-svg-icons';
import './Facilities.css'; 
import student from './../../assets/students.jpg'
import working from './../../assets/working.jpg'
import gallery from './../../assets/gallery.jpg'




const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2>Our Facilities</h2>
      <div className="facilities-row">
        <div>
          <FontAwesomeIcon icon={faWifi} size="3x" className="facility" />
          <p className='text'>Free Wi-Fi</p>
        </div>
        <div >
          <FontAwesomeIcon icon={faShieldAlt} size="3x" className="facility" />
          <p className='text'>Security</p>
        </div>
        <div >
          <FontAwesomeIcon icon={faSnowflake} size="3x" className="facility"/>
          <p className='text'>Air Conditioner</p>
        </div>
        <div >
          <FontAwesomeIcon icon={faTv} size="3x" className="facility" />
          <p className='text'>Television</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCouch} size="3x" className="facility"/>
          <p className='text'>Furniture</p>
        </div>
      </div>
      <div className='image-container'>
      <div className='image-item'>
            <img src={student} alt="Student" className="student-image" />
            <p className='img-text'>Student</p>
        </div>
        <div className='image-item'>
            <img src={working} alt="Working" className="working-image" />
            <p className='img-text'>Working Professional</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className='gallery-background'>
        <div className="gallery-section">
          <h3>Gallery</h3>
          <img src={gallery} alt="gallery" className='gallery-image'/>
        </div>
        </div>
        <div className='contact-background'>
        <div className="contact-section">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <fieldset className="gender-fieldset">
         <label>Select your Gender:</label>
        <div className="gender-options">
           
            <input type="radio" id="male" name="gender" value="male" />
            <span>Male</span>
            
            <input type="radio" id="female" name="gender" value="female" />
            <span>Female</span>
            
            <input type="radio" id="other" name="gender" value="other" />
            <span>Others</span>
            </div>
             </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
