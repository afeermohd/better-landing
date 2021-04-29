import React, { useState } from "react";
import "./DisplayConstruction.css";
import { Modal } from "../assets/Modal";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DisplayProjects from "../DisplayProjects";

import ConstructionInfo from "./ConstructionInfo";

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  // const [showInfo, setShowInfo] = useState("");

  return (
    <Modal open={showInfo} onClose={onClose} id="construction">
      <div className="construction">
        {/* <span className="category-heading">CONSTRUCTION</span> */}
        <div className="construction-nav">
          <div
            onClick={() => setList("packages")}
            className={`construction-nav-item ${
              list === "packages" ? "active-list" : ""
            }`}
          >
            Packages
          </div>
          <div
            onClick={() => setList("material")}
            className={`construction-nav-item ${
              list === "material" ? "active-list" : ""
            }`}
          >
            Material List
          </div>
          <div
            onClick={() => setList("process")}
            className={`construction-nav-item ${
              list === "process" ? "active-list" : ""
            }`}
          >
            Process
          </div>
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
