import React from "react";
import "./style.css";

const DisplayCategories = ({ setShowInfo, backgroundImage, title }) => {
  return (
    <div>
      <div className="section2">
        <div
          onClick={() => {
            {
              setShowInfo();
            }
          }}
          className="item"
          style={{
            backgroundImage: `url(${backgroundImage}})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="title">
            <h2>{title}</h2>
          </div>
        </div>
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default DisplayCategories;
