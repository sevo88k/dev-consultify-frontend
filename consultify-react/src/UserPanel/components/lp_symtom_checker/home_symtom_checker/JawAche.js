import React from 'react'
import LayoutSymtom from '../../../Layout/LayoutSymtom'
import LpSymtomCheckerFive from '../LpSymtomCheckerFive';
import scFlow from "../symptom-checker-data";
const JawAche = () => {
  return (
     <LayoutSymtom>
        <LpSymtomCheckerFive scFlow={scFlow} />
     </LayoutSymtom>
  )
}

export default JawAche