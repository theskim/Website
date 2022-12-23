import ExperiencesTitle from './ExperiencesTitle';
import EspDescription from './Descriptions/EspDescription';
import DeepDescription from './Descriptions/DeepDescription';
import CommuterDescription from './Descriptions/CommuterDescription';
import UofTHacksDescription from './Descriptions/UofTHacksDescription';
import Divider from '../../../assets/Divider/Divider';
import './Experiences.scss';

const Experiences = () => {
    return (
        <>
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
        </>
    );
};

export default Experiences;