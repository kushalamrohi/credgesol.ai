import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="who-we-are-section">
      {/* Heading */}
      <div className="text-box">
        <h1 style={{ color: "rgb(10, 16, 21)", marginBottom: "24px" }}>
          Get to know us
        </h1>
      </div>

      {/* Image */}
      <div className="image-container">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YZ98D5gRXrfeB1X0/7-m2W8g2eWoauK0M97.png"
          alt="Who we are"
          className="who-we-are-image"
        />
      </div>

      {/* Description */}
      <div className="text-box">
        <p className="body-large">
          At{" "}
          <strong>
            <a
              href="http://CredgeSol.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              CredgeSol.ai
            </a>
          </strong>
          , we harness the power of AI to craft{" "}
          <strong>Creative Solutions</strong> that solve real-world business
          challenges. With cutting-edge{" "}
          <strong>AI automation, analytics, and intelligence</strong>, we
          empower <strong>MSMEs</strong> to streamline operations, enhance
          customer engagement, and make smarter, data-driven decisions. Our
          mission is to bring the <strong>edge of AI</strong> to businesses,
          helping them stay ahead in a rapidly evolving digital world.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-container">
        <div className="text-box vision-box">
          <h3 style={{ color: "white", marginBottom: "24px" }}>
            <strong>💡 Our Vision –</strong>
          </h3>
          <ul>
            <li>
              <p className="body-large">
                To empower MSMEs globally with AI-driven solutions that enhance
                efficiency, scalability, and innovation.
              </p>
            </li>
          </ul>
        </div>

        <div className="text-box mission-box">
          <h3 style={{ color: "white", marginBottom: "24px" }}>
            <strong>🚀 Our Mission –</strong>
          </h3>
          <ul>
            <li>
              To democratize AI for MSMEs, making cutting-edge technology
              accessible and affordable.
            </li>
            <li>
              To drive business transformation through AI-powered automation,
              analytics, and intelligence.
            </li>
            <li>
              To foster an AI ecosystem where MSMEs can grow, compete, and
              thrive in a digital-first economy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
