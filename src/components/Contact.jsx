import React from "react";
import "./Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <i className="fas fa-comment-dots"></i>
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-illustration">
        <img src="/Contact_image.jpg" alt="Contact Us Illustration" />
      </div>
    </div>
  );
};

export default Contact;
