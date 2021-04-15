import React from "react";
import "./ListAccordian.css";

const ListAccordian = ({ title, content }) => {
  return (
    <div className="listaccodian-section">
      <button className="listaccordian">
        <p className="listaccordian-title">{title}</p>
      </button>
      <div
        className="listaccordian-text"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default ListAccordian;
