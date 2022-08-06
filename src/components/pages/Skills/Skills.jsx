import "./Skills.css";
import Languages from "./Languages";
import Tools from "./Tools";
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../BackgroundAll/BackgroundAll";

const Title = () => {
    return ( 
        <>
            <div className = "skills__title">
                <p> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p>
            </div>  
            <div className = "skills__text-box">
                <p>
                    This section lists different Programming Languages, 
                    Frameworks, and Tools I have familiarized myself with.
                </p>
            </div>  
        </>
    )
}

const Skills = () => {
    return (
        <BackgroundAll>
            <Title/>
            <Languages/>
            <Tools/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Skills;