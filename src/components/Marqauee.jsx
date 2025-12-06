import React from "react";
import Marquee from "react-fast-marquee";
import { BiLogoNetlify } from "react-icons/bi";
import { DiIllustrator, DiMongodb, DiPhotoshop } from "react-icons/di";
import {
  FaCode,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { LiaTicketAltSolid } from "react-icons/lia";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCanva,
  SiCloudflareworkers,
  SiExpress,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const Marqauee = () => {
  return (
    <div className="py-2  bg-primary flex flex-col items-center gap-5 mt-10">
      <Marquee autoFill={true} speed={20} direction="right">
        <div className="text-2xl">
          <LiaTicketAltSolid size={10} />
        </div>
      </Marquee>
      <Marquee autoFill={true} speed={50}>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <IoLogoJavascript />
          JAVASCRIPT
        </p>

        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <ImHtmlFive2 />
          HTML
        </p>

        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <FaCss3 />
          CSS
        </p>

        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <RiReactjsLine />
          REACT.JS
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <TbBrandVite />
          VITE
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <RiTailwindCssFill />
          TAILWINDD CSS
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <FaNodeJs />
          NODE.JS
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <SiExpress />
          EXPRESS.JS
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <DiMongodb />
          MONGODB
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <SiFirebase />
          FIREBASE
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <IoLogoVercel />
          VERCEL
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <BiLogoNetlify />
          NETLIFY
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <FaGitAlt />
          GIT
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <FaGithub />
          GITHUB
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <SiPostman />
          POSTMAN
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <FaFigma />
          FIGMA
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <DiPhotoshop />
          PHOTOSHOP
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <DiIllustrator />
          ILLUSTRATOR
        </p>
        <p className="text-2xl font-semibold mx-10 flex items-center gap-2">
          <SiCanva />
          CANVA
        </p>
      </Marquee>
      <Marquee autoFill={true} speed={20} direction="right">
        <div className="text-2xl">
          <LiaTicketAltSolid size={10} />
        </div>
      </Marquee>
    </div>
  );
};

export default Marqauee;
