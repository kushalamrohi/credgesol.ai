import React from "react";
import "./HeroSection.css"; 
import heroImg from "../assets/heroImg.avif";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
      <div className="hero-background"></div>
        <div className="hero-text">
          <h1 className="hero-title">AI Excellence for Every Business</h1>
          <p className="hero-subtitle">
            Transform your MSME with enterprise-grade AI solutions customized
            for your needs and budget. Harness the power of artificial
            intelligence with our end-to-end technology services.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">Schedule Demo</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
        <img src={heroImg} alt="AI Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
