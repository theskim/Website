import { GithubLogo } from "../../../assets/ToolLogos";

const ProjectLinks = (props) => {
    return (
        <div className = "project-links">
            <span className="project-link">
                <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>                  
                {props.link !== undefined
                    ? <a href = {props.link}>Click Here</a>
                    : <span className = "gray">Unavailable</span>
                }
            </span>
            { props.project 
                ?   <span className="project-link">
                        <img src={GithubLogo} alt='Loading..'/>
                            <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                            {props.github !== undefined
                                ?   <a href={props.github}>Click Here</a>
                                :   <span className = "gray">Unavailable</span>
                            }
                    </span>
                : <></>
            }
            <br/><br/>
        </div>     
    );
}

export default ProjectLinks;