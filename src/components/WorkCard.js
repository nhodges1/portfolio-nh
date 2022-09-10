import "./WorkCardStyle.css";

import React from 'react';

const workCard = (props) => {
  return (
    <div className="project-card" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
        <img src={ props.imgsrc } alt="img" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <a href={props.view} className="btn">View</a>
            </div>
        </div>
    </div>
  )
}

export default workCard;