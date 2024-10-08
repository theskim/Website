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
      fontFamily: "Small",
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
    <p>
      {description.map((item, index) => (
        <span key={index}>
          <b>→</b> {item}
          <br />
        </span>
      ))}
    </p>
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
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStack: PropTypes.string.isRequired,
  iconBackground: PropTypes.string.isRequired,
  iconBorder: PropTypes.string,
  iconBoxShadow: PropTypes.string,
};

const Experiences = () => {
  const experiences = [
    {
      date: "May 2024 — Present",
      iconSrc: MozillaLogo,
      company: "Mozilla Corp.",
      position: "Software Engineer Intern",
      subtitle: "Toronto, ON",
      description: [
        "Firefox Networking (Necko) Team 🦊🌍",
        "Integrated Microsoft Entra Single Sign-On (SSO) for Firefox on macOS using Apple's Authorization API in Objective-C. This feature was highly requested by Mac users to address their specific needs. On behalf of Mozilla, communicated and collaborated with Microsoft to validate broker requests and facilitate discussions regarding the syndiagnosis report and system logs",
        "Enhanced string parsing in C++ and Rust for 20+ URL schemes on Firefox (Interop 2024), resolving edge cases involving scheme, path, and special character encoding to meet the WHATWG URL Standards",
        "Enhanced homoglyph attack detection for 50+ IDNs in C++, preventing malicious lookalike combinations",
        "Migrated 40+ Telemetry probes to Glean API and implemented SQL queries to visualize HTTP related metrics on the dashboard for engineers, obtaining a more accurate daily diagnosis of networking issues on Android",
        "Implemented a clear HTTP cache feature for about:networking page by exposing the Console API in JavaScript, allowing performance diagnostics and testing for developers and over 200 million Firefox users",
      ],
      techStack:
        "C++ • Objective-C • JavaScript • Rust • Mercurial • Open-source development",
      iconBackground:
        "linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255))",
    },
    {
      date: "May 2023 — Aug 2023",
      iconSrc: UofTLogo,
      company: "iQua Research Group — University of Toronto",
      position: "Research Intern — Distributed ML System",
      subtitle: "Toronto, ON",
      description: [
        "Developed a Max-min Fairness (FCFS) algorithm using SciPy and NetworkX (Python libraries), achieving up to 300% improvement in minimum flow bandwidth compared to network flows without the algorithm",
        "Created a dashboard for researchers with ReactJS (Web) and Python/psycopg2 (CLI) to track 1000+ bandwidths from highest to lowest by destination, link, and virtual circuit, queried from PostgreSQL DBMS",
        "Extended 10+ unit tests in Rust to analyze TCP connection and transmission via evaluating packets",
      ],
      techStack:
        "Python (SciPy/psycopg2) • Rust (Tokio) • JavaScript (Node.js) • PostgreSQL • Docker • Linux",
      iconBackground: "#fff",
      iconBorder: "2px solid #000",
    },
    {
      date: "Jul 2022 — Jan 2024",
      iconSrc: UofTHacksLogo,
      company: "UofTHacks Organizer Team",
      position: "Software Engineer — Full-stack Web",
      subtitle: "Toronto, ON (Remote)",
      description: [
        "Created reusable Next.js components and backend endpoints in Node.js for the website and applicant dashboard for the Canada’s first student-run hackathon, UofTHacks, benefiting over 1000+ applicants",
      ],
      techStack: "React.js • Next.js • Node.js • Express.js • MariaDB",
      iconBackground: "#fff",
      iconBorder: "2px solid #000",
    },
    {
      date: "Jul 2022 — Apr 2023",
      company: "UofT Engineering Commuter Student Directorship",
      position: "Webmaster",
      subtitle: "Toronto, ON (Remote)",
      description: [
        "Lead the development of the main website for UofT Engineering Commuter Student Directorship, a commuter community for over 400 students",
      ],
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
