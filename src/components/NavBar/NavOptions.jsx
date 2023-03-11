import Scroll from 'react-scroll';
import Resume from "../../assets/Resume/resume.pdf"
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
        >
          <p>{title}</p>
        </a>
      )}
    </>
  );
};

const NavOptions = (props) => {
  return (
    <>
      <NavOption to="home" title="Home" {...props} />
      <NavOption to="projects" title="Projects" {...props} />
      <NavOption to="experiences" title="Experiences" {...props} />
      <NavOption to="skills" title="Skills" {...props} />
      <NavOption to="contact" title="Contact" {...props} />
      <NavOption href={Resume} title="Resume" {...props} />
    </>
  );
};

export default NavOptions;