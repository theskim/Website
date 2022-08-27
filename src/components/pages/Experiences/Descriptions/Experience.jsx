import { React, useState, useRef } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import SetOverflow from "../../Modal/SetOverflow";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setNavBar } from "../../../../index";
import "./Experience.scss";

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
        <div className = "experience-box">
            <div className = "experience-title" ref={ref}>
                <h2>{props.title}</h2>
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
                    :  <>{handleReturn()}</>
                }  
            </div>
        </div>
    );
}

export default ExperienceSample;