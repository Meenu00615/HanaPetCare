import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';  

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/Hana_logo.png" 
          alt="Logo"
          className="logo"
        />
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="navbar-item">
        <Link to="/appointment">Book An Appointment</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
        </li>

        <li className="navbar-item">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Help">Help</Link>
        </li>
      </ul>

    </nav>
  );
};
 
export default Navbar;
