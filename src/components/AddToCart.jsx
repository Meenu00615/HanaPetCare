import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "./AddToCart.css";

const AddToCart = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { product } = location.state || {};

  if (!product) {
    return <p>No product selected. Please go back and select a product.</p>;
  }

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="add-to-cart-container">
      <button className="back-button" onClick={handleBackClick}>
        ← 
      </button>
      <h1 className="add-to-cart-heading">Shopping Cart</h1>
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>Price: ₹{product.price}</p>
          <p>{product.description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
