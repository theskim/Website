import React from "react";
import Project from "./Project";
import projectsData from "../../../data/projects.json";
import "./Projects.scss";

const ProjectsTitle = () => {
  return (
    <div id="project" className="projects__title">
      <h1 className="oasis-logo">projects</h1>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <ProjectsTitle />
      {projectsData.map((project) => (
        <React.Fragment key={project.slug}>
          <Project
            title={project.title}
            tags={project.tags}
            logo={project.logo}
            slug={project.slug}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
