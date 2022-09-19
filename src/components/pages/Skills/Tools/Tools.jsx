import { HtmlLogo, CssLogo, SASSLogo, JavascriptLogo, PythonLogo, CLogo, PHPLogo, ReactLogo, NextLogo, GitLogo, GithubLogo, HerokuLogo, NetlifyLogo, ReduxLogo, MATLABLogo } from "../../../../assets/ToolLogos";
import "./Tools.scss"

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
            <img src={props.location} loading='lazy' alt=''/> <br/>
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
                <Tool location={CLogo} name="C"/>
                <Tool location={PythonLogo} name="Python"/>
                <Tool location={HtmlLogo} name="HTML5"/>
                <Tool location={CssLogo} name="CSS3"/>
                <Tool location={JavascriptLogo} name="JavaScript (ES6+)"/>
                <Tool location={SASSLogo} name="SASS"/>
                <Tool location={PHPLogo} name="PHP"/>
                <Tool location={MATLABLogo} name="MATLAB"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128736;&#65039;</>}>Technologies</ToolsTitle>
                <Tool location={ReactLogo} name="React.js"/>
                <Tool location={NextLogo} name="Next.js"/>
                <Tool location={ReduxLogo} name="Redux"/>
                <Tool location={GitLogo} name="Git"/>
                <Tool location={GithubLogo} name="GitHub"/>
                <Tool location={HerokuLogo} name="Heroku"/>
                <Tool location={NetlifyLogo} name="Netlify"/>
            </div>
        </ToolsBox>
    );
}

export default Tools;