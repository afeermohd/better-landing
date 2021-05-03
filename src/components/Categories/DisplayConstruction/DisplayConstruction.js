import React, { useState } from "react";
import "./DisplayConstruction.css";
import { Modal } from "../assets/Modal";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DisplayProjects from "../DisplayProjects";

import ConstructionInfo from "./ConstructionInfo";

const constructionNav = [
  {
    title: "Packages",
    state: "packages",
  },
  {
    title: "Material List",
    state: "material",
  },
  {
    title: "Process",
    state: "process",
  },
];

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  // const [showInfo, setShowInfo] = useState("");

  return (
    <Modal
      open={showInfo}
      onClose={onClose}
      title="CONSTRUCTION"
      id="construction"
    >
      <div className="construction">
        {/* <span className="category-heading">CONSTRUCTION</span> */}
        <div className="construction-nav">
          {constructionNav.map((item, index) => (
            <div
              key={index}
              onClick={() => setList(`${item.state}`)}
              className={`construction-nav-item ${
                list === `${item.state}` ? "active-list" : ""
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="construction-content">
          <ConstructionInfo list={list} />
        </div>
      </div>
      <div>{}</div>
    </Modal>
  );
};

export default DisplayConstruction;
