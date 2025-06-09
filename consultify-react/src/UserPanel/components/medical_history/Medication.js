import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMedications,
  getMedication,
} from "../../../Redux/Actions/user/userAll";
import { toastSuccess } from "../../../Redux/Reducers/user/ConsultationSlice";
const Medication = () => {
  const medication = useSelector((state) => state.consultaions.medication);

  useEffect(() => {
    if (medication?.length > 0) {
      setInputFields(medication);
    }
  }, [medication]);
  useEffect(() => {
    dispatch(getMedication());
  }, []);

  const [inputFields, setInputFields] = useState([
    {
      med_name: "",
      dosage: "",
    },
  ]);
  const dispatch = useDispatch();

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        med_name: "",
        dosage: "",
      },
    ]);
  };

  const onSaveClick = () => {
    const modInputFields = inputFields.filter((obj) => obj.med_name != "");
    dispatch(addMedications({ medications: modInputFields }));
  };
  return (
    <div className="card mb-2">
      <div className="card-header accordian_head" id="headingTwo">
        <h5 className="mb-0">
          <button
            className=" d-flex personal_inner_sec dropdown_arrow collapsed accordian_btn"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            type="button"
          >
            Medication
            <span className="update-history small_parah">
              {medication ? medication?.length : 0} items listed
            </span>
          </button>
        </h5>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div className="card-body inner_padding">
          <div className="row">
            <div className="col-6">
              <h6 className="mb-4">Medication Name</h6>
              <div className="options_part">
                <ul className="according-colum-data">
                  {inputFields?.map((item, index) => {
                    return (
                      <li key={index} className="">
                        <input
                          className="blue-text-box box_shadow"
                          placeholder="Write here..."
                          onChange={(e) => handleChange(index, e)}
                          value={item.med_name}
                          name="med_name"
                        />
                      </li>
                    );
                  })}

                </ul>
              </div>
            </div>
            <div className="col-6">
              <h6 className="mb-4">Dosage</h6>
              <div className="options_part">
                <ul className="according-colum-data">
                 
                      {inputFields.map((item, index) => {
                        return (
                          
                            <li key={index} className="">
                              <input
                                className="blue-text-box box_shadow"
                                placeholder="[Optional]"
                                onChange={(e) => handleChange(index, e)}
                                value={item.dosage}
                                name="dosage"
                              />
                            </li>
                         
                        );
                      })}
                    
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="save-fix-bottom">
          <div className="add-more-btn">
            <button onClick={() => addInputField()} className="dark_btn">Add more</button>
          </div>

          <div className="add-more-btn ms-3">
            <button onClick={() => onSaveClick()} className="dark_btn">Save Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medication;
