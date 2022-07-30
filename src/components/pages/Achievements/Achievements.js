import "./Achievements.css"
import Footer from "../../Footer/Footer";
import achievementList from "./Achievements.json"
import ContactMe from "../ContactMe/ContactMe";

const Title = () => {
    return(
        <p className = "title">
            &#127942;&nbsp;&nbsp;ACHIEVEMENTS
        </p>
    )
}

const Achievement = (props) => {
    return(
        <div class="tooltip-wrap">
            <div className = "text-box">
                <p className = "text">
                    &emsp;&#x1F4CB;&nbsp;&nbsp;{props.achievement.name}<br/>
                    <p className = "bold">{props.achievement.date}</p><br/>
                </p>
            </div>
            <div class="tooltip-content">
                <p>{props.achievement.description}</p>
            </div>  
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