import React, { useState } from "react";
import "./style.scss";
// import ReactCardFlip from "react-card-flip";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

// import Back from "./Back";
// import Front from "./Front";s

const Reviews = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="aboutus">
      <div className="aboutus">
        <div className="about-card" onMouseEnter={handleClick}>
          <h2 className="about-title">REVIEWS</h2>
          {/* <p className="about-para"> */}
          <div className="review">
            <figure class="snip1192">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non ligula non nunc faucibus faucibus. Nunc rhoncus blandit
                posuere. Sed rutrum pulvinar felis.
              </blockquote>
              <div class="author">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sq-sample29"
                />
                <h5>
                  John Doe<span> Company Name</span>
                </h5>
              </div>
            </figure>
            <figure class="snip1192">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non ligula non nunc faucibus faucibus. Nunc rhoncus blandit
                posuere. Sed rutrum pulvinar felis.
              </blockquote>
              <div class="author">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sq-sample1"
                />
                <h5>
                  John Doe <span> Company Name</span>
                </h5>
              </div>
            </figure>

            <figure class="snip1192">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non ligula non nunc faucibus faucibus. Nunc rhoncus blandit
                posuere. Sed rutrum pulvinar felis.
              </blockquote>
              <div class="author">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sq-sample29"
                />
                <h5>
                  John Doe<span> Company Name</span>
                </h5>
              </div>
            </figure>
            <figure class="snip1192">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non ligula non nunc faucibus faucibus. Nunc rhoncus blandit
                posuere. Sed rutrum pulvinar felis.
              </blockquote>
              <div class="author">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sq-sample29"
                />
                <h5>
                  John Doe<span> Company Name</span>
                </h5>
              </div>
            </figure>
            <figure class="snip1192">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non ligula non nunc faucibus faucibus. Nunc rhoncus blandit
                posuere. Sed rutrum pulvinar felis.
              </blockquote>
              <div class="author">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="sq-sample29"
                />
                <h5>
                  John Doe<span> Company Name</span>
                </h5>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
