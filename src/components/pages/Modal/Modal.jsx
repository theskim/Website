import './Modal.scss';
import BriefDescription from './BriefDescription';
import { xBar } from '../../../assets/GeneralLogos';
import ProjectLinks from './ProjectLinks';
import ProjectSetUp from './ProjectSetUp';
import SetOverflow from './SetOverflow';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Modal = (props) => {  
    const { pathname } = useLocation();
    useEffect(() => {
        SetOverflow(false);
    }, [pathname]);

    return (
        <div className="modal">
            <div className="modal__bar">
                <span className="modal__bar-title">{props.title}</span>
                <span className="modal__bar-title-alt">{props.alt}</span>
                <img src={xBar} alt="&times;" onClick={() => {
                    props.update(false); 
                    SetOverflow(false);
                }}/>
            </div>
            <div className="modal__contents">
                <div className="modal__image">
                    <img className="section-logo" src={props.image} alt=""/> 
                </div>
                <div className="brief-description">
                    <BriefDescription {...props}/>
                    <p>{props.children}</p>
                </div>
            </div>
            <ProjectLinks {...props}/>
            <ProjectSetUp {...props}/>
        </div>
    );
}

export default Modal;