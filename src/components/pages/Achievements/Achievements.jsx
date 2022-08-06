import { useState } from "react";
import "./Achievements.css"
import Footer from "../../Footer/Footer";
import achievementData from "./AchievementsData.json"
import ContactMe from "../ContactMe/ContactMe";

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
                    ? <p>&emsp;&#x1F4CB;&nbsp;&nbsp;{props.name}<br/>
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

const AchievementBox = (props) => {
    return (
        <div className = "achievements">
            {props.children}
        </div>
    );
}

const Achievements = () => {
    return (
        <>
            <AchievementBox>
                <Title/>
                {(Object.values(Object.values(achievementData))).map(key => (<Achievement name={key.name} date={key.date} description={key.description} />))}
                <ContactMe/>
            </AchievementBox>
            <Footer/>
        </>
    );
}

export default Achievements;