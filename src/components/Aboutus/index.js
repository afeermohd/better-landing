import React from "react";
import "./style.css";

const Aboutus = () => {
  return (
    <div className="aboutus">
      {/* <div className="empty-space"></div> */}
      {/* <h1 className="offer-header">Offers and Contests</h1> */}
      <div className="about-items">
        <div className="about-card">
          {/* <s>Rs. 1625/sqft</s> */}
          {/* <h1>Rs. 1600/sqft</h1> */}
          {/* <h3>for </h3> */}
          <h1 className="about-title">About Us</h1>
          <p className="about-para">
            The Better Co is a home construction company which helps you build
            your dream home and do your home interiors on one platform. We have
            an experienced team consisting of Designers, Architects, Engineers,
            Experience management, Quality assurance, etc., to provide you with
            the best home construction possible within your budget. We supply
            you with the best service and leave no chance for disappointment.
            Quality and experience is our priority over everything else. Serving
            all client needs of building their dream home within their budget is
            our speciality. We envision providing people the power of design,
            track work progress, quality and regulate their budget to bring
            forth the home of their dreams into a tangible material via Product,
            Material, Financial and Technological innovations. Customer
            Satisfaction is our go-to motive.
          </p>
          {/* <h3>Rs. 1600/sqft for Home Construction</h3> */}
        </div>
        {/* <div className="offer-card"> */}
        {/* <h3>Rs. 1.99L for Home Interior</h3> */}

        {/* <s>Rs. 2.99L</s>
          <h1>Rs. 1.99L</h1>
          <h3>for</h3>
          <h2>Home Interior!</h2>
        </div> */}
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

export default Aboutus;
