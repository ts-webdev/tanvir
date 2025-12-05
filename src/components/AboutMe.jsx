import React from "react";
import logo from "../assets/logo.svg";
import { FaLocationDot, FaLocationPin, FaSquarePhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const AboutMe = () => {
  return (
    <section
      name="about"
      className="bg-linear-to-tl from-[#255F38]/80 to-[#18230F]/50 py-20"
    >
      {/* Heading */}
      <div className="flex justify-center items-center gap-4 text-white text-xl">
        <div className="w-40 border border-yellow-400"></div>
        <h2>About Me</h2>
        <div className="w-40 border border-yellow-400"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto mt-10 text-white flex flex-col md:flex-row items-start gap-10 px-5">
        <div className="pr-20">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-5xl font-bold">Who is Tanvir?</h2>
          <h3 className="mt-5 text-3xl font-semibold">
            A dedicated MERN Stack Developer who loves creating real-world
            projects using React, Node.js, Express, and MongoDB.
          </h3>
          <p className="mt-5 w-3/4 text-gray-300">
            I combine clean architecture, reusable components, and modern
            development practices to craft seamless digital experiences. I value
            continuous learning, teamwork, and writing maintainable code that
            supports long-term growth.
          </p>
          {/* Contact */}
          <div className="bg-accent/70 p-5 rounded-xl mt-10 ">
            <div className="flex items-center gap-10">
              <div className="flex items-center text-xl gap-2">
                <FaSquarePhone size={25} />
                +88 01602-848039
              </div>
              <div className="flex items-center text-xl gap-2">
                <MdMail size={25} />
                dev.tanvirmahtab@gmail.com
              </div>
            </div>
            <div className="flex items-center mt-5">
              <FaLocationDot size={25}/>
              <span className="text-xl ml-2">Gopaldi, Araihazar, Narayanganj, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
