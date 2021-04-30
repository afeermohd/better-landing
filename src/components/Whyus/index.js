import React from "react";
import "./style.css";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheck,
//   faCheckDouble,
//   faDesktop,
//   faHardHat,
//   faPaperPlane,
//   faPencilRuler,
//   faStopwatch,
//   faTasks,
//   faUserCheck,
//   faWallet,
// } from "@fortawesome/free-solid-svg-icons";
import whyus1 from "../../assets/whyusImages/whyus1.png";
import whyus2 from "../../assets/whyusImages/whyus2.png";
import whyus3 from "../../assets/whyusImages/whyus3.png";
import whyus4 from "../../assets/whyusImages/whyus4.png";

const whyusList = [
  {
    title: "In-House Execution Team",
    content:
      "We have in-house architects, engineers, designers and the entire experience and execution team to provide seamless execution.",
    // icon: faStopwatch,
  },
  {
    title: "On-Time Delivery",
    content:
      " We understand the pain of delays. Thus we make sure we stay committed to our deadlines and deliver the project on time.",
    // icon: faCheckDouble,
  },
  {
    title: "Quality Assurance",
    content:
      " Our experienced team with over 25+ years of collective experience can make sure and maintain the quality with different quality tests.",
    // icon: faPencilRuler,
  },
  {
    title: "Payment Flexibility",
    content:
      "We understand the uncertain and fluctuating market and we thus we do not want payment to be a hinderance towards achieving dreams so we have flexible payment options.",
    // icon: faCheck,
  },
  // {
  //   title: "Tech-Enabled",
  //   icon: faDesktop,
  // },
  // {
  //   title: "In-House Site Engineers",
  //   icon: faHardHat,
  // },
  // {
  //   title: "Dedicated Project Managers",
  //   icon: faTasks,
  // },
  // {
  //   title: "Dedicated Experience Team",
  //   icon: faUserCheck,
  // },
  // {
  //   title: "Seemless Execution",
  //   icon: faPaperPlane,
  // },
  // {
  //   title: "Flexible Payment",
  //   icon: faWallet,
  // },
];

const Whyus = () => {
  // const size = "3x";
  return (
    <div className="whyus-section">
      <div className="whyus-wrapper">
        <h2>WHY US</h2>
        {/* <ul> */}
        {/* {whyusList.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={item.icon} size={size} />
              <div>
                <span>{item.title}</span>
                <p>{item.content}</p>
              </div>
            </li>
          ))} */}
        <div className="whyus-allitems">
          <div className="whyus-item">
            <div className="item-icon">
              <img src={whyus1} alt="whyus1" />
              {/* <FontAwesomeIcon icon={whyusList[0].icon} size={size} /> */}
            </div>
            <div className="item-content">
              <span>{whyusList[0].title}</span>
              <p>{whyusList[0].content}</p>
            </div>
          </div>
          <div className="whyus-item">
            <div className="item-content">
              <span>{whyusList[1].title}</span>
              <p>{whyusList[1].content}</p>
            </div>
            <div className="item-icon">
              <img src={whyus2} alt="whyus1" />
              {/* <FontAwesomeIcon icon={whyusList[1].icon} size={size} /> */}
            </div>
          </div>
          <div className="whyus-item">
            <div className="item-icon">
              <img src={whyus3} alt="whyus1" />
              {/* <FontAwesomeIcon icon={whyusList[2].icon} size={size} /> */}
            </div>
            <div className="item-content">
              <span>{whyusList[2].title}</span>
              <p>{whyusList[2].content}</p>
            </div>
          </div>
          <div className="whyus-item">
            <div className="item-content">
              <span>{whyusList[3].title}</span>
              <p>{whyusList[3].content}</p>
            </div>
            <div className="item-icon">
              <img src={whyus4} alt="whyus1" />
              {/* <FontAwesomeIcon icon={whyusList[3].icon} size={size} /> */}
            </div>
          </div>
        </div>

        {/* </ul> */}
      </div>
    </div>
  );
};
export default Whyus;
