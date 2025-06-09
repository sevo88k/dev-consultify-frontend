

import React, { useState } from 'react'

import CreateConsultationForm from './CreateConsultationForm';
import ConsultationForm2 from './ConsultationForm2';
import ConsultationForm3 from './ConsultationForm3';
import CreateConsultationFormPreset from './V2/Consultationpreset/CreateConsultationFormPreset';
import CreateConsultationForm2Preset from './V2/Consultationpreset/CreateConsultationForm2Preset';
import CreateConsultationForm4Preset from './V2/Consultationpreset/CreateConsultationForm4Preset';
import CreateConsultationForm3Preset from './V2/Consultationpreset/CreateConsultationForm3Preset';

export default function ConsultationformPresetmaster() {
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
        <CreateConsultationFormPreset formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )
    case 2:
      return (
        <CreateConsultationForm2Preset formDatavalue={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )
    case 3:
      return (
        <CreateConsultationForm3Preset formDatavalue={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )

      case 4:
        return (
          <CreateConsultationForm4Preset formData={formData} prevStep={prevStep} />
        )


    default:
      return null;
  }
}
