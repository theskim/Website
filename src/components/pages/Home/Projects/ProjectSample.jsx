import { useState } from "react";
import ImageSlide from "./ImageSlide/ImageSlide";
import { GithubLogo } from "../../../../assets/ToolLogos";
import "./Project.css";

const ProjectSample = (props) => {
    const [click, update] = useState(false);
    
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>
                    {props.title}
                </p>
            </div>
            <div className = "project-tools">
                    <h4>
                        &#128197;&nbsp;{props.date}&nbsp;&nbsp;
                    </h4>
                    <p>
                        <b>Skills:&nbsp;</b> 
                        {props.skills}
                    </p>
                </div>
            <div className = "project-image-box">
                <ImageSlide img={props.images}/>
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
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>                  
                    {props.link !== undefined
                        ? <a href = {props.link}>Click Here</a>
                        : <span className = "gray">Unavailable</span>
                    }
                    <br/><br/>
                    <img src={GithubLogo} alt='main'/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                    {props.github !== undefined
                        ?<a href = {props.github}>
                            Click Here
                         </a>
                        :<span className = "gray">
                             Unavailable
                        </span>
                    }
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;