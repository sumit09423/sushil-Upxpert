import React from "react";
import Slider from "./Homecomponents/Slider";
import Service from "./Homecomponents/Service";
import Companies from "./Homecomponents/Companies";
import Ourprocess from "./Homecomponents/Ourprocess";
import Ourwork from "../../Global/Ourwork";
import Client from "./Homecomponents/Client";
import Blog from "./Homecomponents/Blog";
import Faq from "./Homecomponents/Faq";
import Contactus from "../../Global/Contactus";
import Footar from "../../Global/Footar";

const Home = () => {
  return (
    <>
      <Slider />
      <Service />
      <Companies />
      <Ourprocess />
      <Ourwork />
      <Client />
      <Blog />
      <Faq />

      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis.
        </p>
        <Contactus />
      </div>

      <Footar />
    </>
  );
};

export default Home;
