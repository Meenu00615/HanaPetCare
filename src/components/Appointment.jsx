import React from "react";
import "./Appointment.css"; 

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <a href="https://example.com/book" target="_blank" rel="noopener noreferrer">
          <img
            src="/Cat_1.jpg" 
            alt="Appointment Image"
            className="appointment-image"
          />
        </a>
      </div>
      <div className="appointment-details">
        <h1>Book Your Appointment</h1>
        <p>
        Easily schedule services for your beloved pets with just a few clicks. Whether it's boarding, grooming, walking, or training, our platform ensures convenience and quality care. Select the service, choose a date, and leave the rest to us—because your pet deserves the best!
        </p>
        <button className="appointment-button">Learn More</button>
      </div>
    </div>
  );
};

export default Appointment;
