import "./Skills.css";
import Languages from "./Languages";
import Tools from "./Tools";

function Skills(){
    return (
        <div className = "skills">
            <div className = "title"><p> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p></div> 
            <div className = "stripe1"/>
            <Languages />
            <div className = "stripe2"/>
            <Tools />
        </div>
    );
}

export default Skills;