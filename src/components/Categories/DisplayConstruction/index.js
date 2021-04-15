import React, { useState } from "react";
import { Modal } from "../Modal";
import ListAccordian from "./ListAccordian";

const DisplayConstruction = ({ showInfo }) => {
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
            <div>
              <h1>Packages</h1>
              <span onClick={() => setSelectPackage("standard")}>
                Standard Package
              </span>
              <span>|</span>
              <span onClick={() => setSelectPackage("premium")}>
                Premium Package
              </span>
              {DisplayPackages(selectPackage)}
              {/* <DisplayPackages arg={selectPackage} /> */}
            </div>
          </div>
        );

      case "material":
        return (
          <div>
            <h1>Materials</h1>
            <div>this is material</div>
          </div>
        );
      case "projects":
        return (
          <div>
            <h1>Projects</h1>
          </div>
        );
      case "gallery":
        return (
          <div>
            <h1>Gallery</h1>
          </div>
        );
      case "blog":
        return (
          <div>
            <h1>Blog</h1>
          </div>
        );
      case "review":
        return (
          <div>
            <h1>Review</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal open={showInfo}>
      <div className="modal-list">
        <h2>Construction</h2>
        <div onClick={() => setList("packages")}>Packages</div>
        <div onClick={() => setList("material")}>Material List</div>
        <div onClick={() => setList("projects")}>Projects</div>
        <div onClick={() => setList("gallery")}>Gallery</div>
        <div onClick={() => setList("blog")}>Blog</div>
        <div onClick={() => setList("review")}>Review</div>
      </div>
      {}
      <div className="modal-inside">{DisplayListInfo(list)}</div>
    </Modal>
  );
};

export default DisplayConstruction;
