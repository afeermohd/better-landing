import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";

// import { Modal } from "./assets/Modal";

// import DisplayConstruction from "./DisplayConstruction/DisplayConstruction";
// import DisplayProjects from "./DisplayProject/DisplayProjects";
// import DisplayTestimonials from "./DisplayTestimonials/DisplayTestimonials";
// import DisplayInterior from "./DisplayInterior/DisplayInterior";
// import DisplayBlog from "./DisplayBlog/DisplayBlog";

const Categories = () => {
  // const [showInfo, setShowInfo] = useState("");

  // const closeInfo = () => {
  //   setShowInfo("");
  // };

  return (
    <div className="categories-section" id="categories">
      {/* {showInfo === "" ? ( */}
      <div className="categories">
        <Link to="/construction" className="catergories-link">
          <div
            // onClick={() => setShowInfo("construction")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Construction})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <p>Construction</p>
            </div>
          </div>
        </Link>
        <Link to="/interior" className="catergories-link">
          <div
            // onClick={() => setShowInfo("interior")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Interior})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <p>Concept Housing</p>
            </div>
          </div>
        </Link>
        <Link to="/projects" className="catergories-link">
          <div
            // onClick={() => setShowInfo("projects")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Projects})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <p>Projects</p>
            </div>
          </div>
        </Link>
        <Link to="/testimonials" className="catergories-link">
          <div
            // onClick={() => setShowInfo("testimonials")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Testimonials})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <p>Testimonials</p>
            </div>
          </div>
        </Link>
        <Link to="/Blog" className="catergories-link">
          <div
            // onClick={() => setShowInfo("blog")}
            className="categories-item"
            style={{
              backgroundImage: `url(${Blog})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="categories-title">
              <p>Budget Calculator</p>
            </div>
          </div>
        </Link>
      </div>
      {/* ) : (
        <div className="category-container">
          <button onClick={closeInfo}>Close</button>
           
   
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
      )} */}
    </div>
  );
};

export default Categories;
