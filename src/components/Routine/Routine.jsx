import React from "react";
import { TitleSections } from "../Utilities/TitleSections";
import { RoutineItem } from "./RoutineItem";

export const Routine = () => {
  return (
    <div name="routine" className="bg-third w-full h-full py-12">
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col w-full h-full text-white">
        <div data-aos="fade-up" className="text-left px-8 md:px-0">
          <TitleSections title="My routine" />
        </div>

        <div data-aos="fade-up" className="py-14">
          <p className="text-black max-w-xl text-sm md:text-base">
            I train about 3 hours a day,{" "}
            <span className="text-secondPink">4–5 days</span> a week, and almost
            every day when competitions are near. Training can be hard
            sometimes, but I never give up because I love it and I always want
            to improve.
          </p>
        </div>

        <RoutineItem />
      </div>
    </div>
  );
};
