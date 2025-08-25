import React from "react";
import Scroll from "react-scroll";
import PropTypes from "prop-types";
let Link = Scroll.Link;

const NavOption = ({ to, title, href }) => {
  return (
    <>
      {href === undefined ? (
        <Link
          activeClass="active"
          className="nav-link"
          to={to}
          spy={true}
          smooth={true}
          duration={500}
        >
          <p>{title}</p>
        </Link>
      ) : (
        <a
          className="nav-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{title}</p>
        </a>
      )}
    </>
  );
};

NavOption.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
};

const NavOptions = (props) => {
  return (
    <>
      <NavOption to="home" title="Home" {...props} />
      <NavOption to="experience" title="Experience" {...props} />
      <NavOption to="education" title="Education" {...props} />
      <NavOption to="project" title="Projects" {...props} />
      <NavOption href="/resume.pdf" title="Resume" {...props} />
    </>
  );
};

export default NavOptions;
