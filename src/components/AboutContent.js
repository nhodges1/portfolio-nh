import "./AboutContentStyle.css";

import React from 'react';
import { Link } from "react-router-dom";
import Me from "../assets/nick.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left" data-aos="fade-down-right" data-aos-duration="3000">
            <h1>Who am I?</h1>
            <p>
                My name is Nick Hodges, and I am Full Stack Developer with a proven ability to collaborate effectively with experienced developers while spending extra time to be mentored.
                I enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary.
            </p>
            <p>
                With a passion for both personal growth and for software development, I attended a 1000+ hour coding bootcamp at the University of Central Florida to learn new languages while sharpening exisiting skills.
                I am ready to apply my passion for coding to a talented engineering team to develop quality solutions.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right" data-aos="fade-down-left" data-aos-duration="3000">
            <div className="img-container">
                <div className="img">
                    <img src={ Me } className="img" alt="me"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;