import React from "react";
import PropTypes from "prop-types";
import Clock from "../../../API/Clock";
import "./Hero.scss";
import { Icon } from "@iconify/react";
import SocialMedia from "./Sections/SocialMedia";
import MusicPlayer from "./Sections/MusicPlayer";
import ReactMarkdown from "react-markdown";
import me from "../../../../data/me.json";

const Title = () => {
  return (
    <h1 id="home" className="oasis-logo">
      {me.name.toLowerCase()}
    </h1>
  );
};

const Location = () => {
  return (
    <h4 className="about-me-location">
      <Icon icon="material-symbols:location-on" color="#fff" />
      &nbsp;{me.location}
    </h4>
  );
};

const Description = () => {
  return (
    <div className="about-me-description">
      <div className="react-markdown">
        <ReactMarkdown>{me.description}</ReactMarkdown>
      </div>
      <br />
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
      <div className="about-me-header">
        <MusicPlayer
          youtubeId={me.musicYoutubeId}
          autoPlay={true}
          initialVolume={50}
        />
        <Title />
        <Location />
        <h5 className="about-me-time">
          <Icon icon="ic:round-access-time-filled" />
          &nbsp;
          <Clock />
        </h5>
        <Description />
        <SocialMedia
          items={[
            {
              icon: "mdi:email-outline",
              href: `mailto:${me.email}`,
              label: "Email",
            },
            { icon: "mdi:github", href: me.github, label: "GitHub" },
            { icon: "mdi:linkedin", href: me.linkedin, label: "LinkedIn" },
            {
              icon: "mdi:file-document-outline",
              href: "/resume.pdf",
              label: "Resume",
            },
          ]}
          size="lg"
        />
      </div>
    </Wrapper>
  );
};

export default Hero;
