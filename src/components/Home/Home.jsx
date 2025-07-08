import React from "react";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";
import Story from "../Story/Story" ;
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Presentation />
      <Story />
      {/* <Skills />
      <Services />
      <Projects /> */}
      <Contact /> 

    </div>
  );
};

export default Home;