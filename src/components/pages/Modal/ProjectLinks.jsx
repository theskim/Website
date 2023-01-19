import { GithubLogo } from "../../../assets/ToolLogos";

const ProjectLinks = ({ link, github }) => {
    return (
        <div className = "project-links">
            <span className="project-link">
                <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>                  
                {link !== undefined && <a href = {link}>Click Here</a>}
                {link === undefined && <span className="gray">Unavailable</span>}
            </span>
            <span className="project-link">
                <img src={GithubLogo} loading='lazy' alt='Loading..'/>
                <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                {github !== undefined && <a href={github}>Click Here</a>}
                {github === undefined && <span className="gray">Unavailable</span>}
            </span>
            <br/><br/>
        </div>     
    );
}
export default ProjectLinks;