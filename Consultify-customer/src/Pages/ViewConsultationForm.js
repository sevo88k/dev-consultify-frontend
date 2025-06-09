import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { fetchCompletedConsultationById } from "../Redux/Action/CustomerRestAction";
import Signaturecompo from "../components/Signaturecompo";
import { useReactToPrint } from "react-to-print";

const ViewConsultationForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  var idvalue = Decryptedid(atob(id));

  const userToken = window.localStorage.getItem("accessToken");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const completed_consultation_by_id = useSelector(
    (state) => state.customer.completed_consultation_by_id
  );

  const consultationquestion = completed_consultation_by_id?.consultationId;

  console.log(completed_consultation_by_id, "completed_consultation_by_id");

  useEffect(() => {
    dispatch(fetchCompletedConsultationById(idvalue));
  }, [idvalue]);

  const initialValues = {
    // Set other static initial values here
  };

  // Dynamically add fields to initialValues
  for (let i = 0; i < consultationquestion?.question?.length; i++) {
    console.log(
      consultationquestion?.question,
      "consultationquestion?.question"
    );
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

  const toggleCheckbox = (options, option) => {
    if (options?.some((data) => data.answer == option.answer)) {
      return options?.filter((item) => item?.answer !== option?.answer);
    } else {
      return [...options, option];
    }
  };

  console.log(
    formik.values,
    initialValues,
    completed_consultation_by_id,
    "formik.values"
  );

  return (
    <div className="consulting_form">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck view-header">
        <Container>
          {userToken ? (
            <Link to="/client_view">
              <img
                className="main-logo"
                src={require("../assets/img/newconsultlogo.webp")}
                alt="logo"
              />
            </Link>
          ) : (
            <Link>
              <img
                className="main-logo"
                src={require("../assets/img/newconsultlogo.webp")}
                alt="logo"
              />
            </Link>
          )}
        </Container>
      </Navbar>
      {/* Header End */}

      {/* search header */}
      <section className="search-header" ref={componentRef}>
        <div className="container">
          <Row>
            <div className="col-lg-12">
              <div className="prev_main">
                {/* {userToken ? (
                  <>
                    <img
                      src={
                        require("../../src/assets/img/right-arrow.svg").default
                      }
                      alt="arrow"
                      className="arrow-next-green"
                    />
                    <NavLink to={"/Client_view"} className="prev_result">
                      Back to All Forms
                    </NavLink>
                  </>
                ) : (
                  ""
                )} */}
              </div>
            </div>
            <Col xs={12} md={10}>
              <div className="search-input">
                <h2>{completed_consultation_by_id?.salonId?.salonname}</h2>
                <h3 style={{ textWrap: "pre-line" }}>
                  {consultationquestion?.form_title}
                </h3>

                <p className="mt-3 mb-0" style={{ textWrap: "pre-line" }}>
                  {consultationquestion?.form_description}
                </p>
                <p>
                  Started by:{" "}
                  {completed_consultation_by_id?.formCompletedBy == "salon"
                    ? completed_consultation_by_id?.salonId?.firstname +
                      " " +
                      completed_consultation_by_id?.salonId?.lastname
                    : completed_consultation_by_id?.customerId?.first_name +
                      " " +
                      completed_consultation_by_id?.customerId?.last_name}
                </p>
              </div>
            </Col>
            <Col xs={12} md={2} className="d-flex justify-content-end">
              <div className="button-link">
                <Nav.Link
                  onClick={handlePrint}
                  to="#"
                  className="white-box-link"
                >
                  Print
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <form
            onSubmit={formik.handleSubmit}
            className="symptoms_form consult-form mt-4"
          >
            <div className="row printable-component">
              {consultationquestion?.question?.map(function (
                question_object,
                i
              ) {
                return (
                  <div className="col-lg-12 printable-item" key={i}>
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
                                      ?.img1 && (
                                      <img
                                        src={
                                          process.env.REACT_APP_IMAGE_URL +
                                          "/Adminquestionimage" +
                                          formik.values[`clientImage${i + 1}`]
                                            ?.img1
                                        }
                                      />
                                    )}

                                    {/* <p>Upload image</p> */}
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="upload_img_div">
                                    {formik.values[`clientImage${i + 1}`]
                                      ?.img2 && (
                                      <img
                                        src={
                                          process.env.REACT_APP_IMAGE_URL +
                                          "/Adminquestionimage" +
                                          formik.values[`clientImage${i + 1}`]
                                            ?.img2
                                        }
                                      />
                                    )}

                                    {/* <p>Upload image</p> */}
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
                                <>
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
                                                        `option${
                                                          optionindex + 1
                                                        }`
                                                    )
                                              }
                                            />

                                            <label
                                              className="form-check-label"
                                              for="flexRadioDefault1"
                                            >
                                              {option?.optiontitle}
                                            </label>
                                          </>
                                        );
                                      }
                                    })()}
                                  </div>

                                  <div className="error_msg consult">
                                    {question_object.optiontype == 0
                                      ? formik.values[`radioQues${i + 1}`]
                                          ?.answer ==
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
  );
};

export default ViewConsultationForm;
