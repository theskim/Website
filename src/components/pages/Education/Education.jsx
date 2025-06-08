import React from "react";
import ReactMarkdown from "react-markdown";
import { PropTypes } from "prop-types";
import Divider from "../../../assets/Divider/Divider";
import "./Education.scss";
import me from "../../../data/me.json";

const Title = () => {
  return <h1>&#x1F393;&nbsp;&nbsp;EDUCATION</h1>;
};

const Description = () => {
  return (
    <>
      <img src={me.schoolLogo} loading="lazy" alt="" />
      <br />
      <p>
        {me.schoolName}
        <br />
        {me.degree}
      </p>
      {me.schoolDuration && <h2>{me.schoolDuration}</h2>}
      {me.schoolLearnMore && (
        <ReactMarkdown>
          {me.schoolDetails.map((detail) => detail).join(" • ")}
        </ReactMarkdown>
      )}
      {me.schoolLearnMore && (
        <a
          className="my-button"
          href={me.schoolLearnMore}
          style={{
            padding: "min(1rem, 3vw)",
            textDecoration: "none",
            marginTop: "6vh",
            marginBottom: "8vh",
          }}
        >
          Learn More
        </a>
      )}
    </>
  );
};

const Wrapper = ({ children }) => {
  return (
    <div id="education" className="school-information">
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Education = () => {
  return (
    <>
      <Wrapper>
        <Title />
        <Description />
      </Wrapper>
      <Divider />
    </>
  );
};

export default Education;
