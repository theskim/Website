import { React, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkimLogo, burgerBar } from "../../assets/GeneralLogos";
import NavOptions from "./NavOptions";
import "./Navbar.css";
import "./Sidebar.css";

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
          <div className = {displayNav || showSideBar ? "nav-bar__activate" : "nav-bar"} onClick={(e) => {e.stopPropagation(); dispatch({type: "UNSHOW"})}}>
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
                    <NavOptions mobile={true}/>
                </div>
            </div>
          </div>
      </>
    );
}

export default NavBar;