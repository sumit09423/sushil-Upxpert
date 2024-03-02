import React from "react";
import "./Ourwork.css";
import ourwork1 from "../../../../assets/images/ourwork1.png";
import ourwork2 from "../../../../assets/images/ourwork2.png";
import ourwork3 from "../../../../assets/images/ourwork3.png";

const Ourwork = () => {
  return (
    <div>
      <div className="container d-flex flex-wrap mt-3 mb-2">
        <h4 className="text-center fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
          odio minus aliquam necessitatibus magni voluptas tempore hic culpa
          libero?
        </h4>
        <div className="row d-flex flex-wrap">
          <div className="col-lg-4 col-md-4 card-work">
            <img src={ourwork1} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-4 card-work">
            <img src={ourwork2} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-4  col-md-4 card-work">
            <img src={ourwork3} alt="" className="img-fluid" />
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <a href="#" className="btn-cust my-4">
              See All Projects
            </a>
          </div>
        </div>
      </div>
      {/* Slogan  */}
      <div className="slog">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 left-line">
              <h1 className="fs-4">
                We're lean Creative Agency that uses design and code to solve
                problem
              </h1>
            </div>
            <div className="col-lg-7 col-sm-12">
              <p className="work-p" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti libero nam, recusandae blanditiis labore facilis
                officia obcaecati in ducimus sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
