import React from "react";
import { Modal } from "../assets/Modal";

const DisplayInterior = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose}>
      <span className="category-heading">INTERIOR</span>
    </Modal>
  );
};

export default DisplayInterior;
