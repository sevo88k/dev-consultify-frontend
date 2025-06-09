import React from 'react'
import LayoutSymtom from '../../../Layout/LayoutSymtom'
import LpSymtomCheckerFour from '../LpSymtomCheckerFour'
import scFlow from "../symptom-checker-data";
const Ulcers = () => {
  return (
     <LayoutSymtom>
         <LpSymtomCheckerFour scFlow={scFlow} />
     </LayoutSymtom>
  )
}

export default Ulcers