import "./Languages.css";
import { Html, Css, Js, Python, C } from "../../../assets";

function Languages(){
    return (
        <div className = "languages">
            <div className = "bold"><ul>&#128187;&nbsp;&nbsp;Languages</ul></div><br/>
            <div class="tooltip-wrap">
                <img src={Html} alt='main' /> <br/>
                <div class="tooltip-content">Html</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={Css} alt='main' /> <br/>
                <div class="tooltip-content">Css</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={Js} alt='main' /> <br/>
                <div class="tooltip-content">JavaScript</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={Python} alt='main' /> <br/>
                <div class="tooltip-content">Python</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={C} alt='main' /> <br/>
                <div class="tooltip-content">C</div> 
            </div>
        </div>
    );
}

export default Languages;