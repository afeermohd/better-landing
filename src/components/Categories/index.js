import React, { useState } from "react";
import "./style.css";
import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";
import { Modal } from "./Modal";
// import { Spring } from "react-spring";
import DisplayConstruction from "./DisplayConstruction";

const Categories = () => {
  const [showInfo, setShowInfo] = useState("");

  const closeInfo = () => {
    setShowInfo("");
  };

  return (
    <div className="">
      {showInfo === "" ? (
        <div className="section2">
          <div
            onClick={() => setShowInfo("construction")}
            className="item"
            style={{
              backgroundImage: `url(${Construction})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="title">
              <h2>Construction</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("interior")}
            className="item"
            style={{
              backgroundImage: `url(${Interior})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="title">
              <h2>Interior</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("projects")}
            className="item"
            style={{
              backgroundImage: `url(${Projects})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="title">
              <h2>Projects</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("testimonials")}
            className="item"
            style={{
              backgroundImage: `url(${Testimonials})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="title">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("blog")}
            className="item"
            style={{
              backgroundImage: `url(${Blog})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="title">
              <h2>Blog</h2>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal-container">
          {/* <button onClick={closeInfo}>Close</button> */}

          <DisplayConstruction
            showInfo={showInfo === "construction"}
            onClose={closeInfo}
          />
          <Modal open={showInfo === "interior"} onClose={closeInfo}>
            <h2>Interior</h2>
            <p></p>
          </Modal>
          <Modal open={showInfo === "projects"} onClose={closeInfo}>
            <h2>Projects</h2>
            <p></p>
          </Modal>
          <Modal open={showInfo === "testimonials"} onClose={closeInfo}>
            <h2>Testimonials</h2>
            <p></p>
          </Modal>
          <Modal open={showInfo === "blog"} onClose={closeInfo}>
            <h2>Blog</h2>
            <p></p>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Categories;
