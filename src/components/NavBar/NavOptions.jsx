import { useState } from "react";
import NavOption from "./NavOption/NavOption";

const NavOptions = (props) => {
    const [hover1, update1] = useState(false);
    const [hover2, update2] = useState(false);
    const [hover3, update3] = useState(false);
    const [hover4, update4] = useState(false);
    const [hover5, update5] = useState(false);
  
    return (
      <>
        <NavOption to='/' title="Home" emoji={<>&#127968;</>} hover={hover1} update={update1} {...props}/>
        <NavOption to='/skills' title="Skills" emoji={<>&#128104;&#8205;&#128187;</>} hover={hover2} update={update2} {...props}/>
        <NavOption to='/experiences' title="Experiences" emoji={<>&#128188;</>} hover={hover3} update={update3} {...props}/>
        <NavOption to='/projects' title="Projects" emoji={<>&#128194;</>} hover={hover4} update={update4} {...props}/>
        <NavOption href='https://docs.google.com/document/d/10CALRWLR5nVSGOBpfnZh3_F1aLwK4bNRlKlNvgoBtwk/edit?usp=sharing' title="Resume" emoji={<>&#128195;</>} hover={hover5} update={update5} {...props}/>
      </>
    );
}

export default NavOptions;
  