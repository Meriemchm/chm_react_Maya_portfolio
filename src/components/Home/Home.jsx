import React from "react";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";
import Story from "../Story/Story" ;
import Achievements from "../Achievements/Achievements";
import Contact from "../Contact/Contact";
import { Routine } from "../Routine/Routine";
import { Team } from "../Team/Team";
import { Gallery } from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Presentation />
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