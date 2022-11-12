import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className=" text-center position ">
          &copy; Copyright TipTweet. All rights reserved. Mini Project Elsa
          Vania
          <br />
          All Image Credit To{" "}
          <a href="http://freepik.com" target="_blank" rel="noreferrer">
            FreePik
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/vaniaelsa/"
            className="icon-medsos"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/vaniaelsa" className="icon-medsos">
            <FaGithub size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
