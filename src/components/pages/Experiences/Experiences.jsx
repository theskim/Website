import React from "react";
import PropTypes from "prop-types";
import Divider from "../../../assets/Divider/Divider";
import "./Experiences.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import {
  UofTLogo,
  MozillaLogo,
  UofTHacksLogo,
} from "../../../assets/GeneralLogos";

const Title = () => {
  return (
    <div id="experience" className="experiences__title-box">
      <h1>&#128188;&nbsp;&nbsp;EXPERIENCE</h1>
    </div>
  );
};

const ExperienceElement = ({
  date,
  iconSrc,
  company,
  position,
  subtitle,
  description,
  techStack,
  iconBackground,
  iconBorder = "1px solid #000",
  iconBoxShadow = "none",
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#fff",
      color: "#000",
      border: "1px solid #000",
      fontFamily: "Poppins",
      boxShadow: "0 0 10px 4px rgba(0, 0, 3, 0.2)",
    }}
    contentArrowStyle={{ borderRight: "9px solid #000" }}
    date={date}
    iconStyle={{
      background: iconBackground,
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
      iconSrc && (
        <>
          <img
            src={iconSrc}
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
      <Icon icon="material-symbols:work" width="1.5rem" /> {company} •{" "}
      {position}
    </h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p dangerouslySetInnerHTML={{ __html: description }}></p>
    <p>
      <b>Tech Stack:</b> {techStack}
    </p>
  </VerticalTimelineElement>
);

ExperienceElement.propTypes = {
  date: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  iconBackground: PropTypes.string.isRequired,
  iconBorder: PropTypes.string,
  iconBoxShadow: PropTypes.string,
};

const Experiences = () => {
  const experiences = [
    {
      date: "May 2024 - Present",
      iconSrc: MozillaLogo,
      company: "Mozilla Corp.",
      position: "Software Engineer Intern",
      subtitle: "Toronto, ON",
      description:
        "→ Firefox Networking (Necko) Team 🦊🌍<br/>→  Integrating Microsoft Single Sign-On (SSO) for Firefox on MacOS, on behalf of Mozilla, communicated and collaborated with Microsoft to validate broker requests and facilitate in-depth discussions<br/>→ Implemented a clear HTTP cache feature for the networking page, allowing performance diagnostics, testing, and user experience for web developers and over 360 million Firefox users<br/>→ Enhanced parsing for 20+ URL schemes on Firefox including edge cases involving file scheme, path names, queries,fragments, and encoding of special characters to meet the WHATWG URL Standard<br/>→ Enhancing spoofing detection for 50+ IDNs, addressing script combination logics and platform-specific characters<br/>→ Migrated 40+ Telemetry probes to Glean API and implemented SQL queries to visualize HTTP related metrics on the dashboard for engineers, obtaining a more accurate daily diagnosis of networking issues on Android",
      techStack:
        "C++ • Objective-C • JavaScript • Rust • Mercurial • Open-source development",
      iconBackground:
        "linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))",
    },
    {
      date: "May 2023 - Sep 2023",
      iconSrc: UofTLogo,
      company: "iQua Research Group - University of Toronto",
      position: "Distributed ML System Research Intern",
      subtitle: "Toronto, ON",
      description: `→ Devised a Max-min fairness routing algorithm with SciPy linear programming and the NetworkX library, optimizing the lowest flow bandwidth by up to 300%<br/>
                    → Leveraged React.js and Python (psycopg2) to create an analytics dashboard able to track bandwidth from highest to lowest by destination, link, and virtual circuit, displaying data queried from PostgreSQL DBMS<br/>
                    → Extended 10+ unit tests in Rust to analyze TCP connection and transmission via evaluating packets`,
      techStack:
        "Python (SciPy/psycopg2) • Rust (Tokio) • JavaScript (Node.js) • PostgreSQL • Docker • Linux",
      iconBackground: "#fff",
      iconBorder: "2px solid #000",
    },
    {
      date: "Jul 2022 - Jan 2024",
      iconSrc: UofTHacksLogo,
      company: "UofTHacks",
      position: "Full-stack Web Developer",
      subtitle: "Toronto, ON (Remote)",
      description: `→ Developed the main website and dashboard for UofTHacks X and the dashboard and applicant portal for UofTHacks 11, benefiting over 600+ hackathon participants with seamless access<br/>
                    → Developed RESTful API backend endpoints using Express.js, effectively handling application data`,
      techStack: "React.js • Next.js • Node.js • Express.js • MariaDB",
      iconBackground: "#fff",
      iconBorder: "2px solid #000",
    },
    {
      date: "Jul 2022 - Apr 2023",
      company: "UofT Engineering Commuter Student Directorship",
      position: "Webmaster",
      subtitle: "Toronto, ON (Remote)",
      description: `→ Lead the development of the main website for UofT Engineering Commuter Student Directorship, a commuter community for over 400 students.<br/>→ Introduced me to version control and collaborative development in a team environment`,
      techStack: "React.js • CSS • Figma",
      iconBackground: "#FFBF00",
    },
  ];

  return (
    <>
      <Title />
      <VerticalTimeline lineColor="#000">
        {experiences.map((experience, index) => (
          <ExperienceElement key={index} {...experience} />
        ))}
      </VerticalTimeline>
      <br />
      <br />
      <Divider />
    </>
  );
};

export default Experiences;
