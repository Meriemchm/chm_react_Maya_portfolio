import React from "react";
import Achievement from "./Achievement";
import { achievementsData } from "../Data/Data";
import { TitleSections } from "../Utilities/TitleSections";
const Achievements = () => {
  return (
    <div name="achievements" className=" h-full w-full">
      <div className="p-10 md:p-20 mx-auto flex flex-col  w-full h-full items-center justify-cente ">
        <TitleSections title="Achievements" />
        <div data-aos="fade-up" className="">
          <Achievement data={achievementsData} />
        </div>
      </div>
    </div>
  );
};
export default Achievements;