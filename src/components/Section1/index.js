import React from "react";
import "./style.css";
import Banner from "../../assets/banner.jpeg";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="sect1-intro">
        <img src={Banner} alt="banner" height="100px" width="1000px" />
        {/* <span className="sect1-introtext">Start your dream home journey with just Rs. 25,000/-</span> */}
      </div>
      <div className="sect1-payment">
        <span>Payment Portal</span>
      </div>
    </div>
  );
};

export default Section1;
