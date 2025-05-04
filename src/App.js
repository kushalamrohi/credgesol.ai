import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import CompaniesSection from "./components/CompaniesSection";
import ServicesSection from "./components/ServicesSection";
import CoreServicesTitle from "./components/CoreServicesTitle";
import DatasetSection from "./components/DatasetSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <CompaniesSection/>
      <ServicesSection />
      <CoreServicesTitle/>
      <DatasetSection/>
    </div>
  );
}

export default App;
