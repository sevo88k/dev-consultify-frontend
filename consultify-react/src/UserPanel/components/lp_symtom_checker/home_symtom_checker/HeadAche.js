import React from 'react'
import LayoutSymtom from '../../../Layout/LayoutSymtom'
import LpSymtomCheckerThree from '../LpSymtomCheckerThree';
import scFlow from "../symptom-checker-data";
const HeadAche = () => {
  return (
     <LayoutSymtom>
         <LpSymtomCheckerThree scFlow={scFlow} />
     </LayoutSymtom>
  )
}

export default HeadAche