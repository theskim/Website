import { React, useState } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import "./Experience.css";
import SetOverflow from "../../Modal/SetOverflow";

const ExperienceSample = (props) => {
    const [click, update] = useState(false);

    return (
        <div className = "experience-box">
            <div className = "experience-title">
                <p>{props.title}</p>
            </div>
            <div className = "experience-skills">
                <BriefDescription {...props}/>
            </div>
            <img className="experience-logo" src={props.image} alt=""/><br/>
            <button className="my-button" type="button" onClick={() => {
                update(!click);
                SetOverflow(true);
            }}>
                <p>View Description</p>
            </button>
            <div className = "experience-description">
                { click
                    ?  <Modal update={update} {...props}/>
                    :  <></>
                }  
            </div>
        </div>
    );
}

export default ExperienceSample;