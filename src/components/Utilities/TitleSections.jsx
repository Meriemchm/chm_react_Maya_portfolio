import React from "react";
import flower from "../../assets/Icons/flower.svg";

export const TitleSections = ({ title }) => {

  const isRoutine = title === "My routine";

  return (
    <div
      className={`flex flex-col ${
        isRoutine ? "items-start" : "items-center"
      } justify-center`}
      data-aos="fade-up"
    >
      <div className={`flex items-center relative ${isRoutine ? "" : "justify-center"}`}>
        <img
          src={flower}
          alt="Icon"
          className={`absolute -left-[60px] -top-10 ${isRoutine ? "" : ""}`}
        />
        <div
          className={`flex flex-col ${
            isRoutine ? "items-start" : "items-center"
          } justify-center`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>

          {/*Cache la bordure si c'est "My routine" */}
          {!isRoutine && (
            <div className="w-1/2 h-[2px] bg-blue-200 mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};
