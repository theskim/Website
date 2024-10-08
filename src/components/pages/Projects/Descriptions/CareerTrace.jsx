import Project from "../Project";
import { CareerTraceImage } from "../../../../assets/ProjectImages";
import React from "react";

const CareerTrace = () => {
  return (
    <Project
      title="CareerTrace - Job Application Tracker"
      alt="CareerTrace"
      tags="React.js • Node.js • Express.js • MongoDB • Google OAuth 2.0 • AWS"
      image={CareerTraceImage}
      link="https://careertrace.ca/"
      github="https://github.com/michaelzixizhou/CareerTrace"
    >
      <b>CareerTrace</b> is a powerful platform designed to streamline and
      enhance your job application process. With <b>CareerTrace</b>, you can
      effortlessly track your job applications, monitor application stages, and
      keep a record of important interview dates. It empowers you to make
      data-driven decisions by providing valuable insights into your application
      success rates. <br />
      <br />
      <b>CareerTrace</b> offers a range of key features to streamline your{" "}
      <b>job application process</b>. You can effortlessly manage and organize
      your <b>applications</b>, maintaining a comprehensive record of applied{" "}
      <b>companies</b>, <b>dates</b>, and <b>application statuses</b>. Stay on
      top of your <b>interview schedule</b> by recording important{" "}
      <b>interview dates</b> and <b>times</b>, ensuring you never miss an
      opportunity.
      <br />
      <br />
      <b>CareerTrace</b> employed a responsive design, ensuring a seamless user
      experience on both mobile and desktop devices. To enhance security and
      convenience, it offers <b>Google Authentication</b> for secure access.
      Behind the scenes, <b>CareerTrace</b> is built with <b>MERN</b> stack;{" "}
      <b>MongoDB</b> for data storage, <b>Express.js</b> for backend,{" "}
      <b>React</b> and <b>styled-components</b> for frontend,{" "}
      <b>Google OAuth 2.0</b> for authentication, and hosted on <b>AWS</b>.{" "}
      <br />
    </Project>
  );
};

export default CareerTrace;
