import React from "react";
import "./Help.css"; 

const Help = () => {
  return (
    <div className="help-page">
      <h1>How can we help?</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="help-content">
        <div className="help-sidebar">
          <h3>Browse Topics</h3>
          <ul>
            <li>Pet Parents FAQ</li>
            <li>Pet Service Providers FAQ</li>
            <li>Payments FAQ</li>
            <li>Bookings FAQ</li>
            <li>FREE Pet Boarding FAQ</li>
            <li>Policies FAQ</li>
            <li>Premium Protection FAQ</li>
            <li>Cancellation FAQ</li>
          </ul>
        </div>

        <div className="help-main">
          <h3>Popular Topics</h3>
          <ul className="topics-list">
            <li>Pet Service Providers FAQ</li>
            <li>Pet Parents FAQ</li>
            <li>FREE Pet Boarding FAQ</li>
            <li>Cancellation FAQ</li>
            <li>Premium Protection Coverage FAQ</li>
          </ul>

          <h3>Popular Questions</h3>
          <ul className="questions-list">
            <li>What are credits for?</li>
            <li>How to be a pet sitter or walker?</li>
            <li>Get more from PetBacker!</li>
            <li>Cancellation by Pet Owner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
