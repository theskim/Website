import { HtmlLogo, CssLogo, SASSLogo, JavascriptLogo, PythonLogo, CLogo, CPPLogo, PHPLogo, ReactLogo, NextLogo, GitLogo, GithubLogo, ReduxLogo, MATLABLogo, VerilogLogo, StyledComponentsLogo, VSCodeLogo, MySQLLogo, FigmaLogo, ModelsimLogo, QuartusLogo, DjangoLogo, DjangoRestLogo } from "../../../../assets/ToolLogos";
import Tool from "./Tool";
import "./Tools.scss"

const ToolsTitle = ({ emoji, children }) => {
    return (
        <>
            <div className="tools-bold">
                <p>{emoji}&nbsp;&nbsp;{children}</p>
            </div>
            <br/>
        </>
    )
}

const ToolsBox = ({ children }) => {
    return (
        <div className="tools">
            {children}
        </div>
    );
}

const ToolSection = ({ title, emoji, tools }) => {
    return (
        <>
            <div className="divider"/>
            <div className="tool__section">
                <ToolsTitle emoji={emoji}>{title}</ToolsTitle>               
                {tools.map((tool, index) => (
                    <Tool key={index} location={tool.location} name={tool.name}/>
                ))}
            </div>
        </>
    );
}

const Tools = () => {
    const languages = [
        {location: CLogo, name: "C"},
        {location: CPPLogo, name: "C++"},
        {location: PythonLogo, name: "Python"},
        {location: HtmlLogo, name: "HTML5"},
        {location: CssLogo, name: "CSS3"},
        {location: JavascriptLogo, name: "JavaScript (ES6+)"},
        {location: PHPLogo, name: "PHP"},
        {location: VerilogLogo, name: "Verilog"},
        {location: MATLABLogo, name: "MATLAB"}
    ];
    const frontend = [
        {location: HtmlLogo, name: "HTML5"},
        {location: CssLogo, name: "CSS3"},
        {location: JavascriptLogo, name: "JavaScript (ES6+)"},
        {location: ReactLogo, name: "React.js"},
        {location: NextLogo, name: "Next.js"},
        {location: ReduxLogo, name: "Redux"},
        {location: SASSLogo, name: "SASS"},
        {location: StyledComponentsLogo, name: "styled-components"},
        {location: FigmaLogo, name: "Figma"}
    ];
    const backend = [
        {location: PHPLogo, name: "PHP"},
        {location: PythonLogo, name: "Python"},
        {location: DjangoLogo, name: "Django"},
        {location: DjangoRestLogo, name: "Django REST"}
    ];
    const database = [
        {location: MySQLLogo, name: "MySQL"},
        {location: DjangoLogo, name: "Django"}
    ];
    const versionControl = [
        {location: GitLogo, name: "Git"},
        {location: GithubLogo, name: "GitHub"},
        {location: VSCodeLogo, name: "VSCode"}
    ];
    const hardware = [
        {location: VerilogLogo, name: "Verilog"},
        {location: ModelsimLogo, name: "Modelsim"},
        {location: QuartusLogo, name: "Quartus"}
    ];

    return (
        <ToolsBox>
            <ToolSection title="Languages" emoji={<>&#9997;</>} tools={languages} />
            <ToolSection title="Frontend" emoji={<>&#128187;</>} tools={frontend} />
            <ToolSection title="Backend" emoji={<>&#128421;&#65039;</>} tools={backend} />
            <ToolSection title="Database" emoji={<>&#128202;</>} tools={database} />
            <ToolSection title="Version Control" emoji={<>&#127899;&#65039;</>} tools={versionControl} />
            <ToolSection title="Hardware" emoji={<>&#128297;</>} tools={hardware} />
        </ToolsBox>
    );
}

export default Tools;