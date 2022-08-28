import Project from "./Project";
import { LeagueSimulatorFirst, LeagueSimulatorSecond, LeagueSimulatorThird, LeagueSimulatorFourth } from '../../../../assets/ProjectImages';

const LeagueSimulator = () => {
    return (
        <Project
            title="Soccer League Simulator"
            alt="League Simulator"
            date="Dec 2021"
            skills="Python"
            images={[
                LeagueSimulatorFirst, 
                LeagueSimulatorSecond, 
                LeagueSimulatorThird, 
                LeagueSimulatorFourth
            ]}
            github="https://github.com/skim1601/LeagueSimulator"
            setup= {[
                "git clone https://github.com/skim1601/LeagueSimulator.git", 
                "python leaguerunner.py"
            ]}
            project={true}
        >
            A Python program that simulates the entire season of the Top 4 European Soccer (Football) Leagues. 
            I built the league as an object, allowing the user to access built-in methods and properties. 
            This would allow the user to do something like adding and removing teams and changing the rating of each team.
            Any soccer league without playoffs can be simulated through this program, with a little manipulation. 
            Update: 22/23 leagues are available.
        </Project>
    );
}

export default LeagueSimulator;