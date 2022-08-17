import { useState } from "react";
import "./Achievements.css"
import achievementData from "./AchievementsData.json"
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../BackgroundAll/BackgroundAll";

const Title = () => {
    return (
        <p className = "achievement-title">
            &#127942;&nbsp;&nbsp;ACHIEVEMENTS
        </p>
    )
}

const Achievement = (props) => { 
    const [click, update] = useState(true);
    return (
        <div className = "achievement-box">
            <div className = "achievement-overview">
                { click
                    ? <p>{props.name}<br/>
                      <b>{props.date}</b><br/><br/></p>
                    : <p>{props.description}<br/><br/></p>
                }   
            </div>
            <button className="my-button" type="button" onClick={() => update(!click)}>
                { click
                    ? <p>View Description</p>
                    : <p>&emsp;View Title&emsp;</p>
                }   
            </button>
        </div>
    )
}

const Achievements = () => {
    return (
        <BackgroundAll>
            <Title/>
            <div className="divider"/>
            {(Object.values(Object.values(achievementData))).map(key => (<Achievement name={key.name} date={key.date} description={key.description} />))}
            <div className="divider"/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Achievements;