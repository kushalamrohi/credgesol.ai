import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import DatasetSection from "./components/DatasetSection";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import Career from "./components/Career";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Homepage Section */}
      <div id="home">
        <HeroSection />
        
        <DatasetSection />
        
      </div>
      <section id="whatwedo">
        <WhatWeDo />
      </section>

      <section id="whoweare">
        <WhoWeAre />
      </section>

      <section id="career">
        <Career />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
 
    
  );
}

export default App;
