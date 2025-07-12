import React from "react";
import { links } from "../Data/Data";
import gymnastImage from "../../assets/Images/IMG-20250704-WA0033-no-bg.jpg";
import Vector from "../../assets/Icons/vector.svg";
import { Link } from "react-scroll";
import PinkFlower from "../../assets/Icons/PinkFlower.svg";

const Presentation = () => {
  return (
    <div name="home" className="flex min-h-screen w-full relative px-4 pt-28">
      <div className="flex flex-col-reverse md:flex-row min-h-screen mx-auto w-full bg-gradient-to-b from-purpleSix to-primaryPink rounded-lg justify-center items-center">
        <img
          src={Vector}
          alt="Decorative Vector"
          className="absolute right-0 md:-top-40 -top-12 bottom-0 h-auto object-cover z-0"
        />

        {/* Bloc texte */}
        <div
          data-aos="fade-left"
          className="z-10 flex flex-col gap-6 px-4 md:px-10 py-10 md:text-left md:items-start max-w-xl"
        >
          {/* Icônes */}
          <div
            data-aos="fade-up"
            className="flex gap-4 justify-start items-center"
          >
            {links.map(({ id, mobile, href, download }) => (
              <a
                key={id}
                href={href ? href : "/"}
                download={download}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:scale-105 duration-200"
              >
                {mobile}
              </a>
            ))}
          </div>

          <h2 className="font-playfair text-3xl md:text-6xl font-bold">
            Hello, my name <br /> is{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
              Maya
            </span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Small gymnast. Big dreams
          </p>

          <div className="flex gap-4 text-sm md:text-base">
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-black text-white px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
                Contact me
              </button>
            </Link>

            <div className="relative inline-block  hover:scale-105 duration-200">
              {/* Fleur décorative en bas à droite */}
              <img
                src={PinkFlower}
                alt="Fleur décorative"
                className="absolute -bottom-4 -right-4 h-8 w-8"
              />

              {/* Bouton */}
              <Link to="story" smooth={true} duration={500}>
                <button className="border border-black px-2 md:px-4 py-2 rounded-md">
                  View my story
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image gymnaste */}
        <div className="hover:scale-105 duration-200">
          <img
            data-aos="fade-right"
            src={gymnastImage}
            alt="Gymnast"
            className="relative z-2 object-contain md:w-[35rem] md:h-[35rem] w-auto h-[20rem] rounded-full md:-top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
