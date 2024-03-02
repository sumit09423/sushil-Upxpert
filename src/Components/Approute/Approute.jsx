import React from "react";
import "./Approute.css";
import { Form, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';

const Approute = () => {
  return (
    <>
      <div className="top-Hader">
        <div className="container ">
          <p className="text-end text-white py-1">This is Direct Contect Section</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg nav-cust ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="nav-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link"  aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/work" className="nav-link">Works</NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link">About us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">Contact us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">Service</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">Blogs</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link">Tearms & Conditions</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Approute;
