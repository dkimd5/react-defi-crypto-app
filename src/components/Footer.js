import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" id="Contact">
      <div className="container">
        <div className="col col-1">
          <h1>
            De<span className="primary">Fi</span>
          </h1>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/" className="hover-effect">
            Contact Us
          </a>
          <a href="/" className="hover-effect">
            Chat
          </a>
          <a href="/" className="hover-effect">
            Help Center
          </a>
          <a href="/" className="hover-effect">
            FAQ
          </a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/" className="hover-effect">
            Cloud
          </a>
          <a href="/" className="hover-effect">
            Commerce
          </a>
          <a href="/" className="hover-effect">
            Documentation
          </a>
          <a href="/" className="hover-effect">
            API
          </a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/" className="hover-effect">
            About
          </a>
          <a href="/" className="hover-effect">
            Information
          </a>
          <a href="/" className="hover-effect">
            Legal
          </a>
          <a href="/" className="hover-effect">
            Privacy
          </a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook size={20} className="icon" />
          </a>
          <a href="/">
            <FaTwitter size={20} className="icon" />
          </a>
          <a href="/">
            <FaLinkedin size={20} className="icon" />
          </a>
          <a href="/">
            <FaGithub size={20} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
