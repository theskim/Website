import "./Skills.css";
import Footer from "../../Footer/Footer";
import Languages from "./Languages";
import Tools from "./Tools";

const Title = () => {
    return( 
        <>
            <div className = "title">
                <p> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p>
            </div>  
            <div className = "text-box">
                <p className = "text">
                    This section lists different Programming Languages, 
                    Frameworks, and Tools I have experienced before.
                </p>
            </div>  
        </>
    )
}

const Skills = () => {
    return (
        <>
            <div className = "skills">
                <Title/>
                <Languages/>
                <Tools/>
            </div>
            <Footer/>
        </>
    );
}

export default Skills;