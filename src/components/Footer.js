import "./FooterStyle.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="left">
                <div className="location">
                    <h4>
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                    Orlando, Fl
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                    813-635-6351
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                    Hodges27@outlook.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Hope you enjoyed!</h4>
                <p>Feel free to reach out to me at anytime. I'm open to all work!</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "white", marginRight:"1rem" }} />
                    <FaTwitter size={30} style={{ color: "white", marginRight:"1rem" }} />
                    <FaLinkedin size={30} style={{ color: "white", marginRight:"1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer