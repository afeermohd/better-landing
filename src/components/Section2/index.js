import React from "react";
import "./style.css";
import Construction from "../../assets/construction.svg";
import Interior from "../../assets/interior.svg";
import Projects from "../../assets/projects.svg";
import Blog from "../../assets/blog.svg";
import Testimonials from "../../assets/testimonials.svg";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <h3>Construction</h3>
          <img src={Construction} height="180px" />
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <h3>Interior</h3>
          <img src={Interior} height="180px" />
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <h3>Projects</h3>
          <img src={Projects} height="180px" />
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <h3>Testimonials</h3>
          <img src={Testimonials} height="180px" />
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <h3>Blog</h3>
          <img src={Blog} height="180px" />
        </header>
      </div>
    </div>
  );
};

export default Section2;
