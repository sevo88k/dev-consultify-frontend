import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import {
  consultationformdetails,
  createConsultationForm,
  fetchClientById,
  imagesaveAction,
} from "../Redux/Actions/user/salon";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Signature from "signature_pad";
import { FaSave, FaUndo, FaRedo, FaEraser, FaSignature } from "react-icons/fa";

import SignaturePad from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";
import Signaturecompo from "../components/Signaturecompo";
import { useReactToPrint } from "react-to-print";
import { Modal } from "react-bootstrap";
const ConsultationForm = () => {
  const { id, customerId, path } = useParams();
  const [show, setShow] = useState(false);
  const [precare, setPrecare] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var idvalue = Decryptedid(atob(id));
  const componentRef = useRef();
  var dcryptCustomerId = Decryptedid(atob(customerId));

  const [customMessage, setCustoMessage] = useState([]);
  const [saveSignature, setSaveSignature] = useState();

  const { consultationquestion, clientDetail } = useSelector((state) => ({
    consultationquestion: state.myaccount.consultationquestion,
    clientDetail: state.myaccount.clientDetail,
  }));

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(clientDetail, "dcryptCustomerId");

  useEffect(() => {
    dispatch(consultationformdetails(idvalue));
  }, [idvalue]);

  const validate = (values) => {
    const errors = {};
    // Dynamic validation logic
    for (let i = 0; i < consultationquestion?.question?.length; i++) {
      const fieldName = `dynamicQues${i + 1}`;

      if (
        !values[fieldName] &&
        consultationquestion?.question[i]?.required &&
        consultationquestion?.question[i]?.optiontype == 2
      ) {
        errors[fieldName] = "This field is required";
      }
      //   if (
      //     !values[fieldName] &&
      //     consultationquestion?.question[i]?.required &&
      //     consultationquestion?.question[i]?.optiontype == 4
      //   ) {
      //     errors[fieldName] = "This field is required";
      //   }

      if (
        !values[fieldName] &&
        consultationquestion?.question[i]?.required &&
        consultationquestion?.question[i]?.optiontype == 5
      ) {
        errors[fieldName] = "This field is required";
      }
      // if (!values[fieldName] && consultationquestion?.question[i]?.required && consultationquestion?.question[i]?.optiontype == 6) {
      //     errors[fieldName] = 'This field is required';
      // }

      if (
        !values[`checkBoxQues${i + 1}`] &&
        consultationquestion?.question[i]?.required &&
        consultationquestion?.question[i]?.optiontype == 1
      ) {
        errors[`checkBoxQues${i + 1}`] = "This field is required";
      }
      if (
        !values[`radioQues${i + 1}`] &&
        consultationquestion?.question[i]?.required &&
        consultationquestion?.question[i]?.optiontype == 0
      ) {
        errors[`radioQues${i + 1}`] = "This field is required";
      }

      if (
        (!values[`clientImage${i + 1}`]?.img1 ||
          !values[`clientImage${i + 1}`]?.img2) &&
        consultationquestion?.question[i]?.required &&
        consultationquestion?.question[i]?.optiontype == 4
      ) {
        errors[`clientImage${i + 1}`] = "This field is required";
      }
      // You can add more dynamic validation logic here
    }

    return errors;
  };

  const initialValues = {
    // Set other static initial values here
  };

  // Dynamically add fields to initialValues
  for (let i = 0; i < consultationquestion?.question?.length; i++) {
    // question_object.optiontype == 6
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

  useEffect(() => {
    dispatch(fetchClientById(dcryptCustomerId));
  }, [dcryptCustomerId]);

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      const existSignature = consultationquestion?.question?.find(
        (item) => item.optiontype == "6"
      );
      if (!saveSignature && existSignature) {
        return toast.error(
          "Please save your signature first to proceed further."
        );
      }

      var keys = Object.keys(values);

      var arr = [];

      for (var i = 0; i < keys.length; i++) {
        var val2 = values[keys[i]];
        console.log(keys[i]);

        if (val2?.length > 0) {
          for (let j = 0; j < val2?.length; j++) {
            arr?.push(val2[j]);
          }
        } else {
          arr?.push(val2);
        }
      }

      for (let i = 0; i < arr?.length; i++) {
        var isExist = arr?.find((data) => data?.formProceedStatus == 2);

        if (isExist) break;
      }

      if (isExist) {
        toast.error("The one user has filled when creating the question.");
      }

      if (!isExist) {
        dispatch(
          createConsultationForm({
            salonId: localStorage.getItem("userId"),
            customerId: dcryptCustomerId,
            consultationId: idvalue,
            formCompletedBy: "salon",
            status: 1,
            answers: values,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            formik.resetForm();
            toast.success(data?.payload?.message);
            if (path == "client_view") {
              navigate("/" + path + "/" + customerId);
            } else {
              navigate("/" + path);
            }
          }
        });
      }
    },
  });

  const toggleCheckbox = (options, option) => {
    if (options?.some((data) => data.answer == option.answer)) {
      return options?.filter((item) => item?.answer !== option?.answer);
    } else {
      return [...options, option];
    }
  };

  //console.log(initialValues, formik.values, "initialValues")

  const handleClose = () => setShow(false);
  

  return (
    <div className="consulting_form">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck white-header">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* search header */}
      <section ref={componentRef} className="search-header">
        <div className="container">
          <Row>
            <div className="col-lg-12">
              <div className="prev_main">
                <img
                  src={require("../../src/assets/img/right-arrow.svg").default}
                  alt="arrow"
                  className="arrow-next-green"
                />
                <NavLink 
                to={"/consultation"} 
                // to={`/client_view/${customerId}`}
                class="prev_result">
                  Back to All Forms
                </NavLink>
              </div>
            </div>
            <div className="hide">
              <img src={require("../assets/img/logo.png")} alt="logo" />
            </div>
            <Col xs={12} md={9}>
              <div className="consultationform_tab mt-0 pt-0">
                <h2 className="form_cmn_heading">
                  {consultationquestion?.form_title}
                </h2>
                <p style={{ color: "#404040" }}>
                  Client:{" "}
                  {clientDetail?.first_name + " " + clientDetail?.last_name}
                </p>
                <p
                  className="mt-3 mb-0 consult-description"
                  style={{ color: "#404040", textWrap: "pre-line" }}
                >
                  {consultationquestion?.form_description}
                </p>
                {/* <p>
                  Started by:{" "}
                  {localStorage.getItem("firstname") +
                    " " +
                    localStorage.getItem("lastename")}
                </p> */}
              </div>
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-end">
              <div className="button-link pre-view d-flex justify-content-end align-items-start">
                <Nav.Link
                  onClick={handlePrint}
                  href="#"
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
            <div className="row">
              {consultationquestion?.question?.map(function (
                question_object,
                i
              ) {
                return (
                  <div className="col-lg-12 printable-item" key={i}>
                    <div
                      className={
                        question_object.optiontype == 4
                          ? "form_box button-link"
                          : "form_box"
                      }
                    >
                      <label>
                        <span>{i + 1}.</span>{" "}
                        {question_object.optiontype == 5 ? (
                          ""
                        ) : (
                          <span> {question_object.question}</span>
                        )}
                      </label>
                      {(() => {
                        if (question_object.optiontype == 4) {
                          return (
                            <div className="create_new_form">
                              <div className="row button-link">
                                <div className="col-6">
                                  <div className="upload_img_div">
                                    {formik?.values[`clientImage${i + 1}`]
                                      ?.img1 ? (
                                      <img
                                        src={
                                          process.env.REACT_APP_HOST_NAME +
                                          "Adminquestionimage/" +
                                          formik?.values[`clientImage${i + 1}`]
                                            ?.img1
                                        }
                                      />
                                    ) : (
                                      <p>Upload image</p>
                                    )}

                                    <input
                                      class="form-control upload-input"
                                      type="file"
                                      id="formFile1"
                                      onChange={(e) => {
                                        console.log(e.target.files[0]);

                                        let formDatavalue = new FormData();
                                        formDatavalue.append(
                                          "imagename1",
                                          e.target.files[0]
                                        );

                                        dispatch(
                                          imagesaveAction(formDatavalue)
                                        ).then(function (data) {
                                          if (data.payload) {
                                            console.log(
                                              data.payload,
                                              "data.payload"
                                            );
                                            formik.setFieldValue(
                                              `clientImage${i + 1}.img1`,
                                              data.payload
                                            );
                                          }
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="upload_img_div">
                                    {formik?.values[`clientImage${i + 1}`]
                                      ?.img2 ? (
                                      <img
                                        src={
                                          process.env.REACT_APP_HOST_NAME +
                                          "Adminquestionimage/" +
                                          formik?.values[`clientImage${i + 1}`]
                                            ?.img2
                                        }
                                      />
                                    ) : (
                                      <p>Upload image</p>
                                    )}

                                    <input
                                      class="form-control upload-input"
                                      type="file"
                                      id="formFile"
                                      onChange={(e) => {
                                        console.log(e.target.files[0]);

                                        let formDatavalue = new FormData();
                                        formDatavalue.append(
                                          "imagename1",
                                          e.target.files[0]
                                        );

                                        dispatch(
                                          imagesaveAction(formDatavalue)
                                        ).then(function (data) {
                                          if (data.payload) {
                                            formik.setFieldValue(
                                              `clientImage${i + 1}.img2`,
                                              data.payload
                                            );
                                            //   setFieldValue(
                                            //     `formData.${questionIndex}.options.${optionIndex}.imagename${
                                            //       optionIndex +
                                            //       1
                                            //     }`,

                                            //     data.payload
                                            //   );
                                          }
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              {formik.submitCount > 0 &&
                                formik.errors[`clientImage${i + 1}`] && (
                                  <div className="error_valid">
                                    {formik.errors[`clientImage${i + 1}`]}
                                  </div>
                                )}
                            </div>
                          );
                        } else if (question_object.optiontype == 5) {
                          return (
                            <div className="declaration">
                              <label>Declaration</label>
                              <p
                                style={{
                                  textWrap: "pre-line",
                                }}
                              >
                                {question_object.question}
                              </p>
                              <div className="d-flex justify-content-end">
                                <label>
                                  {question_object?.confirmation || "I Confirm"}
                                </label>
                                <input
                                  type="checkbox"
                                  name={`dynamicQues${i + 1}`}
                                  value={formik.values[`dynamicQues${i + 1}`]}
                                  onChange={formik.handleChange}
                                />
                              </div>
                              {formik.submitCount > 0 &&
                                formik.errors[`dynamicQues${i + 1}`] && (
                                  <div className="error_valid">
                                    {formik.errors[`dynamicQues${i + 1}`]}
                                  </div>
                                )}
                            </div>
                          );
                        } else if (question_object.optiontype == 6) {
                          return (
                            <>
                              <Signaturecompo
                                formik={formik}
                                index={i}
                                setSaveSignature={setSaveSignature}
                              />
                              {formik.submitCount > 0 &&
                                formik.errors[`signature${i + 1}`] && (
                                  <div className="error_valid">
                                    {formik.errors[`signature${i + 1}`]}
                                  </div>
                                )}
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
                            onChange={formik.handleChange}
                          ></textarea>
                          {formik.submitCount > 0 &&
                            formik.errors[`dynamicQues${i + 1}`] && (
                              <div className="error_valid">
                                {formik.errors[`dynamicQues${i + 1}`]}
                              </div>
                            )}
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
                                <div
                                  className="form-check flex-column align-items-start"
                                  key={optionindex}
                                >
                                  {(() => {
                                    if (question_object.optiontype == 3) {
                                      return (
                                        <img
                                          src={
                                            process.env.REACT_APP_HOST_NAME +
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
                                          <div className="d-flex align-items-center">
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
                                              // id="flexRadioDefault1"
                                              onChange={() => {
                                                question_object.optiontype == 0
                                                  ? formik.setFieldValue(
                                                      `radioQues${i + 1}`,
                                                      {
                                                        answer: `option${
                                                          optionindex + 1
                                                        }`,
                                                        custommsg:
                                                          option?.custommessage,
                                                        formProceedStatus:
                                                          option?.formOptiontitle,
                                                      }
                                                    )
                                                  : formik.setFieldValue(
                                                      `checkBoxQues${i + 1}`,
                                                      toggleCheckbox(
                                                        formik.values[
                                                          `checkBoxQues${i + 1}`
                                                        ] || [],
                                                        {
                                                          answer: `option${
                                                            optionindex + 1
                                                          }`,
                                                          custommsg:
                                                            option?.custommessage,
                                                          formProceedStatus:
                                                            option?.formOptiontitle,
                                                        }
                                                      )
                                                    );
                                              }}
                                            />

                                            <label
                                              className="form-check-label"
                                              for="flexRadioDefault1"
                                            >
                                              {option?.optiontitle}
                                            </label>
                                          </div>
                                          <div>
                                            <div className="error_msg">
                                              {question_object.optiontype == 0
                                                ? formik.values[
                                                    `radioQues${i + 1}`
                                                  ]?.answer ==
                                                    `option${
                                                      optionindex + 1
                                                    }` && option?.custommessage
                                                : formik.values[
                                                    `checkBoxQues${i + 1}`
                                                  ]?.findIndex(
                                                    (data) =>
                                                      data.answer ==
                                                      `option${optionindex + 1}`
                                                  ) > -1 &&
                                                  option?.custommessage}
                                            </div>
                                          </div>
                                        </>
                                      );
                                    }
                                  })()}
                                </div>
                              );
                            })}

                            {question_object.optiontype == 0
                              ? formik.submitCount > 0 &&
                                formik.errors[`radioQues${i + 1}`] && (
                                  <div className="error_valid">
                                    {formik.errors[`radioQues${i + 1}`]}
                                  </div>
                                )
                              : formik.submitCount > 0 &&
                                formik.errors[`checkBoxQues${i + 1}`] && (
                                  <div className="error_valid">
                                    {formik.errors[`checkBoxQues${i + 1}`]}
                                  </div>
                                )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              })}

              {consultationquestion?.pre_care_setarray?.map(function (
                object,
                i
              ) {
                return (
                  <section className="search-list-part">
                    <div className="search-list-box">
                      <Row className="d-flex align-items-end" key={i}>
                        <Col xs={12} md={9} sm={9}>
                          <div className="search-content-left">
                            <h3>{object?.pre_care_id?.treatmentname}</h3>
                            <div className="sub-heading">
                              Pre & Post Treatment Care Advice
                            </div>
                            <p>{object?.pre_care_id?.description}</p>
                          </div>
                        </Col>

                        <Col
                          xs={12}
                          md={3}
                          sm={3}
                          className="d-flex justify-content-center"
                        >
                          <Link
                            to=""
                            className="consult-view-btn"
                            onClick={() => {
                              setPrecare(object?.pre_care_id);
                              setShow(true);
                            }}
                          >
                            View
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </section>
                );
              })}

              <div className="col-lg-12">
                <div className="submit-btn d-flex justify-content-end">
                  <button type="submit" className="lg-btn button-link">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* search list */}
      <Modal show={show} onHide={handleClose} className="client-consult">
        <Modal.Body>
          <div className="treat-box h-100">
            <h2 className="text-center">{precare.treatmentname}</h2>
            <Row>
              <Col lg={6}>
                <div className="left-instruct">
                  <h3>Pre Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>
                      {precare.pre_care_advice}
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="right-instruct">
                  <h3>Post Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>
                      {precare.after_care_advice}
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={12}>
                <div className="right-instruct text-center">
                  <h3>Notes</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>{precare.notes}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConsultationForm;
