import React, { useState } from 'react';
import './Contactus.css';
import ContactForm from '../Form/ContactFrom';

const Contactus = () => {
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    moveInDate: '',
    location: '',
    referral: ''
  });

  const handleContactButtonClick = () => {
    setShowForm(true);
    setStep(1); 
    setSubmitSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

 
  const handlePreviousStep = () => {
    if (step === 1) {
      setShowForm(false); 
    } else {
      setStep(step - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sheetdb.io/api/v1/tbsm51sfefvci', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submission result:', result);

      setSubmitSuccess(true); // Always set submit success to true after attempting submission
      setStep(step + 1); // Move to the next step regardless of success or error
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(true); // Set submit success to true even on error to progress to the next step
      setStep(step + 1); // Move to the next step even on error
    }
  };


  return (
    <div className='contact-container'>
      {!showForm ? (
        <div className="content">
          <div className='head-text'>
            <h1>KNOW WHERE YOU WANT TO STAY?</h1>
            <p>CONTACT US</p>
            <button className='btn' onClick={handleContactButtonClick}>Contact Us</button>
          </div>
        </div>
      ) : (
        <div className="multi-step-form">
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            handleSubmit={handleSubmit}
            step={step}
          />
        </div>
      )}
    </div>
  );
};

export default Contactus;
