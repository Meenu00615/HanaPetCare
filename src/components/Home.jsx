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

  const bathProducts = [
    {
      id: 1,
      name: "Pet Grooming Wipes",
      price: "550",
      image: "/Grooming Wipes.jpg",
    },
    {
      id: 2,
      name: "Anti-Tick Dog Soap",
      price: "300",
      image: "/Himalaya Fresh Coat Dry Bath Shampoo For Dogs And Cats.jpg",
    },
    {
      id: 3,
      name: "Healing Balm",
      price: "289",
      image: "/Healing Balm.jpg",
    },
    {
      id: 4,
      name: "Grooming Wipes Combo",
      price: "180",
      image: "/Pet Grooming Combo.jpg",
    },
    {
      id: 5,
      name: "Anti-Tick Dog Soap",
      price: "300",
      image: "/Sky EC Tick-Free Anti-Tick Dog Soap by Fifozone.jpg",
    },
    {
      id: 6,
      name: "Teeth Grooming Combo",
      price: "250",
      image: "/3 in 1 Cleaning Dental Toothbrush- Bio Enzyme and Natural.jpg",
    },
    
  ];

  const clothes = [
    {
      id: 1,
      name: "Winter Jacket for Dogs",
      price: "1200",
      image: "/dog clothes_2.jpg",
    },
    {
      id: 2,
      name: "Cute Kitten Hoodie",
      price: "900",
      image: "/Handmade sprinkles wool dog shawl.jpg",
    },
    {
      id: 3,
      name: "Summer T-Shirt for Pets",
      price: "750",
      image: "/Dog clothes.jpg",
    },
  ];

  const toys = [
    {
      id: 1,
      name: "Interactive Chew Toy",
      price: "499",
      image: "/Toy_1.jpg",
    },
    {
      id: 2,
      name: "Silicone Squeaky Ball Toy",
      price: "399",
      image: "/Silicone Squeaky Ball Toy.png",
    },
    {
      id: 3,
      name: "Dog Doll Toy",
      price: "350",
      image: "/Toy_3.jpg",
    },
  ];

  const petHouses = [
    {
      id: 1,
      name: "Indoor Pet House",
      price: "2065",
      image: "/Dog House.jpg",
    },
    {
      id: 2,
      name: "House For Cats and Dogs",
      price: "972",
      image: "/1pc Pet Bed House For Cats.jpg",
    },
    {
      id: 3,
      name: "Dog House Indoor",
      price: "2974",
      image: "/Pet House_1.jpg",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
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
            alt="Happy pets and their owners"
            className="Home-image"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h3 className="services-heading">Lovely Product</h3>
        <div className="card-container">
        </div>
      </div>

      {/* Products Sections */}
      <ProductSection title="Food Products" products={products} />
      <ProductSection title="Bath Products" products={bathProducts} />
      <ProductSection title="Clothes" products={clothes} />
      <ProductSection title="Toys" products={toys} />
      <ProductSection title="Pet Houses" products={petHouses} />

      {/* Appointment Section */}
      <div className="appointment-container">
        <div className="appointment-content">
          <a href="https://example.com/book" target="_blank" rel="noopener noreferrer">
            <img
              src="/Cat_1.jpg"
              alt="Book your pet appointment"
              className="appointment-image"
            />
          </a>
        </div>
        <div className="appointment-details">
          <h1>Book Your Appointment</h1>
          <p>
            Easily schedule services for your beloved pets with just a few
            clicks. Whether it's boarding, grooming, walking, or training, our
            platform ensures convenience and quality care.
          </p>
          <button className="appointment-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title, products }) => (
  <div className="popular-products-container">
    <h1 className="popular-products-heading">{title}</h1>
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
          <Link to="/add-to-cart" state={{ product }}>
            <button className="buy-now-btn">Add to cart</button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
