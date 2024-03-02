import React from "react";
import "./Service.css";
import webdev from '../../../../assets/images/Webdev.svg';
import webdesign from '../../../../assets/images/webdesign.svg';
import onmanage from '../../../../assets/images/onmanage.svg';
import mobileapp from '../../../../assets/images/mobileapp.svg';
import graphic from '../../../../assets/images/graphic.svg';
import email from '../../../../assets/images/email.svg';
import Digital from '../../../../assets/images/Digital.svg';
import content from '../../../../assets/images/content.svg';
import branding from '../../../../assets/images/branding.svg';
import Appstore from '../../../../assets/images/Appstore.svg';


const Service = () => {
  return (
    <div>
      <div className="innerline"></div>
      <div className="container d-flex flex-wrap">
        <div className="text-center my-4">
          <h1>Services that lead the way to better business</h1>
          <p>
            Faucibus fringilla sed integer cursus tellus et, quis ultricies.
            Aliquam, faucibus arcu in laoreet ac elementum in eget. Massa urna
            viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit
            etiam orci est in vel lacus neque pretium.
          </p>
        </div>
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={webdev} alt="Svg" />
            </span>
            <p className="service-p">Web Development</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={webdesign} alt="Svg" />
            </span>
            <p className="service-p">Web Design</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={mobileapp} alt="Svg" />
            </span>
            <p className="service-p">Mobile App Development</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={content} alt="Svg" />
            </span>
            <p className="service-p">Content Writing</p>
          </div>

          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={email} alt="Svg" />
            </span>
            <p className="service-p">Email Marketing</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={Digital} alt="Svg" />
            </span>
            <p className="service-p">
              Digital Marketing - SEO, Social Media Optimization, Google My
              Business, Performance Marketing
            </p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={branding} alt="Svg" />
            </span>
            <p className="service-p"> Branding and Strategies</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={graphic} alt="Svg" />
            </span>
            <p className="service-p">Graphic Design</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={onmanage} alt="Svg" />
            </span>
            <p className="service-p">Online Reputation Management</p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <span className="svg-back">
              <img src={Appstore} alt="Svg" />
            </span>
            <p className="service-p">App Store Optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
