import React from "react";
import flower from "../../assets/flower.svg"; // Remplace par ton image

export const TitleSections = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center relative">
        <img
          src={flower}
          alt="Icon"
          className="absolute -left-[60px] -top-10"
        />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
          <div className="w-1/2 h-[2px] bg-blue-200 mt-1"></div>
        </div>
      </div>
    </div>
  );
};
