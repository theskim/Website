import { React, useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import "./Experience.css";
import SetOverflow from "../../Modal/SetOverflow";

const ExperienceSample = (props) => {
    const [click, update] = useState(false);
    const ref = useRef(null);
    const scrollToElement = () => ref.current?.scrollIntoView();

    return (
        <div className = "experience-box">
            <div className = "experience-title" ref={ref}>
                <h1>{props.title}</h1>
            </div>
            <div className = "experience-skills">
                <BriefDescription {...props}/>
            </div>
            <img className="experience-logo" src={props.image} alt=""/><br/>
            <button className="my-button" type="button" onClick={() => {
                update(true);
                SetOverflow(true);
            }}>
                <p>View Description</p>
            </button>
            <div className = "experience-description">
                { click
                    ?  <Modal update={update} {...props}/>
                    :  <>{scrollToElement()}</>
                }  
            </div>
        </div>
    );
}

export default ExperienceSample;