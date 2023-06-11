import { useState, useRef } from "react";
import Modal from "./Modal";
import "./Section.scss";
import { Icon } from '@iconify/react';

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
                    <Icon icon="ant-design:project-filled" />&nbsp;{props.title}
                </h2>
                <div className="section-skills">
                    <p>
                        <b><Icon icon="material-symbols:keyboard-previous-language" width="1.4rem"/>&nbsp;Tech Stack:&nbsp;</b>
                        {props.skills}
                    </p>
                </div>
                <div className="section-image-box__mobile">
                    <img className="section-logo" src={props.image} alt=""/><br/>
                </div>
                <button className="my-button" type="button" onClick={() => {
                    setTimeout(() => {
                        update(true);
                    }, 250);
                }}>
                    <p>View Description</p>
                </button>
                <div className="section-description">
                    { click
                        ?  <Modal update={update} scrollToElement={scrollToElement} {...props}/>
                        :  <>{scrollToElement()}</>
                    }  
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}

export default ProjectSample;