import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from './SmoothScroll';
import "./Navbar.css";
import { SkimLogo, burgerBar, xBar } from "../../assets";

const NavOptions = (props) => {
  return (
    <>
      <NavLink to='/' className ="nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Home</p>
          : <p>&#127968;&nbsp;&nbsp;Home</p>
        }
      </NavLink>
      <NavLink to='/skills' className="nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Skills</p>
          : <p>&#128104;&#8205;&#128187;&nbsp;&nbsp;Skills</p>
        }
      </NavLink>
      <NavLink to='/experiences' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Experiences</p>
          : <p>&#128188;&nbsp;&nbsp;Experiences</p>
        }
      </NavLink>
      <NavLink to='/projects' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Projects</p>
          : <p>&#128221;&nbsp;&nbsp;Projects</p>
        }
      </NavLink>
      <NavLink to='/achievements' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Achievements</p>
          : <p>&#127942;&nbsp;&nbsp;Achievements</p>
        }
      </NavLink>
      <a href="https://docs.google.com/document/d/1LYTIGA1HsmgeMmJBwkPYlB651evgiylYII6ETh6Bb4I/edit?usp=sharing" className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Resume</p>
          : <p>&#128195;&nbsp;&nbsp;Resume</p>
        }
      </a>
    </>
  );
}

const NavBar = () => {
  const [toggle, update] = useState(false);
  return (
    <div className = "nav-bar">
      <div className = "nav-bar-image">
        <img src={SkimLogo} alt='SK'/>
      </div>
      <div className = "top-bar">
        <div className = "nav-links">
          <NavOptions sideBar={true}/>
          </div>
      </div>
      <div className = "side-bar">      
        {toggle 
          ? <img className = "x-bar" src={xBar} onClick={() => update(false)} alt=""/>
          : <img className = "burger-bar" src={burgerBar} onClick={() => update(true)} alt=""/>
        }
        {toggle && (<div className = "side-bar-box"><div className = "side-bar-links"><NavOptions sideBar={false}/></div></div>)}
      </div>
    </div>
  );
}

export default NavBar;