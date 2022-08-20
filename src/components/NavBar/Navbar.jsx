import { React, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SmoothScroll } from './SmoothScroll';
import { SkimLogo, burgerBar } from "../../assets";
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
      <NavLink to='/' className ="nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update1(true)} onMouseOut={() => update1(false)}> 
              { hover1
                ? <>&#127968;&nbsp;&nbsp;Home</>
                : <>Home</>
              }
            </p>
          : <p>&#127968;&nbsp;&nbsp;Home</p>
        }
      </NavLink>
      <NavLink to='/skills' className="nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update2(true)} onMouseOut={() => update2(false)}> 
              { hover2
                ? <>&#128104;&#8205;&#128187;&nbsp;&nbsp;Skills</>
                : <>Skills</>
              }
            </p>
          : <p>&#128104;&#8205;&#128187;&nbsp;&nbsp;Skills</p>
        }
      </NavLink>
      <NavLink to='/experiences' className = "nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update3(true)} onMouseOut={() => update3(false)}> 
              { hover3
                ? <>&#128188;&nbsp;&nbsp;Experiences</>
                : <>Experiences</>
              }
            </p>
          : <p>&#128188;&nbsp;&nbsp;Experiences</p>
        }
      </NavLink>
      <NavLink to='/projects' className = "nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update4(true)} onMouseOut={() => update4(false)}> 
              { hover4
                ? <>&#128221;&nbsp;&nbsp;Projects</>
                : <>Projects</>
              }
            </p>
          : <p>&#128221;&nbsp;&nbsp;Projects</p>
        }
      </NavLink>
      <NavLink to='/achievements' className = "nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update5(true)} onMouseOut={() => update5(false)}> 
            { hover5
              ? <>&#127942;&nbsp;&nbsp;Achievements</>
              : <>Achievements</>
            }
          </p>
          : <p>&#127942;&nbsp;&nbsp;Achievements</p>
        }
      </NavLink>
      <a href="https://docs.google.com/document/d/1LYTIGA1HsmgeMmJBwkPYlB651evgiylYII6ETh6Bb4I/edit?usp=sharing" className = "nav-link" onClick={SmoothScroll}>
        {props.mobile
          ? <p onMouseOver={() => update6(true)} onMouseOut={() => update6(false)}> 
            { hover6
              ? <>&#128195;&nbsp;&nbsp;Resume</>
              : <>Resume</>
            }
          </p>
          : <p>&#128195;&nbsp;&nbsp;Resume</p>
        }
      </a>
    </>
  );
}

const NavBar = () => {
  const [yPos, setYPos] = useState(0);
  const [display, updateDisplay] = useState(true);

  const showSideBar = useSelector( (state) => state );
  const dispatch = useDispatch();

  const handleScroll = useCallback(() => {
    const currentYPos = window.pageYOffset;
    updateDisplay(currentYPos < yPos || currentYPos < 300);
    setYPos(currentYPos);
  }, [yPos]);

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [yPos, handleScroll]);


  return (
      <>
      { display || showSideBar
        ? <div className = "nav-bar" onClick={(e) => {e.stopPropagation(); dispatch({type: "UNSHOW"})}}>
            <div className = "nav-bar-image">
              <img src={SkimLogo} alt='SK'/>
            </div>
            <div className = "top-bar">
              <div className = "nav-links">
                <NavOptions mobile={true}/>
              </div>
            </div>
            <div className = "side-bar">      
              <img className = "burger-bar" src={burgerBar} onClick={(e) => {e.stopPropagation(); dispatch({type: "SHOW"})}} alt=""/>
              { showSideBar
                ? <div className = "side-bar-box__activate" onClick={(e) => {e.stopPropagation(); dispatch({type: "SHOW"})}}><div className = "side-bar-links"><NavOptions mobile={false}/></div></div>
                : <div className = "side-bar-box"><div className = "side-bar-links"><NavOptions mobile={false}/></div></div>
              }
            </div>
          </div>
        : null
      }
      </>
    );
}

export default NavBar;