import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./Tools.scss";

const Wrapper = ({ children }) => {
  return <div className="tools">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const Tool = ({ name, devicon }) => {
  return (
    <div className="tooltip-wrap">
      <Icon
        icon={devicon}
        width="5rem"
        cursor="pointer"
        margin="min(15vw, 1.8rem)"
        color="#fff"
      />
      <br />
      <p className="tooltip-content">{name}</p>
    </div>
  );
};

Tool.propTypes = {
  devicon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const ToolSection = ({ tools }) => {
  return (
    <>
      <div className="tool__section">
        <br />
        <br />
        {tools.map((tool, index) => (
          <Tool key={index} name={tool.name} devicon={tool.devicon} />
        ))}
      </div>
    </>
  );
};

ToolSection.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      devicon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Tools = ({ tools }) => {
  return (
    <Wrapper>
      <ToolSection tools={tools} />
    </Wrapper>
  );
};

export default Tools;
