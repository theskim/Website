import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Imageslide.css';

const SlideShow = (props) => {
    return (
        <div className="slide-container">
          <Slide indicators={true}>
            {props.img.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt = ""/>)}
          </Slide>
        </div>
    )
}

export default SlideShow;