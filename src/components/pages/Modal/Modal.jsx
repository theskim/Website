import './Modal.css';
import BriefDescription from './BriefDescription';
import ImageSlide from '../../../assets/ImageSlide/ImageSlide';
import { xBar } from '../../../assets/GeneralLogos';
import ProjectLinks from './ProjectLinks';
import SetOverflow from './SetOverflow';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__bar">
                <span className="modal__bar-title">{props.title}</span>
                <span className="modal__bar-title-alt">Description</span>
                <img src={xBar} alt="&times;" onClick={() => {
                    props.update(false); 
                    SetOverflow(false);
                
                }}/>
            </div>
            <div className="modal__contents">
                { props.image === undefined 
                    ? <ImageSlide img={props.images}/>
                    : <img className="experience-logo" src={props.image} alt=""/> 
                }
                <p>
                    <BriefDescription {...props}/>
                    {props.children}
                </p>
            </div>
            <ProjectLinks {...props}/>
        </div>
    );
}

export default Modal;