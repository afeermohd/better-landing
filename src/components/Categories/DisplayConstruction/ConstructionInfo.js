import React, { useState } from "react";
// import DisplayGallery from "./ConstructionContent/DisplayGallery";
import DisplayMaterials from "./ConstructionContent/DisplayMaterials";
import DisplaySelectedPackage from "./ConstructionContent/DisplaySelectedPackage";

const selectPackageData = [
  {
    title: "STANDARD",
    state: "standard",
    price: "Rs.1625/sqft + Rs.50/sqft + GST",
  },
  {
    title: "PREMIUM",
    state: "premium",
    price: "Rs.2200/sqft + Rs.75/sqft + GST",
  },
];

const ConstructionInfo = ({ list }) => {
  const [selectPackage, setSelectPackage] = useState("standard");

  if (list === "packages") {
    return (
      <div>
        <div className="select-packages-container">
          {selectPackageData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectPackage(`${item.state}`);
              }}
              className={`select-packages ${
                selectPackage === `${item.state}` ? "active-package" : ""
              }`}
            >
              <span>{item.title}</span>
              <p>{item.price}</p>
            </div>
          ))}
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
  } else if (list === "process") {
    return <div></div>;
  }
};

export default ConstructionInfo;
