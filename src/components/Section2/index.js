import React from "react";
import "./style.css";
import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";

const Section2 = () => {
  return (
    <div className="section2">
      <div
        className="item"
        style={{
          backgroundImage: `url(${Construction})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Construction} alt="construction" height="180px" /> */}
        <h2>Construction</h2>
        {/* </header> */}
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Interior})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Interior} alt="interior" height="180px" /> */}
        <h2>Interior</h2>
        {/* </header> */}
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Projects})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Projects} alt="projects" height="180px" /> */}
        <h2>Projects</h2>
        {/* </header> */}
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Testimonials})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Testimonials} alt="testimonials" height="180px" /> */}
        <h2>Testimonials</h2>
        {/* </header> */}
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Blog})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Blog} alt="blog" height="180px" /> */}
        <h2>Blog</h2>
        {/* </header> */}
      </div>
      <div className="empty-space"></div>
    </div>
  );
};

export default Section2;
