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
        <div className="w-20 border border-yellow-400"></div>
        <h2>About Me</h2>
        <div className="w-20 border border-yellow-400"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto  mt-10 text-white flex flex-col md:flex-row items-center md:items-start gap-10 px-5">
        <div className="lg:pr-20 w-40 md:w-auto">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2 className="sm:text-5xl sm:text-left text-center text-3xl font-bold">
            Who is Tanvir?
          </h2>
          <h3 className="mt-5 sm:text-3xl sm:text-left text-center font-semibold">
            A dedicated MERN Stack Developer who loves creating real-world
            projects using React, Node.js, Express, and MongoDB.
          </h3>
          <p className="mt-5 sm:w-3/4 sm:text-left text-center text-gray-300">
            I started my programming journey out of curiosity, exploring how
            websites are built and how small ideas can turn into full digital
            experiences. Over time, I learned the MERN stack and began building
            real projects that helped me grow my problem-solving and UI design
            skills.
          </p>
          <p className="mt-5 sm:w-3/4 sm:text-left text-center text-gray-300">
            I enjoy working on clean, responsive user interfaces, building
            full-stack applications, and learning modern tools that improve the
            development process.
          </p>
          <p className="mt-5 sm:w-3/4 sm:text-left text-center text-gray-300">
            Outside of programming, I enjoy watching tech content, learning new
            skills, and spending time with friends.
          </p>
          <p className="mt-5 sm:w-3/4 sm:text-left text-center text-gray-300">
            I’m someone who loves continuous learning, teamwork, and creating
            things that make people’s lives easier.
          </p>
          {/* Contact */}
          <div className="bg-accent/70 p-5 rounded-xl mt-10 ">
            <div className="flex flex-col lg:flex-row  gap-5 lg:gap-10">
              <div className="flex items-center sm:text-xl text-sm gap-2">
                <FaSquarePhone size={25} />
                +88 01602-848039
              </div>
              <div className="flex items-center text-sm sm:text-xl gap-2">
                <MdMail size={25} />
                dev.tanvirmahtab@gmail.com
              </div>
            </div>
            <div className="flex items-center mt-5">
              <FaLocationDot size={25} />
              <span className="sm:text-xl text-sm ml-2">
                Gopaldi, Araihazar, Narayanganj, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
