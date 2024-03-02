import React from "react";
import "./Companies.css";
import Smallcom from "../../../../assets/images/smallcom.jpeg";

const Companies = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="text-center d-flex justify-content-center flex-wrap">
          <h1>Companies We Work With</h1>
          <p>
            Dictum tortor, sed scelerisque mattis malesuada. Urna sed magna a
            sed nulla egestas bibendum eget. Consectetur urna varius dolor,
            fermentum turpis. Sit malesuada id tortor viverra gravida cras. In
            quis.
          </p>
        </div>
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="col-lg-12 g-5 d-flex flex-wrap justify-content-center my-2">
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
          </div>
          <div className="col-lg-12 d-flex flex-wrap justify-content-center my-2">
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
            <div className="col-lg-2 col-md-6 com-img">
              <img src={Smallcom} alt="" className="small-comp-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
