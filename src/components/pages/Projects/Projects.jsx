import React from "react";
import Project from "./Project";
import Divider from "../../../assets/Divider/Divider";
import projectsData from "../../../data/projects.json";
import "./Projects.scss";

const ProjectsTitle = () => {
  return (
    <div id="project" className="projects__title">
      <h1>&#128194;&nbsp;&nbsp;PROJECTS</h1>
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
            image={project.image}
            slug={project.slug}
          />
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
