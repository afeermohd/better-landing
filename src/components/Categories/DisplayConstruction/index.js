import React, { useState } from "react";
import { Modal } from "../Modal";
import ListAccordian from "./ListAccordian";

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  const [selectPackage, setSelectPackage] = useState("standard");

  const DisplaySelectedPackage = (arg) => {
    switch (arg) {
      case "standard":
        return (
          <div className="list-box-standard">
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
          <div className="list-box-premium">
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

  const DisplayMaterials = (arg) => {
    return (
      <table>
        {/* <tr>
          <td>Material Make and Brand List</td>
        </tr> */}
        <tr>
          <td>Sl.No.</td>
          <td>Description of Item</td>
          <td>Brand</td>
          <td>Remarks</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Cement opc/ppc 43 and 53</td>
          <td>ACC, RAMCO, ZUARI</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Reinforcement Steel</td>
          <td>INDUS 555 (Fe 550), Meenakshi, Prime Gold, Kamdhenu</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>M Sand</td>
          <td>Zone - 3 and Zone - 3 Material</td>
          <td>As per IS 383-1970</td>
        </tr>
        <tr>
          <td>4</td>
          <td>20mm Coarse aggregates</td>
          <td>Single graded</td>
          <td>As per IS 383-1970</td>
        </tr>
        <tr>
          <td>5</td>
          <td>40mm Coarse aggregates</td>
          <td>Graded</td>
          <td>As per IS 383-1970</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Blocks 8", 6", 4"</td>
          <td>Best available nearby market</td>
          <td>As per IS 2185</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Bricks Table moulded</td>
          <td>Best available nearby market</td>
          <td>As per IS 1077(1992)</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Vitrified Tiles</td>
          <td>Somany, Kajaria, Cera, Bell</td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Ceramic Tiles</td>
          <td>Somany, Kajaria, Bell</td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Anti Skid</td>
          <td>Somany, Kajaria, Bell</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>Plumbing Materials</td>
          <td>Parryware, Jaquar, Cera, RAK</td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
          <td>Paint</td>
          <td>Asian Paints</td>
          <td></td>
        </tr>
        <tr>
          <td>13</td>
          <td>Plywood 12mm, 18mm, 24mm</td>
          <td>Century or Kitply</td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td>Laminate</td>
          <td>Greenlam, Green ply, Merino</td>
          <td></td>
        </tr>
        <tr>
          <td>15</td>
          <td>Electrical Items</td>
          <td>Finolex, Anchor, Legrand, GM Modular</td>
          <td></td>
        </tr>
        <tr>
          <td>16</td>
          <td>Waterproofing Chemical</td>
          <td>Dr.Fixit, Fosroc</td>
          <td></td>
        </tr>
        <tr>
          <td>17</td>
          <td>Door window shutter and frames</td>
          <td>Teak wood, Sal wood, Neem wood</td>
          <td></td>
        </tr>
        <tr>
          <td>18</td>
          <td>Door fixtures/Fitting</td>
          <td>Godrej</td>
          <td></td>
        </tr>
        <tr>
          <td>19</td>
          <td>UPVC</td>
          <td>ZEN, VEKA, EAGLE BOSS</td>
          <td></td>
        </tr>
      </table>
    );
  };

  // const DisplayProjects = () => {
  //   return (
  //     <div class="container">
  //       <div class="horizontal-container">
  //         {/* @if ($allProjects && $allProjects['status'])
  //     @foreach ($allProjects['data'] as $project) */}
  //         <div class="card">
  //           <div class="card-image">
  //             <div class="card-buttons">
  //               <a href="" class="btn btn-success stretched-link">
  //                 Open
  //               </a>
  //               <a
  //                 href=""
  //                 class="btn btn-success stretched-link"
  //                 target="_blank"
  //               >
  //                 <i class="fa fa-map-marker" aria-hidden="true"></i>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="card-text">
  //             <h2></h2>
  //             <p class="card-description"></p>
  //           </div>
  //           <div class="card-stats">
  //             <div class="stat">
  //               <div class="value"></div>
  //               <div class="type">Plot Size</div>
  //             </div>
  //             <div class="stat border">
  //               <div class="value"></div>
  //               <div class="type">Package</div>
  //             </div>
  //             <div class="stat">
  //               <div class="value"></div>
  //               <div class="type">Plot Elevation</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* <!-- <div class="paddles">
  // 	<button class="left-paddle paddle hidden">
  // 		<
  // 	</button>
  // 	<button class="right-paddle paddle">
  // 		>
  // 	</button>
  // </div> --> */}
  //       </div>
  //     </div>
  //   );
  // };
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
            {DisplaySelectedPackage(selectPackage)}
          </div>
        );

      case "material":
        return (
          <div>
            {/* <h1>Materials</h1> */}
            <div>{DisplayMaterials()}</div>
          </div>
        );
      case "projects":
        return (
          <div>
            {/* <h1>Projects</h1> */} <div>{/* {DisplayProjects()} */}</div>
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
