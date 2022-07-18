import "./Style.css";
import ImageSlide from "./ImageSlide";
import { Github } from "../../../assets";

const DoesLinkExist = (props) => {
    if (props.link.availability){
        return(
            <a href = {props.link.url}>
                Click Here
            </a>
        );
    } else{
        return(
            <span className = "gray">
                Unavailable
            </span>
        );
    }
}

const ProjectSample = (props) => {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>{props.project.title}</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;{props.project.date}&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b> {props.project.skills}</p>
                </div>
            <div className = "project-image-box">
                <ImageSlide img={props.project.img}/>
            </div>
            <div className = "project-description">
                <p>{props.project.description}
                <br/><br/>
                </p>
                <div className = "project-links">
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                    <DoesLinkExist link={props.project.link}/><br/><br/>
                    <img src={Github} alt='main'/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                    <DoesLinkExist link={props.project.github}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;