import { React, useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import SetOverflow from "../../Modal/SetOverflow";
import { useCallback } from "react";
import "../../Modal/Section.scss";

const ExperienceSample = (props) => {
    const [click, update] = useState(false);
    const ref = useRef(null);
    const scrollToElement = () => ref.current?.scrollIntoView();

    const handleReturn = useCallback(() => {
        if (!click){
            scrollToElement(); 
        }
    }, [click]);

    return (
        <div className = "section-wrapper">
            <div className="section-image-box">
                <img className="section-logo" src={props.image}/>
            </div>
            <div className="section-text-box">    
                <div className = "section-title" ref={ref}>
                    <h2>{props.title}</h2>
                </div>
                <div className = "section-skills">
                    <BriefDescription {...props}/>
                </div>
                <div className="section-image-box__mobile">
                    <img className="section-logo" src={props.image}/><br/>
                </div>
                <button className="my-button" type="button" onClick={() => {
                    update(true);
                    SetOverflow(true);
                }}>
                    <p>View Description</p>
                </button>
                <div className = "section-description">
                    { click
                        ?  <Modal update={update} {...props}/>
                        :  <>{handleReturn()}</>
                    }  
                </div>
            </div>
        </div>
    );
}

export default ExperienceSample;