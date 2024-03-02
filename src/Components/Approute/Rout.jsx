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
import Workindex from "../Pages/Work/Workindex";

const Rout = () => {
  return (
    <BrowserRouter>
      <Approute />
      <Routes>
        {/* Home Page Route  */}
        <Route path="/" element={<Homepage />} />
        {/* Work Page Route */}
        <Route path="/work" element={<Workindex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
