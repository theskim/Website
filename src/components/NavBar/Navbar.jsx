import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from './SmoothScroll';
import "./Navbar.css";
import Sidebar from './Sidebar';
import { SkimLogo } from "../../assets";

class Navbar extends Component {
  state = 
  { clicked: false };
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
      <div className = "nav-bar">
        <img src={SkimLogo} alt='SK' />
        <div className = "fa-bar">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        <div className = "nav-menu">
          <p><NavLink to='/' className ="nav-link" onClick={SmoothScroll}>
            Home
          </NavLink>
          </p>
          <p><NavLink to='/skills' className="nav-link" onClick={SmoothScroll}>
            Skills
          </NavLink>
          </p>
          <p><NavLink to='/experiences' className = "nav-link" onClick={SmoothScroll}>
            Experiences
          </NavLink>
          </p>
          <p><NavLink to='/projects' className = "nav-link" onClick={SmoothScroll}>
            Projects
          </NavLink>
          </p>
          <p><NavLink to='/achievements' className = "nav-link" onClick={SmoothScroll}>
            Achievements
          </NavLink>
          </p>
        </div>
      </div>
    </>
    );
  }
}

export default Navbar;