import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
          <p className = "nav-link">Home</p>
          </Link>
          <Link to='/skills' onClick={() => window.scrollTo(0, 0)}>
          <p className = "nav-link">Skills</p>
          </Link>
          <Link to='/experiences' onClick={() => window.scrollTo(0, 0)}>
          <p className = "nav-link">Experiences</p>
          </Link>
          <Link to='/projects' onClick={() => window.scrollTo(0, 0)}>
          <p className = "nav-link">Projects</p>
          </Link>
          <Link to='/achievements' onClick={() => window.scrollTo(0, 0)}>
          <p className = "nav-link">Achievements</p>
          </Link>
        </div>
      </div>
    </>
    );
  }
}

export default Navbar;