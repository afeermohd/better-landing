import React, { useState, useRef, useEffect } from "react";
import "./style.css";

// import { IoArrowForward, IoArrowBack } from "react-icons/io5";

// import ImageOne from "../../assets/construction-1.png";
import ImageTwo from "../../assets/front.jpg";

const sliderData = [
  {
    image: ImageTwo,
    alt: "House",
  },
];

const FrontBanner = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 6000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <section className="hero-section" id="dummy1">
      <div className="hero-wrapper">
        {sliderData.map((slide, index) => {
          return (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                  <img
                    className="hero-image"
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <div className="hero-content"></div>
                </div>
              )}
            </div>
          );
        })}
        {/* <div className="slider-buttons">
          <IoArrowBack className="prev-arrow" onClick={prevSlide} />
          <IoArrowForward className="next-arrow" onClick={nextSlide} />
        </div> */}
      </div>
      <div></div>
    </section>
  );
};

export default FrontBanner;
