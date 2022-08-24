import { useState } from "react";
import AchievementTitle from "./AchievementsTitle";
import achievementData from "./AchievementsData.json"
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../../../assets/Background/Background";
import Divider from "../../../assets/Divider/Divider";
import "./Achievements.css"

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
            <AchievementTitle/>
            <Divider/>
                {(Object.values(Object.values(achievementData))).map(key => (
                    <Achievement name={key.name} date={key.date} description={key.description} />
                ))}
            <Divider/>
            <ContactMe/>
        </BackgroundAll>
    );
}

export default Achievements;