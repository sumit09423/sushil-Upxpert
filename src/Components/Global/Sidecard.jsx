import React from "react";
import "./Sidecard.css";
import jobopen from "../../assets/images/jobopen.png";

const Sidecard = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="container p-2">
          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12 SC-text">
              <h1>Join a global team of change-makers.</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                magnam molestias, officiis et fugit velit fuga repellendus! Sint
                impedit porro nobis asperiores ipsum non quibusdam, nisi
                obcaecati quo ipsam debitis culpa quis voluptas sequi voluptatem
                rem, blanditiis sunt quaerat tenetur aspernatur a id? Sequi
                ullam cupiditate sint, suscipit minima reprehenderit?
              </p>
              <a href="#" className="SC-bt">
                View Job Opening
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-job">
              {/* <img src={jobopen} alt="" className="img-job"  /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
