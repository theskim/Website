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

const Wrapper = ({ children }) => {
    return (
        <div className="tools">
            {children}
        </div>
    );
}

const Tool = ({ location, name }) => {
    return (
        <div className="tooltip-wrap">
            {location}<br/>
            <p className="tooltip-content">{name}</p> 
        </div>
    )
}

const ToolSection = ({ title, emoji, tools }) => {
    return (
        <>
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
    const section = [
        {location: <Icon icon="devicon-plain:c" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "C"},
        {location:<Icon icon="simple-icons:cplusplus" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "C++"},
        {location: <Icon icon="mdi:language-python"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"/>, name: "Python"},
        {location: <Icon icon="mdi:language-rust"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"/>, name: "Rust"},
        {location: <Icon icon="ion:logo-html5" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "HTML5"},
        {location: <Icon icon="ion:logo-css3" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "CSS3"},
        {location: <Icon icon="mdi:language-javascript" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "JavaScript (ES6+)"},
        {location: <Icon icon="mdi:react" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "React.js"},
        {location: <Icon icon="tabler:brand-nextjs" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Next.js"},
        {location: <Icon icon="tabler:brand-redux" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Redux"},
        {location: <Icon icon="mdi:sass" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "SASS"},
        {location: <Icon icon="radix-icons:stitches-logo" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "stitches.dev"},
        {location: <Icon icon="mdi:language-php" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"  />, name: "PHP"},
        {location: <Icon icon="akar-icons:node-fill"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Node.js"},
        {location: <Icon  icon="simple-icons:express"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Express.js"},
        {location: <Icon icon="tabler:brand-mongodb" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MongoDB"},
        {location: <Icon icon="ph:file-sql" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "SQL"},
        {location: <Icon icon="tabler:brand-mysql" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MySQL"},
        {location: <Icon icon="bxl:postgresql" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "PostgreSQL"},
        {location:<Icon icon="file-icons:matlab" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "MATLAB"},
        {location: <Icon icon="file-icons:arduino" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Arduino"},
        {location: <Icon icon="file-icons:verilog" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Verilog"},
        {location: <Icon icon="file-icons:assembly-arm" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "ARM Assembly"},
        {location: <Icon icon="file-icons:assembly-intel" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Intel Quartus Prime"},
        {location: <Icon icon="mdi:docker"  width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)"/>, name: "Docker"},
        {location: <Icon icon="simple-icons:vim" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Vim"},
        {location: <Icon icon="simple-icons:tmux" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "tmux"},
        {location: <Icon icon="simple-icons:gtk" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "GTK"},
        {location: <Icon icon="ph:git-branch" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "Git"},
        {location: <Icon icon="mdi:github" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "GitHub"},
        {location: <Icon icon="akar-icons:vscode-fill" width="min(20vw, 8rem)" cursor="pointer" margin="min(19vw, 3rem)" color="rgb(91, 58, 255)" />, name: "VSCode"},
    ];	

    return (
        <Wrapper>
            <ToolSection title="Prior Experience In" emoji={<>&#128071;</>} tools={section} />
        </Wrapper>
    );
}

export default Tools;