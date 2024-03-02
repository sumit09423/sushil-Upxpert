import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="container my-3">
      <h1 className="text-center mt-3 mb-3">From the Blog</h1>
        <div className="card-sec">
          <div className="row">
            <div className="col-md-4 ">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 1</h5>
                  <p className="card-text">Description text for Blog 1.</p>
                  <p className="card-text">
                    <small className="text-muted">Author Name 1</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 2</h5>
                  <p className="card-text">Description text for Blog 2.</p>
                  <p className="card-text">
                    <small className="text-muted">Author Name 2</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Blog 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 3</h5>
                  <p className="card-text">Description text for Blog 3.</p>
                  <p className="card-text">
                    <small className="text-muted">Author Name 3</small>
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

export default Blog;
