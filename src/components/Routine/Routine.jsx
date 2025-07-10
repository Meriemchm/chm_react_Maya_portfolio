import React from "react";
import { TitleSections } from "../Utilities/TitleSections";
import { routineData } from "../Data/Data";

export const Routine = () => {
  return (
    <div name="routine" className="bg-third w-full h-full">
      <div className="max-w-screen-lg mx-auto p-10 flex flex-col  w-full h-full text-white">
        <div data-aos="fade-up" className="pt-10 text-left px-5 md:px-0">
          <TitleSections title="My routine" />
        </div>

        <div data-aos="fade-up" className="py-10">
          <p className="text-black max-w-xl text-sm md:text-base">
            I train about 3 hours a day,{" "}
            <span className="text-secondPink">4–5 days</span> a week, and almost
            every day when competitions are near. Training can be hard
            sometimes, but I never give up because I love it and I always want
            to improve.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center ">
          {routineData.map((item) => (
            <div key={item.id} className="md:w-96 md:h-auto w-80 h-auto hover:scale-105 duration-200">
              <div
                data-aos="fade-up"
                className=" rounded-xl border border-gray-200 flex flex-col justify-between overflow-hidden hover:scale-105 duration-200 "
              >
                <div className="h-72 w-full">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className={` ${item.bgColor} py-3 text-center`}>
                  <p className="text-[#5D3FD3] font-medium">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
