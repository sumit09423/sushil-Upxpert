import React, { useState } from "react";
import "./Client.css";
import next from "../../../../assets/images/nextArrow.png";
import preview from "../../../../assets/images/Preview.png";
import clientimg from "../../../../assets/images/client-w.png";

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Web Development",
      subheading: "Doesn’t feel like an agency",
      description:
        "Working with ABC Web Solutions was an absolute game-changer for our business. Their team went above and beyond to understand our needs and delivered a website that exceeded our expectations. Not only is it visually stunning, but the functionality is seamless. The attention to detail and the level of professionalism displayed throughout the process truly sets them apart. ",
    },
    {
      title: "Meet Client Satisfaction after working with us Slider 2",
      subheading: "Doesn’t feel like an agency",
      description:
        "Partnering with XYZ Marketing Agency was one of the best decisions we've made for our online presence. Their strategic approach to digital marketing helped us reach our target audience effectively. From SEO optimization to social media management, they've significantly increased our online visibility and brought in valuable leads. Their dedication and expertise have made a ",
    },
    {
      title: "Meet Client Satisfaction after working with us Slider 3 ",
      subheading: "Doesn’t feel like an agency",
      description:
        "I can't thank DEF Web Design enough for the incredible website they built for us. Not only did they create a visually appealing site, but they also ensured it was user-friendly and optimized for conversions. Their team was responsive to our feedback and provided innovative solutions to any challenges we encountered",
    },
    {
      title: "Meet Client Satisfaction after working with us Slider 4",
      subheading: "Doesn’t feel like an agency",
      description:
        "Hiring GHI Digital Solutions was a game-changer for our digital marketing strategy. Their team took the time to understand our unique goals and tailored a customized approach that yielded exceptional results.",
    },
    {
      title: "Meet Client Satisfaction after working with us Slider 5",
      subheading: "Doesn’t feel like an agency",
      description:
        "this is the content of the client and this is the dynamic content so you can add what ever content you want to add",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="container d-flex flex-wrap my-5 g-5">
        <div className="row">
          <div className="col-lg-5">
            <img src={clientimg} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 mt-3">
            <div className="slider-container">
              <div className="slider">
                <div className="slide">
                  <h2 className="title-h2">{slides[currentSlide].title}</h2>
                  <h3 className="title-h3">
                    {slides[currentSlide].subheading}
                  </h3>
                  <p className="dec-p">{slides[currentSlide].description}</p>
                </div>
              </div>
              <div className="user">
                <button className="btn-slide" onClick={prevSlide}>
                  <img src={preview} alt="" />
                </button>
                <button className="btn-slide" onClick={nextSlide}>
                  <img src={next} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
