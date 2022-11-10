import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdHome, MdAddLink, MdInfo } from "react-icons/md";
import { CgTwitter } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-blue">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <CgTwitter />
            Tip Tweet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <MdHome className="me-2" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mytweets">
                  <MdAddLink className="me-2" />
                  My Tweets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <MdInfo className="me-2" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
