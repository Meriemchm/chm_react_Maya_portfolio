import React from "react";
import { routineData } from "../Data/Data";
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
            <div className={` ${item.bgColor} py-3 text-center`}>
              <p className="text-[#5D3FD3] font-medium">{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
