import React from "react";
import { Modal } from "../assets/Modal";
// import { motion } from "framer-motion";

const DisplayBudgetCalculator = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose} title="BUDGET CALCULATOR">
      {/* <span className="category-heading">Budget Calculator</span> */}
    </Modal>
  );
};

export default DisplayBudgetCalculator;
