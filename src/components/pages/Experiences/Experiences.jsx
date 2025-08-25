import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "../../../assets/Divider/Divider";
import "./Experiences.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ReactMarkdown from "react-markdown";
import { Icon } from "@iconify/react";
import experiencesData from "../../../data/experiences.json";

const Title = () => {
  return (
    <div id="experience" className="experiences__title-box">
      <h1 className="oasis-logo">experience</h1>
    </div>
  );
};

const ExperienceElement = ({
  date,
  logo,
  name,
  position,
  location,
  description,
  tags,
  iconBorder = "2.5px solid #fff",
  iconBoxShadow = "none",
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#121212",
      color: "#fff",
      border: "1px solid #fff",
      fontFamily: "Small",
    }}
    contentArrowStyle={{ borderRight: "9px solid #fff" }}
    date={date}
    iconStyle={{
      background: "#fff",
      color: "#000",
      border: iconBorder,
      boxShadow: iconBoxShadow,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      overflow: "hidden",
    }}
    icon={
      logo && (
        <>
          <img
            src={logo}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              userSelect: "none",
              pointerEvents: "none",
            }}
            loading="lazy"
          />
        </>
      )
    }
  >
    <h3 className="vertical-timeline-element-title">
      <Icon icon="material-symbols:work" width="1.5rem" /> {name} • {position}
    </h3>
    <h4 className="vertical-timeline-element-location">
      <Icon icon="material-symbols:location-on" color="#fff" />
      &nbsp;{location}
    </h4>
    <p>
      {description.map((item, index) => (
        <span key={index}>
          <b>→</b>{" "}
          <ReactMarkdown
            components={{
              a: ({ node, children, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  {children}
                </a>
              ),
              p: ({ node, ...props }) => <span {...props} />,
            }}
          >
            {item}
          </ReactMarkdown>
          <br />
        </span>
      ))}
    </p>
    <p>
      <Icon icon="material-symbols:keyboard-previous-language" width="1.4rem" />
      <b>&nbsp;Tags:&nbsp;</b>
      {tags.map((tag, index) => (
        <span key={index} className="tag-badge">
          {tag}
        </span>
      ))}
    </p>
  </VerticalTimelineElement>
);

ExperienceElement.propTypes = {
  date: PropTypes.string.isRequired,
  logo: PropTypes.string,
  position: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Experiences = () => {
  useEffect(() => {
    // Force timeline elements to be visible after mount
    setTimeout(() => {
      const timelineElements = document.querySelectorAll(
        ".vertical-timeline-element",
      );
      timelineElements.forEach((element) => {
        element.style.opacity = "1";
        element.style.visibility = "visible";
      });
    }, 100);
  }, []);

  return (
    <>
      <Title />
      <VerticalTimeline lineColor="#000" animate={false}>
        {experiencesData.map((experience) => (
          <ExperienceElement
            key={experience.name + experience.date}
            name={experience.name}
            date={experience.date}
            logo={experience.logo}
            position={experience.position}
            location={experience.location}
            description={experience.description}
            tags={experience.tags}
          />
        ))}
      </VerticalTimeline>
      <br />
      <br />
      <Divider />
    </>
  );
};

export default Experiences;
