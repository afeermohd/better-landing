import React from "react";
import { Modal } from "../assets/Modal";
import "./DisplayTestimonials.css";

const DisplayTestimonials = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose}>
      {/* <span className="category-heading">TESTIMONIALS</span> */}
      <div className="testimonial-wrapper">
        <div className="container">
          <div className="horizontal-container">
            <div className="video-card">
              <iframe
                width="445"
                height="250"
                src="https://www.youtube.com/embed/z6uq5EPVkEw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-card">
              <iframe
                width="445"
                height="250"
                src="https://www.youtube.com/embed/yVbhwZTnXEY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-card">
              <iframe
                width="445"
                height="250"
                src="https://www.youtube.com/embed/G81qoWxldyw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DisplayTestimonials;
