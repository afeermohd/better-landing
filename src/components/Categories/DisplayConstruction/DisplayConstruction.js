import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./DisplayConstruction.css";
// import DisplayProjects from "../DisplayProjects";
import { Modal } from "../assets/Modal";

import ConstructionInfo from "./ConstructionInfo";

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  // const [showInfo, setShowInfo] = useState("");

  return (

<Modal open={showInfo} onClose={onClose} id="construction">
      <h2 className="category-heading">CONSTRUCTION</h2>
      <div className="construction">
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
            onClick={() => setList("gallery")}
            className={`construction-nav-item ${
              list === "gallery" ? "active-list" : ""
            }`}
          >
            Gallery
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
