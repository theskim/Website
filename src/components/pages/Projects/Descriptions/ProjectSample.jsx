import { useState } from "react";
import ImageSlide from "../../../../assets/ImageSlide/ImageSlide";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import "./Project.css";
import ProjectLinks from "../../Modal/ProjectLinks";
import SetOverflow from "../../Modal/SetOverflow";

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
                <BriefDescription {...props}/>
            </div>
            <div className = "project-image-box">
                <ImageSlide img={props.images}/>
            </div>
            <button className="my-button" type="button" onClick={() => {
                update(true);
                SetOverflow(true);
            }}>
                <p>View Description</p>
            </button>
            <div className = "project-description">
                { click
                    ?  <Modal update={update} {...props}/>
                    :  <></>
                }  
                <ProjectLinks {...props}/>
                <br/><br/>
            </div>
        </div>
    );
}

export default ProjectSample;