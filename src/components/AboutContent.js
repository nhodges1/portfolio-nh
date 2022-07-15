import "./AboutContentStyle.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/food-festival.png";
import React2 from "../assets/note-taker.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                I'm a Full Stack Developer.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="top"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="bottom"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;