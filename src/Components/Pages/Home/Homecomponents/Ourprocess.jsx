import React from "react";
import "./Ourprocess.css";
import Ourimg from "../../../../assets/images/ourprocess.png";
import Discovery from "../../../../assets/images/Discovery.png";
import Plan from "../../../../assets/images/Plan.png";
import Execute from "../../../../assets/images/Execute.png";
import Deliver from "../../../../assets/images/Deliver.png";

const Ourprocess = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row d-flex wrap">
          <div className="col-lg-5 img-service">
            <img src={Ourimg} alt="" className="img-fluid i-op" />
          </div>
          <div className="col-lg-7 main-content">
            <div className="title">
              <h1 className="title-op">Our Process</h1>
              <h5 className="dec-op">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur doloribus nemo, ut similique ipsa dignissimos maxime
                soluta placeat quibusdam esse?
              </h5>
            </div>
            <div>
              <div className="main-op row">
                <div className="col-lg-3 op-circle-1">
                  <img src={Discovery} alt="" />
                </div>
                <div className="col-lg-9">
                  <p className="op-title">Discovery</p>
                  <p className="op-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt dolore quis nihil laudantium sapiente est dolores
                    consectetur, sequi repudiandae illum.
                  </p>
                </div>
              </div>
              <div className="main-op row">
                <div className="col-lg-3 op-circle-2">
                  <img src={Plan} alt="" />
                </div>
                <div className="col-lg-9">
                  <p className="op-title">Plan</p>
                  <p className="op-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt dolore quis nihil laudantium sapiente est dolores
                    consectetur, sequi repudiandae illum.
                  </p>
                </div>
              </div>
              <div className="main-op row">
                <div className="col-lg-3 op-circle-3">
                  <img src={Execute} alt="" />
                </div>
                <div className="col-lg-9">
                  <p className="op-title">Execute</p>
                  <p className="op-desc" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt dolore quis nihil laudantium sapiente est dolores
                    consectetur, sequi repudiandae illum.
                  </p>
                </div>
              </div>
              <div className="main-op row">
                <div className="col-lg-3 op-circle-4">
                  <img src={Deliver} alt="" />
                </div>
                <div className="col-lg-9">
                  <p className="op-title">Deliver</p>
                  <p className="op-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt dolore quis nihil laudantium sapiente est dolores
                    consectetur, sequi repudiandae illum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourprocess;
