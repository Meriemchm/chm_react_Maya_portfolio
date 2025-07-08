import React from "react";
import profile from "../../assets/profile.jpg";
import { TitleSections } from "../Utilities/TitleSections";

export const Team = () => {
  return (
    <div name="team" className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre */}
        <div data-aos="fade-up" className="mb-10">
          <TitleSections title="My team" />
        </div>

        {/* Grid principale */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        >
          {/* Photo coach */}
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-b from-sevenyellow via-purpleSix via-[#E1EEFA] to-primaryPink rounded-full p-3">
              <img
                src=""
                alt="coach"
                className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hello, my name <br /> is
            </h2>
            <p className="py-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              sunt dolorem! Accusamus, non sunt? Beatae quod, illo soluta
              laudantium veritatis esse perspiciatis officia quisquam velit
              tenetur delectus cumque, ipsam libero.
            </p>
          </div>

          {/* Bloc jaune positionné en bas à droite */}
          <div className="md:col-span-2 flex justify-end mt-10">
            <div className="bg-sevenyellow rounded-xl h-24 w-72 flex items-center justify-center text-sm font-medium text-black border border-gray-200">
              Club Name and location
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
