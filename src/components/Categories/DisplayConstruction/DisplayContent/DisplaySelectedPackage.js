import React from "react";
import ListAccordian from "../assets/ListAccordian";

const DisplaySelectedPackage = ({ arg }) => {
  if (arg === "standard") {
    return (
      <div className="list-box">
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
          content="<ul><li>Steel: Indus 555 (Fe 550) | Meenakshi | Prime Gold | Kamdhenu</li>
              <li>Aggregates: 20mm & 40mm</li>
              <li>Blocks: 6 inches for Exterior Wall & 4 inches for Interior Wall</li>
              <li>Red Bricks: 9 inches for Exterior Wall & 4.5 inches for Interior Wall</li>
              <li>Cement: ACC, RAMCO, ZUARI of Grade 43 & 53</li>
              <li>M Sand: Blockwork & P Sand: Plastering</li>
              <li>RCC Design Mix: M25</li>
              <li>Waterproofing: Dr.Fixit | Fosroc</li>
              <li>Ceiling Height: 10 Feet</li>
              </ul>"
        />
        <ListAccordian
          title="Kitchen"
          content="<ul><li>Ceramic Wall Tiles 2 Feet Above Kitchen Slab up to Rs. 50/sqft</li>
              <li>Main Sink Faucet up to Rs. 2500 &; Basic Jaquar or 
              Parryware or Hindware ISI Marked</li>
              <li>Kitchen Sink: Stainless Steel up to Rs. 5000</li>
              <li>Kitchen Granite Slab: 20 mm Thick up to Rs. 140/sqft</li>
              </ul>"
        />
        <ListAccordian
          title="Bathroom"
          content="<ul><li>Wall Tiles For 7 Feet up to Rs. 40/sqft</li>
              <li>Sanitary Ware & CP Fitting up to Rs. 20,000 per washroom</li>
              <li>CPVC/PVP: Ashirwad/Supreme</li>
              <li>Bathroom Accessories: EWC, Health Faucet, Wash Basin, 
              3 in 1 tap Mixer, Overhead shower</li>
              <li>Flush Doors Waterproof</li>
              </ul>"
        />
        <ListAccordian
          title="Doors & Windows"
          content="<ul><li>Main Door: Teak wood Doors With Teak wood Frame of 
          Rs. 2500/cft (38mm Thickness)</li>
              <li>Internal Door: Flush Door With Laminates</li>
              <li>Windows: Red Sal Wood | Neem Wood</li>
              <li>Pooja Room Door: Teak wood Doors With Teak wood Frame</li>
              </ul>"
        />
        <ListAccordian
          title="Planting & Accent Walls"
          content="<ul><li>Interior: Birla Putty With Asian Paint Emulsion</li>
              <li>Exterior: Asian Paint Emulsion Weather Proof Paint</li>
              </ul>"
        />
        <ListAccordian
          title="Electrical"
          content="<ul><li>Wires – Havells | Anchor | Finolex</li>
              <li>Switches – GM Modular | Legrand</li>
              </ul>"
        />
        <ListAccordian
          title="Flooring"
          content="<ul><li>Master Bedroom: Laminated Wooden flooring/ Vitrified Tiles 
          up to Rs. 80/sqft</li>
              <li>Bedroom: Laminated Wooden flooring/ Vitrified Tiles 
              up to Rs. 80/sqft</li>
              <li>Living & Dining Flooring: Tiles up to Rs. 80/sqft (Granite Floor Opt.)</li>
              <li>Kitchen Flooring: Tiles up to Rs. 60/sqft (Granite Floor Opt.)
              </li>
              <li>Balcony & Open Area Flooring: Tiles up to Rs. 40/sqft</li>
              <li>Bathroom Flooring: Anti-skid Tiles up to Rs. 40/sqft</li>
              <li>Staircase Flooring: Sadarahalli Or Marble up to Rs. 100/sqft</li>
              <li>Terrace Flooring: Paver Tiles up to Rs. 40/sqft</li>
              <li>Parking Tiles: Anti-skid Tiles up to Rs. 40/sqft</li>
              </ul>"
        />
        <ListAccordian
          title="Other Inclusion"
          content="<ul><li>Overhead Tank: 2000 ltrs Sintex</li>
              <li>Underground Sump: 10,000 ltrs</li>
              <li>Up to 150 sqft of external wall cladding of Rs. 60/sqft</li>
              <li>Parapet Wall 3 Feet High</li>
              <li>Solar Provision</li>
              <li>Designer MS gates</li>
              <li>Rain Water Harvesting</li>
              <li>Staircase railing – SS201</li>
              <li>Balcony railing – SS201</li>
              </ul>"
        />
        <ListAccordian
          title="Additional Charges"
          content="<ul><li>Compound Wall Construction: Rs. 1050/rft </li>
              <li>Carpentry Work: Rs. 1350/sqft</li>
              <li>Liasioning Charges </li>
              <li>KEB Connections & Charges </li>
              <li>Water Connections & Charges</li>
              <li>Extra Sump Capacity: Rs. 15/ltrs</li>
              <li>Elevation Work Extra</li>
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
  } else if (arg === "premium") {
    return (
      <div className="list-box">
        <ListAccordian
          title="Architectural Design & Drawing"
          content="<ul><li>2D Floor Plan</li>
              <li>Structural Drawing</li>
              <li>3D Elevation</li>
              <li>Electrical Drawing</li>
              <li>Plumbing Drawing</li>
              <li>Furniture Plan</li>
              </ul>"
        />
        <ListAccordian
          title="Structure"
          content="<ul><li>Steel: Indus 555 (Fe 550) | Meenakshi | Prime Gold | Kamdhenu</li>
          <li>Aggregates: 20mm & 40mm</li>
          <li>Blocks: 6 inches for Exterior Wall & 4 inches for Interior Wall</li>
          <li>Red Bricks: 9 inches for Exterior Wall & 4.5 inches for Interior Wall</li>
          <li>Cement: ACC, RAMCO, ZUARI of Grade 43 & 53</li>
          <li>M Sand: Blockwork & P Sand: Plastering</li>
          <li>RCC Design Mix: M25</li>
          <li>Waterproofing: Dr.Fixit | Fosroc</li>
          <li>Ceiling Height: 10 Feet</li>
              </ul>"
        />
        <ListAccordian
          title="Master Bedroom"
          content="<ul><li>Wardrobe - 18mm commercial ply + laminate up to Rs. 50/sqft
          Size: 7’x7’+ 7’x2’ loft)</li>
              <li>Laminated Wooden flooring/ Vitrified Tiles up to Rs. 150/sqft</li>
              <li>Designer gypsum false ceiling</li>
              </ul>"
        />
        <ListAccordian
          title="Bedroom"
          content="<ul><li>Wardrobe - 18mm commercial ply + laminate up to Rs. 50/sqft
          Size: 7’x7’+ 7’x2’ loft)</li>
              <li>Laminated Wooden flooring/ Vitrified Tiles up to Rs. 120/sqft</li>
              <li>3D Elevation</li>
              </ul>"
        />
        <ListAccordian
          title="Kitchen"
          content="<ul><li>Modular kitchen with 18mm water proof ply + 18mm ply 
          shutters with laminate at Rs. 50/sqft</li>
              <li>Ceramic Wall Tiles 2 Feet Above Kitchen Slab up to Rs. 70/sqft</li>
              <li>Main Sink Faucet up to Rs. 2500 & Basic Jaquar or Parryware 
              or Hindware ISI Marked</li>
              <li>Kitchen Sink: Stainless Steel up to Rs. 5000 </li>
              <li>Kitchen Granite Slab: 20 mm Thick up to Rs. 140/sqft</li>
              </ul>"
        />
        <ListAccordian
          title="Bathroom"
          content="<ul><li>Cabinet under the sink with laminate finish</li>
              <li>Shower glass cubicle</li>
              <li>Dadoing Wall Tiles For 7 Feet up to Rs. 50/sqft</li>
              <li>Sanitary Ware & CP Fitting up to Rs. 20,000 per washroom</li>
              <li>CPVC/PVP: Ashirwad/Supreme</li>
              <li>Bathroom Accessories: EWC, Health Faucet, Wash Basin, 
              3 in 1 tap Mi 3 in 1 tap Mixer, Overhead shower</li>
              <li>Flush Doors Waterproof</li>
              </ul>"
        />
        <ListAccordian
          title="Doors & Windows"
          content="<ul><li>Main Door: Teak wood Doors With Teak wood Frame of 
          Rs. 2500/cft (38mm Thickness)</li>
              <li>Internal Door: Flush Door With Laminates </li>
              <li>Windows: Red Sal Wood or UPVC With Glass & Mess Shutter/li>
              <li>Pooja Room Door: Teak wood Doors With Teak wood Frame</li>
              </ul>"
        />
        <ListAccordian
          title="Painting & Accent Walls"
          content="<ul><li>Interior: Birla Putty With Asian Paint Emulsion</li>
              <li>Exterior: Asian Paint Emulsion Weather Proof Paint</li>
              <li>Living room (Size: 12’ x 10’) | Master Bedroom (Size: 10’ x 10’)</li>
              </ul>"
        />
        <ListAccordian
          title="Flooring"
          content="<ul><li>Living & Dining Flooring: Tiles up to Rs. 120/sqft (Granite Floor Opt.)</li>
              <li>Kitchen Flooring: Tiles up to Rs. 80/sqft (Granite Floor Opt.)</li>
              <li>Balcony & Open Area Flooring: Tiles up to Rs. 60/sqft</li>
              <li>Staircase Flooring: Sadarahalli Or Marble up to Rs. 120/sqft</li>
              <li>Parking Tiles: Anti-skid Tiles up to Rs. 50/sqf</li>
              </ul>"
        />
        <ListAccordian
          title="Electrical"
          content="<ul><li>Wires – Havells/Anchor</li>
              <li>Switches – GM Modular/Legrand</li>
              </ul>"
        />
        <ListAccordian
          title="Flooring"
          content="<ul><li> Master Bedroom: Laminated Wooden flooring/ Vitrified Tiles 
          up to Rs. 80/sqft</li>
              <li>Bedroom: Laminated Wooden flooring/ Vitrified Tiles 
              up to Rs. 80/sqft</li>
              <li>Living & Dining Flooring: Tiles up to Rs. 80/sqft (Granite Floor Opt.)</li>
              <li>Kitchen Flooring: Tiles up to Rs. 60/sqft (Granite Floor Opt.)</li>
              <li>Balcony & Open Area Flooring: Tiles up to Rs. 40/sqft</li>
              <li>Bathroom Flooring: Anti-skid Tiles up to Rs. 40/sqft</li>
              <li>Staircase Flooring: Sadarahalli Or Marble up to Rs. 100/sqft</li>
              <li>Terrace Flooring: Paver Tiles up to Rs. 40/sqft</li>
              <li>Parking Tiles: Anti-skid Tiles up to Rs. 40/sqft</li>
              </ul>"
        />
        <ListAccordian
          title="Other Inclusion"
          content="<ul><li>Overhead Tank: 2000 ltrs Sintex</li>
              <li>Underground Sump: 10,000 ltrs</li>
              <li>Up to 150 sqft of external wall cladding of Rs. 60/sqft</li>
              <li>Parapet Wall 3 Feet High</li>
              <li>Solar Provision</li>
              <li>Rain Water Harvestings</li>
              <li>Staircase railing – SS201</li>
              <li>Balcony railing – SS20</li>
              </ul>"
        />
        <ListAccordian
          title="Additional Charges"
          content="<ul><li>Compound Wall Construction: Rs. 1050/rft </li>
              <li>Carpentry Work: Rs. 1350/sqft</li>
              <li>Liasioning Charges </li>
              <li>KEB Connections & Charges </li>
              <li>Water Connections & Charges</li>
              <li>Extra Sump Capacity: Rs. 15/ltrs</li>
              <li>Elevation Work Extra</li>
              </ul>"
        />
      </div>
    );
  }
  // switch (arg) {
  //   case "standard":
  //     return (

  //     );
  //   case "premium":
  //     return (

  //     );
  //   default:
  //     return null;
};
//   };

export default DisplaySelectedPackage;
