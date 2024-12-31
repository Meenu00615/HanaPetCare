import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-section">
        
          <h1>HANA</h1>       
      
      </div>
      <div className="footer-section">
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <li>Be a Pet Sitter</li>
          <li>Be a Dog Walker</li>
          <li>Pet Care App</li>
          <li>Rescue and Shelter Programme</li>
          <li><strong>NGO</strong></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <li>Pet Boarding</li>
          <li>Pet Sitting</li>
          <li>Dog Walking</li>
          <li>Pet Daycare</li>
          <li>Pet Grooming</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-gemail"></i>

        </div>
        <p>© Copyright 2024 Hana Pet Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
