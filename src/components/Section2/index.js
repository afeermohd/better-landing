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
          <img src={Construction} alt="construction" height="180px" />
          <h3>Construction</h3>
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <img src={Interior} alt="interior" height="180px" />
          <h3>Interior</h3>
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <img src={Projects} alt="projects" height="180px" />
          <h3>Projects</h3>
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <img src={Testimonials} alt="testimonials" height="180px" />
          <h3>Testimonials</h3>
        </header>
      </div>
      <div className="item">
        <header class="header">
          {/* <p>Sep 11th 2020</p> */}
          <img src={Blog} alt="blog" height="180px" />
          <h3>Blog</h3>
        </header>
      </div>
    </div>
  );
};

export default Section2;
