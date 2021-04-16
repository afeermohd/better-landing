import React, { useState } from "react";
import { Modal } from "../Modal";
import ListAccordian from "./ListAccordian";

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  const [selectPackage, setSelectPackage] = useState("standard");

  const DisplayPackages = (arg) => {
    switch (arg) {
      case "standard":
        return (
          <div>
            <ListAccordian
              title="Architectural Design & Drawing"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Structure"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Kitchen"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Bathroom"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Doors & Windows"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Planting & Accent Walls"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Electrical"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Flooring"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Other Inclusion"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Additional Charges"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            {/* <ul>
              <li>Architectural Design and Drawing</li>
              <li>Structure</li>
              <li>Kitchen</li>
              <li>Bathroom</li>
              <li>Doors and Windows</li>
              <li>Painting & Accent Walls</li>
              <li>Electrical</li>
              <li>Flooring</li>
              <li>Other Inclusions</li>
              <li>Additional Charge</li>
            </ul> */}
          </div>
        );
      case "premium":
        return (
          <div>
            <ListAccordian
              title="Architectural Design & Drawing"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Structure"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Master Bedroom"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Bedroom"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Kitchen"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Bathroom"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Doors & Windows"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Planting & Accent Walls"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Flooring"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Electrical"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Flooring"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Other Inclusion"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
            <ListAccordian
              title="Additional Charges"
              content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              </ul>"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const DisplayListInfo = (list) => {
    switch (list) {
      case "packages":
        return (
          <div>
            <div className="select-packages-container">
              {/* <h1>Packages</h1> */}
              <div
                onClick={() => {
                  setSelectPackage("standard");
                  // toggleActive();
                }}
                className={`select-packages ${
                  selectPackage === "standard" ? "active-package" : ""
                }`}
              >
                STANDARD
              </div>
              {/* <span>|</span> */}
              <div
                onClick={() => {
                  setSelectPackage("premium");
                  // toggleActive();
                }}
                className={`select-packages ${
                  selectPackage === "premium" ? "active-package" : ""
                }`}
              >
                PREMIUM
              </div>
              {/* <DisplayPackages arg={selectPackage} /> */}
            </div>
            {DisplayPackages(selectPackage)}
          </div>
        );

      case "material":
        return (
          <div>
            {/* <h1>Materials</h1> */}
            <div>this is material</div>
          </div>
        );
      case "projects":
        return (
          <div>
            {/* <h1>Projects</h1> */} <div>this </div>
          </div>
        );
      case "gallery":
        return (
          <div>
            {/* <h1>Gallery</h1> */} <div>this </div>
          </div>
        );
      case "blog":
        return (
          <div>
            {/* <h1>Blog</h1> */} <div>this</div>
          </div>
        );
      case "review":
        return (
          <div>
            <div>this</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal open={showInfo} onClose={onClose}>
      <h2 className="modal-heading">CONSTRUCTION</h2>
      <div className="modal-bottom">
        <div className="modal-list">
          <div
            onClick={() => setList("packages")}
            className={`modal-list-item ${
              list === "packages" ? "active-list" : ""
            }`}
          >
            Packages
          </div>
          <div
            onClick={() => setList("material")}
            className={`modal-list-item ${
              list === "material" ? "active-list" : ""
            }`}
          >
            Material List
          </div>
          <div
            onClick={() => setList("projects")}
            className={`modal-list-item ${
              list === "projects" ? "active-list" : ""
            }`}
          >
            Projects
          </div>
          <div
            onClick={() => setList("gallery")}
            className={`modal-list-item ${
              list === "gallery" ? "active-list" : ""
            }`}
          >
            Gallery
          </div>
          <div
            onClick={() => setList("blog")}
            className={`modal-list-item ${
              list === "blog" ? "active-list" : ""
            }`}
          >
            Blog
          </div>
          <div
            onClick={() => setList("review")}
            className={`modal-list-item ${
              list === "review" ? "active-list" : ""
            }`}
          >
            Review
          </div>
        </div>
        <div className="modal-inside">{DisplayListInfo(list)}</div>
      </div>
      <div>{}</div>
    </Modal>
  );
};

export default DisplayConstruction;
