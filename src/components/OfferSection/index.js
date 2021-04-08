import React from "react";
import "./style.css";
import Offer1 from "../../assets/offer1.png";
// import Offer2 from "../../assets/offer2.png";
import Offer3 from "../../assets/offer3.png";

const OfferSection = () => {
  return (
    <div className="offer-section">
      {/* <div className="empty-space"></div> */}
      <h1 className="offer-header">Offers and Contests</h1>
      <div className="offer-items">
        <div className="offer-card">
          <img
            src={Offer1}
            alt="banner"
            height="115%"
            width="115%"
            style={{ borderRadius: "24px" }}
          />
          {/* <s>Rs. 1625/sqft</s>
          <h1>Rs. 1600/sqft</h1>
          <h3>for </h3>
          <h2>Home Construction!</h2> */}
          {/* <h3>Rs. 1600/sqft for Home Construction</h3> */}
        </div>
        <div className="offer-card">
          {/* <h3>Rs. 1.99L for Home Interior</h3> */}
          <img
            src={Offer3}
            alt="banner"
            height="115%"
            width="115%"
            style={{ borderRadius: "24px" }}
          />
          {/* <s>Rs. 2.99L</s>
          <h1>Rs. 1.99L</h1>
          <h3>for</h3>
          <h2>Home Interior!</h2> */}
        </div>
        {/* <div className="d-flex justify-content-center align-items-center container">
          <div className="d-flex card text-center">
            <div className="image">
              <img src="https://i.imgur.com/DC94rZe.png" width="150" />
            </div>
            <div className="image2">
              <img src="https://i.imgur.com/DC94rZe.png" width="150" />
            </div>
            <h1>50% OFF</h1>
            <span className="d-block">On Everything</span>
            <span className="d-block">Today</span>
            <div className="mt-4">
              <small>With Code : bbbootstrap2020</small>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OfferSection;
