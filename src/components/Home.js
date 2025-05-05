import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to CredgeSol.ai</h1>
        <p>AI Solutions for MSMEs – accelerating your business with technology.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default Home;