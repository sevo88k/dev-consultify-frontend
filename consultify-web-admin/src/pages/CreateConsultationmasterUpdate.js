import React, { useState } from 'react'
import CreateConsulltationNewOne from './CreateConsulltationNewOne';
import CreateConsultationNew from './CreateConsulltationNew';
import CreateConsultationNewForm from './CreateConsulltationNewform';

export default function CreateConsultationmasterUpdate() {

    
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
      setStep(step + 1);
    };

  //   const dispatch = useDispatch();
    const prevStep = () => {
      setStep(step - 1);
    };

switch(step){
  case 1:
      return (
        
          <CreateConsultationNew  formData={formData} setFormData={setFormData} nextStep={nextStep}  />
      )
  case 2:
      return (
        <CreateConsulltationNewOne  formDatavalue={formData} setFormData={setFormData} nextStep={nextStep}  prevStep={prevStep} />
      )
  case 3:
      return (
          <CreateConsultationNewForm  formData={formData}  prevStep={prevStep} />
      )

default:
  return null;
}
}