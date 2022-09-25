import "./HeroImgStyle.css";

import React from 'react';

import IntroVid from "../assets/movingbackground.mp4";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <video className="intro-vid" src={IntroVid} autoPlay loop muted />
    </div>
    <div className="content">
        <h1>Full Stack Developer</h1>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
            <Link to="/projects" className="btn">
                Projects
            </Link>
            <Link to="/contact" className="btn">
                Contact
            </Link>
        </div>
    </div>
  </div>
}

export default HeroImg