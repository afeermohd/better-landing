import React from "react";
import Interior from "../../../../assets/interior.jpeg";

const DisplayProjects = () => {
  const card = (image, location, size, pack, elevation, phase) => {
    return (
      <div className="card">
        <div
          className="card-image"
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
      </div>
    </div>
  );
};

export default DisplayProjects;
