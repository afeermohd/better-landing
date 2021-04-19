import React, { useState } from "react";
import DisplayMaterials from "./DisplayContent/DisplayMaterials";
import DisplayProjects from "./DisplayContent/DisplayProjects";
import DisplaySelectedPackage from "./DisplayContent/DisplaySelectedPackage";

const DisplayListInfo = ({ list }) => {
  const [selectPackage, setSelectPackage] = useState("standard");

  if (list === "packages") {
    return (
      <div>
        <div className="select-packages-container">
          <div
            onClick={() => {
              setSelectPackage("standard");
            }}
            className={`select-packages ${
              selectPackage === "standard" ? "active-package" : ""
            }`}
          >
            STANDARD
            <p>Rs.1625/sqft + Rs.50/sqft + GST</p>
          </div>
          <div
            onClick={() => {
              setSelectPackage("premium");
            }}
            className={`select-packages ${
              selectPackage === "premium" ? "active-package" : ""
            }`}
          >
            PREMIUM
            <p>Rs.2200/sqft + Rs.75/sqft + GST</p>
          </div>
        </div>
        {/* {DisplaySelectedPackage(selectPackage)} */}
        <DisplaySelectedPackage arg={selectPackage} />
      </div>
    );
  } else if (list === "material") {
    return (
      <div className="material-table-container">
        {/* <h1>Materials</h1> */}
        <div>
          {/* {DisplayMaterials()} */}
          <DisplayMaterials />
        </div>
      </div>
    );
  } else if (list === "projects") {
    return (
      <div>
        {/* <h1>Projects</h1> */}{" "}
        <div>
          {/* {DisplayProjects()} */}
          <DisplayProjects />
        </div>
      </div>
    );
  } else if (list === "gallery") {
    return (
      <div>
        {/* <h1>Gallery</h1> */} <div>this </div>
      </div>
    );
  } else if (list === "blog") {
    return (
      <div>
        {/* <h1>Blog</h1> */} <div>this</div>
      </div>
    );
  } else if (list === "review") {
    return (
      <div>
        <div>this</div>
      </div>
    );
  }
};

export default DisplayListInfo;
