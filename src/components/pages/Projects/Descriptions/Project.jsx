import { useState, useRef, useEffect } from "react";
import Modal from "../../Modal/Modal";
import BriefDescription from "../../Modal/BriefDescription";
import SetOverflow from "../../Modal/SetOverflow";
import "../../Modal/Section.scss";

const useModal = (initialState, ref) => {
    const [click, update] = useState(initialState);
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "auto" });
    }, [click]);
    return [click, update];
};

const ProjectSample = (props) => {
    const ref = useRef(null);
    const [click, update] = useModal(false, ref);
    return (
        <div className="section-wrapper">
            <div className="section-image-box">
                <img className="section-logo" src={props.image}/>
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
                        :  null
                    }  
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;