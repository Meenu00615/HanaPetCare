import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import Help from "./components/Help";
import AddToCart from "./components/AddToCart";

import '@fortawesome/fontawesome-free/css/all.min.css';

const isAuthenticated = false;

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/help" element={<Help />} />

        <Route path="/secure" element={<PrivateRoute element={<Help />} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;