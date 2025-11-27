import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import FaqSection from "./Components/FaqSection";
import Our_Team from "./Components/Our_Team";
import Portfolio from "./Components/Portfolio";
import Video_Reel from "./Components/Video_Reel";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Video_Reel />
          <Portfolio />
          <Our_Team />
          <Pricing />
          <FaqSection />
          <Contact />
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar