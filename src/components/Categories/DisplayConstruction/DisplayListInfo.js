import React, { useState } from "react";
import DisplayMaterials from "./DisplayContent/DisplayMaterials";
import DisplayProjects from "./DisplayContent/DisplayProjects";
import DisplaySelectedPackage from "./DisplayContent/DisplaySelectedPackage";
import Marquee from "react-fast-marquee";
import Construction from "../../../assets/construction.jpeg";
import Interior from "../../../assets/interior.jpeg";
import Projects from "../../../assets/projects.jpeg";
import Blog from "../../../assets/blog.jpeg";
import Testimonials from "../../../assets/testimonials.jpeg";

const DisplayListInfo = ({ list }) => {
  const [selectPackage, setSelectPackage] = useState("standard");

  if (list === "packages") {
    return (
      <div>
        <div className="select-packages-container">
          <div
            onClick={() => {
              setSelectPackage("standard");
            }}
            className={`select-packages ${
              selectPackage === "standard" ? "active-package" : ""
            }`}
          >
            STANDARD
            <p>Rs.1625/sqft + Rs.50/sqft + GST</p>
          </div>
          <div
            onClick={() => {
              setSelectPackage("premium");
            }}
            className={`select-packages ${
              selectPackage === "premium" ? "active-package" : ""
            }`}
          >
            PREMIUM
            <p>Rs.2200/sqft + Rs.75/sqft + GST</p>
          </div>
        </div>
        {/* {DisplaySelectedPackage(selectPackage)} */}
        <DisplaySelectedPackage arg={selectPackage} />
      </div>
    );
  } else if (list === "material") {
    return (
      <div className="material-table-container">
        {/* <h1>Materials</h1> */}
        <div>
          {/* {DisplayMaterials()} */}
          <DisplayMaterials />
        </div>
      </div>
    );
  } else if (list === "projects") {
    return (
      <div>
        {/* <h1>Projects</h1> */}{" "}
        <div>
          {/* {DisplayProjects()} */}
          <DisplayProjects />
        </div>
      </div>
    );
  } else if (list === "gallery") {
    return (
      <div>
        {/* <h1>Gallery</h1> */}{" "}
        {/* <div>
          <marquee behaviour="alternate" className="marquee-gallery">
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
          </marquee>
          <marquee
            behaviour="scroll"
            direction="right"
            className="marquee-gallery"
            onMouseOver="stop()"
            onMouseOut="start()"
          >
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
           
          </marquee>
        </div> */}
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed="60"
          gradientColor="[0, 0, 0]"
          gradirent="true"
        >
          <img src={Construction} alt="construction" />
          {/* <img src={Interior} alt="construction"/> */}
          <img src={Testimonials} alt="construction" />
          <img src={Blog} alt="construction" />
          <img src={Projects} alt="construction" />
        </Marquee>
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed="60"
          gradientColor="[0, 0, 0]"
          gradirent="true"
          direction="right"
        >
          {/* <img src={Construction} /> */}
          <img src={Interior} alt="construction" />
          <img src={Testimonials} alt="construction" />
          <img src={Blog} alt="construction" />
          <img src={Projects} alt="construction" />
        </Marquee>
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed="60"
          gradientColor="[0, 0, 0]"
          gradirent="true"
        >
          <img src={Construction} alt="construction" />
          <img src={Interior} alt="construction" />
          {/* <img src={Testimonials} alt="construction" /> */}
          <img src={Blog} alt="construction" />
          <img src={Projects} alt="construction" />
        </Marquee>
      </div>
    );
  } else if (list === "blog") {
    return (
      <div>
        {/* <h1>Blog</h1> */} <div>this</div>
      </div>
    );
  } else if (list === "review") {
    return (
      <div>
        <div>this</div>
      </div>
    );
  }
};

export default DisplayListInfo;
