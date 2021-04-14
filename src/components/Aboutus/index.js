import React, { useState } from "react";
import "./style.scss";
import ReactCardFlip from "react-card-flip";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

import Back from "./Back";
import Front from "./Front";

const Aboutus = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* <div className="aboutus"> */}
      <div className="aboutus">
        <div className="about-card" onMouseEnter={handleClick}>
          <h2 className="about-title">ABOUT US</h2>
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
        </div>
        {/* <div onMouseEnter={handleClick}>
          <Front />
        </div> */}
        {/* <button onMouseEnter={handleClick}>Click</button> */}
      </div>
      <div>
        <div className="back aboutus">
          <div className="about-card" onMouseLeave={handleClick}>
            <h2 className="about-title">WHY US</h2>
            <div className="about-list-container">
              {/* <div> */}
              <ul className="about-list">
                <li>
                  <DoneOutlineIcon />
                  On-Time Delivery
                </li>
                <li>
                  <DoneOutlineIcon />
                  Quality Assurance
                </li>
                <li>
                  <DoneOutlineIcon />
                  In-House Architects
                </li>
                <li>
                  <DoneOutlineIcon />
                  Quality Control
                </li>
                <li>
                  <DoneOutlineIcon />
                  Tech-Enabled
                </li>
              </ul>
              {/* </div> */}
              {/* <br /> */}
              {/* <div> */}
              <ul className="about-list">
                <li>
                  <DoneOutlineIcon />
                  In-House Site Engineers
                </li>
                <li>
                  <DoneOutlineIcon />
                  Dedicated Project Managers
                </li>
                <li>
                  <DoneOutlineIcon />
                  Dedicated Experience Team
                </li>
                <li>
                  <DoneOutlineIcon />
                  Seemless Execution
                </li>
                <li>
                  <DoneOutlineIcon />
                  Flexible Payment
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* <div onMouseLeave={handleClick}>
          <Back />
        </div> */}
        {/* <button>Click</button> */}
      </div>
      {/* </div> */}
    </ReactCardFlip>
  );
};
export default Aboutus;
