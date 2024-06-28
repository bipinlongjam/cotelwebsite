import React from 'react';
import './ContactForm.css';

const ContactForm = ({ formData, handleInputChange, handleNextStep, handlePreviousStep, handleSubmit, step }) => {
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {step === 1 && (
        <div className="form-step">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} pattern="[0-9]{10}" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <button type="button" onClick={handlePreviousStep}>Previous</button>
          <button type="button" onClick={handleNextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />

          <button type="button" onClick={handlePreviousStep}>Previous</button>
          <button type="button" onClick={handleNextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <label htmlFor="moveInDate">Move-in Date:</label>
          <input type="date" id="moveInDate" name="moveInDate" value={formData.moveInDate} onChange={handleInputChange} required />

          <label htmlFor="location">Preferred Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required />

          <button type="button" onClick={handlePreviousStep}>Previous</button>
          <button type="button" onClick={handleNextStep}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <label htmlFor="referral">How did you hear about us?</label>
          <textarea id="referral" name="referral" value={formData.referral} onChange={handleInputChange} required></textarea>

          <button type="button" onClick={handlePreviousStep}>Previous</button>
          <button type="submit">Submit</button>
        </div>
      )}

      {step === 5 && (
        <div className="form-step">
          <h2>Thank you for contacting us!</h2>
          <p>Your information has been submitted successfully.</p>
          <span role="img" aria-label="checkmark">✅</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
