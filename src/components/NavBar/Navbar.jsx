import { React, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavOption from "./NavOption";
import { SkimLogo, burgerBar } from "../../assets/GeneralLogos";
import "./Navbar.css";

const NavOptions = (props) => {
  const [hover1, update1] = useState(false);
  const [hover2, update2] = useState(false);
  const [hover3, update3] = useState(false);
  const [hover4, update4] = useState(false);
  const [hover5, update5] = useState(false);
  const [hover6, update6] = useState(false);

  return (
    <>
      <NavOption to='/' title="Home" emoji={<>&#127968;</>} hover={hover1} update={update1} {...props}/>
      <NavOption to='/skills' title="Skills" emoji={<>&#128104;&#8205;&#128187;</>} hover={hover2} update={update2} {...props}/>
      <NavOption to='/experiences' title="Experiences" emoji={<>&#128188;</>} hover={hover3} update={update3} {...props}/>
      <NavOption to='/projects' title="Projects" emoji={<>&#128221;</>} hover={hover4} update={update4} {...props}/>
      <NavOption to='/achievements' title="Achievements" emoji={<>&#127942;</>} hover={hover5} update={update5} {...props}/>
      <NavOption href='https://docs.google.com/document/d/1LYTIGA1HsmgeMmJBwkPYlB651evgiylYII6ETh6Bb4I/edit?usp=sharing' title="Resume" emoji={<>&#128195;</>} hover={hover6} update={update6} {...props}/>
    </>
  );
}

const NavBar = () => {
  const [yPos, setYPos] = useState(0);
  const [displayNav, updateDisplayNav] = useState(true);

  const showSideBar = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleScroll = useCallback(() => {
    const currentYPos = window.pageYOffset;
    updateDisplayNav(currentYPos < yPos || currentYPos < 300 || showSideBar);
    setYPos(currentYPos);
  }, [yPos, showSideBar]);

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [yPos, handleScroll]);


  return (
      <>
        ? <div className = {displayNav || showSideBar ? "nav-bar__activate" : "nav-bar"} onClick={(e) => {e.stopPropagation(); dispatch({type: "UNSHOW"})}}>
            <div className = "nav-bar__image">
              <img src={SkimLogo} alt='SK'/>
            </div>
            <div className = "top-bar">
              <div className = "nav-bar__links">
                <NavOptions mobile={false}/>
              </div>
            </div>
            <div className = "side-bar">      
              <img className = "burger-bar" src={burgerBar} onClick={(e) => {e.stopPropagation(); dispatch({type: "SHOW"})}} alt=""/>
                <div className = {showSideBar ? "side-bar-box__activate" : "side-bar-box"} onClick={(e) => {e.stopPropagation(); dispatch({type: "SHOW"})}}>
                  <div className = "side-bar__links">
                    <NavOptions mobile={true}/>
                  </div>
                </div>
            </div>
          </div>
      </>
    );
}

export default NavBar;