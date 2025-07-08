import React from "react";
import { TitleSections } from "../Utilities/TitleSections";

const data = [
  { id: 1, bgColor: "bg-purple-100" },
  { id: 2, bgColor: "bg-yellow-100" },
  { id: 3, bgColor: "bg-blue-100" },
];

export const Routine = () => {
  return (
    <div name="routine" className="bg-third w-full h-full">
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col  w-full h-full text-white">
        <div data-aos="fade-up" className="pt-10 text-left px-5 md:px-0">
          <TitleSections title="My routine" />
        </div>

        <div data-aos="fade-up" className="py-10">
          <p className="text-black max-w-xl">
            I train about 3 hours a day,{" "}
            <span className="text-secondPink">4–5 days</span> a week, and almost
            every day when competitions are near. Training can be hard
            sometimes, but I never give up because I love it and I always want
            to improve.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {data.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className={`md:w-96 md:h-96 w-80 h-96 rounded-xl border border-gray-200 ${item.bgColor}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
