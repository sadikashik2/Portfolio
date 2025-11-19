import React from "react";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 lg:py-20 px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">PROJECTS</h2>
        <div className="w-50 h-0.5 bg-red-800 mx-auto mt-3 rounded-full"></div>
        <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto">
          A showcase of my work with quick access to live demos and code.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 grid-cols-1  lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-stone-900/60 backdrop-blur-md border border-white/10 rounded-2xl 
                       shadow-lg shadow-red-800/10 transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-stone-400 mb-4 text-sm ">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-[#39393c] text-red-400 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-linear-to-r from-red-900 to-red-800
                             text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-stone-800/70 border border-red-400
                             text-red-200 font-semibold rounded-xl hover:scale-105 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
