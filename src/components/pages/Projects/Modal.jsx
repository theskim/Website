import { useState, useEffect } from 'react';
import './Modal.scss';
import { Icon } from '@iconify/react';

const Modal = (props) => {
    const [isClosing, setIsClosing] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        // Wait for animation to complete before removing the modal
        props.scrollToElement();
        setTimeout(() => {
            props.update(false);
        }, 500);
    };

    return (
        <div className={`modal ${isClosing ? 'fade-out' : ''}`}>
            <div className="modal__bar">
                <span className="modal__bar-title">{(props.title.length * 25 < screenWidth) ? props.title : props.alt}</span>
                <span className="modal__xbar" onClick={handleClose}> &#xd7;</span>
            </div>
            <div className="modal__contents">
                <div className="modal__image">
                    <img className="section-logo" src={props.image} alt={props.alt}/> 
                </div>
                <div className="brief-description">
                    <p>
                        <b><Icon icon="material-symbols:keyboard-previous-language" width="1.4rem"/>&nbsp;Tech Stack:&nbsp;</b>
                        {props.skills}
                    </p>
                    <p>{props.children}</p>
                </div>
            </div>
            <div className = "project-links">
                <span className="project-link">
                    <Icon icon="material-symbols:media-link" width="1.9rem"/>
                    <b>&nbsp;Demo:&nbsp;&nbsp;</b>                  
                    {props.link !== undefined && <a href = {props.link}>Click Here</a>}
                    {props.link === undefined && <span className="gray">Unavailable</span>}
                </span>
                <span className="project-link">
                    <Icon icon="mdi:github" width="1.9rem"/>
                    <b>&nbsp;GitHub:&nbsp;&nbsp;</b>                  
                    {props.github !== undefined && <a href={props.github}>Click Here</a>}
                    {props.github === undefined && <span className="gray">Unavailable</span>}
                </span>
                <br/><br/>
            </div>   
        </div>
    );
}

export default Modal;