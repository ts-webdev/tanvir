import React from "react";
import tanvirPhoto from "../assets/tanvir.png";

const Banner = () => {
  return (
    <div name="home" className="container mx-auto min-h-[70vh] text-white flex items-center justify-between">
      <div>
        <div>
          <p className="text-4xl font-bold">Hello there, </p>
          <h1 className="text-7xl mt-5 font-black">This is <span className="text-yellow-400">Tanvir</span></h1>
          <h2 className="text-4xl font-bold mt-2">MERN Stack Developer</h2>
          <p className="mt-5 text-gray-300">
            MERN Stack Developer looking for a junior position to apply core <br />
            full-stack skills and learn industry best practices.
          </p>
          <div className="flex gap-5 mt-5">
            <button className="btn btn-primary text-accent rounded-full">Get In Touch</button>
            <button className="btn btn-outline btn-primary rounded-full hover:text-accent">Get In Touch</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-96 h-96 rounded-full overflow-hidden z-10">
          <img className="rounded-full" src={tanvirPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
