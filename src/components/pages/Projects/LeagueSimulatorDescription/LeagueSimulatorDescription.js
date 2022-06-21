import "../Style.css";
import ImageSlide from "./Imageslide";
import { Github } from "../../../../assets";

function LeagueSimDes () {
    return (
        <div className = "project-box">
            <div className = "project-title">
                <p>Soccer League Simulator</p>
            </div>
            <div className = "project-tools">
                    <h4>&#128197;&nbsp;Dec 2021&nbsp;&nbsp;</h4>
                    <p><b>Skills:&nbsp;</b>Python</p>
                </div>
            <div className = "project-image-box">
                <ImageSlide/>
            </div>
            <div className = "project-description">
                <p>A python program that simulates the entire season (total 38 games per team)
                    of Top 5 European Soccer (Football) Leagues. This project started of
                    from my predictions when I was watching Premier League. I built the
                    league as an object, allowing the user to add and remove teams and change
                    the rating of each team. This means that any soccer league can be simulated through 
                    this program, of course with a little manipulation.
                <br/><br/>
                </p>
                <div className = "project-links">
                    <b>&#128279;&nbsp;&nbsp;Link:&nbsp;&nbsp;</b>
                    <span className = "gray">Unavailable</span><br/><br/>
                    <img src={Github} alt='main'/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>
                    <a href = "https://github.com/skim1601/LeagueSimulator">
                        github.com/skim1601/LeagueSimulator
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeagueSimDes;