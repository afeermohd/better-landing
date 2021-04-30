import React from "react";
import ListAccordian from "../../assets/Accordian";

const standardFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D Floor Plan",
      "Structural Drawing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    title: "Structure",
    content: [
      "Steel: Indus 555 (Fe 550) | Meenakshi | Prime Gold | Kamdhenu",
      "Aggregates: 20mm & 40mm",
      "Blocks: 6 inches for Exterior Wall & 4 inches for Interior Wall",
      "Red Bricks: 9 inches for Exterior Wall & 4.5 inches for Interior Wall",
      "Cement: ACC, RAMCO, ZUARI of Grade 43 & 53",
      "M Sand: Blockwork & P Sand: Plastering",
      "RCC Design Mix: M25",
      "Waterproofing: Dr.Fixit | Fosroc",
      "Ceiling Height: 10 Feet",
    ],
  },
  {
    title: "Kitchen",
    content: [
      "Ceramic Wall Tiles 2 Feet Above Kitchen Slab up to Rs. 50/sqft",
      "Main Sink Faucet up to Rs. 2500 &; Basic Jaquar or Parryware or Hindware ISI Marked",
      "Kitchen Sink: Stainless Steel up to Rs. 5000",
      "Kitchen Granite Slab: 20 mm Thick up to Rs. 140/sqft",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Wall Tiles For 7 Feet up to Rs. 40/sqft",
      "Sanitary Ware & CP Fitting up to Rs. 20,000 per washroom",
      "CPVC/PVP: Ashirwad/Supreme",
      "Bathroom Accessories: EWC, Health Faucet, Wash Basin, 3 in 1 tap Mixer, Overhead shower",
      "Flush Doors Waterproof",
    ],
  },
  {
    title: "Doors & Windows",
    content: [
      "Main Door: Teak wood Doors With Teak wood Frame of Rs. 2500/cft (38mm Thickness)",
      "Internal Door: Flush Door With Laminates",
      "Windows: Red Sal Wood | Neem Wood",
      "Pooja Room Door: Teak wood Doors With Teak wood Frame",
    ],
  },
  {
    title: "Planting & Accent Walls",
    content: [
      "Interior: Birla Putty With Asian Paint Emulsion",
      "Exterior: Asian Paint Emulsion Weather Proof Paint",
    ],
  },
  {
    title: "Electrical",
    content: [
      "Wires – Havells | Anchor | Finolex",
      "Switches – GM Modular | Legrand",
    ],
  },
  {
    title: "Flooring",
    content: [
      "Master Bedroom: Laminated Wooden flooring/ Vitrified Tiles up to Rs. 80/sqft",
      "Bedroom: Laminated Wooden flooring/ Vitrified Tiles up to Rs. 80/sqft",
      "Living & Dining Flooring: Tiles up to Rs. 80/sqft (Granite Floor Opt.)",
      "Kitchen Flooring: Tiles up to Rs. 60/sqft (Granite Floor Opt.) ",
      "Balcony & Open Area Flooring: Tiles up to Rs. 40/sqft",
      "Bathroom Flooring: Anti-skid Tiles up to Rs. 40/sqft",
      "Staircase Flooring: Sadarahalli Or Marble up to Rs. 100/sqft",
      "Terrace Flooring: Paver Tiles up to Rs. 40/sqft",
      "Parking Tiles: Anti-skid Tiles up to Rs. 40/sqft",
    ],
  },
  {
    title: "Other Inclusion",
    content: [
      "Overhead Tank: 2000 ltrs Sintex",
      "Underground Sump: 10,000 ltrs",
      "Up to 150 sqft of external wall cladding of Rs. 60/sqft",
      "Parapet Wall 3 Feet High",
      "Solar Provision",
      "Designer MS gates",
      "Rain Water Harvesting",
      "Staircase railing – SS201",
      "Balcony railing – SS201",
    ],
  },
  {
    title: "Additional Charges",
    content: [
      "Compound Wall Construction: Rs. 1050/rft ",
      "Carpentry Work: Rs. 1350/sqft",
      "Liasioning Charges ",
      "KEB Connections & Charges ",
      "Water Connections & Charges",
      "Extra Sump Capacity: Rs. 15/ltrs",
      "Elevation Work Extra",
    ],
  },
];

const premiumFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D Floor Plan",
      "Structural Drawing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
      "Furniture Plan",
    ],
  },
  {
    title: "Structure",
    content: [
      "Steel: Indus 555 (Fe 550) | Meenakshi | Prime Gold | Kamdhenu",
      "Aggregates: 20mm & 40mm",
      "Blocks: 6 inches for Exterior Wall & 4 inches for Interior Wall",
      "Red Bricks: 9 inches for Exterior Wall & 4.5 inches for Interior Wall",
      "Cement: ACC, RAMCO, ZUARI of Grade 43 & 53",
      "M Sand: Blockwork & P Sand: Plastering",
      "RCC Design Mix: M25",
      "Waterproofing: Dr.Fixit | Fosroc",
      "Ceiling Height: 10 Feet",
    ],
  },
  {
    title: "Master Bedroom",
    content: [
      "Wardrobe - 18mm commercial ply + laminate up to Rs. 50/sqft Size: 7’x7’+ 7’x2’ loft)",
      "Laminated Wooden flooring/ Vitrified Tiles up to Rs. 150/sqft",
      "Designer gypsum false ceiling",
    ],
  },
  {
    title: "Bedroom",
    content: [
      "Wardrobe - 18mm commercial ply + laminate up to Rs. 50/sqft Size: 7’x7’+ 7’x2’ loft)",
      "Laminated Wooden flooring/ Vitrified Tiles up to Rs. 120/sqft",
      "3D Elevation",
    ],
  },

  {
    title: "Kitchen",
    content: [
      "Modular kitchen with 18mm water proof ply + 18mm ply shutters with laminate at Rs. 50/sqft",
      "Ceramic Wall Tiles 2 Feet Above Kitchen Slab up to Rs. 70/sqft",
      "Main Sink Faucet up to Rs. 2500 & Basic Jaquar or Parryware or Hindware ISI Marked",
      "Kitchen Sink: Stainless Steel up to Rs. 5000 ",
      "Kitchen Granite Slab: 20 mm Thick up to Rs. 140/sqft",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Cabinet under the sink with laminate finish",
      "Shower glass cubicle",
      "Dadoing Wall Tiles For 7 Feet up to Rs. 50/sqft",
      "Sanitary Ware & CP Fitting up to Rs. 20,000 per washroom",
      "CPVC/PVP: Ashirwad/Supreme",
      "Bathroom Accessories: EWC, Health Faucet, Wash Basin, 3 in 1 tap Mi 3 in 1 tap Mixer, Overhead shower",
      "Flush Doors Waterproof",
    ],
  },
  {
    title: "Doors & Windows",
    content: [
      "Main Door: Teak wood Doors With Teak wood Frame of Rs. 2500/cft (38mm Thickness)",
      "Internal Door: Flush Door With Laminates",
      "Windows: Red Sal Wood or UPVC With Glass & Mess Shutter",
      "Pooja Room Door: Teak wood Doors With Teak wood Frame",
    ],
  },
  {
    title: "Painting & Accent Walls",
    content: [
      "Interior: Birla Putty With Asian Paint Emulsion",
      "Exterior: Asian Paint Emulsion Weather Proof Paint",
      "Living room (Size: 12’ x 10’) | Master Bedroom (Size: 10’ x 10’)",
    ],
  },
  {
    title: "Electrical",
    content: [
      "Wires – Havells | Anchor | Finolex",
      "Switches – GM Modular | Legrand",
    ],
  },
  {
    title: "Flooring",
    content: [
      "Living & Dining Flooring: Tiles up to Rs. 120/sqft (Granite Floor Opt.)",
      "Kitchen Flooring: Tiles up to Rs. 80/sqft (Granite Floor Opt.)",
      "Balcony & Open Area Flooring: Tiles up to Rs. 60/sqft",
      "Staircase Flooring: Sadarahalli Or Marble up to Rs. 120/sqft",
      "Parking Tiles: Anti-skid Tiles up to Rs. 50/sqf",
    ],
  },
  {
    title: "Other Inclusion",
    content: [
      "Designer TV unit - 18mm commercial ply + laminate / veneer finish up to Rs. 50/sqft (Size:6’x6’)",
      "False Ceiling on Living Hall",
      "Overhead Tank: 2000 ltrs Sintex",
      "Underground Sump: 10,000 Ltrs",
      "Up to 200 sqft of external wall cladding of Rs. 75/ sqft ",
      "SS Stai SS Staircase Railing With Glass",
      "Parapet Wall 3 Feet High",
      "Solar Provision",
      "Designer MS gates",
      " Rain Water Harvesting",
    ],
  },
  {
    title: "Additional Charges",
    content: [
      "Compound Wall Construction: Rs. 1050/rft ",
      "Carpentry Work: Rs. 1350/sqft",
      "Liasioning Charges ",
      "KEB Connections & Charges ",
      "Water Connections & Charges",
      "Extra Sump Capacity: Rs. 15/ltrs",
      "Elevation Work Extra",
    ],
  },
];

const DisplaySelectedPackage = ({ arg }) => {
  if (arg === "standard") {
    return (
      <div className="list-box">
        {standardFeatures.map((item, index) => (
          <ListAccordian
            key={index}
            title={item.title}
            content={`<ul>${item.content
              .map((e) => {
                return "<li>" + e + "</li>";
              })
              .join("")}</ul>`}
          />
        ))}
      </div>
    );
  } else if (arg === "premium") {
    return (
      <div className="list-box">
        {premiumFeatures.map((item, index) => (
          <ListAccordian
            key={index}
            title={item.title}
            content={`<ul>${item.content
              .map((e) => {
                return "<li>" + e + "</li>";
              })
              .join("")}</ul>`}
          />
        ))}
      </div>
    );
  }
};

export default DisplaySelectedPackage;
