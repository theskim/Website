import "./Style.css"
import { ReactLogo, Git, Github, NetlifyLogo } from "../../../assets";

const ToolsTitle = (props) => {
    return(
        <>
            <div className = "tools-bold">
                <p>{props.emoji}&nbsp;&nbsp;{props.children}</p>
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
            <ToolsTitle emoji={<>&#128736;&#65039;</>}>Frameworks</ToolsTitle>
            <Tool location={ReactLogo} name="React.js"/>
            <br/><br/>
            <ToolsTitle emoji={<>&#127899;&#65039;</>}>Version Control</ToolsTitle>
            <Tool location={Git} name="Git"/>
            <Tool location={Github} name="GitHub"/>
            <br/><br/>
            <ToolsTitle emoji={<>&#128233;</>}>Deployment</ToolsTitle>
            <Tool location={NetlifyLogo} name="Netlify"/>
        </ToolsBox>
    );
}

export default Tools;