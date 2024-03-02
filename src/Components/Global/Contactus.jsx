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
            <div className="col-md-4 contact-info">
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
            <div className="col-md-8">
              <form action="#">
                <div className="input-area">
                  <div class="input-container">
                    <input type="text" id="input" required="" />
                    <label for="input" class="label">
                      First Name
                    </label>
                    <div class="underline"></div>
                  </div>
                  <div class="input-container">
                    <input type="text" id="input" required="" />
                    <label for="input" class="label">
                      Last Name
                    </label>
                    <div class="underline"></div>
                  </div>
                </div>
                <div className="input-area">
                  <div class="input-container">
                    <input type="text" id="input" required="" />
                    <label for="input" class="label">
                      Email
                    </label>
                    <div class="underline"></div>
                  </div>
                  <div class="input-container">
                    <input type="text" id="input" required="" />
                    <label for="input" class="label">
                      Phone
                    </label>
                    <div class="underline"></div>
                  </div>
                </div>
                <div className="check-box">
                  <p>What Services do you Need ?</p>
                  <div className="check">
                    <label class="material-checkbox">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      Checkbox Label
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
