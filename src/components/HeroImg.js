
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import {Link} from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
  <div className="mask">
    <img className="into-img" src={IntroImg} alt="IntroImg" />
  </div>
  <div className="content">
    <p>HI, I'M MRIGENDRA SINGH </p>
    <p>WEB-DEVELOPER, PROGRAMMER.</p>
    <h1>React Developer</h1>
    <div>
        <Link to="https://drive.google.com/file/d/10IJ-yLzcdBngfJfVt9R-GEEIrrLfiW3e/view?usp=sharing" className=" btn btn-light">RESUME</Link>
        <Link to="/project" className="btn">PROJECTS</Link>
        <Link to="/contact" className=" btn btn-light">CONTACT</Link>
     
    </div>
  </div>
</div>
}

export default HeroImg