import React, { useState } from "react";
import "./style.css";

import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";

// import { Modal } from "./assets/Modal";
import DisplayConstruction from "./DisplayConstruction/DisplayConstruction";
import DisplayProjects from "./DisplayProject/DisplayProjects";
import DisplayTestimonials from "./DisplayTestimonials/DisplayTestimonials";
import DisplayInterior from "./DisplayInterior/DisplayInterior";
import DisplayBlog from "./DisplayBlog/DisplayBlog";

const Categories = () => {
  const [showInfo, setShowInfo] = useState("");

  const closeInfo = () => {
    setShowInfo("");
  };

  return (
    <div className="categories-section">
      {showInfo === "" ? (
        <div className="categories">
          <div
            onClick={() => setShowInfo("construction")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Construction})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <h2>Construction</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("interior")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Interior})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <h2>Interior</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("projects")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Projects})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <h2>Projects</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("testimonials")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Testimonials})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div
            onClick={() => setShowInfo("blog")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Blog})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="category-container">
          {/* <button onClick={closeInfo}>Close</button> */}

          <DisplayConstruction
            showInfo={showInfo === "construction"}
            onClose={closeInfo}
          />
          <DisplayInterior
            showInfo={showInfo === "interior"}
            onClose={closeInfo}
          />

          <DisplayProjects
            showInfo={showInfo === "projects"}
            onClose={closeInfo}
          />

          <DisplayTestimonials
            showInfo={showInfo === "testimonials"}
            onClose={closeInfo}
          />
          <DisplayBlog showInfo={showInfo === "blog"} onClose={closeInfo} />
        </div>
      )}
    </div>
  );
};

export default Categories;
