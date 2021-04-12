import React, { useState } from "react";
import "./style.scss";

// import Back from "./Back";
import Front from "./Front";

const Aboutus = () => {
  const [flip, setFlip] = useState(false);
  const flipped = () => setFlip(false);
  return (
    <div className="aboutus">
      <div
        onMouseEnter={flipped}
        onMouseLeave={flipped}
        className={"card-container" + (flip ? " flipped" : "")}
      >
        <Front />
        {/* <Back /> */}
      </div>
    </div>
  );
};
export default Aboutus;
