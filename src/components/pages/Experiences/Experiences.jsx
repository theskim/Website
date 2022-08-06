import './Experiences.css';
import EspDescription from './EspDescription';
import DeepDescription from './DeepDescription';
import UofTHacksDescription from './UofTHacksDescription';
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from "../BackgroundAll/BackgroundAll";

const Title = () => {
    return (
        <>
            <div className = "experiences__title-box">
                <p className = "title">&#128188;&nbsp;&nbsp;EXPERIENCES</p>
            </div>
            <div className = "experiences__text-box">
                <p className = "description">
                    This section lists different experiences I gained through
                    work, school, and volunteering. 
                </p>
            </div>
        </>
    )
};

const Experiences = () => {
    return (
        <BackgroundAll>
            <Title/>
            <UofTHacksDescription/>
            <DeepDescription/>
            <EspDescription/>
            <ContactMe/>
        </BackgroundAll>
    );
};

export default Experiences;