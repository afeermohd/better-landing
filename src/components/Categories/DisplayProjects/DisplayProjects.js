import React from "react";
import Interior from "../../../assets/interior.jpeg";
import { Modal } from "../assets/Modal";
import "./DisplayProject.css";

const projectData = [
  {
    image: Interior,
    location: "Jigani",
    size: "1421 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Close to Handover",
  },
  {
    image: Interior,
    location: "Mandur",
    size: "1500 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Close to Handover",
  },
  {
    image: Interior,
    location: "Kengeri",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Hulimavu",
    size: "700 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Medihalli",
    size: "500 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Close to Handover",
  },
  {
    image: Interior,
    location: "Kothanur",
    size: "2332 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Seegehalli",
    size: "1200 sqft",
    pack: "Premium",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Uttarahalli",
    size: "1800 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Kyalasanahalli",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Kattugollahalli",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "HAL",
    size: "1000 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Byagadadenahalli",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Mandur",
    size: "1500 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Kasaba Hobli",
    size: "600 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Devakachikkanahalli",
    size: "2300 sqft",
    pack: "Standard",
    elevation: "Ground Floor +4",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Mandur",
    size: "1000 sqft",
    pack: "Standard",
    elevation: "Ground Floor",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Jigani",
    size: "3000 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Anchepalya",
    size: "2000 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Devanahalli",
    size: "2400 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Gatihalli",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Seshadhari Road",
    size: "600 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Basapura",
    size: "1125 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Jogupalya",
    size: "840 sqft",
    pack: "Standard",
    elevation: "Ground Floor +3",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Malur",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Execution Stage",
  },
  {
    image: Interior,
    location: "Amruth Nagar",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Mandur",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +2",
    phase: "Design Stage",
  },
  {
    image: Interior,
    location: "Makali",
    size: "1200 sqft",
    pack: "Standard",
    elevation: "Ground Floor +1",
    phase: "Design Stage",
  },
];

const DisplayProjects = ({ showInfo, onClose }) => {
  return (
    <Modal open={showInfo} onClose={onClose} title="PROJECTS">
      {/* <span className="category-heading">PROJECTS</span> */}
      <div className="project-wrapper">
        <div className="container">
          <div className="horizontal-container">
            {projectData.map((item, index) => (
              <div className="project-card" key={index}>
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="card-buttons"></div>
                </div>
                <div className="card-text">
                  <h2>{item.location}</h2>
                  <p className="card-description"></p>
                </div>
                <div className="card-stat-stack">
                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">{item.elevation}</div>
                      <div className="type">Plot Elevation</div>
                    </div>
                    <div className="stat border">
                      <div className="value">{item.phase}</div>
                      <div className="type">Phase</div>
                    </div>
                  </div>
                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">{item.size}</div>
                      <div className="type">Plot Size</div>
                    </div>
                    <div className="stat border">
                      <div className="value">{item.pack}</div>
                      <div className="type">Package</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DisplayProjects;
