import "./Style.css"
import { Html, Css, Js, Python, C, ReactLogo, NextLogo, Git, Github, NetlifyLogo, ReduxLogo } from "../../../assets";

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
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128187;</>}>Languages</ToolsTitle>
                <Tool location={Html} name="HTML5"/>
                <Tool location={Css} name="CSS3"/>
                <Tool location={Js} name="JavaScript (ES6+)"/>
                <Tool location={Python} name="Python"/>
                <Tool location={C} name="C"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128736;&#65039;</>}>Frameworks</ToolsTitle>
                <Tool location={ReactLogo} name="React.js"/>
                <Tool location={NextLogo} name="Next.js"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128218;</>}>Libraries</ToolsTitle>
                <Tool location={ReduxLogo} name="Redux"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#127899;&#65039;</>}>Version Control</ToolsTitle>
                <Tool location={Git} name="Git"/>
                <Tool location={Github} name="GitHub"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128233;</>}>Deployment</ToolsTitle>
                <Tool location={NetlifyLogo} name="Netlify"/>
            </div>
        </ToolsBox>
    );
}

export default Tools;