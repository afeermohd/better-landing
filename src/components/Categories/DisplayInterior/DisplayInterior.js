import React from "react";
import { Modal } from "../assets/Modal";

const DisplayInterior = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose}>
      <h2 className="category-heading">Blog</h2>
    </Modal>
  );
};

export default DisplayInterior;
