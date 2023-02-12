import { useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import SetOverflow from "../../Modal/SetOverflow";
import "../../Modal/Section.scss";

const ProjectSample = (props) => {
    const [click, update] = useState(false);
    const ref = useRef(null);
    const scrollToElement = () => ref.current?.scrollIntoView({ behavior: "auto" });

    return (
        <div className="section-wrapper">
            <div className="section-image-box">
                <img className="section-logo" src={props.image} alt=""/>
            </div>
            <div className="section-text-box">
                <h2 ref={ref}>
                    {props.title}
                </h2>
                <div className="section-skills">
                    <BriefDescription {...props}/>
                </div>
                <div className="section-image-box__mobile">
                    <img className="section-logo" src={props.image} alt=""/><br/>
                </div>
                <button className="my-button" type="button" onClick={() => {
                    update(true);
                    SetOverflow(true);
                }}>
                    <p>View Description</p>
                </button>
                <div className="section-description">
                    { click
                        ?  <Modal update={update} {...props}/>
                        :  <>{scrollToElement()}</>
                    }  
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;