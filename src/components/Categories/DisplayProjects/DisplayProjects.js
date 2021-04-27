import React from "react";
import Interior from "../../../assets/interior.jpeg";
import { Modal } from "../assets/Modal";
import "./DisplayProject.css";

const DisplayProjects = ({ showInfo, onClose }) => {
  const card = (image, location, size, pack, elevation, phase) => {
    return (
      <div className="project-card">
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${image})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
          }}
        >
          <div className="card-buttons"></div>
        </div>
        <div className="card-text">
          <h2>{location}</h2>
          <p className="card-description"></p>
        </div>
        <div className="card-stat-stack">
          <div className="card-stats">
            <div className="stat">
              <div className="value">{elevation}</div>
              <div className="type">Plot Elevation</div>
            </div>
            <div className="stat border">
              <div className="value">{phase}</div>
              <div className="type">Phase</div>
            </div>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">{size}</div>
              <div className="type">Plot Size</div>
            </div>
            <div className="stat border">
              <div className="value">{pack}</div>
              <div className="type">Package</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Modal open={showInfo} onClose={onClose}>
      <span className="category-heading">PROJECTS</span>
      <div className="container">
        <div className="horizontal-container">
          {card(
            Interior,
            "Jigani",
            "1421 sqft",
            "Standard",
            "Ground Floor +1",
            "Close to Handover"
          )}
          {card(
            Interior,
            "Mandur",
            "1500 sqft",
            "Standard",
            "Ground Floor",
            "Close to Handover"
          )}
          {card(
            Interior,
            "Kengeri",
            "1200 sqft",
            "Standard",
            "Ground Floor +2",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Hulimavu",
            "700 sqft",
            "Standard",
            "Ground Floor +2",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Medihalli",
            "500 sqft",
            "Standard",
            "Ground Floor",
            "Close to Handover"
          )}
          {card(
            Interior,
            "Kothanur",
            "2332 sqft",
            "Standard",
            "Ground Floor +2",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Seegehalli",
            "1200 sqft",
            "Premium",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Uttarahalli",
            "1800 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Kyalasanahalli",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Kattugollahalli",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "HAL",
            "1000 sqft",
            "Standard",
            "Ground Floor +2",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Byagadadenahalli",
            "1200 sqft",
            "Standard",
            "Ground Floor",
            "Design Stage"
          )}
          {card(
            Interior,
            "Mandur",
            "1500 sqft",
            "Standard",
            "Ground Floor",
            "Design Stage"
          )}
          {card(
            Interior,
            "Kasaba Hobli",
            "600 sqft",
            "Standard",
            "Ground Floor",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Devakachikkanahalli",
            "2300 sqft",
            "Standard",
            "Ground Floor +4",
            "Design Stage"
          )}
          {card(
            Interior,
            "Mandur",
            "1000 sqft",
            "Standard",
            "Ground Floor",
            "Design Stage"
          )}
          {card(
            Interior,
            "Jigani",
            "3000 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Anchepalya",
            "2000 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Devanahalli",
            "2400 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Gatihalli",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Design Stage"
          )}
          {card(
            Interior,
            "Seshadhari Road",
            "600 sqft",
            "Standard",
            "Ground Floor +1",
            "Design Stage"
          )}
          {card(
            Interior,
            "Basapura",
            "1125 sqft",
            "Standard",
            "Ground Floor +2",
            "Design Stage"
          )}
          {card(
            Interior,
            "Jogupalya",
            "840 sqft",
            "Standard",
            "Ground Floor +3",
            "Design Stage"
          )}
          {card(
            Interior,
            "Malur",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Execution Stage"
          )}
          {card(
            Interior,
            "Amruth Nagar",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Design Stage"
          )}
          {card(
            Interior,
            "Mandur",
            "1200 sqft",
            "Standard",
            "Ground Floor +2",
            "Design Stage"
          )}
          {card(
            Interior,
            "Makali",
            "1200 sqft",
            "Standard",
            "Ground Floor +1",
            "Design Stage"
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DisplayProjects;
