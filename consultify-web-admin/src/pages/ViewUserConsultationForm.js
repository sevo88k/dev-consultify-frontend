

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Decryptedid, Encryptedid } from "../Util/BcruptEncyptid";
import { adminFetchCompletedConsultationById } from "../Redux/Action/ManageconsultationAction";
import Signaturecompo from "../Component/Signaturecompo";
export default function ViewUserConsultationForm() {
    const { id } = useParams();
  const dispatch = useDispatch();
  var idvalue = Decryptedid(atob(id));

  const completed_consultation_by_id = useSelector(
    (state) => state.ManageConsultation.completed_consultation_by_id
  );


  const consultationquestion = completed_consultation_by_id?.consultationId;

  useEffect(() => {
    dispatch(adminFetchCompletedConsultationById(idvalue));
  }, [idvalue]);

  const initialValues = {
    // Set other static initial values here
  };

  // Dynamically add fields to initialValues
  for (let i = 0; i < consultationquestion?.question?.length; i++) {

    if (consultationquestion?.question[i]?.optiontype == 1) {
      //  0-radio 1-multile 2-input
      initialValues[`checkBoxQues${i + 1}`] = [];
    } else if (consultationquestion?.question[i]?.optiontype == 0) {
      initialValues[`radioQues${i + 1}`] = "";
    } else if (consultationquestion?.question[i]?.optiontype == 6) {
      initialValues[`signature${i + 1}`] = "";
    } else if (consultationquestion?.question[i]?.optiontype == 4) {
      initialValues[`clientImage${i + 1}`] = { img1: "", img2: "" };
    } else {
      initialValues[`dynamicQues${i + 1}`] = "";
    }
  }

  const formik = useFormik({
    initialValues: completed_consultation_by_id?.answers || initialValues,
    enableReinitialize: true,
  });




  return (
    <div className="consulting_form">
 

    {/* search header */}
    <section className="search-header">
      <div className="container">
        <Row>
          <div className="col-lg-12">
            <div className="prev_main">
         
              <NavLink to=   {`/Completed-consultations-user/${Encryptedid(
                                          completed_consultation_by_id?.customerId?._id
                                        )}`} class="prev_result">
                Back to All Forms
              </NavLink>
            </div>
          </div>
          <Col xs={12} md={10}>
            <div className="search-input">
              <h2>{consultationquestion?.form_title}</h2>
             
            </div>
          </Col>
          <Col xs={12} md={2} className="d-flex justify-content-end">
            <div className="button-link">
              <Nav.Link href="#" className="white-box-link">
                Print
              </Nav.Link>
            </div>
          </Col>
        </Row>

        <form
          onSubmit={formik.handleSubmit}
          className="symptoms_form consult-form mt-4"
        >
          <div className="row">
            {consultationquestion?.question?.map(function (
              question_object,
              i
            ) {
              return (
                <div className="col-lg-12" key={i}>
                  <div className="form_box">
                    <label>
                      <span>{i + 1}.</span>{" "}
                      {question_object.optiontype == 5
                        ? ""
                        : question_object.question}
                    </label>
                    {(() => {
                      if (question_object.optiontype == 4) {
                        return (
                          <div className="create_new_form">
                            <div className="row">
                              <div className="col-6">
                                <div className="upload_img_div">
                                  {formik.values[`clientImage${i + 1}`]
                                    ?.img1 ? (
                                    <img
                                      src={
                                        process.env.REACT_APP_IMAGE_URL +
                                        "/Adminquestionimage/" +
                                        formik.values[`clientImage${i + 1}`]
                                          ?.img1
                                      }
                                    />
                                  ) : (
                                    <p>Upload image</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="upload_img_div">
                                  {formik.values[`clientImage${i + 1}`]
                                    ?.img2 ? (
                                    <img
                                      src={
                                        process.env.REACT_APP_IMAGE_URL +
                                        "/Adminquestionimage/" +
                                        formik.values[`clientImage${i + 1}`]
                                          ?.img2
                                      }
                                    />
                                  ) : (
                                    <p>Upload image</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else if (question_object.optiontype == 5) {
                        return (
                          <div className="declaration">
                            <label>Declaration</label>
                            <p>{question_object.question}</p>
                            <div className="d-flex justify-content-end">
                              <label>I Confirm</label>
                              <input
                                type="checkbox"
                                name={`dynamicQues${i + 1}`}
                                value={formik.values[`dynamicQues${i + 1}`]}
                                checked={formik.values[`dynamicQues${i + 1}`]}
                              />
                            </div>
                          </div>
                        );
                      } else if (question_object.optiontype == 6) {
                        return (
                          <>
                            <Signaturecompo formik={formik} index={i} />
                          </>
                        );
                      }
                    })()}

                    {question_object.optiontype == 2 ? (
                      <div className="consult_form">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="2"
                          placeholder="Enter your answer here"
                          name={`dynamicQues${i + 1}`}
                          value={formik.values[`dynamicQues${i + 1}`]}
                        ></textarea>
                      </div>
                    ) : (
                      (question_object.optiontype == 0 ||
                        question_object.optiontype == 1 ||
                        question_object.optiontype == 3) && (
                        <div
                          className={
                            question_object.optiontype == 3
                              ? " options-form-images"
                              : " options_form"
                          }
                        >
                          {question_object?.options?.map(function (
                            option,
                            optionindex
                          ) {
                            return (
                              <div className="form-check" key={optionindex}>
                                {(() => {
                                  if (question_object.optiontype == 3) {
                                    return (
                                      <img
                                        src={
                                          process.env.REACT_APP_IMAGE_URL +
                                          "/Adminquestionimage" +
                                          option[
                                            `imagename${optionindex + 1}`
                                          ]
                                        }
                                        alt={option.imageurl1}
                                        className="option_image"
                                      />
                                    );
                                  } else {
                                    return (
                                      <>
                                        <input
                                          className={
                                            question_object.optiontype == 0
                                              ? "form-radio-input"
                                              : "form-check-input"
                                          }
                                          type={
                                            question_object.optiontype == 0
                                              ? "radio"
                                              : "checkbox"
                                          }
                                          name={
                                            question_object.optiontype == 0
                                              ? `radioQues${i + 1}`
                                              : `checkBoxQues${i + 1}`
                                          }
                                          value={`option${optionindex + 1}`}
                                          checked={
                                            question_object.optiontype == 0
                                              ? formik.values[
                                                  `radioQues${i + 1}`
                                                ]?.answer ==
                                                `option${optionindex + 1}`
                                              : formik.values[
                                                  `checkBoxQues${i + 1}`
                                                ]?.some(
                                                  (data) =>
                                                    data.answer ==
                                                    `option${optionindex + 1}`
                                                )
                                          }
                                        />

                                        <label
                                          className="form-check-label"
                                          for="flexRadioDefault1"
                                        >
                                          {option?.optiontitle}
                                        </label>
                                        <div className="error_msg">
                                          {question_object.optiontype == 0
                                            ? formik.values[
                                                `radioQues${i + 1}`
                                              ]?.answer ==
                                                `option${optionindex + 1}` &&
                                              option?.custommessage
                                            : formik.values[
                                                `checkBoxQues${i + 1}`
                                              ]?.includes(
                                                `option${optionindex + 1}`
                                              ) && option?.custommessage}
                                        </div>
                                      </>
                                    );
                                  }
                                })()}
                              </div>
                            );
                          })}
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </section>

    {/* search list */}
  </div>
  )
}
