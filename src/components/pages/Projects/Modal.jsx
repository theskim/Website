import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import projectsData from "../../../data/projects.json";
import "./Modal.scss";

const Modal = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectId = useLocation().state?.projectId;
  const handleClose = () => {
    navigate("/");
    setTimeout(() => {
      if (projectId) {
        const element = document.getElementById(projectId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="modal">
      <div className="modal__bar">
        <span className="modal__bar-title">
          {project.title.length * 25 < screenWidth
            ? project.title
            : project.alt}
        </span>
        <span className="modal__xbar" onClick={handleClose}>
          {" "}
          &#xd7;
        </span>
      </div>
      <div className="modal__contents">
        <div className="modal__image">
          <img
            className="section-logo"
            src={project.image}
            alt={project.alt}
            loading="lazy"
          />
        </div>
        <div className="brief-description">
          <p>
            <b>
              <Icon
                icon="material-symbols:keyboard-previous-language"
                width="1.4rem"
              />
              &nbsp;Tags:&nbsp;
            </b>
            {project.tags.map((tag, index) => (
              <span key={index} className="tag-badge">
                {tag}
              </span>
            ))}
          </p>
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
      </div>
      <div className="project-links">
        <span className="project-link">
          <Icon
            icon="material-symbols:media-link"
            width="1.9rem"
            color="#fff"
          />
          <b>&nbsp;Demo:&nbsp;&nbsp;</b>
          {project.link !== undefined && <a href={project.link}>Click Here</a>}
          {project.link === undefined && (
            <span className="gray">Unavailable</span>
          )}
        </span>
        <span className="project-link">
          <Icon icon="mdi:github" width="1.9rem" color="#fff" />
          <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
          {project.github !== undefined && (
            <a href={project.github}>Click Here</a>
          )}
          {project.github === undefined && (
            <span className="gray">Unavailable</span>
          )}
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Modal;
