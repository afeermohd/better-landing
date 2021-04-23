import React, { useState } from "react";
import DisplayGallery from "./ConstructionContent/DisplayGallery";
import DisplayMaterials from "./ConstructionContent/DisplayMaterials";
import DisplaySelectedPackage from "./ConstructionContent/DisplaySelectedPackage";

const ConstructionInfo = ({ list }) => {
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
        <DisplaySelectedPackage arg={selectPackage} />
      </div>
    );
  } else if (list === "material") {
    return (
      <div className="material-table-container">
        <div>
          <DisplayMaterials />
        </div>
      </div>
    );
  } else if (list === "gallery") {
    return <DisplayGallery />;
  } else if (list === "process") {
    return <div></div>;
  }
};

export default ConstructionInfo;
