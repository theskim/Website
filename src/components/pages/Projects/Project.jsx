import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "./Project.scss";
import { Icon } from "@iconify/react";

const Project = ({ image, title, tags, slug }) => {
  return (
    <div id={`project-${slug}`} className="section-wrapper">
      <div className="section-image-box">
        <img
          className="section-logo"
          src={image}
          loading="lazy"
          alt={title + " project logo"}
        />
      </div>
      <div className="section-text-box">
        <h2>
          <Icon icon="ant-dsesign:project-filled" />
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
          <img
            className="section-logo"
            src={image}
            loading="lazy"
            alt={title + " project logo mobile"}
          />
          <br />
        </div>
        <Link
          href={`/project/${slug}`}
          className="my-button"
          aria-label={`View description for ${title}`}
        >
          <p>View Description</p>
        </Link>
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
