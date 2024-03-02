import React from "react";
import "./Footer.css";
import instagram from "../../assets/images/insta.svg";
import facebook from "../../assets/images/face.svg";
import linkdin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";

const Footar = () => {
  return (
    <div className="footer-out py-5">
      <div className="container d-flex flex-wrap flex-column align-items-center my-5">
        <a href="#" className="h1-foot">UpXpert</a>
        <div className="foot-nav">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
        </div>
        <div className="foot-icon">
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={linkdin} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
        </div>
        <div className="d-flex g-5 mt-5 term">
          <p>Copyright 2024</p>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footar;
