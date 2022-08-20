import Tools from "./Tools";
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Skills.css";

const Title = () => {
    return ( 
        <div className="skills">
            <div className = "skills__title">
                <p> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p>
            </div>  
            <div className = "skills__text-box">
                <p>
                    This section showcases different Programming Languages, 
                    Frameworks, and Tools I had utilized in my career.
                </p>
            </div>  
        </div>
    )
}

const Skills = () => {
    return (
        <BackgroundAll>
            <Title/>
            <Divider/>
            <Tools/>
            <Divider/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Skills;