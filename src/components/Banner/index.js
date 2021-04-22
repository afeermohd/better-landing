import React from "react";
import "./style.css";
// import BannerImg from "../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className="section1">
      {/* <div className="sect1-intro">
        <img
          src={BannerImg}
          alt="banner"
          height="100px"
          width="800px"
          style={{ borderRadius: "24px" }}
        />
       
      </div> */}
      <div className="sect1-payment">
        <h3>Concept Housing</h3>
      </div>
      <div className="sect1-payment between">
        <h3>Get Consultation</h3>
      </div>
      <div className="sect1-payment">
        <h3>Budget Calculator</h3>
      </div>
    </div>
  );
};

export default Banner;
