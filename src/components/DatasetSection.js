import React from "react";
import "./DatasetSection.css"; // Optional if you want to add CSS styling

const DatasetSection = () => {
  return (
    <section id="dataset" className="dataset-section">
      <div className="container">
        <h2 className="section-title">Premium AI Training Datasets</h2>
        <p className="section-subtitle">
          Supercharge your AI models with our high-quality, curated datasets.
        </p>

        <div className="dataset-card">
          <div className="dataset-header">
            <div className="dataset-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </div>
            <h3 className="dataset-title">OTS Enterprise Dataset Collection</h3>
          </div>

          <p className="dataset-description">
            Swiftly supercharge your AI training with our comprehensive OTS
            dataset in multiple formats. Featuring diverse data collections
            including industry-specific content, multilingual interactions, and
            high-quality labeled datasets for various AI applications.
          </p>

          <div className="dataset-features">
            <div className="dataset-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <div className="dataset-feature-content">
                <h4>Quality Assured</h4>
                <p>Rigorously validated data with comprehensive quality controls.</p>
              </div>
            </div>

            <div className="dataset-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
              <div className="dataset-feature-content">
                <h4>Cloud-Ready</h4>
                <p>Optimized formats for all major cloud AI platforms and frameworks.</p>
              </div>
            </div>

            <div className="dataset-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                ></path>
              </svg>
              <div className="dataset-feature-content">
                <h4>Industry Compliant</h4>
                <p>Datasets designed to meet regulatory requirements across sectors.</p>
              </div>
            </div>

            <div className="dataset-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <div className="dataset-feature-content">
                <h4>Multilingual Support</h4>
                <p>Data covering major global languages for international business needs.</p>
              </div>
            </div>
          </div>

          <button className="cta-button">Explore Dataset Collection</button>
        </div>
      </div>
    </section>
  );
};

export default DatasetSection;
