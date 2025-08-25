import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "./Project.scss";
import { Icon } from "@iconify/react";

const Project = ({ logo, title, tags, slug }) => {
  return (
    <div id={`project-${slug}`} className="section-wrapper">
      <div className="section-image-box">
        <Icon icon={logo} className="section-logo" />
      </div>
      <div className="section-text-box">
        <h2>
          <Icon icon="icon-park-solid:align-text-left-one" />
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
          <Icon icon={logo} className="section-logo" />
          <br />
        </div>
        <Link
          href={`/project/${slug}`}
          className="my-button"
          aria-label={`View description for ${title}`}
        >
          Description &nbsp;
          <Icon icon="mdi:arrow-top-right" className="i" aria-hidden />
        </Link>
      </div>
    </div>
  );
};

Project.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.string.isRequired,
};

export default Project;
