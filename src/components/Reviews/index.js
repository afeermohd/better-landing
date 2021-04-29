import React from "react";
import "./style.css";

const reviewItem = [
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },

  {
    qoute:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscenon ligula non nunc faucibus faucibus. Nunc rhoncus blandit posuere. Sed rutrum pulvinar felis.",
    author: "John Doe",
    dp:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
];

const Reviews = () => {
  return (
    <div className="review-section">
      {/* <h2>REVIEWS</h2> */}
      <div className="review-wrapper">
        <h2>REVIEWS</h2>
        <div className="container">
          <div className="review">
            {reviewItem.map((item, index) => (
              <figure className="snip1192" key={index}>
                <blockquote>{item.qoute}</blockquote>
                <div className="author">
                  <img src={item.dp} alt={item.author} />
                  <h5>
                    {item.author}
                    <span>{item.location}</span>
                  </h5>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
