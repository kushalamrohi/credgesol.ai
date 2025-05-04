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
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#datasets">Datasets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
