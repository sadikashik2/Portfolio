// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-10 lg:py-20 px-[7vw]  lg:px-[20vw] font-sans"
  >
    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white tracking-wide">SKILLS</h2>
      <div className="w-40 h-0.5 bg-red-800 mx-auto mt-3 rounded-full"></div>
      <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto">
        A showcase of my technical abilities and tools I use to build high-quality projects.
      </p>
    </div>

    {/* Skill Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.05}
          transitionSpeed={1200}
          gyroscope={true}
          className="group bg-stone-900/60 backdrop-blur-md rounded-2xl border border-white/10 
                     p-8 shadow-lg shadow-red-800/10 hover:shadow-red-500/20 
                     transition-all duration-300"
        >
          {/* Category Title */}
          <h3 className="text-2xl text-white font-semibold text-center mb-8 group-hover:text-red-300 transition">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-3 rounded-xl border border-stone-700 bg-stone-800/40 
                           hover:bg-stone-800/70 hover:border-red-500 transition-all duration-300"
              >
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 mb-2" />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
