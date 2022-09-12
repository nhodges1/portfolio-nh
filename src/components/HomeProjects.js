import "./HomeProjectsStyle.css";

import { Link } from "react-router-dom";
import pro1 from "../assets/note-taker.png";
import pro2 from "../assets/food-festival.png";
import pro3 from "../assets/gimmeadrink.png";

import React from 'react';

const HomeProjects = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card" data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <img src={ pro1 } alt="img" />
                <h2 className="project-title">Note Taker</h2>
                <div className="pro-details">
                    <p>Take notes efficiently!</p>
                    <div className="pro-btns">
                        <a href="https://note-taker-nh.herokuapp.com" className="btn">View</a>
                    </div>
                </div>
            </div>
            <div className="project-card" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <img src={ pro2 } alt="img" />
                <h2 className="project-title">Food Festival</h2>
                <div className="pro-details">
                    <p>Visit our food festival!</p>
                    <div className="pro-btns">
                        <a href="https://nhodges1.github.io/food-festival/" className="btn">View</a>
                    </div>
                </div>
            </div>
            <div className="project-card" data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <img src={ pro3 } alt="img" />
                <h2 className="project-title">Drink up</h2>
                <div className="pro-details">
                    <p>Your favorite drink recipes!</p>
                    <div className="pro-btns">
                        <a href="https://ru3ykat.github.io/gimme-a-drink/" className="btn">View</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="pro-btns">
                <Link to="/projects" className="btn">View All</Link>
        </div>
    </div>
  )
}

export default HomeProjects;