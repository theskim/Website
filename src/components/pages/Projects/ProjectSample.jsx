import "./Style.css";
import ImageSlide from "./ImageSlide";
import { Github } from "../../../assets";

const ProjectSample = (props) => {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>
                    {props.project.title}
                </p>
            </div>
            <div className = "project-tools">
                    <h4>
                        &#128197;&nbsp;{props.project.date}&nbsp;&nbsp;
                    </h4>
                    <p>
                        <b>Skills:&nbsp;</b> 
                        {props.project.skills}
                    </p>
                </div>
            <div className = "project-image-box">
                <ImageSlide img={props.project.img}/>
            </div>
            <div className = "project-description">
                <p>{props.children}<br/><br/></p>
                <div className = "project-links">
                    <div className = "link-availability"> 
                        <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>                  
                        {props.project.link.availability ? (
                            <a href = {props.project.link.url}>
                                Click Here
                            </a>
                        ):(
                            <span className = "gray">
                                Unavailable
                            </span>
                        )}
                    </div><br/><br/>
                    <div className = "github-availability"> 
                        <img src={Github} alt='main'/>
                        <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                        {props.project.github.availability ? (
                            <a href = {props.project.github.url}>
                                Click Here
                            </a>
                        ):(
                            <span className = "gray">
                                Unavailable
                            </span>
                        )}
                    </div><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;