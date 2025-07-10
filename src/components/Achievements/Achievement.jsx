import React from "react";

const Achievement = ({data}) => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center py-8 justify-center items-center">
          {data.map(({ id, src, year, description }) => (
            <div
              key={id}
              className={`bg-purpleSix flex flex-col items-center p-5 rounded-lg md:w-96 md:h-auto w-80 h-auto mx-auto hover:scale-105 duration-200 border border-gray-200 text-sm md:text-base`}
            >
              <div className="m-auto flex justify-center items-center">
                <img className="self-center" src={src} alt="service" />
              </div>

              <p className="font-bold text-xl md:text-2xl">{year}</p>
              <p className={`py-8 text-md text-center`}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
