import React, { useState, useRef } from "react";
import "./ListAccordian.css";
import Chevron from "./Chevron";

const ListAccordian = ({ title, content }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("listaccordian-icon");

  const contentRef = useRef(null);

  const toggleAccordian = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setRotate(
      active === "active" ? "listaccordian-icon" : "listaccordian-icon rotate"
    );
  };

  return (
    <div className="listaccodian-section">
      <button className={`listaccordian ${active}`} onClick={toggleAccordian}>
        <Chevron className={`${rotate}`} width={10} fill={"white"} />
        <p className="listaccordian-title">{title}</p>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="listaccordian-content"
      >
        <div
          className="listaccordian-text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default ListAccordian;
