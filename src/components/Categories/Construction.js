import React from "react";
import "./style.css";
import { Modal } from "./Modal";

const Construction = ({ open }) => {
  if (!open) return null;
  <div className="construction">
    <Modal open={showInfo === "construction"}>
      <h2>Construction</h2>
      <p>
        This is Construction Content The Better Co is a home construction
        company which helps you build your dream home and do your home interiors
        on one platform. We have an experienced team consisting of Designers,
        Architects, Engineers, Experience management, Quality assurance, etc.,
        to provide you with the best home construction possible within your
        budget. We supply you with the best service and leave no chance for
        disappointment. Quality and experience is our priority over everything
        else. Serving all client needs of building their dream home within their
        budget is our speciality. We envision providing people the power of
        design, track work progress, quality and regulate their budget to bring
        forth the home of their dreams into a tangible material via Product,
        Material, Financial and Technological innovations. Customer Satisfaction
        is our go-to motive.
      </p>
    </Modal>
  </div>;
};

export default Construction;
