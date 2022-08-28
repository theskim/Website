import Tools from "./Tools/Tools";
import ContactMe from "../ContactMe/ContactMe";
import Background from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Skills.scss";

const Title = () => {
    return ( 
        <div className = "skills__title">
            <h1> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</h1>
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