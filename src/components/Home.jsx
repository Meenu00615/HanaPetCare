import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Pedigree Roasted Chicken & Vegetable Adult Dry Dog Food",
      price: "3678",
      image: "/Pedigree.png",
    },
    {
      id: 2,
      name: "Drools Adult Dog Food, Packaging: 1.5 kg",
      price: "220",
      image: "/drools-adult-dog-food.jpg",
    },
    {
      id: 3,
      name: "Whiskas junior 2 - 12 cat food 1.1 kg",
      price: "380",
      image: "/whiskas-junior-cat-food.jpg",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Pet Boarding",
      description: "Safe and comfortable temporary stays for your furry friends.",
      image: "/Pet Boarding.jpg",
    },
    {
      id: 2,
      name: "Pet Grooming",
      description: "Professional care for your pet's hygiene and appearance.",
      image: "/Dog-Grooming.png",
    },
    {
      id: 3,
      name: "Dog Walking",
      description: "Daily exercise and companionship for your beloved dogs.",
      image: "/pet walking.jpg",
    },
    {
      id: 4,
      name: "Veterinary Assistants",
      description: "Supportive care to ensure your pet's health and well-being.",
      image: "/vet_pet.jpg",
    },
    {
      id: 5,
      name: "Pet Training",
      description: "Tailored programs to teach obedience and special skills.",
      image: "/Dog-Training.jpg",
    },
    {
      id: 6,
      name: "Pet Sitting",
      description: "Reliable at-home care while you're away.",
      image: "/Pet sitter.jpg",
    },
  ];

  return (
    <div className="home-container">
      <div className="content-section">
        <div className="text-section">
          <h1 className="heading">Hana Pet Care for your lovely pets!</h1>
          <div className="buttons-container">
            <Link to="/read-more">
              <button className="read-more-btn">Read More</button>
            </Link>
            <Link to="/watch-video">
              <button className="watch-video-btn">
                <span className="watch-video-icon">▶</span> Watch Video
              </button>
            </Link>
          </div>
        </div>
        <div className="image-section">
          <img
            src="/Home_page_image.png"
            alt="Home_Page_image"
            className="Home-image"
          />
        </div>
      </div>

      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>
        <div className="card-container">
          {services.map((service) => (
            <div className="card" key={service.id}>
              <img
                src={service.image}
                alt={service.name}
                className="card-image"
              />
              <h3 className="card-title">{service.name}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="popular-products-container">
        <h1 className="popular-products-heading">Lovely Products</h1>
        <p className="popular-products-description">
          Discover the perfect blend of care and convenience with our premium
          pet products! Pamper your pets with the best—they deserve it!
        </p>
        <div className="product-cards-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <Link
                to="/add-to-cart"
                state={{ product }}
              >
                <button className="buy-now-btn">Buy Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

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
            Easily schedule services for your beloved pets with just a few
            clicks. Whether it's boarding, grooming, walking, or training, our
            platform ensures convenience and quality care. Select the service,
            choose a date, and leave the rest to us—because your pet deserves
            the best!
          </p>
          <button className="appointment-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
