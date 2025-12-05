import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-accent text-white rounded p-10">
      <Link to="home" className="btn flex bg-transparent text-white border-none shadow-none text-3xl">
        <img className="w-6" src={logo} alt="" />
        <p className="mt-2 -ml-1">anvir</p>
      </Link>
      <p className="-mt-5">MERN Stack Developer looking for a junior position to apply core <br />
full-stack skills and learn industry best practices.</p>
      <nav className="grid grid-flow-col gap-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer hover:bg-white/20 rounded-full px-3"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer rounded-full px-3 py-1"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer rounded-full px-3 py-1"
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer rounded-full px-3 py-1"
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer rounded-full px-3 py-1"
        >
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/ts-webdev" target="_blank">
            <FaGithub className="w-6 h-6"/>
          </a>
          <a href="https://www.linkedin.com/m/in/tanvirmahtab-dev" target="_blank">
            <FaLinkedin className="w-6 h-6"/>
          </a>
          <a href="https://www.facebook.com/dev.tanvirmahtab" target="_blank">
            <FaFacebook className="w-6 h-6"/>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Tanvir
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
