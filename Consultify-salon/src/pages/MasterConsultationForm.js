
import React, { useState } from 'react'

import CreateConsultationForm from './CreateConsultationForm';
import ConsultationForm2 from './ConsultationForm2';
import ConsultationForm3 from './ConsultationForm3';

export default function MasterConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  //   const dispatch = useDispatch();
  const prevStep = () => {
    setStep(step - 1);
  };


  switch (step) {
    case 1:
      return (
        <CreateConsultationForm formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )
    case 2:
      return (
        <ConsultationForm2 formDatavalue={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )
    case 3:
      return (
        <ConsultationForm3 formData={formData} prevStep={prevStep} />
      )

    default:
      return null;
  }
}
