import React from "react";

import Project from "./Project";
import PROJECTS from "../../content/projects";

const Projects = () => {
  return (
    <div className="flex flex-col place-self-start pt-10">
      <h1 className="text-5xl text-orange wide">Projects</h1>

      <span>
        {PROJECTS.map(project => (
          <Project
            title={project.title}
            desc={project.desc}
            imgSrc={project.imgSrc}
            stack={project.stack}
          />
        ))}
      </span>
    </div>
  );
};

export default Projects;
