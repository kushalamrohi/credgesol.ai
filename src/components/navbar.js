import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <div className="logo-symbol">CS</div>
          <div className="logo-text">
            CredgeSol.ai
            <span>AI Solutions for MSMEs</span>
          </div>
        </div>
        <nav>
          <ul className="navbar">
          <li><a href="#home">Home</a></li>
            <li><a href="#whatwedo">What We Do</a></li>
            <li><a href="#whoweare">Who We Are</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">ContactUs</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
