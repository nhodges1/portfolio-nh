import "./WorkCardStyle.css";

import React from 'react';

const workCard = (props) => {
  return (
    <div className="project-card" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000">
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