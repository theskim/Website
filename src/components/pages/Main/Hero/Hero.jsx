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
import ReactMarkdown from "react-markdown";
import me from "../../../../data/me.json";

const Title = () => {
  return <h1 id="home">&#x1F464;&nbsp;&nbsp;{me.name.toUpperCase()}</h1>;
};

const Description = () => {
  return (
    <div className="about-me-description">
      <br />
      <h4>
        <Icon icon="material-symbols:location-on" color="#fff" />
        &nbsp;{me.location}
      </h4>
      <h5>
        <Icon icon="ic:round-access-time-filled" />
        &nbsp;
        <Clock />
      </h5>
      <div className="react-markdown">
        <ReactMarkdown>{me.description}</ReactMarkdown>
      </div>
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
        href={`mailto:${me.email}?subject=Feedback&body=Message`}
        display={me.email}
      />
      <SocialMedia
        src={[GithubLogo, LinkedInLogo, ResumeLogo]}
        href={[me.github, me.linkedin, Resume]}
      />
      <Divider />
      <br />
      <br />
      <br />
      <Description />
      <br />
      <br />
      <br />
    </Wrapper>
  );
};

export default Hero;
