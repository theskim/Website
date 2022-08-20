import { React, useState } from "react";
import "./Experience.css";

const ExperienceSample = (props) => {
    const [click, update] = useState(false);

    return (
        <div className = "experience-box">
            <div className = "experience-title">
                <p>{props.title}</p>
            </div>
            <div className = "experience-skills">
                    <h4>
                        &#128197;&nbsp;{props.duration}&nbsp;&nbsp;
                    </h4>
                    <p>
                        <b>Skills:&nbsp;</b>
                        {props.skills}
                    </p>
                </div>
            <img src={props.image} alt=""/><br/>
            <button className="my-button" type="button" onClick={() => update(!click)}>
                { click
                    ?  <p>Hide Description</p>
                    :  <p>View Description</p>
                }  
            </button>
            <div className = "experience-description">
                { click
                    ?  <p>{props.children}</p>
                    :  <></>
                }
            </div>
        </div>
    );
}

export default ExperienceSample;