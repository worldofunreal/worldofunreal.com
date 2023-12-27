import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, please feel free to drop us a line.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;
