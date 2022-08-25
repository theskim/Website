import { HtmlLogo, CssLogo, JavascriptLogo, PythonLogo, CLogo, PHPLogo, ReactLogo, NextLogo, GitLogo, GithubLogo, NetlifyLogo, ReduxLogo } from "../../../../assets/ToolLogos";
import "./Tools.css"

const ToolsTitle = (props) => {
    return (
        <>
            <div className = "tools-bold">
                <p>{props.emoji}&nbsp;&nbsp;{props.children}</p>
            </div>
            <br/>
        </>
    )
}

const Tool = (props) => {
    return (
        <div className="tooltip-wrap">
            <img src={props.location} alt='main'/> <br/>
            <div className="tooltip-content">{props.name}</div> 
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
                <Tool location={HtmlLogo} name="HTML5"/>
                <Tool location={CssLogo} name="CSS3"/>
                <Tool location={JavascriptLogo} name="JavaScript (ES6+)"/>
                <Tool location={PythonLogo} name="Python"/>
                <Tool location={CLogo} name="C"/>
                <Tool location={PHPLogo} name="PHP"/>
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
                <Tool location={GitLogo} name="Git"/>
                <Tool location={GithubLogo} name="GitHub"/>
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