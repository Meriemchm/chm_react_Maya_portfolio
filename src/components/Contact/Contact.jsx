import React from "react";
import { formItem } from "../Data/Data";
import vector1 from "../../assets/Icons/vector1.svg";
import { links } from "../Data/Data";

const Contact = () => {
  const client = "https://getform.io/f/awnwdzyb";
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  const endElemnt = inputItem.slice(-1)[0];

  return (
    <div name="contact" className="p-2 md:p-4 h-[125vh] w-full">
      <div className=" relative py-16 bg-gradient-to-b from-sevenyellow via-primaryPink to-eightBlue rounded-lg h-full">
        <div data-aos="fade-up">
          <p className="text-3xl md:text-4xl font-bold text-primary text-center py-8 ">
            Contact
          </p>
        </div>

        <div className="flex flex-col 2xl:flex-row justify-center items-center md:w-full">
          <div
            data-aos="fade-up"
            className="p-5 flex flex-col rounded-lg justify-center items-center"
          >
            <form
              action={client}
              method="POST"
              className="flex flex-col w-full justify-center mt-5 gap-4 relative z-30"
            >
              <p className="py-3 text-2xl md:text-4xl text-center">
                Let's Collaborate !
              </p>

              <div className="flex gap-3">
                {inputItem.slice(0, 2).map((item, id) => (
                  <input
                    key={id}
                    type={item.type}
                    name={item.name}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    required
                    className="w-1/2 p-2 md:px-6 bg-white rounded-lg focus:outline-none"
                  />
                ))}
              </div>

              <input
                key={endElemnt.id}
                type={endElemnt.type}
                name={endElemnt.name}
                autoComplete="off"
                placeholder={endElemnt.placeholder}
                required
                className="p-2 bg-white rounded-lg focus:outline-none"
              />

              {areaItem.map((item, id) => (
                <textarea
                  key={id}
                  name={item.name}
                  placeholder={item.placeholder}
                  rows="10"
                  autoComplete="off"
                  required
                  style={{ resize: "none" }}
                  className="p-2 bg-white rounded-lg focus:outline-none"
                ></textarea>
              ))}

              <button className="text-white bg-black px-6 py-3 my-8 text-sm md:text-base self-end rounded-md hover:scale-110 duration-300">
                Send
              </button>
            </form>

            {/* Icônes */}
            <div className="flex gap-4 relative z-30">
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
          </div>
        </div>
        {/* Vecteur SVG à gauche*/}
        <div className="absolute left-0 bottom-0 z-20 pointer-events-none">
          <img src={vector1} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
