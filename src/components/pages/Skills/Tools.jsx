import "./Tools.css"
import { ReactLogo, Git, Github } from "../../../assets";

const Title = () => {
    return(
        <>
            <div className = "bold">
                <ul>
                    &#128736;&#65039;&nbsp;&nbsp;Tools
                </ul>
            </div>
            <br/>
        </>
    )
}

const Tool = (props) => {
    return(
        <div class="tooltip-wrap">
            <img src={props.location} alt='main'/> <br/>
            <div class="tooltip-content">{props.name}</div> 
        </div>
    )
}

const Tools = () => {
    return (
        <div className = "tools">
            <Title/>
            <Tool location={ReactLogo} name="React"/>
            <Tool location={Git} name="Git"/>
            <Tool location={Github} name="GitHub"/>
        </div>
    );
}

export default Tools;