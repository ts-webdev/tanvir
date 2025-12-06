import React from "react";
import tanvirPhoto from "../assets/tanvir.png";
import "animate.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      name="home"
      className="container mx-auto px-5 -mt-24 pt-30 min-h-[75vh] text-white flex flex-col gap-10  sm:flex-row items-center justify-between"
    >
      {/* Description */}
      <div className="flex flex-col-reverse md:flex-row items-start  md:items-center gap-5">
        {/* Social Links */}
        <div className="flex md:flex-col bg-accent rounded-full px-5 md:py-5 border-primary border justify-between mt-5 p-3 gap-20">
          <a href="https://github.com/ts-webdev" target="_blank">
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/m/in/tanvirmahtab-dev"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/dev.tanvirmahtab" target="_blank">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
        <div>
          <p className="md:text-4xl text-2xl font-bold">Hello there, </p>
          <h1 className="md:text-7xl text-4xl mt-5 font-black ">
            This is{" "}
            <span className="text-yellow-400 animate__animated animate__lightSpeedInRight inline-block">
              Tanvir
            </span>
          </h1>
          <h2 className="md:text-4xl text-2xl text-gray-300 font-bold mt-2">
            MERN Stack Developer
          </h2>
          <p className="mt-5 text-gray-300">
            MERN Stack Developer looking for a junior position to apply core{" "}
            <br />
            full-stack skills and learn industry best practices.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-5">
            <button className="btn btn-primary text-accent rounded-full">
              Get In Touch
            </button>
            <button className="btn btn-outline btn-primary rounded-full hover:text-accent">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* photo */}
      <div className="relative">
        <div className="md:w-96 md:h-96 w-72 h-72 rounded-full overflow-hidden z-10">
          <img className="rounded-full" src={tanvirPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
