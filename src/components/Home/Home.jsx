import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Story from "../Story/Story" ;
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";
import { Routine } from "../Routine/Routine";
import { Team } from "../Team/Team";
import { Gallery } from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Story />
      <Routine />
      <Achievements />
      <Team/>
      <Gallery/>
      <Contact /> 

    </div>
  );
};

export default Home;