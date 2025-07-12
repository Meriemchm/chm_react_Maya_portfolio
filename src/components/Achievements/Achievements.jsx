import React from "react";
import Achievement from "./Achievement";
import { achievementsData } from "../Data/Data";
import { TitleSections } from "../Utilities/TitleSections";
const Achievements = () => {
  return (
    <div name="achievements" className=" h-full w-full py-12">
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col w-full h-full  ">
        <TitleSections title="Achievements" />

        <div data-aos="fade-up" className="py-14">
          <p className="text-black max-w-3xl text-sm md:text-base">
            I participated in{" "}
            <span className="text-[#5D3FD3]">
              two major international competitions
            </span>{" "}
            in Qatar with over 200 gymnasts from around the world. In 2025, I
            traveled to Dubai to compete in a{" "}
            <span className="text-secondPink">
              big event organized by Strix Gymnastics Club.
            </span>
          </p>
        </div>
        <div data-aos="fade-up" className="">
          <Achievement data={achievementsData} />
        </div>
      </div>
    </div>
  );
};
export default Achievements;
