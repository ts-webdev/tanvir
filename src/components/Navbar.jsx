import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg";
import "animate.css";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  console.log(isScroll);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="cursor-pointer rounded-full px-3"
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
          className="cursor-pointer rounded-full px-3"
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
          className="cursor-pointer rounded-full px-3"
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
          className="cursor-pointer rounded-full px-3"
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
          className="cursor-pointer rounded-full px-3"
        >
          Contact
        </Link>
      </li>
    </>
  );

  if (isScroll) {
    return (
      <>
        <div className="animate__animated animate__fadeInDown justify-center hidden sm:flex sticky top-5 z-1000 ">
          <ul className="menu menu-horizontal bg-accent/95 text-white shadow-sm shadow-white/20  backdrop-blur-md rounded-full px-2">
            {links}
          </ul>
        </div>
        <div className="animate__animated animate__flipInX sm:hidden bg-accent/90  backdrop-blur-md text-white shadow-sm py-3 sticky top-0 z-1000 transition-all duration-300 ease-in">
      <div className="container mx-auto navbar">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content bg-accent/95 backdrop-blur-lg rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="btn bg-transparent text-white border-none shadow-none text-3xl">
            <img className="w-6" src={logo} alt="" />
            <p className="mt-2 -ml-1">anvir</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal bg-white/10 rounded-full px-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1jMc2WFM53k-yNLjDqlmKv8XO7mO-AxVQ/view?usp=sharing"
            target="_blank"
            className="btn btn-primary text-accent rounded-full"
          >
            <span className="hidden sm:inline-block">Download</span> Resume
          </a>
        </div>
      </div>
    </div>
      </>
    );
  }

  return (
    <div className="animate__animated animate__zoomInUp text-white shadow-sm py-3 sticky top-5 z-1000">
      <div className="container mx-auto navbar">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content bg-accent/95 backdrop-blur-lg rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="btn bg-transparent text-white border-none shadow-none text-3xl">
            <img className="w-6" src={logo} alt="" />
            <p className="mt-2 -ml-1">anvir</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal bg-white/10 rounded-full px-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.usercontent.google.com/download?id=1jMc2WFM53k-yNLjDqlmKv8XO7mO-AxVQ&export=download&authuser=0&confirm=t&uuid=8a858308-762f-4899-afa3-7d9b59a085d8&at=ALWLOp62G2Ek4LYQlO_56rMaa1Qx:1764999634771"
            className="btn btn-primary text-accent rounded-full"
          >
            <span className="hidden sm:inline-block">Download</span> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
