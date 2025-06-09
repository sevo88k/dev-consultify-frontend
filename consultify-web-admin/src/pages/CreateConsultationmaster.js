import React, { useState } from 'react'
import CreateConsulltationNewOne from './CreateConsulltationNewOne';
import CreateConsultationNew from './CreateConsulltationNew';
import CreateConsultationNewForm from './CreateConsulltationNewform';
import AddConsultationOptions from './AddConsultationOptions';
import CreateConsultationOptions from './CreateConsulltationOptions';

export default function CreateConsultationmaster() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
      setStep(step + 1);
    };

  //   const dispatch = useDispatch();
    const prevStep = () => {
      setStep(step - 1);
    };

    console.log(step,"dddddddddddd");
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
            <CreateConsultationOptions  formDatavalue={formData} setFormData={setFormData} nextStep={nextStep}  prevStep={prevStep} />
        )
  case 4:
      return (
          <CreateConsultationNewForm  formData={formData}  prevStep={prevStep} />
      )

default:
  return null;
}
}
