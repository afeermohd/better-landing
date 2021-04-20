import React, { useState } from "react";
import { Modal } from "../Modal";
// import ListAccordian from "./ListAccordian";
// import Interior from "../../../assets/interior.jpeg";
// import DisplayProjects from "./DisplayContent/DisplayProjects";
// import DisplayMaterials from "./DisplayContent/DisplayMaterials";
// import DisplaySelectedPackage from "./DisplayContent/DisplaySelectedPackage";
import DisplayListInfo from "./DisplayListInfo";

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  return (
    <Modal open={showInfo} onClose={onClose}>
      <h2 className="modal-heading">CONSTRUCTION</h2>
      <div className="modal-bottom">
        <div className="modal-list">
          <div
            onClick={() => setList("packages")}
            className={`modal-list-item ${
              list === "packages" ? "active-list" : ""
            }`}
          >
            Packages
          </div>
          <div
            onClick={() => setList("material")}
            className={`modal-list-item ${
              list === "material" ? "active-list" : ""
            }`}
          >
            Material List
          </div>
          {/* <div
            onClick={() => setList("projects")}
            className={`modal-list-item ${
              list === "projects" ? "active-list" : ""
            }`}
          >
            Projects
          </div> */}
          <div
            onClick={() => setList("gallery")}
            className={`modal-list-item ${
              list === "gallery" ? "active-list" : ""
            }`}
          >
            Gallery
          </div>
          {/* <div
            onClick={() => setList("blog")}
            className={`modal-list-item ${
              list === "blog" ? "active-list" : ""
            }`}
          >
            Blog
          </div>
          <div
            onClick={() => setList("review")}
            className={`modal-list-item ${
              list === "review" ? "active-list" : ""
            }`}
          >
            Review
          </div> */}
        </div>
        <div className="modal-inside">
          {/* {DisplayListInfo(list)} */}
          <DisplayListInfo list={list} />
        </div>
      </div>
      <div>{}</div>
    </Modal>
  );
};

export default DisplayConstruction;
