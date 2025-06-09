import React, { useEffect } from "react";
import { useState } from "react";
import { addMedicalHistory } from "../../../Redux/Actions/user/userAll";
import { useDispatch, useSelector } from "react-redux";
import { toastfunc } from "../../../Redux/Reducers/user/ConsultationSlice";
import Medication from "./Medication";
import { getMedicalHistory } from "../../../Redux/Actions/user/userAll";
import { useNavigate, useParams } from "react-router-dom";
import ModalMed from "./ModalMed";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
var Questions = [
  {
    ques: 1,
    quest: "1) Are you registered with a GP Practice?",
    answer: "",
    inputField: "",
    subQues: "Please give details (Name, Address, Postcode, Contact number)",
  },
  {
    ques: 2,

    answer: "",
    inputField: "",
    quest:
      "2) Do you authorise us to contact your next of kin in an emergency?",
    subQues: "Please enter their: Name, Relationship & Contact Number.",
  },
  {
    ques: 3,
    answer: "",
    inputField: "",
    quest: "3) Have you visited a dentist in the last 5 years?",
    subQues:
      "When and what did you have done? (Provide short summary if possible)",
  },
  {
    ques: 4,
    answer: "",
    inputField: "",
    quest: "4) Are you Pregnant?",
    subQues: "If yes how many weeks pregnant are you",
  },
  {
    ques: 5,

    answer: "",
    inputField: "",
    quest:
      "5) Are you attending or receiving any form of treatment from a doctor specialist, hospital or clinic?",
    subQues: "Please give details (treatment/ doctor/ hospital/ clinic etc.)",
  },
  {
    ques: 6,

    answer: "",
    inputField: "",
    quest: "6) Are you taking any prescribed medication? ",
    subQues: "Tablets, creams, inhalers,injections, contraceptives or HRT",
  },
  {
    ques: 7,

    answer: "",
    inputField: "",
    quest:
      "7) Do you have allergies to any medicines (e.g. antibiotics), materials (e.g.latex/rubber) or foods?",
    subQues: "Please provide list",
  },
  {
    ques: 8,
    answer: "",
    inputField: "",
    quest: "8) Do you currently carry a medical warning card?",
    subQues: "Please provide details",
  },
  {
    ques: 9,

    answer: "",
    inputField: "",
    quest: "9) Do you suffer from hay fever, eczema or any other allergy?",
    subQues: "Please provide details",
  },
  {
    ques: 10,
    answer: "",
    inputField: "",
    quest: "10) Do you have angina or high / low blood pressure?",
    subQues: "Please provide details",
  },
  {
    ques: 11,
    answer: "",
    inputField: "",
    quest: "11) Have you ever had a heart attack or stroke?",
    subQues: "Please provide details",
  },
  // {
  //   ques: 12,
  //   answer: "",
  //   inputField: "",
  //   quest: "12)Have you ever had heart surgery or a pacemaker fitted?",
  //   subQues: " (If yes provide freetext box to give details)",
  // },
  {
    ques: 12,
    answer: "",
    inputField: "",
    quest: "12) Do vou have bronchitis, asthma or any other chest condition?",
    subQues: "Please provide details",
  },
  {
    ques: 13,
    answer: "",
    inputField: "",
    quest:
      "13) Do you take steroids or have you taken steroids in the last 2 yrs?",
    subQues: "Please provide details",
  },
  {
    ques: 14,
    answer: "",
    inputField: "",
    quest: "14) Do you have diabetes or does anyone in vour immediate family?",
    subQues: "Please provide details",
  },
  // {
  //   ques: 16,
  //   answer: "",
  //   inputField: "",
  //   quest: "16) Have you ever had rheumatic fever or cholera (St Vitus Dance)?",
  //   subQues: "Please provide details",
  // },
  {
    ques: 15,
    answer: "",
    inputField: "",
    quest:
      "15) Have you had liver disease, Kidney disease hepatitis B, hepatitis C, HIV?",
    subQues: "Please provide details",
  },
  {
    ques: 16,
    answer: "",
    inputField: "",
    quest:
      "16) Do you have fainting attacks, giddiness, blackouts or epilepsy?",
    subQues: "Please provide details",
  },
  {
    ques: 17,
    answer: "",
    inputField: "",
    quest: "17) Do you smoke or chew tobacco products?",
    subQues: "If yes what specifically and for how long in years",
  },
  {
    ques: 18,
    answer: "",
    inputField: "",
    quest: "18) Do you drink alcohol?",
    subQues: "If yes how many units per week",
  },
  {
    ques: 19,
    answer: "",
    inputField: "",
    quest:
      "19) Do you have a history of bruising easily or persistent bleeding following an injury or past tooth extraction?",
    subQues: "Please provide details",
  },
  // {
  //   ques: 22,
  //   answer: "",
  //   inputField: "",
  //   quest: "22) Do vou grind vour teeth?",
  // },
  {
    ques: 20,
    answer: "",
    inputField: "",
    quest:
      "20) Have you ever been fitted with a medical device e.g. pacemaker, stent, or joint replacement?",
    subQues: "Please provide details",
  },
  {
    ques: 21,
    answer: "",
    inputField: "",
    quest:
      "21) Have you ever had a bad reaction to general or local anaesthetic?",
    subQues: "Please provide details",
  },
  // {
  //   ques: 25,
  //   answer: "",
  //   inputField: "",
  //   quest:
  //     "25) Would you like your dentist to provide information on routine dental care such as Tooth Whitening, Cosmetic dentistry, or Tooth replacement options?",
  //   subQues: " Please provide details",
  // },
  {
    ques: 22,
    answer: "",
    inputField: "",
    quest:
      "22) Are there any aspects of your health or concerns that you think the dentist should know about?",
    subQues: " Please provide details",
  },
  {
    ques: 23,
    answer: "",
    inputField: "",
    quest:
      "23) Do you have any bone conditions? For Example osteoarthritis / osteoporosis",
    // subQues: " (If other provide freetext box to give details)",
    subQues: "Please provide details",
  },
];
export default function MedicalHistory({ setInfo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const { tab } = useParams();
  const [currentIndex, setCurrentIndex] = useState("");
  const [inputData, setInputData] = useState("");
  const [testArray, setTestArray] = useState();
  const [expandAcc, setExpandAcc] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [personalInfoStatus, setPersonalInfoStatus] = useState("static");

  const gotPersonalInfo = useSelector(
    (state) => state.consultaions.personalInfo
  );

  const medicalHistory = useSelector(
    (state) => state?.consultaions?.medicalHistory
  );
  const handleInputChange = (e, index) => {
    setInputData(e.target.value);
    setTestArray((prevVal) => {
      // prevVal[index - 1].inputField = e.target.value;
      const inp = (prevVal[index - 1].inputField = e.target.value);
      const result = [...prevVal, inp];
      result.pop();
      return result;
    });
  };

  useEffect(() => {
    if (tab == "med-history") {
      setExpandAcc(true);
    }
  }, [tab]);

  useEffect(() => {
    if (gotPersonalInfo) {
      const checkList = {
        phnNumber: "",
        age: "",
        address: "",
      };
      checkList.phnNumber = gotPersonalInfo?.phnNumber
        ? gotPersonalInfo?.phnNumber == null
          ? false
          : true
        : false;
      checkList.age = gotPersonalInfo?.age
        ? gotPersonalInfo?.age == null
          ? false
          : true
        : false;
      checkList.address =
        Object.keys(gotPersonalInfo.address).length < 4 ? false : true;

      if (!checkList.phnNumber || !checkList.age || !checkList.address) {
        setPersonalInfoStatus(false);
      } else {
        setPersonalInfoStatus(true);
      }
    }
  }, [gotPersonalInfo]);

  const handleYesClick = (index) => {
    setShow(true);
    setCurrentIndex(index);
    setTestArray((prevVal) => {
      var lease = (prevVal[index - 1].answer = "Yes");
      const result = [...prevVal, lease];
      result.pop();
      return result;
    });
  };

  const handleOtherClick = (index) => {
    setShow("Other");
    setCurrentIndex(index);
    setTestArray((prevVal) => {
      var lease = (prevVal[index - 1].answer = "Other");
      const result = [...prevVal, lease];
      result.pop();
      return result;
    });
  };

  const handleNoClick = (index) => {
    setCurrentIndex(index);
    setShow(false);
    setTestArray((prevVal) => {
      var lease = (prevVal[index - 1].answer = "No");
      const result = [...prevVal, lease];
      result.pop();
      return result;
    });
  };

  const onSaveChange = () => {
    let err = "";
    for (let i = 0; i < testArray?.length; i++) {
      if (!["Yes", "No", "Other"].includes(testArray[i]?.answer)) {
        toastfunc("Please Fill all the fields");
        err = "error";
        break;
      }
    }
    if (err != "error") {
      dispatch(addMedicalHistory({ questions: testArray })).then((result) => {
        const response = result.payload.user;
        if (response.success && tab == "med-history") {
          if (personalInfoStatus == false) {
            navigate("/personal-information/fromnewcons");
          } else if (personalInfoStatus == true) {
            navigate("/new-consultation");
          }
        }
      });
    }
  };
  useEffect(() => {
    if (medicalHistory?.length > 0) {
      let a = [];
      for (let i = 0; i < medicalHistory.length; i++) {
        var ob = {
          ques: medicalHistory[i].ques,
          quest: medicalHistory[i].question,
          answer: medicalHistory[i].answer,
          inputField: medicalHistory[i].inputField,
          subQues: medicalHistory[i].subQues,
        };
        a.push(ob);
      }
      setTestArray(a);
    } else {
      dispatch(getMedicalHistory());
      setTestArray(Questions);
    }
  }, [Questions, medicalHistory]);

  return (
    <div className="col-lg-10">
      <div className="desc_area pb-0 ">
        <div className="row">
          <div className="col-lg-12">
            <div className="back-button mb-4">
              <a onClick={() => setInfo(false)} className="white-btn">
                Back
              </a>
            </div>
          </div>
        </div>
        <ModalMed
          showModal={showModal}
          setShowModal={setShowModal}
          onSaveChange={onSaveChange}
        />
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-9 col-12">
            <div className="new_consultation_booking common_shadow">
              <h2 className="common_title padding_36">Medical History</h2>
              <div className="row">
                <div className="col-lg-12">
                  <div className="personal _details medical_history_details">
                    <div id="accordion" className="accordian_collapse">
                      <div className="card mb-2">
                        <div
                          className="card-header accordian_header"
                          id="headingOne"
                        >
                          <h5 className="mb-0 ">
                            <button
                              className={
                                expandAcc
                                  ? "d-flex personal_inner_sec dropdown_arrow accordian_btn"
                                  : "d-flex personal_inner_sec dropdown_arrow collapsed accordian_btn"
                              }
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              type="button"
                            >
                              Medical History
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className={expandAcc ? "collapse show" : "collapse"}
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body inner_padding height_scroll">
                            {testArray?.map((item, i) => {
                              return (
                                <div key={i}>
                                  <div className="d-flex justify-content-between align-items-center mb-3 history_ques">
                                    <h6 className="mb-0 medical_margin">
                                      {item.quest}
                                    </h6>
                                    <div className="options_part questions_options">
                                      <ul className="mb-0 d-flex p-0 questions_options_inner">
                                        <li>
                                          <a
                                            onClick={() =>
                                              handleYesClick(item.ques)
                                            }
                                            className={
                                              (show == true &&
                                                item.ques == currentIndex) ||
                                              (testArray?.length > 0 &&
                                                testArray[item?.ques - 1]
                                                  ?.answer == "Yes")
                                                ? "colorcc w-75 cursor-pointer"
                                                : "select_option_btn w-75 box_shadow cursor-pointer"
                                            }
                                          >
                                            Yes
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            onClick={() =>
                                              handleNoClick(item.ques)
                                            }
                                            className={
                                              (show == false &&
                                                item?.ques == currentIndex) ||
                                              (testArray?.length > 0 &&
                                                testArray[item?.ques - 1]
                                                  ?.answer == "No")
                                                ? "colorcc w-75 cursor-pointer"
                                                : "select_option_btn w-75 box_shadow cursor-pointer"
                                            }
                                          >
                                            No
                                          </a>
                                        </li>
                                        {23 == item.ques && (
                                          <li>
                                            <a
                                              onClick={() =>
                                                handleOtherClick(item.ques)
                                              }
                                              className={
                                                (show == "Other" &&
                                                  item.ques == currentIndex) ||
                                                (testArray?.length > 0 &&
                                                  testArray[item?.ques - 1]
                                                    ?.answer == "Other")
                                                  ? "colorcc w-75 cursor-pointer"
                                                  : "select_option_btn w-75 box_shadow cursor-pointer"
                                              }
                                            >
                                              Other
                                            </a>
                                          </li>
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                  {(item?.answer == "Yes" ||
                                    item?.answer == "Other") && (
                                    <div className="sub-question-show">
                                      <div className="subques">
                                        {item.subQues}
                                      </div>
                                      <div>
                                        <input
                                          className="form-control focus-input"
                                          value={item?.inputField}
                                          onChange={(e) =>
                                            handleInputChange(e, item.ques)
                                          }
                                          type="text"
                                          placeholder="Provide details here.."
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          <div className="save-fix-bottom add-more-btn">
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              className="dark_btn"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                      <Medication />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ad-sidebar d-flex justify-content-between flex-column">
        <div className="advertisement_info">
          <div className="ad-title">
            <h3>Did You know? </h3>
            <p className="text-center">
              Bleeding Gums are the leading cause of tooth loss in the UK?
            </p>
          </div>
          <img
            src={require("../../../assets/images/advertisement/ad-1.png")}
            alt="advertisement"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
