import React from "react";
import "./style.css";
import Banner from "../../assets/banner.png";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="sect1-intro">
        <img
          src={Banner}
          alt="banner"
          height="100px"
          width="800px"
          style={{ borderRadius: "24px" }}
        />
        {/* <span className="sect1-introtext">Start your dream home journey with just Rs. 25,000/-</span> */}
      </div>
      <div className="sect1-payment">
        <h3>Payment Portal</h3>
      </div>
    </div>
  );
};

export default Section1;
