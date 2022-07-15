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
        <p>Hi, I'm a Freelancer.</p>
        <h1>Full Stack Developer</h1>
        <div>
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