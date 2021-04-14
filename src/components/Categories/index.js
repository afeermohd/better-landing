import React, { useState } from "react";
import "./style.css";
import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import Testimonials from "../../assets/testimonials.jpeg";
import { Modal } from "./Modal";
import { Spring } from "react-spring";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };
  // const closeModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <div className="section2">
      <div
        className="item"
        style={{
          backgroundImage: `url(${Construction})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={openModal}
      >
        {/* <header class="header"> */}
        {/* <p>Sep 11th 2020</p> */}
        {/* <img src={Construction} alt="construction" height="180px" /> */}
        <div className="title">
          {/* <button onClick={openModal}>I'm a modal</button> */}

          <h2>Construction</h2>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <div style={props}>
                <Modal open={showModal}>
                  The Better Co is a home construction company which helps you
                  build your dream home and do your home interiors on one
                  platform. We have an experienced team consisting of Designers,
                  Architects, Engineers, Experience management, Quality
                  assurance, etc., to provide you with the best home
                  construction possible within your budget. We supply you with
                  the best service and leave no chance for disappointment.
                  Quality and experience is our priority over everything else.
                  Serving all client needs of building their dream home within
                  their budget is our speciality. We envision providing people
                  the power of design, track work progress, quality and regulate
                  their budget to bring forth the home of their dreams into a
                  tangible material via Product, Material, Financial and
                  Technological innovations. Customer Satisfaction is our go-to
                  motive.
                </Modal>
              </div>
            )}
          </Spring>
        </div>

        {/* </header> */}
      </div>
      {/* <div
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
        className="item"
        style={{
          backgroundImage: `url(${Blog})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
       
        <div className="title">
          <h2>Blog</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
