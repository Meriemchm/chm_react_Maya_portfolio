import React from "react";
import { links } from "../Data/Data";
import gymnastImage from "../../assets/image_nobg_4k.png";
import Vector from "../../assets/vector.svg";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div name="home" className="flex min-h-screen w-full relative px-4 pt-28">
      <div className="flex flex-col-reverse md:flex-row min-h-screen w-full bg-gradient-to-b from-purpleSix to-primaryPink rounded-lg justify-center items-center">
        <img
          src={Vector}
          alt="Decorative Vector"
          className="absolute right-0 -top-12 bottom-0 md:h-full object-cover z-0"
        />

        {/* Bloc texte */}
        <div data-aos="fade-left" className="z-10 flex flex-col gap-6 px-4 md:px-10 py-10 md:text-left md:items-start max-w-xl">
          {/* Icônes */}
          <div data-aos="fade-up" className="flex gap-4">
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

          <h2 className="text-4xl md:text-6xl font-bold">
            Hello, my name <br /> is <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-300">Maya</span> 
          </h2>
          <p className="text-gray-700">Small gymnast. Big dreams</p>

          <div className="flex gap-4">
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-black text-white px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
                Contact me
              </button>
            </Link>

            <Link to="story" smooth={true} duration={500}>
              <button className="border border-black px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
                View my story
              </button>
            </Link>
          </div>
        </div>

        {/* Image gymnaste */}
        <img
          data-aos="fade-right"
          src={gymnastImage}
          alt="Gymnast"
          className="relative z-2 object-contain w-[50rem] h-[50rem]"
        />
      </div>
    </div>
  );
};

export default Presentation;
