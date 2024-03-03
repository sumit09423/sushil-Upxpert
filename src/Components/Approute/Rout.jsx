import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Approute from "./Approute";
import Homepage from "../Pages/Home/Home";
import Servicehome from "../Pages/Service/Servicehome";

const Rout = () => {
  return (
    <BrowserRouter>
      <Approute />
      <Routes>
        {/* Home Page Route  */}
        <Route path="/" element={<Homepage />} />
        {/* Work Page Route */}
        <Route path="/Service" element={<Servicehome/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
