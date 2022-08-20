import EspDescription from './EspDescription';
import DeepDescription from './DeepDescription';
import UofTHacksDescription from './UofTHacksDescription';
import ContactMe from "../ContactMe/ContactMe";
import BackgroundAll from '../../../assets/Background/Background';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.css';

const Title = () => {
    return (
        <>
            <div className = "experiences__title-box">
                <p>&#128188;&nbsp;&nbsp;EXPERIENCES</p>
            </div>
            <div className = "experiences__text-box">
                <p>
                    This section showcases different experiences I gained through
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
            <Divider/>
            <UofTHacksDescription/>
            <Divider/>
            <DeepDescription/>
            <Divider/>
            <EspDescription/>
            <Divider/>
            <ContactMe/>
        </BackgroundAll>
    );
};

export default Experiences;