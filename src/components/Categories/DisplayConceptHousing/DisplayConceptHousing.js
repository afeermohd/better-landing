import React from "react";
import { Modal } from "../assets/Modal";

const DisplayConceptHousing = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose} title="CONCEPT HOUSING">
      {/* <span className="category-heading">Concept Housing</span> */}
    </Modal>
  );
};

export default DisplayConceptHousing;
