import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const links = (
    <>
      <li>
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
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className=" text-white shadow-sm py-3 border-b border-gray-700">
      <div className="container mx-auto navbar">
        <div className="navbar-start -ml-6">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="btn bg-transparent text-white border-none shadow-none text-3xl">
            <img className="w-6" src={logo} alt="" />
            <p className="mt-2 -ml-1">anvir</p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-white/10 rounded-full px-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-accent rounded-full">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
