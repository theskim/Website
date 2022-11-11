import { HtmlLogo, CssLogo, SASSLogo, JavascriptLogo, PythonLogo, CLogo, CPPLogo, PHPLogo, ReactLogo, NextLogo, GitLogo, GithubLogo, HerokuLogo, NetlifyLogo, ReduxLogo, MATLABLogo, VerilogLogo, StyledComponentsLogo, VSCodeLogo, MySQLLogo, FigmaLogo, ModelsimLogo, QuartusLogo, DjangoLogo, DjangoRestLogo } from "../../../../assets/ToolLogos";
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
                <ToolsTitle emoji={<>&#9997;</>}>Languages</ToolsTitle>               
                <Tool location={CLogo} name="C"/>
                <Tool location={CPPLogo} name="C++"/>
                <Tool location={PythonLogo} name="Python"/>
                <Tool location={HtmlLogo} name="HTML5"/>
                <Tool location={CssLogo} name="CSS3"/>
                <Tool location={JavascriptLogo} name="JavaScript (ES6+)"/>
                <Tool location={PHPLogo} name="PHP"/>
                <Tool location={VerilogLogo} name="Verilog"/>
                <Tool location={MATLABLogo} name="MATLAB"/>
            </div>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128187;</>}>Frontend</ToolsTitle>               
                <Tool location={HtmlLogo} name="HTML5"/>
                <Tool location={CssLogo} name="CSS3"/>
                <Tool location={JavascriptLogo} name="JavaScript (ES6+)"/>
                <Tool location={ReactLogo} name="React.js"/>
                <Tool location={NextLogo} name="Next.js"/>
                <Tool location={ReduxLogo} name="Redux"/>
                <Tool location={SASSLogo} name="SASS"/>
                <Tool location={StyledComponentsLogo} name="Styled Components"/>
                <Tool location={FigmaLogo} name="Figma"/>
            </div>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128421;&#65039;</>}>Backend</ToolsTitle>
                <Tool location={PHPLogo} name="PHP"/>
                <Tool location={PythonLogo} name="Python"/>
                <Tool location={DjangoLogo} name="Django"/>
                <Tool location={DjangoRestLogo} name="Django REST"/>
            </div>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128202;</>}>Database</ToolsTitle>
                <Tool location={MySQLLogo} name="MySQL"/>
                <Tool location={DjangoLogo} name="Django"/>
            </div>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#127899;&#65039;</>}>Version Control</ToolsTitle>
                <Tool location={GitLogo} name="Git"/>
                <Tool location={GithubLogo} name="GitHub"/>
                <Tool location={VSCodeLogo} name="VSCode"/>
            </div>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128228;</>}>Deploy</ToolsTitle>
                <Tool location={HerokuLogo} name="Heroku"/>
                <Tool location={NetlifyLogo} name="Netlify"/>
            </div>
            <div className="tool__section">
                <ToolsTitle emoji={<>&#128297;</>}>Hardware</ToolsTitle>
                <Tool location={VerilogLogo} name="Verilog"/>
                <Tool location={ModelsimLogo} name="Modelsim"/>
                <Tool location={QuartusLogo} name="Quartus"/>
            </div>
        </ToolsBox>
    );
}

export default Tools;