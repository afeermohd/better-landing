import React from "react";
import Marquee from "react-fast-marquee";
import Construction from "../../../../assets/construction.jpeg";
import Interior from "../../../../assets/interior.jpeg";
import Projects from "../../../../assets/projects.jpeg";
import Blog from "../../../../assets/blog.jpeg";
import Testimonials from "../../../../assets/testimonials.jpeg";

const DisplayGallery = () => {
  return (
    <div>
      <Marquee
        className="gallery-marq"
        // pauseOnHover="true"
        speed="30"
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
        speed="30"
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
        speed="30"
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
};

export default DisplayGallery;
