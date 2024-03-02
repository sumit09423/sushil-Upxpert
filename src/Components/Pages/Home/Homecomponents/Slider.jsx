import React from "react";
import img1 from "../../../../assets/images/slider1.jpg";
import img2 from "../../../../assets/images/slider2.jpg";
import img3 from "../../../../assets/images/slider3.jpg";


import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="img-fluid sl-1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-black fs-4">First slide label</h5>
              <p className="text-black fs-4">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="img-fluid sl-1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-black fs-4">Second slide label</h5>
              <p className="text-black fs-4">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3  } className="img-fluid sl-1" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-black fs-4">Third slide label</h5>
              <p className="text-black fs-4">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
