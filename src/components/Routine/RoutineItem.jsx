import React from "react";
import { routineData } from "../Data/Data";
import flourish from "../../assets/Icons/flourish.svg";
export const RoutineItem = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center ">
      {routineData.map((item) => (
        <div
          key={item.id}
          className="md:w-96 md:h-auto w-full h-auto hover:scale-105 duration-200"
        >
          <div
            data-aos="fade-up"
            className=" rounded-xl border border-gray-200 flex flex-col justify-between overflow-hidden hover:scale-105 duration-200 "
          >
            <div className="h-72 w-full">
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover "
              />
            </div>
            <div
              className={`${item.bgColor} relative py-3 flex flex-col items-center justify-center`}
            >
              {/* SVG décoratif positionné absolument en haut */}
              <img
                src={flourish}
                alt="flourish"
                className="absolute top-0 left-1/2 transform -translate-x-1/2"
              />

              {/* Texte centré */}
              <p className="text-[#5D3FD3] font-medium relative z-10 mt-6">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
