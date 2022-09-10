import "./HeroImgStyle.css";

import React from 'react';

import IntroImg from "../assets/background7.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
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