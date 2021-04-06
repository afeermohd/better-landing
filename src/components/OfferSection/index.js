import React from "react";
import "./style.css";

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h1 className="offer-header">Offers and Contests</h1>
      <div className="offer-items">
        <div className="offer-card">
          <p>Rs. 1600/sqft for Home Construction</p>
        </div>
        <div className="offer-card">
          <p>Rs. 1.99L for Home Interior</p>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
