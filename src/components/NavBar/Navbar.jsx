import { React, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { SmoothScroll } from './SmoothScroll';
import "./Navbar.css";
import { SkimLogo, burgerBar, xBar } from "../../assets";

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
        {props.disableSideBar
          ? <p onMouseOver={() => update1(true)} onMouseOut={() => update1(false)}> 
              { hover1
                ? <>&#127968;&nbsp;&nbsp; Home</>
                : <>Home</>
              }
            </p>
          : <p>&#127968;&nbsp;&nbsp;Home</p>
        }
      </NavLink>
      <NavLink to='/skills' className="nav-link" onClick={SmoothScroll}>
        {props.disableSideBar
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
        {props.disableSideBar
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
        {props.disableSideBar
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
        {props.disableSideBar
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
        {props.disableSideBar
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
  const [toggle, update] = useState(false);
  const [yPos, setYPos] = useState(0);
  const [display, updateDisplay] = useState(true);

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
      { display
        ? <div className = "nav-bar">
            <div className = "nav-bar-image">
              <img src={SkimLogo} alt='SK'/>
            </div>
            <div className = "top-bar">
              <div className = "nav-links">
                <NavOptions disableSideBar={true}/>
              </div>
            </div>
            <div className = "side-bar">      
              {toggle
                ? <><img className = "x-bar" src={xBar} onClick={() => update(false)} alt=""/><div className = "side-bar-box__activate"><div className = "side-bar-links"><NavOptions disableSideBar={false}/></div></div></>
                : <><img className = "burger-bar" src={burgerBar} onClick={() => update(true)} alt=""/><div className = "side-bar-box"><div className = "side-bar-links"><NavOptions disableSideBar={false}/></div></div></>
              }
            </div>
          </div>
        : <></>
      }
      </>
    );
}

export default NavBar;