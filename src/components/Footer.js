import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem" }}/>
                <div>
                <p>Ballia, Uttar Pradesh.</p>
                <p>India.</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem" }}/>
            +91 7488183409</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem" }}/>
            mrigendrasingh9909@gmail.com</h4>
            </div>
          </div>
          <div className="right">
            <h4>About Me</h4>
            <p>This is Mrigendra Singh.
            Currently, I'm a Final Year Student of Computer Science and Engineering in Madan Mohan Malaviya University of Technology, Gorakhpur.
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem" }}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem" }}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem" }}/>

            </div>            
          </div>
        </div>
    </div>
  )
}

export default Footer
