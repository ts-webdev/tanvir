import React from "react";
import styled from "styled-components";
import payConnect from "../assets/payConnect.png";
import skillCircle from "../assets/skillCircle.png";
import momentum from "../assets/momentum.png";

const StyledWrapper = styled.div`
  .card-container {
    xl:h-[300px] position: relative;
    border-radius: 10px;
  }

  .card-container::bef xl:h-[300px]ore {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #78c841 50%, #ff0f7b 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #78c841 0%, #16610e 100%);
    transition: scale 0.6s, rotate 0.6s, filter 1s;
  }

  .card .img-content svg {
    width: 50px;
    height: 50px;
    fill: #e8e8e8;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }

  .card:hover .img-content svg {
    fill: transparent;
  }
`;

const Projects = () => {
  return (
    <div
      name="projects"
      className="pt-20 pb-40 bg-linear-to-t from-[#255F38]/80 to-[#18230F]/50"
    >
      {/* Heading */}
      <div className="flex justify-center items-center gap-4 text-white text-xl">
        <div className="w-20 border border-yellow-400"></div>
        <h2>Projects</h2>
        <div className="w-20 border border-yellow-400"></div>
      </div>
      <p className="sm:text-4xl text-3xl font-bold text-gray-300 max-w-2xl text-center mt-5 mb-10 mx-auto">
        My technical expertise across multiple domains
      </p>
      {/* Projects */}
      <div className="container mx-auto px-5 grid xl:grid-cols-3 md:grid-cols-2  gap-30 xl:gap-5">
        <StyledWrapper>
          <div className="card-container xl:h-[300px]">
            <div className="card">
              <div className="img-content">
                <img className="h-full w-full" src={payConnect} alt="" />
              </div>
              <div className="content">
                <p className="heading">Pay Connect</p>
                <p>
                  PayConnect is a full-featured Utility Bill Management System
                  built on the MERN stack, designed to make managing monthly
                  bills simple, secure, and transparent. It allows users to
                  view, pay, update, and download reports of their utility bills
                  (Electricity, Gas, Water, Internet.) — all from one responsive
                  dashboard.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <a
                href="https://github.com/ts-webdev/pay-connect-client"
                target="_blank"
                className="btn btn-outline btn-primary"
              >
                Code Link
              </a>
              <a href="https://pay-connect-b25b0.web.app/" target="_blank">
                {" "}
                <button className="btn btn-primary text-accent">
                  Live Preview
                </button>
              </a>
              <button className="hidden sm:block btn btn-primary btn-outline">
                View Details
              </button>
            </div>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div className="card-container xl:h-[300px]">
            <div className="card">
              <div className="img-content">
                <img className="h-full w-full" src={skillCircle} alt="" />
              </div>
              <div className="content">
                <p className="heading">Skill Circle</p>
                <p>
                  An interactive platform where individuals can offer, learn,
                  and trade skills within their local area. Whether it’s guitar
                  lessons, coding help, yoga training, or language exchange —
                  SkillCircle connects learners and providers in one
                  community-driven platform.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <a
                href="https://github.com/ts-webdev/skill-circle"
                target="_blank"
                className="btn btn-outline btn-primary"
              >
                Code Link
              </a>
              <a href="https://skill-circle-90721.web.app/" target="_blank">
                {" "}
                <button className="btn btn-primary text-accent">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div className="card-container xl:h-[300px]">
            <div className="card">
              <div className="img-content">
                <img className="h-full w-full" src={momentum} alt="" />
              </div>
              <div className="content">
                <div className="hover:bg-black">
                  <p className="heading text-accent">Momentum</p>
                  <p className="text-gray-500">
                    Momentum is a modern, responsive wedding event management
                    platform built with Next.js, NextAuth.js, and Express.js.
                    Manage events, add products, and explore beautiful event
                    listings with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <a
                href="https://github.com/ts-webdev/momentum-client"
                target="_blank"
                className="btn btn-outline btn-primary"
              >
                Code Link
              </a>
              <a
                href="https://momentum-client-seven.vercel.app/"
                target="_blank"
              >
                {" "}
                <button className="btn btn-primary text-accent">
                  Live Preview
                </button>
              </a>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
};

export default Projects;
