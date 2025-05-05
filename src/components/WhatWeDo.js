import React from "react";
import "./WhatWeDo.css";  // Importing the CSS file for styling

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="block">
      {/* Background */}
      <div className="block-background"></div>

      <div className="block-layout">
        {/* Left Section */}
        <div className="layout-element">
          <div className="text-box">
            <h5><strong>Seamless Automation</strong></h5>
            <ul>
              <li>
                <p>We design <strong>AI-driven workflows</strong> that eliminate repetitive tasks, increase efficiency, and optimize operations.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="layout-element image-wrapper">
          <img
            alt="Automation"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/11-YleWEpDJrQH9W0x6.png"
            className="image--desktop"
          />
          <img
            alt="Automation"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=217,fit=crop/YZ98D5gRXrfeB1X0/11-YleWEpDJrQH9W0x6.png"
            className="image--mobile"
          />
        </div>

        {/* Right Section */}
        <div className="layout-element">
          <div className="text-box">
            <h5><strong>Actionable Analytics</strong></h5>
            <ul>
              <li>
                <p>Our advanced <strong>AI-powered analytics</strong> provide deep insights, enabling businesses to make <strong>strategic, data-backed decisions</strong>.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="layout-element image-wrapper">
          <img
            alt="Analytics"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/12-AMq1rL2vMvU258oj.png"
            className="image--desktop"
          />
          <img
            alt="Analytics"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=230,fit=crop/YZ98D5gRXrfeB1X0/12-AMq1rL2vMvU258oj.png"
            className="image--mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
