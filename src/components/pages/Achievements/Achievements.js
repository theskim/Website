import { useState } from "react";
import "./Achievements.css"
import Footer from "../../Footer/Footer";
import achievementList from "./Achievements.json"
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
                ? <p>&emsp;&#x1F4CB;&nbsp;&nbsp;{props.achievement.name}<br/><b>{props.achievement.date}</b><br/><br/></p>
                : <p>{props.achievement.description}<br/><br/></p>
                }   
            </div>
            <button type="button" onClick={() => update(!click)}>
                { click
                ? <p>Description</p>
                : <p>Title</p>
                }   
            </button>
        </div>
    )
}

const ScanAchievements = () => {
    var allAchievements = []
    for (var prop in achievementList){
        allAchievements.push(<Achievement achievement={achievementList[prop]}/>);
    }
    return allAchievements;
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
                <ScanAchievements/>
                <ContactMe/>
            </AchievementBox>
            <Footer/>
        </>
    );
}

export default Achievements;