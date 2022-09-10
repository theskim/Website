import Project from "./Project";
import { NumberSystemFirst, NumberSystemSecond} from '../../../../assets/ProjectImages';

const NumberSystem = () => {
    return (
        <Project
            title="Number System Converter"
            alt="Number System"
            date="Sep 2022"
            skills="React.js, JavaScript (ES6)"
            images={[
                NumberSystemFirst,
                NumberSystemSecond
            ]}
            link="https://numbersystemconverter.netlify.app/"
            github="https://github.com/skim1601/NumberSystemConverter"
            setup= {[
                "git clone https://github.com/skim1601/NumberSystemConverter.git", 
                "npm install",
                "npm start"
            ]}
            project={true}
        >
        After learning about different number systems in my Digital Systems class,
        I decided to create a website to convert numbers into different base systems. <br/><br/>
        Although this is a relatively simple React.js website, there were some challenges. 
        When the ParseInt function encounters a character that is not a numeral 
        in the specified radix, it ignores it and all remaining characters 
        and returns the integer value parsed up to that point. 
        As a result, I had to implement my own function to determine which character is invalid for
        each base system, and alert the user if it is invalid.
        </Project>
    );
}

export default NumberSystem;