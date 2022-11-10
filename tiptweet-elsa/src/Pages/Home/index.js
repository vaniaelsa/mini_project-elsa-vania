import React from "react";
import "./Home.css";
// let people = require("../assets/img/tiptweet.jpg");
const people = require("../../assets/img/tiptweet.jpg");

function Home() {
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
      <div className="container">
        <div className="row justify-content-center">
          <div className=" col-md-6 col-sm-6 ps-5">
            <div className="card-body text-center">
              <div className="mb-3">
                <img src={people} alt="" height="300px" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 pe-5">
            <div className="card-body">
              <p className="fs-2 fw-lighter">
                <span className="fw-bold">TipTweet</span> WEBSITE
              </p>
              <p className="fw-lighter">
                Webs that fasilitate us for saving our important tweet's link
                here with some descriptions.
              </p>
              <p> Easy To Use </p>
              <p> With Search Feature </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="text-center p-3 position">
          <div className="row">
            <div>
              &copy; Copyright TipTweet. All rights reserved.
              <br />
              Mini Project Elsa Vania
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
