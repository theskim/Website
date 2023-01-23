import Project from "./Project";
import { FutbolTabolImage } from '../../../../assets/ProjectImages';

const FutbolTabol = () => {
    return (
        <Project
            title="FutbolTabol"
            alt="FutbolTabol"
            skills="React.js • Next.js • styled-components • Football Standings API"
            image={FutbolTabolImage}
            link="https://futboltabol.netlify.app/"
            github="https://github.com/skim1601/FutbolTabol"
            setup= {[
                "git clone https://github.com/skim1601/FutbolTabol", 
                "npm install",
                "npm run dev"
            ]}
        >
            A website that allows the user to check the live standing of football leagues around the world!<br/><br/>
            Created by: Sean Kim
        </Project>
    );
}

export default FutbolTabol;