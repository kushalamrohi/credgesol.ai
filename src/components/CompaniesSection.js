import React from "react";
import "./CompaniesSection.css";

const CompaniesSection = () => {
  const companies = [
    { name: "Google", logo: "/logos/google.png" },
    { name: "Microsoft", logo: "/logos/microsoft.png" },
    { name: "Amazon", logo: "/logos/amazon.png" },
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "Infosys", logo: "/logos/infosys.png" }
  ];

  return (
    <section className="companies">
      <div className="container">
        <h3>Trusted by Growing Businesses</h3>
        <div className="companies-logos">
          {companies.map((company, index) => (
            <div className="company-logo" key={index}>
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;