import React from "react";
import Home from "./Home";
import Techstack from "./Techstack";
import About from "./About";
import More from "./More";
import Project from "./Project";
import Footer from "./Footer";

const Mains = () => {
  return (
    <div className="container">
      <Home />
      <About />
      <More />
      <Techstack />
      <Project />
      <Footer/>
    </div>
  );
};

export default Mains;
