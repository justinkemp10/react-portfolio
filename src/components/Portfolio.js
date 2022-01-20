import React from "react";
import { projects } from "../projects";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h1 className='portfolio-header'>App Portfolio</h1>
        <p className="portfolio-description">Here are a few of the applications I have built.</p>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="project-link"
          >
            <div className="project-header">
              <img
                alt="gallery"
                className="project-image"
                src={project.image}
              />
              <h1 className="project-title">
                {project.title}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;