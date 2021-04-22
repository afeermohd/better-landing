import React from "react";
import { Modal } from "../assets/Modal";

const DisplayBlog = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose}>
      <h2 className="category-heading">BLOG</h2>
    </Modal>
  );
};

export default DisplayBlog;
