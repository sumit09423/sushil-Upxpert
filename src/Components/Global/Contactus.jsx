import React from "react";
import "./Contactus.css";
import mobile from "../../assets/images/Mobile.svg";
import Email from "../../assets/images/emailinfo.svg";
import browser from "../../assets/images/browser.svg";
import location from "../../assets/images/location.svg";

const Contactus = () => {
  return (
    <div>
      <div className="container  g-contact my-4">
        <div className="form-area">
          <div className="row">
            <div className="col-lg-4 col-md-12 contact-info">
              <div className="info">
                <h1>Contact Information</h1>
                <p>
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div className="info-main">
                  <div className="main">
                    <div className="info-icon">
                      <img src={mobile} alt="" className="img-fluid" />
                    </div>
                    <div className="info-text">
                      <p>+91 132456689</p>
                    </div>
                  </div>
                  <div className="main">
                    <div className="info-icon">
                      <img src={Email} alt="" className="img-fluid" />
                    </div>
                    <div className="info-text">
                      <p>Upxpert@gmail.com</p>
                    </div>
                  </div>
                  <div className="main">
                    <div className="info-icon">
                      <img src={browser} alt="" className="img-fluid" />
                    </div>
                    <div className="info-text">
                      <p>www.Upxpert.com</p>
                    </div>
                  </div>
                  <div className="main">
                    <div className="info-icon">
                      <img src={location} alt="" className="img-fluid" />
                    </div>
                    <div className="info-text">
                      <p>india</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <form
                action="#"
                className="container d-flex flex-wrap flex-column align-items-end"
              >
                <div>
                  <div className="input-area">
                    <div className="input-container">
                      <input type="text" id="input" required="" />
                      <label for="input" className="label">
                        First Name
                      </label>
                      <div className="underline"></div>
                    </div>
                    <div className="input-container">
                      <input type="text" id="input" required="" />
                      <label for="input" className="label">
                        Last Name
                      </label>
                      <div className="underline"></div>
                    </div>
                  </div>
                  <div className="input-area">
                    <div className="input-container">
                      <input type="text" id="input" required="" />
                      <label for="input" className="label">
                        Email
                      </label>
                      <div className="underline"></div>
                    </div>
                    <div className="input-container">
                      <input type="text" id="input" required="" />
                      <label for="input" className="label">
                        Phone
                      </label>
                      <div className="underline"></div>
                    </div>
                  </div>
                  <div className="check-box">
                    <p>What Services do you Need ?</p>
                    <div className="check">
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Website Design
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Web Development
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Mobile App Development
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Content Writing
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Email Marketing
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Digital Marketing
                      </label>
                      <label className="material-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Other
                      </label>
                    </div>
                  </div>
                  <div class="feed-text">
                    <label>Message</label>
                    <div class="expandable-textarea">
                      <textarea
                        placeholder="Share Requierment With Us"
                        rows="5"
                        oninput="this.parentNode.dataset.replicatedValue = this.value"
                        onblur="this.parentNode.dataset.replicatedValue = null"
                        onclick="this.parentNode.dataset.replicatedValue = this.value"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button className="btn-cont">Contact Us</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
