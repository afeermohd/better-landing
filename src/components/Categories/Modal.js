import React from "react";
import "./style.css";

export const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal-card">
        {/* <button onClick={onClose}>Close Modal</button> */}
        {children}
      </div>
    </div>
  );
};
