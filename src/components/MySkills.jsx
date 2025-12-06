import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFire,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaUsers,
  FaBusinessTime,
  FaLeaf,
  FaLock,
  FaServer,
  FaCloud,
  FaCode,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

const MySkills = () => {
  const colors = {
    primary: "#78C841",
    secondary: "#16610E",
    accent: "#18230F",
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-2xl" style={{ color: colors.primary }} />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 88 },
        { name: "TailwindCSS", icon: <FaCode />, level: 92 },
        { name: "ReactJS", icon: <FaReact />, level: 85 },
        { name: "NextJS", icon: <FaCode />, level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl" style={{ color: colors.primary }} />,
      skills: [
        { name: "ExpressJS", icon: <FaServer />, level: 82 },
        { name: "NodeJS", icon: <FaNodeJs />, level: 85 },
        { name: "Firebase", icon: <FaFire />, level: 78 },
        { name: "JWT", icon: <FaLock />, level: 75 },
      ],
    },
    {
      title: "Database",
      icon: (
        <FaDatabase className="text-2xl" style={{ color: colors.primary }} />
      ),
      skills: [{ name: "MongoDB (Atlas)", icon: <FaDatabase />, level: 80 }],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-2xl" style={{ color: colors.primary }} />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "GitHub", icon: <FaGithub />, level: 90 },
        { name: "Vercel", icon: <FaCloud />, level: 88 },
        { name: "Vite", icon: <FaCode />, level: 85 },
        { name: "Netlify", icon: <FaCloud />, level: 83 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-2xl" style={{ color: colors.primary }} />,
      skills: [
        { name: "Teamwork", icon: <FaUsers />, level: 90 },
        { name: "Time Management", icon: <FaBusinessTime />, level: 88 },
      ],
    },
  ];

  return (
    <section name="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-accent">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="flex justify-center items-center gap-4 text-white text-xl">
          <div className="w-40 border border-yellow-400"></div>
          <h2>Skills</h2>
          <div className="w-40 border border-yellow-400"></div>
        </div>
        <p className="text-4xl font-bold text-gray-300 max-w-2xl text-center mt-5 mb-10 mx-auto">
            My technical expertise across multiple domains
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-100/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/20"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {category.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-lg"
                            style={{ color: colors.primary }}
                          >
                            {skill.icon}
                          </span>
                          <span className="font-medium text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: colors.primary }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: colors.primary,
                            width: `${skill.level}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
