import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="what-we-do-section">
      {/* Background */}
      <div className="block-background"></div>

      {/* Intro Section */}
      <div className="what-we-do-intro">
        <h1>What we do?</h1>
        <h3><strong>Empowering Businesses with AI</strong></h3>
        <p>
          In today’s fast-paced digital landscape, staying ahead requires more than just traditional strategies—
          it demands <strong>smart automation, real-time insights, and adaptive intelligence</strong>. At{" "}
          <strong><a href="http://CredgeSol.ai">CredgeSol.ai</a></strong>, 
          we integrate <strong>cutting-edge AI technologies</strong> into business processes, helping organisations achieve:
        </p>
      </div>

      {/* Content Cards */}
      <div className="what-we-do-container">
        {/* Item 1 */}
        <div className="what-we-do-item">
          <img
            alt="Automation"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/11-YleWEpDJrQH9W0x6.png"
            className="what-we-do-image"
          />
          <div className="what-we-do-text">
            <h5><strong>Seamless Automation</strong></h5>
            <p>
              We design <strong>AI-driven workflows</strong> that eliminate
              repetitive tasks, increase efficiency, and optimize operations.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="what-we-do-item">
          <img
            alt="Analytics"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/12-AMq1rL2vMvU258oj.png"
            className="what-we-do-image"
          />
          <div className="what-we-do-text">
            <h5><strong>Actionable Analytics</strong></h5>
            <p>
              Our advanced <strong>AI-powered analytics</strong> provide deep insights, enabling businesses to make <strong>strategic, data-backed decisions</strong>.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="what-we-do-item">
          <img
            alt="AI Strategy"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/13-YleWEpnv0LIgPbM2.png"
            className="what-we-do-image"
          />
          <div className="what-we-do-text">
            <h5><strong>AI Strategy & Integration</strong></h5>
            <p>
              From vision to execution, we help businesses build custom AI strategies and integrate them seamlessly into existing systems.
            </p>
          </div>
        </div>

        {/* ✅ Item 4 - NEW */}
        <div className="what-we-do-item">
          <img
            alt="Custom AI Solutions"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=264,fit=crop/YZ98D5gRXrfeB1X0/14-A85eanD1kPc3qnv9.png"
            className="what-we-do-image"
          />
          <div className="what-we-do-text">
            <h5><strong>Custom AI Solutions</strong></h5>
            <p>
              We tailor AI models to meet your specific needs—whether it's predictive modeling, NLP, or computer vision—to maximize business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
