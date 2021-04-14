import React from "react";
import "./style.css";
import { Spring } from "react-spring";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal-text">
        {/* <button onClick={onClose}>Close Modal</button> */}
        {children}
      </div>
    </div>
  );
};
