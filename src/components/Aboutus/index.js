import React from "react";
import "./style.scss";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckDouble,
  faDesktop,
  faHardHat,
  faPaperPlane,
  faPencilRuler,
  faStopwatch,
  faTasks,
  faUserCheck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Aboutus = () => {
  const size = "3x";
  return (
    <div className="aboutus-section">
      <div className="aboutus-wrapper">
        <div className="aboutus">
          <h2>ABOUT US</h2>
          <p>
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

        <div className="whyus">
          <h2>WHY US</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faStopwatch} size={size} />
              <span>On-Time Delivery</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckDouble} size={size} />
              <span>Quality Assurance</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPencilRuler} size={size} />
              <span>In-House Architects</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} size={size} />
              <span>Quality Control</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faDesktop} size={size} />
              <span>Tech-Enabled</span>
            </li>
          </ul>

          <ul>
            <li>
              <FontAwesomeIcon icon={faHardHat} size={size} />
              <span>In-House Site Engineers</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTasks} size={size} />
              <span>Dedicated Project Managers</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCheck} size={size} />
              <span>Dedicated Experience Team</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} size={size} />
              <span>Seemless Execution</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWallet} size={size} />
              <span>Flexible Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
