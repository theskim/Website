import React from "react";
import PropTypes from "prop-types";
import Clock from "../../../API/Clock";
import "./Hero.scss";
import { Icon } from "@iconify/react";
import SocialMedia from "./Sections/SocialMedia";
import MailInfo from "./Sections/MailInfo";
import {
  ResumeLogo,
  LinkedInLogo,
  GithubLogo,
} from "../../../../assets/GeneralLogos";
import Resume from "../../../../assets/Resume/resume.pdf";
import Divider from "../../../../assets/Divider/Divider";

const Title = () => {
  return <h1 id="home">&#x1F464;&nbsp;&nbsp;SEAN KIM</h1>;
};

const Description = () => {
  return (
    <div className="about-me-description">
      <br />
      <h4 style={{ color: "rgb(91, 58, 255)" }}>
        <Icon icon="material-symbols:location-on" color="rgb(91, 58, 255)" />
        &nbsp;University of Toronto, Canada
      </h4>
      <h5>
        <Icon icon="ic:round-access-time-filled" />
        &nbsp;
        <Clock />
      </h5>
      <p>
        {" "}
        I am an undergraduate <b>Computer Engineering</b> Student at the{" "}
        <b>University of Toronto</b>, also pursuing a minor in Artificial
        Intelligence. <br />
        <br />I am currently working as a Software Engineer Intern at{" "}
        <b>Mozilla Corporation</b> on <b>Firefox</b> Networking (Necko) Team. I
        have previously worked as a research intern at{" "}
        <b>iQua Research Group</b> in Summer 2023. I have lead various student
        teams in academic, hackathon, and professional environments to develop a
        variety of software and applications across different levels. I am
        passionate about software development, distributed systems, computer
        networks, and computer architecture. <br />
        <br />
        Aside from work, I am a huge <b>football</b>/soccer (⚽) fan, I am a
        supporter of <b>Tottenham Hotspur FC</b>, <b>Toronto FC</b>, and{" "}
        <b>Canada Men's National Soccer Team</b>. On weekends, I spend my time
        watching the <b>Premier League</b> and playing <b>FPL</b>.
        <br />
        <br />
        This website sort of serves as an archive where I can revisit past
        projects and experiences. I built it with <b>React</b> a few years ago,
        hope you enjoy the design!
      </p>
    </div>
  );
};

const Wrapper = (props) => {
  return <div className="about-me">{props.children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Hero = () => {
  return (
    <Wrapper>
      <Title />
      <MailInfo
        href={"mailto:sean.skim21@gmail.com?subject = Feedback&body = Message"}
        display={"sean.skim21@gmail.com"}
      />
      <SocialMedia
        src={[GithubLogo, LinkedInLogo, ResumeLogo]}
        href={[
          "https://github.com/theskim",
          "https://www.linkedin.com/in/seankim7/",
          Resume,
        ]}
      />
      <Divider />
      <br />
      <br />
      <br />
      <Description />
      <br />
      <br />
      <br />
      <a
        className="my-button"
        href="https://seankimblog.notion.site/55e4c6fcf4054efd8b953edb9b3789c2?v=efb626db622e4d6a890e80ab3d624e94"
        style={{
          padding: "min(1rem, 3vw)",
          textDecoration: "none",
          marginTop: "6vh",
          marginBottom: "8vh",
        }}
      >
        Personal Blog
      </a>
    </Wrapper>
  );
};

export default Hero;
