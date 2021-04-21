import React from "react";
import "./style.scss";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus">
        <h2>ABOUT US</h2>
        <p>
          The Better Co is a home construction company which helps you build
          your dream home and do your home interiors on one platform. We have an
          experienced team consisting of Designers, Architects, Engineers,
          Experience management, Quality assurance, etc., to provide you with
          the best home construction possible within your budget. We supply you
          with the best service and leave no chance for disappointment. Quality
          and experience is our priority over everything else. Serving all
          client needs of building their dream home within their budget is our
          speciality. We envision providing people the power of design, track
          work progress, quality and regulate their budget to bring forth the
          home of their dreams into a tangible material via Product, Material,
          Financial and Technological innovations. Customer Satisfaction is our
          go-to motive.
        </p>
      </div>

      <div className="whyus">
        <h2>WHY US</h2>
        <ul>
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

        <ul>
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
      </div>
    </div>
  );
};
export default Aboutus;
