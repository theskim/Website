import Tool from "./Tool";
import "./Tools.scss"
import { Icon } from '@iconify/react';

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
        {location: <Icon icon="nonicons:c-16" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "C"},
        {location:<Icon icon="teenyicons:cplusplus-outline" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "C++"},
        {location: <Icon icon="mdi:language-python"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"/>, name: "Python"},
        {location: <Icon icon="ion:logo-html5" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "HTML5"},
        {location: <Icon icon="ion:logo-css3" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "CSS3"},
        {location: <Icon icon="mdi:language-javascript" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "JavaScript (ES6+)"},
        {location: <Icon icon="mdi:language-php" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "PHP"},
        {location: <Icon icon="file-icons:verilog" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />
        , name: "Verilog"},
        {location: <Icon icon="file-icons:assembly-arm" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "ARM Assembly"},
        {location:<Icon icon="file-icons:matlab" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MATLAB"}
    ];
    const frontend = [
        {location: <Icon icon="ion:logo-html5" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "HTML5"},
        {location: <Icon icon="ion:logo-css3" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "CSS3"},
        {location: <Icon icon="mdi:language-javascript" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "JavaScript (ES6+)"},
        {location: <Icon icon="mdi:react" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "React.js"},
        {location: <Icon icon="tabler:brand-nextjs" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Next.js"},
        {location: <Icon icon="mdi:vuejs" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Vue.js"},
        {location: <Icon icon="tabler:brand-redux" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Redux"},
        {location: <Icon icon="mdi:sass" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "SASS"},
        {location: <Icon icon="file-icons:styledcomponents" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "styled-components"},
        {location: <Icon icon="radix-icons:stitches-logo" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "stitches.dev"},
        {location: <Icon icon="ph:figma-logo-bold" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Figma"}
    ];
    const backend = [
        {location: <Icon icon="mdi:language-php" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "PHP"},
        {location: <Icon icon="mdi:language-javascript" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "JavaScript (ES6+)"},
        {location: <Icon icon="akar-icons:node-fill"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Node.js"},
        {location: <Icon  icon="simple-icons:express"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Express.js"},
    ];
    const database = [
        {location: <Icon icon="tabler:brand-mysql" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MySQL"},
        {location: <Icon icon="tabler:brand-mongodb" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MongoDB"}
    ];
    const versionControl = [
        {location: <Icon icon="ph:git-branch" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Git"},
        {location: <Icon icon="mdi:github" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "GitHub"},
        {location: <Icon icon="akar-icons:vscode-fill" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "VSCode"}
    ];
    const hardware = [
        {location: <Icon icon="file-icons:verilog" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />
        , name: "Verilog"},
        {location: <Icon icon="file-icons:assembly-arm" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "ARM Assembly"},
        {location: <Icon icon="file-icons:assembly-intel" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Intel Quartus Prime"},
        {location: <Icon icon="mdi:integrated-circuit" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "ModelSim"},
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