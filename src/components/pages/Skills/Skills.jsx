import "./Skills.css";
import Tools from "./Tools";
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../BackgroundAll/BackgroundAll";

const Title = () => {
    return ( 
        <div className="skills">
            <div className = "skills__title">
                <p> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p>
            </div>  
            <div className = "skills__text-box">
                <p>
                    This section showcases different Programming Languages, 
                    Frameworks, and Tools I have familiarized myself with.
                </p>
            </div>  
        </div>
    )
}

const Skills = () => {
    return (
        <BackgroundAll>
            <Title/>
            <div className="divider"/>
            <Tools/>
            <div className="divider"/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Skills;