import { React, useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import SetOverflow from "../../Modal/SetOverflow";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setNavBar } from "../../../../index";
import "../../Modal/Section.scss";

const ExperienceSample = (props) => {
    const [click, update] = useState(false);
    const ref = useRef(null);
    const scrollToElement = () => ref.current?.scrollIntoView();
    const dispatch = useDispatch();

    const handleReturn = useCallback(() => {
        if (!click){
            dispatch(setNavBar(false));
            console.log(ref.current);
            scrollToElement(); 
        }
    }, [click, dispatch]);

    return (
        <div className = "section-wrapper">
            <div className="section-image-box">
                <img className="experience-logo" src={props.image} alt=""/>
            </div>
            <div className="section-text-box">    
                <div className = "section-title" ref={ref}>
                    <h2>{props.title}</h2>
                </div>
                <div className = "section-skills">
                    <BriefDescription {...props}/>
                </div>
                <div className="section-image-box__mobile">
                    <img className="experience-logo" src={props.image} alt=""/><br/>
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