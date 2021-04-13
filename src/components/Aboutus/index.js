import React, { useState } from "react";
import "./style.scss";
import ReactCardFlip from "react-card-flip";

import Back from "./Back";
import Front from "./Front";

const Aboutus = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* <div className="aboutus"> */}
      <div className="card" onMouseEnter={handleClick}>
        <Front />
        {/* <button onMouseEnter={handleClick}>Click</button> */}
      </div>
      <div onMouseLeave={handleClick}>
        <Back />
        {/* <button>Click</button> */}
      </div>
      {/* </div> */}
    </ReactCardFlip>
  );
};
export default Aboutus;
