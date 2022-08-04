import "./Style.css"
import { ReactLogo, Git, Github } from "../../../assets";

const Title = () => {
    return(
        <>
            <div className = "tools-bold">
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

const ToolsBox = (props) => {
    return (
        <div className = "tools">
            {props.children}
        </div>
    );
}

const Tools = () => {
    return (
        <ToolsBox>
            <Title/>
            <Tool location={ReactLogo} name="React.js"/>
            <Tool location={Git} name="Git"/>
            <Tool location={Github} name="GitHub"/>
        </ToolsBox>
    );
}

export default Tools;