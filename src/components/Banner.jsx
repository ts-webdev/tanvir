import React, { useEffect, useRef } from "react";
import tanvirPhoto from "../assets/tanvir.png";
import "animate.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-scroll";

const Banner = () => {
  // Create refs for GSAP animations
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const photoRef = useRef(null);
  const socialRef = useRef(null);

  // GSAP Animation on component mount
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger animation for social icons
    tl.fromTo(
      socialRef.current.querySelectorAll("a"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
    );

    // Animate the "Hello there" text
    tl.fromTo(
      ".hello-text",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7 },
      "-=0.3"
    );

    // Animate the name
    tl.fromTo(
      nameRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );

    // Animate the title
    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.3"
    );

    // Animate the description
    tl.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.3"
    );

    // Animate the buttons
    tl.fromTo(
      buttonsRef.current.querySelectorAll("button"),
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 },
      "-=0.2"
    );

    // Animate the photo with a bounce effect
    tl.fromTo(
      photoRef.current,
      { scale: 0, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.5"
    );

    // Add a continuous subtle floating animation to the photo
    gsap.to(photoRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Add hover effect to buttons
    const buttons = buttonsRef.current.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Add hover effect to social icons
    const socialIcons = socialRef.current.querySelectorAll("a");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 360,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    // Clean up event listeners
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
      socialIcons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Framer Motion variants for social icons
  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Framer Motion variants for buttons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Framer Motion variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      name="home"
      className="container mx-auto px-5 -mt-24 pt-30 min-h-[75vh] text-white flex flex-col gap-10 sm:flex-row items-center justify-between overflow-hidden"
    >
      {/* Description */}
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-5">
        {/* Social Links with Framer Motion */}
        <motion.div
          ref={socialRef}
          className="flex md:flex-col bg-accent rounded-full px-5 md:py-5 border-primary border justify-between mt-5 p-3 gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/ts-webdev"
            target="_blank"
            variants={socialVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/m/in/tanvirmahtab-dev"
            target="_blank"
            variants={socialVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/dev.tanvirmahtab"
            target="_blank"
            variants={socialVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaFacebook className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <div>
          <motion.p
            className="hello-text md:text-4xl text-2xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Hello there,
          </motion.p>

          <motion.h1
            ref={nameRef}
            className="md:text-7xl text-4xl mt-5 font-black"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            This is{" "}
            <motion.span
              className="text-yellow-400 inline-block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              Tanvir
            </motion.span>
          </motion.h1>

          <motion.h2
            ref={titleRef}
            className="md:text-4xl text-2xl text-gray-300 font-bold mt-2"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            ref={descriptionRef}
            className="mt-5 text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            MERN Stack Developer looking for a junior position to apply core{" "}
            <br />
            full-stack skills and learn industry best practices.
          </motion.p>

          {/* Buttons with Framer Motion */}
          <motion.div
            ref={buttonsRef}
            className="flex gap-5 mt-5"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="btn btn-primary text-accent rounded-full"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                // Scroll to contact section
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="btn btn-outline btn-primary rounded-full hover:text-accent"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                // Scroll to projects section or trigger download
                // You can change this to your preference
                window.open("/resume.pdf", "download");
              }}
            >
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
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Photo with GSAP and Framer Motion */}
      <motion.div
        className="relative xl:mr-30"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          ref={photoRef}
          className="md:w-96 md:h-96 w-72 h-72 rounded-full overflow-hidden z-10 relative"
          whileHover={{
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          <motion.img
            className="rounded-full"
            src={tanvirPhoto}
            alt="Tanvir - MERN Stack Developer"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "easeOut",
            }}
          />

          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary border-opacity-30"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full bg-primary blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
