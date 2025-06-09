import React, { useEffect, useState } from "react";

import CreateConsultationNew from "./CreateConsulltationNew";
import CreateConsultationNewForm from "./CreateConsulltationNewform";
import { useDispatch } from "react-redux";
import { Decryptedid } from "../Util/BcruptEncyptid";
import { useParams } from "react-router-dom";
import { deleteConsultaionQuestion, getdetailsConsultationAction } from "../Redux/Action/ManageconsultationAction";
import EditCreateConsulltationNewOne from "./EditCreateConsulltationNewOne";
import EditCreateConsultationNewForm from "./EditCreateConsultationNewForm";
import EditCreateConsultationNew from "./EditCreateConsultationNew";
import EditConsultationOptions from "./EditConsulltationOptions";

export default function EditConsultationmaster() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  var idvalue = Decryptedid(atob(id));

  useEffect(() => {
    dispatch(getdetailsConsultationAction(idvalue)).then(function (data) {
      if (data.payload) {
        setFormData(data.payload);
      }
    });
  }, [idvalue]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleDelete = (questionId) => {
    dispatch(deleteConsultaionQuestion({ 
      id: questionId, 
      consultationId: idvalue 
    }))
    .then(() => {
      dispatch(getdetailsConsultationAction(idvalue))
      .then((updatedData) => {
        if (updatedData.payload) {
          setFormData(updatedData.payload); 
        }
      });
    })
    .catch((error) => {
      console.error("Error deleting question:", error);
    });
  };


  switch (step) {
    case 1:
      return (
        Object.keys(formData).length > 0 && (
          <EditCreateConsultationNew
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )
      );
    case 2:
      return (
        Object.keys(formData).length > 0 && (
          <EditCreateConsulltationNewOne
            formDatavalue={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            idconsultaion={idvalue}
            prevStep={prevStep}
            handleDelete={handleDelete}
          />
        )
      );

    case 3:
      return (
        Object.keys(formData).length > 0 && (
          <EditConsultationOptions
            formDatavalue={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            idconsultaion={idvalue}
            prevStep={prevStep}
          />
        )
      );

    case 4:
      return (
        Object.keys(formData).length > 0 && (
          <EditCreateConsultationNewForm
            formData={formData}
            prevStep={prevStep}
          />
        )
      );

    default:
      return null;
  }
}
