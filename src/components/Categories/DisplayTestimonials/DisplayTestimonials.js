import React from "react";
import Reviews from "./Reviews";
import { Modal } from "../assets/Modal";
import "./DisplayTestimonials.css";

const testimonialsData = [
  {
    id: 1,
    title: "Mr. Mithlesh's Better Experience",
    src: "https://www.youtube.com/embed/z6uq5EPVkEw",
  },
  {
    id: 2,
    title: "Mr. Rakesh's Better Experience",
    src: "https://www.youtube.com/embed/yVbhwZTnXEY",
  },
  {
    id: 3,
    title: "Mr. Ravi's Better Experience",
    src: "https://www.youtube.com/embed/G81qoWxldyw",
  },
];

const DisplayTestimonials = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose} title="TESTIMONIALS">
      <div className="testimonial-wrapper">
        <div className="container">
          <div className="horizontal-container">
            {testimonialsData.map((item, index) => (
              <div className="video-card" key={index}>
                <iframe
                  width="445"
                  height="250"
                  src={item.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
        <Reviews />
      </div>
    </Modal>
  );
};

export default DisplayTestimonials;
