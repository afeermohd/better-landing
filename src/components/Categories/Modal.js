import React from "react";
import "./style.css";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal-card">
        <div className="modal-close" onClick={onClose}>
          o
        </div>
        {children}
      </div>
    </div>
  );
};
