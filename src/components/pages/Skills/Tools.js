import "./Tools.css"
import { ReactLogo, Git, Github } from "../../../assets";

function Tools(){
    return (
        <div className = "tools">
            <div className = "bold"><ul>&#128736;&#65039;&nbsp;&nbsp;Tools</ul></div><br/>
            <div class="tooltip-wrap">
                <img src={ReactLogo} alt='main' /> <br/>
                <div class="tooltip-content">React</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={Git} alt='main' /> <br/>
                <div class="tooltip-content">Git</div> 
            </div>
            <div class="tooltip-wrap">
                <img src={Github} alt='main' /> <br/>
                <div class="tooltip-content">GitHub</div> 
            </div>
        </div>
    );
}

export default Tools;