import React from "react";
import "./Services.css"; 

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="card-container">

      <div className="card">
          <img
            src="/Pet Boarding.jpg" 
            alt="Pet Boarding"
            className="card-image"
          />
          <h3 className="card-title">Pet Boarding</h3>
          <p className="card-description">
          Safe and comfortable temporary stays for your furry friends.
          </p>
        </div>

        <div className="card">
          <img
            src="/Dog-Grooming.png" 
            alt="Pet Grooming"
            className="card-image"
          />
          <h3 className="card-title">Pet Grooming</h3>
          <p className="card-description">
          Professional care for your pet's hygiene and appearance.
          </p>
        </div>
        
        <div className="card">
          <img
            src="/pet walking.jpg" 
            alt="Dog Walking"
            className="card-image"
          />
          <h3 className="card-title">Dog Walking</h3>
          <p className="card-description">
          Daily exercise and companionship for your beloved dogs.
          </p>
        </div>
        <div className="card">
          <img
            src="/vet_pet.jpg" 
            alt="Pet Day Care"
            className="card-image"
          />
          <h3 className="card-title">Veterinary assistants</h3>
          <p className="card-description">
          Supportive care to ensure your pet's health and well-being.
          </p>
        </div>

        <div className="card">
          <img
            src="/Dog-Training.jpg" 
            alt="Pet Training"
            className="card-image"
          />
          <h3 className="card-title">Pet Training</h3>
          <p className="card-description">
          Tailored programs to teach obedience and special skills.
          </p>
        </div>
        
        <div className="card">
          <img
            src="/Pet sitter.jpg" 
            alt="Pet sitter"
            className="card-image"
          />
          <h3 className="card-title">Pet Sitting</h3>
          <p className="card-description">
          Reliable at-home care while you're away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
