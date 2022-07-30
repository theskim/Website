import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from './SmoothScroll';
import "./NavBar.css";
import { SkimLogo, burgerBar, xBar } from "../../assets";

const NavOptions = (props) => {
  return (
    <>
      <NavLink to='/' className ="nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Home</p>
          : <p>&#127968;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;<b>{">"}</b></p>
        }
      </NavLink>
      <NavLink to='/skills' className="nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Skills</p>
          : <p>&#128104;&#8205;&#128187;&nbsp;&nbsp;Skills&nbsp;&nbsp;&nbsp;&nbsp;<b>{">"}</b></p>
        }
      </NavLink>
      <NavLink to='/experiences' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Experiences</p>
          : <p>&#128188;&nbsp;&nbsp;Experiences&nbsp;&nbsp;<b>{">"}</b></p>
        }
      </NavLink>
      <NavLink to='/projects' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Projects</p>
          : <p>&#128221;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;&nbsp;<b>{">"}</b></p>
        }
      </NavLink>
      <NavLink to='/achievements' className = "nav-link" onClick={SmoothScroll}>
        {props.sideBar
          ? <p>Achievements</p>
          : <p>&#127942;&nbsp;&nbsp;Achievements&nbsp;&nbsp;<b>{">"}</b></p>
        }
      </NavLink>
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