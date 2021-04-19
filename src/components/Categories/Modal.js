import React from "react";
import Chevron from "./DisplayConstruction/assets/Chevron";
import "./style.css";
// import "./DisplayConstruction/ListAccordian.css";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal-card">
        <div className="modal-close" onClick={onClose}>
          <Chevron
            className={`listaccordian-icon rotate180`}
            width={10}
            fill={"white"}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
