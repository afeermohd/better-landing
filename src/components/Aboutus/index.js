import React from "react";
import "./style.css";
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

const whyusList = [
  {
    title: "On-Time Delivery",
    icon: faStopwatch,
  },
  {
    title: "Quality Assurance",
    icon: faCheckDouble,
  },
  {
    title: "In-House Architects",
    icon: faPencilRuler,
  },
  {
    title: "Quality Control",
    icon: faCheck,
  },
  {
    title: "Tech-Enabled",
    icon: faDesktop,
  },
  {
    title: "In-House Site Engineers",
    icon: faHardHat,
  },
  {
    title: "Dedicated Project Managers",
    icon: faTasks,
  },
  {
    title: "Dedicated Experience Team",
    icon: faUserCheck,
  },
  {
    title: "Seemless Execution",
    icon: faPaperPlane,
  },
  {
    title: "Flexible Payment",
    icon: faWallet,
  },
];

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
            {whyusList.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={item.icon} size={size} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
