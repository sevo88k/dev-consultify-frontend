

import React, { useEffect, useState } from 'react'

import CreateConsultationForm from './CreateConsultationForm';
import ConsultationForm2 from './ConsultationForm2';
import ConsultationForm3 from './ConsultationForm3';
import { useLocation, useParams } from 'react-router-dom';
import { Decryptedid } from '../utils/BcruptEncyptid';
import { useDispatch } from 'react-redux';
import { editGetdetailsConsultationAction } from '../Redux/Actions/user/salon';
import EditCreateConsultationForm from './EditCreateConsultationForm';
import EditConsultationForm2 from './EditConsultationForm2';
import EditConsultationForm3 from './EditConsultationForm3';

export default function EditMasterConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  let id = query.get("id");
  let view = query.get("view");
  const nextStep = () => {
    setStep(step + 1);
  };

  //   const dispatch = useDispatch();
  const prevStep = () => {

    setStep(step - 1);
  };


  var idvalue = Decryptedid(atob(id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editGetdetailsConsultationAction(idvalue)).then(function (data) {
      if (data.payload) {
        setFormData(data.payload)
      }
    })
  }, [idvalue])

  useEffect(()=>{
    if(view == "only_view"){
      setStep(3)
    }
    
  },[view])

  console.log(formData,"formData");

  switch (step) {
    case 1:
      return (

        Object.keys(formData).length > 0 && <EditCreateConsultationForm formData={formData} setFormData={setFormData} nextStep={nextStep} view={view} />
      )
    case 2:
      return (
        Object.keys(formData).length > 0 && <EditConsultationForm2 formDatavalue={formData} setFormData={setFormData} nextStep={nextStep} idconsultaion={idvalue} prevStep={prevStep} view={view}/>
      )
    case 3:
      return (
        Object.keys(formData).length > 0 && <EditConsultationForm3 formData={formData} prevStep={prevStep} view={view}/>
      )

    default:
      return null;
  }
}
