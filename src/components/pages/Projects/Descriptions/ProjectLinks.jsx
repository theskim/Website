import { Icon } from '@iconify/react';

const ProjectLinks = ({ link, github }) => {
    return (
        <div className = "project-links">
            <span className="project-link">
                <Icon icon="material-symbols:media-link" width="1.9rem"/>
                <b>&nbsp;Demo:&nbsp;&nbsp;</b>                  
                {link !== undefined && <a href = {link}>Click Here</a>}
                {link === undefined && <span className="gray">Unavailable</span>}
            </span>
            <span className="project-link">
                <Icon icon="mdi:github" width="1.9rem"/>
                <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                {github !== undefined && <a href={github}>Click Here</a>}
                {github === undefined && <span className="gray">Unavailable</span>}
            </span>
            <br/><br/>
        </div>     
    );
}
export default ProjectLinks;