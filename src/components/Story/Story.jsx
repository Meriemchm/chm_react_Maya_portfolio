import React from "react";
import { TitleSections } from "../Utilities/TitleSections";
import profile from "../../assets/Images/profile_1.jpg";
import profile2 from "../../assets/Images/profile2.jpg";
import PinkFlower from "../../assets/Icons/PinkFlower.svg";
import {StoryData }from "../Data/Data"

import stars from "../../assets/Icons/stars.svg";
const About = () => {
  return (
    <div name="story" className="bg-third w-full h-full py-12">
      <div className="max-w-screen-lg mx-auto p-4 md:p-10 flex flex-col gap-12 w-full h-full text-white">
        <TitleSections title="My story" />

        <div className="flex flex-col gap-12">
          {/* Image 1 */}

          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-primaryPink via-sevenyellow to-[#FFE9CF] p-4  md:p-10 rounded-lg"
          >
            <img
              src={profile}
              alt="profile"
              loading="lazy"
              className="rounded-lg md:w-full md:h-96  md:object-cover object-[10%_60%] hover:scale-105 duration-200"
            />
          </div>

          <div className="relative">
            {/* Fleur en haut à droite */}
            <img
              src={PinkFlower}
              alt="Fleur décorative"
              className="absolute -top-6 -right-4 md:-right-6"
            />

            {/* Fleur en bas à gauche */}
            <img
              src={PinkFlower}
              alt="Fleur décorative"
              className="absolute -bottom-6 -left-2 md:-left-6 w-10 md:w-12"
            />

            <div className="flex flex-col justify-center items-center md:flex-row bg-white rounded-xl border border-gray-200 overflow-hidden mx-auto p-6 gap-6">
              {/* Texte */}
              <div
                data-aos="fade-up"
                className="flex-1 text-gray-800 space-y-4 text-sm md:text-base "
              >
                <p>
                  I’m 9 years old and I was born in 2015. I started ballet when
                  I was just 3 years old, and by 5, I found my true passion,{" "}
                  <span className="text-secondPink">rhythmic gymnastics</span>.
                  I began my gymnastics journey at the Qatar Gymnastics
                  Federation, then joined Olympic Stars in 2022, where I train
                  today. I absolutely love my coaches at Olympic Stars, they
                  support me, help me grow, and always cheer me on.
                </p>
                {StoryData.map(({ id, description }) => (
                  <ul key={id} className="space-y-2">
                    <li className="flex items-start gap-2">
                      <img
                        src={stars}
                        alt="stars"
                        className="text-secondPink mt-1"
                      />
                      {description}
                    </li>
                  </ul>
                ))}
              </div>
              {/* Image */}
              <div
                data-aos="fade-up"
                className="flex-1 flex justify-center items-center "
              >
                <img
                  src={profile2}
                  alt="Gymnast"
                  loading="lazy"
                  className="rounded-lg object-cover w-full h-full max-h-80 md:max-h-full md:w-auto hover:scale-105 duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
