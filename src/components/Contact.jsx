import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const colors = {
    primary: "#78C841",
    secondary: "#16610E",
    accent: "#18230F",
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "dev.tanvirmahtab@gmail.com",
      link: "mailto:dev.tanvirmahtab@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 01602 848039",
      link: "tel:+88001602848039",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+880 01602 848039",
      link: "https://wa.me/88001602848039",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Narayanganj, Bangladesh",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 bg-linear-to-bl from-[#255F38]/50 to-[#18230F]/50 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center items-center gap-4 text-white text-xl">
          <div className="w-20 border border-yellow-400"></div>
          <h2>Contact</h2>
          <div className="w-20 border border-yellow-400"></div>
        </div>
        <p className="sm:text-4xl text-3xl font-bold text-gray-300 max-w-2xl text-center mt-5 mb-10 mx-auto">
          Feel free to reach out through any of these channels
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.title === "WhatsApp" ? "_blank" : "_self"}
              rel={item.title === "WhatsApp" ? "noopener noreferrer" : ""}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: colors.primary }}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp Quick Action */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/8801602848039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#25D366",
              color: "white",
            }}
          >
            <FaWhatsapp className="text-xl" />
            Message on WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Fastest way to get a response
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
