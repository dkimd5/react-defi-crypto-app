import React from "react";
import "./Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        {/* Left */}

        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Right */}

        <div className="right">
          <div className="top">
            <img src="" alt="" />
          </div>
          <div>
            <h5>Bitcoin</h5>
            <p>$49,000</p>
          </div>
          <span>
            <FiArrowUpRight />
            2.5%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
