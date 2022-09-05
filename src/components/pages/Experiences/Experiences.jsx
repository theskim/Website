import ExperiencesTitle from './ExperiencesTitle';
import EspDescription from './Descriptions/EspDescription';
import DeepDescription from './Descriptions/DeepDescription';
import CommuterDescription from './Descriptions/CommuterDescription';
import UofTHacksDescription from './Descriptions/UofTHacksDescription';
import ContactMe from "../ContactMe/ContactMe";
import Background from '../../../assets/Background/Background';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';

const Experiences = () => {
    return (
        <Background>
            <ExperiencesTitle/>
            <Divider/>
            <UofTHacksDescription/>
            <Divider/>
            <CommuterDescription/>
            <Divider/>
            <DeepDescription/>
            <Divider/>
            <EspDescription/>
            <Divider/>
            <ContactMe/>
        </Background>
    );
};

export default Experiences;