import React, { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import EditCreatePresetConsultaion from "./EditCreatePresetConsultaion";
import EditPresetConsultationForm2 from "./EditPresetConsultationForm2";
import EditConsultationForm3Preset from "./EditConsultationForm3Preset";
import { Decryptedid } from "../../../utils/BcruptEncyptid";
import { deletesalonConsultaionQuestion, editGetdetailsConsultationAction } from "../../../Redux/Actions/user/salon";
import EditConsultationForm4Preset from "./EditConsultationForm4Preset";

export default function EditMasterpresetConsultation() {
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
        setFormData(data.payload);
      }
    });
  }, [idvalue]);

  useEffect(() => {
    if (view == "only_view") {
      setStep(3);
    }
  }, [view]);

  const handleDelete = (questionId) => {
    dispatch(deletesalonConsultaionQuestion({ 
      id: questionId, 
      consultationId: idvalue 
    }))
    .then(() => {
      dispatch(editGetdetailsConsultationAction(idvalue))
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
          <EditCreatePresetConsultaion
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            view={view}
          />
        )
      );
    case 2:
      return (
        Object.keys(formData).length > 0 && (
          <EditPresetConsultationForm2
            formDatavalue={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            idconsultaion={idvalue}
            prevStep={prevStep}
            view={view}
            handleDelete={handleDelete}
          />
        )
      );
    case 3:
      return (
        Object.keys(formData).length > 0 && (
          <EditConsultationForm3Preset
            formDatavalue={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            idconsultaion={idvalue}
            prevStep={prevStep}
            view={view}
          />
        )
      );

    case 4:
      return (
        Object.keys(formData).length > 0 && (
          <EditConsultationForm4Preset
            formData={formData}
            prevStep={prevStep}
            view={view}
          />
        )
      );

    default:
      return null;
  }
}
