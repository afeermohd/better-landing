import React from "react";
import "./style.css";

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h2 className="offer-header">Offers and Contests</h2>
      <div className="offer-items">
        <div className="offer-card">
          <h3>Rs. 1600/sqft for Home Construction</h3>
        </div>
        <div className="offer-card">
          <h3>Rs. 1.99L for Home Interior</h3>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
