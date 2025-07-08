import React from "react";
import reward from "../../assets/reward.svg"; 
const Achievement = ({ data, Title }) => {
  let NewData = null;
  if (Title) {
    NewData = data.filter((item) => item.service === Title);
  } else {
    NewData = data;
  }

  return (
    <>
      <div className=" flex flex-col py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8 justify-center items-center">
          {NewData.map(({ id, title, src, style, textStyle }) => (
            <div
              key={id}
              className={`bg-purpleSix flex flex-col items-center p-5 ${style} rounded-lg w-64 h-96 mx-auto commonStyle border border-gray-200`}
            >
              <div className="pt-5 flex w-24 h-24">
                <div className="m-auto w-24 h-24 flex justify-center items-center">
                  <img className="self-center" src={reward} alt="service" />
                </div>
              </div>
              <p className={`py-8  font-bold text-md text-start ${textStyle}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;