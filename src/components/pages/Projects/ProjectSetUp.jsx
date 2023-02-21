const ProjectSetUp = ({ setup }) => {
    return (
        <>
            { setup !== undefined 
                ? <div className="project__setup">
                    <p>&#9881;&#65039;&nbsp;&nbsp;Set Up:</p>
                    {setup.map((command) =>  
                        <code key={command}>{command}</code>
                    )}
                 </div>
                : <></>
            }
        </>
    );
}

export default ProjectSetUp;