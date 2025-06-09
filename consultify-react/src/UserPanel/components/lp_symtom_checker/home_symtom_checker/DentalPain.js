import React from "react";
import LayoutSymtom from "../../../Layout/LayoutSymtom";
import LpSymtomCheckerTwo from "../LpSymtomCheckerTwo";
import scFlow from "../symptom-checker-data";
const DentalPain = () => {
  return (
    <LayoutSymtom>
      <LpSymtomCheckerTwo scFlow={scFlow} />
    </LayoutSymtom>
  );
};

export default DentalPain;
