import { useState } from "react";
import "./Style.css";
import ImageSlide from "./ImageSlide";
import { Github } from "../../../assets";

const ProjectSample = (props) => {
    const [click, update] = useState(false);
    
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
            <button className="my-button" type="button" onClick={() => update(!click)}>
                { click
                    ?  <p>Hide Description</p>
                    :  <p>View Description</p>
                }  
            </button>
            <div className = "project-description">
                { click
                    ?  <p>{props.children}<br/><br/></p>
                    :  <></>
                }  
                <div className = "project-links">
                    <div className = "link-availability"> 
                        <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>                  
                        {props.project.link !== undefined
                            ? <a href = {props.project.link}>Click Here</a>
                            : <span className = "gray">Unavailable</span>
                        }
                    </div><br/><br/>
                    <div className = "github-availability"> 
                        <img src={Github} alt='main'/>
                        <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                        {props.project.github !== undefined
                        ?<a href = {props.project.github}>
                            Click Here
                         </a>
                        :<span className = "gray">
                             Unavailable
                        </span>
                        }
                    </div><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;