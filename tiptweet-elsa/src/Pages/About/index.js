import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className=" h1-text text-center mt-3">TIP TWEET</h1>
          <p className="text-center fw-bold">
            This is the best place for you to save important Link From Twitter !
          </p>
        </div>
      </div>

      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-3"></div>
                <p className="card-title mb-3 fw-bold">Save Tweet</p>
                <p className="card-text fw-light">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <p className="card-text"> Read More </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-3"></div>
                <p className="card-title mb-3 fw-bold">Easy Form</p>
                <p className="card-text fw-light">
                  {" "}
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <p className="card-text"> Read More </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-3"></div>
                <p className="card-title mb-3 fw-bold">
                  Update Your Saved Tweet
                </p>
                <p className="card-text fw-light">
                  {" "}
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <p className="card-text"> Read More </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
