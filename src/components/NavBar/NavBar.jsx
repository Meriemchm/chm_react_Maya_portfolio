import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";
import bars from "../../assets/bars.svg";
import times from "../../assets/times.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;
    if (scrollY > threshold) {
      setBgColor("");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 flex justify-center px-4 ${bgColor} transition-all duration-300`}
    >
      <div className=" w-full h-16 mt-4 flex justify-between items-center bg-primaryPink rounded-lg px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-black">MAYA</h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-black text-sm font-medium capitalize">
          {Navlink.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-secondPink transition duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={() => setShow(!show)}
          className="lg:hidden text-black cursor-pointer p-2"
        >
          {show ? (
            <img src={times} alt="Close Menu" />
          ) : (
            <img src={bars} alt="Open Menu"/>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <ul className="lg:hidden absolute top-0 left-0 w-full h-screen bg-primaryPink flex flex-col justify-center items-center space-y-8 text-xl text-black font-medium z-50">
          {/* Icône Close */}
          <div
            onClick={() => setShow(false)}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <img src={times} alt="Close Menu"/>
          </div>

          {Navlink.map(({ id, link }) => (
            <li key={id} className="capitalize">
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setShow(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
