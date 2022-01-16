import React from "react";
import { projects } from "../projects";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h1>App Portfolio</h1>
        <p>Here are a few of the applications I have built.</p>
      </div>
      <div className="project-container flex flex-wrap">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-black-800 bg-gray-900 opacity-0 hover:opacity-85">
                <h1 className="project-title">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;