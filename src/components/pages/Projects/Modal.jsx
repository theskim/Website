import SetOverflow from './SetOverflow';
import './Modal.scss';
import BriefDescription from './BriefDescription';
import ProjectLinks from './Descriptions/ProjectLinks';
import ProjectSetUp from './ProjectSetUp';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Modal = (props) => {  
    const { pathname } = useLocation();
    useEffect(() => {
        SetOverflow(false);
    }, [pathname]);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="modal">
            <div className="modal__bar">
                <span className="modal__bar-title">{(props.title.length * 25 < screenWidth) ? props.title : props.alt}</span>
                <span className="modal__xbar" onClick={() => props.update(false)}> &#xd7;</span>
            </div>
            <div className="modal__contents">
                <div className="modal__image">
                    <img className="section-logo" src={props.image} alt={props.title}/> 
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