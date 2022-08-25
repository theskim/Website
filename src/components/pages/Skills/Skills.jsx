import Tools from "./Tools/Tools";
import ContactMe from "../ContactMe/ContactMe";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Skills.css";

const Title = () => {
    return ( 
        <div className="skills">
            <div className = "skills__title">
                <h1> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</h1>
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
        <Background>
            <Title/>
            <Divider/>
            <Tools/>
            <Divider/>
            <ContactMe/>
        </Background>
    );
}

export default Skills;