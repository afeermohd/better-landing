import React from "react";
import { Modal } from "../assets/Modal";
// import { motion } from "framer-motion";

const DisplayBlog = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose}>
      <span className="category-heading">BLOG</span>
    </Modal>
  );
};

export default DisplayBlog;
