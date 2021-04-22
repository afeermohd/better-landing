import React from "react";

const DisplayMaterials = (arg) => {
  return (
    <table className="material-table">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Description of Item</th>
          <th>Brand</th>
          <th>Remarks</th>
        </tr>
      </thead>
      {/* <tr>
          <td>Material Make and Brand List</td>
        </tr> */}
      <tbody>
        <tr className="">
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
      </tbody>
    </table>
  );
};

export default DisplayMaterials;
