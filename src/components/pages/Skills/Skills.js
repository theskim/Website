import "./Skills.css";
import { Html, Css, Js, Python, Java, C } from "../../../assets";

function Skills(){
    return (
        <div className = "skills">
            <p className = "title"> &#128104;&#8205;&#128187;&nbsp;&nbsp;SKILLS</p>
            <div className = "languages">
                <p className = "bold"> Languages </p><br/>
                <div class="tooltip-wrap">
                    <img src={Html} alt='main' /> <br/>
                    <div class="tooltip-content">
                        Html
                    </div> 
                </div>
                <div class="tooltip-wrap">
                    <img src={Css} alt='main' /> <br/>
                    <div class="tooltip-content">
                        Css
                    </div> 
                </div>
                <div class="tooltip-wrap">
                    <img src={Js} alt='main' /> <br/>
                    <div class="tooltip-content">
                        JavaScript
                    </div> 
                </div>
                <div class="tooltip-wrap">
                    <img src={Python} alt='main' /> <br/>
                    <div class="tooltip-content">
                        Python
                    </div> 
                </div>
                <div class="tooltip-wrap">
                    <img src={Java} alt='main' /> <br/>
                    <div class="tooltip-content">
                        Java
                    </div> 
                </div>
                <div class="tooltip-wrap">
                    <img src={C} alt='main' /> <br/>
                    <div class="tooltip-content">
                        C
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Skills;