import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={click ? "header" : "header overflow"}>
      <div className="container">
        <h1>
          De<span className="primary">Fi</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#Home" className="hover-effect">
              Home
            </a>
          </li>
          <li>
            <a href="#Featured" className="hover-effect">
              Featured
            </a>
          </li>
          <li>
            <a href="#Earn" className="hover-effect">
              Earn
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover-effect">
              Contact
            </a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
