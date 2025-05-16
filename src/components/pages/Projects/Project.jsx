import React from "react";
import PropTypes from "prop-types";
import "./Project.scss";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Project = ({ image, title, tags, slug }) => {
  const navigate = useNavigate();

  return (
    <div id={`project-${slug}`} className="section-wrapper">
      <div className="section-image-box">
        <img className="section-logo" src={image} loading="lazy" alt="" />
      </div>
      <div className="section-text-box">
        <h2>
          <Icon icon="ant-design:project-filled" />
          &nbsp;{title}
        </h2>
        <div className="section-skills">
          <p>
            <b>
              <Icon
                icon="material-symbols:keyboard-previous-language"
                width="1.4rem"
              />
              &nbsp;Tags:&nbsp;
            </b>
            {tags.map((tag, index) => (
              <span key={index} className="tag-badge">
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className="section-image-box__mobile">
          <img className="section-logo" src={image} loading="lazy" alt="" />
          <br />
        </div>
        <button
          className="my-button"
          type="button"
          onClick={() => {
            navigate(`/project/${slug}`, {
              state: { projectId: `project-${slug}` },
            });
          }}
        >
          <p>View Description</p>
        </button>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.string.isRequired,
};

export default Project;
