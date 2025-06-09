import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { FieldArray, Formik, ErrorMessage } from "formik";
import { imagesaveAction } from "../Redux/Actions/user/salon";
export default function EditConsultationForm2({
  formDatavalue,
  setFormData,
  nextStep,
  idconsultaion,
  prevStep,
  view,
}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    formData: Yup.array().of(
      Yup.object().shape({
        question: Yup.string().required("Question is required"),
        optiontype: Yup.string().required("Option Type is required"),
        required: Yup.boolean().required("Required field is required"),
        correctanswer: Yup.string(),

        options: Yup.array().when("optiontype", {
          is: (optiontype) => ["0", "1"].includes(optiontype),

          then: Yup.array().of(
            Yup.object().shape({
              optiontitle: Yup.string().required("Option title is required"),
              formOptiontitle: Yup.string().required("Please select an option"),
            })
          ),
          otherwise: Yup.array().of(
            Yup.object().shape({
              optiontitle: Yup.string(),
              formOptiontitle: Yup.string(),
            })
          ),
        }),
      })
    ),
  });

  const initialValues = {
    formData:
      formDatavalue?.idconsultaion == undefined
        ? formDatavalue?.idconsultaion != undefined
          ? formDatavalue.formData
          : formDatavalue?.question
        : formDatavalue?.formData,
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(null);

  const handleShow = (questionIndex, optionIndex) => {
    setCurrentQuestionIndex(questionIndex);
    setCurrentOptionIndex(optionIndex);
    setShow(true);
  };

  const handleClose = () => {
    setCurrentQuestionIndex(null);
    setCurrentOptionIndex(null);
    setShow(false);
  };

  const handleClosedone = () => {
    setShow(false);
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  return (
    <div className="consulation_form two">
      {/* Header Start */}
      <Navbar
        expand="lg"
        className={
          scroll
            ? "bg-body-tertiary header-blck active"
            : "bg-body-tertiary header-blck"
        }
      >
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to="/consultation">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Create a new consultation form</h2>
          <div className="steps">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Review</Nav.Link>
          </div>
        </div>

        <div className="create_form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={(values) => {
              console.log(values, "jjjjjjjjjjjjjjjjj");
              try {
                validationSchema.validateSync(values, {
                  abortEarly: false,
                });
              } catch (error) {
                console.error("Validation errors:", error.errors);
              }
            }}
            onSubmit={(values) => {
              // Handle form submission
              values.idconsultaion = idconsultaion;
              console.log(values, "ddddddddddddddddd");
              setFormData({
                ...formDatavalue,
                ...values,
              });
              nextStep();
            }}
          >
            {({ values, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit} className="">
                <FieldArray
                  name="formData"
                  render={({ push, remove, insert }) => (
                    <div className="pt-2">
                      {values.formData.map((question, questionIndex) => (
                        <div
                          className={`consultaing_detailsform   ${
                            view == "only_view" && "pointer-nones"
                          }`}
                          key={questionIndex}
                        >
                          <div className="top_form">
                            <h2>Question {questionIndex + 1}</h2>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={question.optiontype}
                              onChange={(e) => {
                                if (
                                  e.target.value == "0" ||
                                  e.target.value == "1"
                                ) {
                                  // If it is "Text Field," remove all options
                                  setFieldValue(
                                    `formData.${questionIndex}.options`,
                                    [
                                      {
                                        optiontitle: "",
                                        formOptiontitle: "0",
                                        custommessage: "",
                                      },
                                      {
                                        optiontitle: "",
                                        formOptiontitle: "0",
                                        custommessage: "",
                                      },
                                    ]
                                  );
                                }

                                if (e.target.value === "3") {
                                  // If it is "Text Field," remove all options
                                  setFieldValue(
                                    `formData.${questionIndex}.options`,
                                    [{ imagename1: "" }, { imagename2: "" }]
                                  );
                                }
                                if (
                                  e.target.value === "2" ||
                                  e.target.value === "4" ||
                                  e.target.value === "5" ||
                                  e.target.value === "6"
                                ) {
                                  // If it is "Text Field," remove all options
                                  setFieldValue(
                                    `formData.${questionIndex}.options`,
                                    []
                                  );
                                }

                                // Update the option type as usual
                                setFieldValue(
                                  `formData.${questionIndex}.optiontype`,
                                  e.target.value
                                );
                              }}
                            >
                              <option value="0">Single Choice</option>
                              <option value="1">Multiple choice</option>
                              <option value="2">Text Field</option>
                              <option value="3">Image</option>
                              <option value="4">Client Image Upload</option>
                              <option value="5">Declaration</option>
                              <option value="6">Signature</option>
                            </select>
                          </div>
                          <div className="form_field">
                            <div className="f_field">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label pb-3"
                              >
                                Question Title
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter your question here"
                                value={question.question}
                                onChange={(e) =>
                                  setFieldValue(
                                    `formData.${questionIndex}.question`,
                                    e.target.value
                                  )
                                }
                              />

                              <div className="error">
                                <ErrorMessage
                                  name={`formData.${questionIndex}.question`}
                                />
                              </div>
                            </div>
                            <div className="responses">
                              <h3>Responses</h3>
                            </div>
                            <FieldArray
                              name={`formData.${questionIndex}.options`}
                              render={({
                                push: pushOption,
                                remove: removeOption,
                              }) => (
                                <div>
                                  <div
                                    className={
                                      question.optiontype == 3
                                        ? "images_select_main"
                                        : ""
                                    }
                                  >
                                    {question.options.map(
                                      (option, optionIndex) => (
                                        <div
                                          className="options"
                                          key={optionIndex}
                                        >
                                          <div className="row">
                                            <div className="col-lg-4">
                                              <div className="form-check">
                                                {question.optiontype == 3 ? (
                                                  <>
                                                    <div className="manage_image_upload">
                                                      <p>Upload Image</p>
                                                      <img
                                                        src={
                                                          option[
                                                            `imagename${
                                                              optionIndex + 1
                                                            }`
                                                          ] != ""
                                                            ? process.env
                                                                .REACT_APP_HOST_NAME +
                                                              "/Adminquestionimage" +
                                                              option[
                                                                `imagename${
                                                                  optionIndex +
                                                                  1
                                                                }`
                                                              ]
                                                            : option[
                                                                `imageurl${
                                                                  optionIndex +
                                                                  1
                                                                }`
                                                              ]
                                                        }
                                                        alt={option.imageurl1}
                                                      />
                                                      <input
                                                        className="form-control"
                                                        type="file"
                                                        onChange={(e) => {
                                                          let formDatavalue =
                                                            new FormData();
                                                          formDatavalue.append(
                                                            "imagename1",
                                                            e.target.files[0]
                                                          );

                                                          dispatch(
                                                            imagesaveAction(
                                                              formDatavalue
                                                            )
                                                          ).then(function (
                                                            data
                                                          ) {
                                                            if (data.payload) {
                                                              setFieldValue(
                                                                `formData.${questionIndex}.options.${optionIndex}.imagename${
                                                                  optionIndex +
                                                                  1
                                                                }`,

                                                                data.payload
                                                              );
                                                            }
                                                          });

                                                          setFieldValue(
                                                            `formData.${questionIndex}.options.${optionIndex}.imageurl${
                                                              optionIndex + 1
                                                            }`,
                                                            URL.createObjectURL(
                                                              e.target.files[0]
                                                            )
                                                          );
                                                        }}
                                                      />{" "}
                                                      <br />
                                                      <div className="error">
                                                        <ErrorMessage
                                                          name={`formData.${questionIndex}.options.${optionIndex}.imagename${
                                                            optionIndex + 1
                                                          }`}
                                                        />
                                                      </div>
                                                    </div>
                                                  </>
                                                ) : (
                                                  (question.optiontype == 0 ||
                                                    question.optiontype ===
                                                      1) && (
                                                    <>
                                                      <input
                                                        className="form-check-input form-radio"
                                                        type={
                                                          question.optiontype ===
                                                          0
                                                            ? "radio"
                                                            : "checkbox"
                                                        }
                                                        name={`options_${questionIndex}`}
                                                        id={`option_${questionIndex}_${optionIndex}`}
                                                        checked={
                                                          `formData.${questionIndex}.options.${optionIndex}.optiontitle` ==
                                                          question.correctanswer
                                                        }
                                                        onChange={(e) =>
                                                          setFieldValue(
                                                            `formData.${questionIndex}.correctanswer`,
                                                            `formData.${questionIndex}.options.${optionIndex}.optiontitle`
                                                          )
                                                        }
                                                      />
                                                      <input
                                                        className="form-control radio_set_c"
                                                        id="exampleFormControlInput2"
                                                        type="text"
                                                        placeholder={
                                                          option.optiontitle
                                                        }
                                                        value={
                                                          option.optiontitle
                                                        }
                                                        onChange={(e) =>
                                                          setFieldValue(
                                                            `formData.${questionIndex}.options.${optionIndex}.optiontitle`,
                                                            e.target.value
                                                          )
                                                        }
                                                      />
                                                      <br />
                                                    </>
                                                  )
                                                )}
                                              </div>
                                              <div className="error">
                                                <ErrorMessage
                                                  name={`formData.${questionIndex}.options.${optionIndex}.optiontitle`}
                                                />
                                              </div>
                                            </div>

                                            {(question.optiontype == 1 ||
                                              question.optiontype == 0) && (
                                              <div className="col-lg-4">
                                                <select
                                                  class="form-select"
                                                  aria-label="Default select example"
                                                  value={option.formOptiontitle}
                                                  onChange={(e) =>
                                                    setFieldValue(
                                                      `formData.${questionIndex}.options.${optionIndex}.formOptiontitle`,
                                                      e.target.value
                                                    )
                                                  }
                                                >
                                                  <option value="0" selected>
                                                    Response Option
                                                  </option>
                                                  <option value="1">
                                                    Proceed
                                                  </option>
                                                  <option value="2">
                                                    Cannot Proceed
                                                  </option>
                                                  <option value="3">
                                                    Proceed with Message
                                                  </option>
                                                </select>
                                              </div>
                                            )}

                                            {(option.formOptiontitle == "2" ||
                                              option.formOptiontitle ==
                                                "3") && (
                                              <div className="col-lg-4">
                                                {/* <div
                                                  onClick={() =>
                                                    handleShow(
                                                      questionIndex,
                                                      optionIndex
                                                    )
                                                  }
                                                  className="custom_msg"
                                                >
                                                  {" "}
                                                  Add a Custom Message
                                                </div> */}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}

                                    {(question.optiontype == 0 ||
                                      question.optiontype == 1) && (
                                      <div className="form-check add">
                                        <img
                                          onClick={() =>
                                            pushOption({
                                              optiontitle: "",
                                              formOptiontitle: "0",
                                            })
                                          }
                                          className="blu_plus"
                                          src={
                                            require("../assets/img/greyplus.svg")
                                              .default
                                          }
                                          alt="plus"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="exampleRadios"
                                        >
                                          Add Another Response
                                        </label>
                                      </div>
                                    )}
                                  </div>
                                  <div className="form_bottom_main">
                                    <div className="add_bottom_tab">
                                      <div className="form-check form-switch">
                                        <label
                                          className="form-check-label"
                                          htmlFor={`flexSwitchCheckDefault_${questionIndex}`}
                                        >
                                          Required
                                        </label>
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id={`flexSwitchCheckDefault_${questionIndex}`}
                                          checked={question.required}
                                          onChange={(e) => {
                                            setFieldValue(
                                              `formData.${questionIndex}.required`,
                                              e.target.checked
                                            );
                                          }}
                                        />
                                      </div>
                                      <button
                                        className="trash-btn"
                                        type="button"
                                        onClick={() => {
                                          insert(
                                            questionIndex + 1,
                                            values?.formData[questionIndex]
                                          );
                                        }}
                                      >
                                        <img
                                          src={
                                            require("../assets/img/copy-icon.svg")
                                              .default
                                          }
                                          alt="copy"
                                        />
                                      </button>
                                      {values.formData.length > 1 && (
                                        <button
                                          onClick={() => remove(questionIndex)}
                                        >
                                          <img
                                            src={
                                              require("../assets/img/Trash.svg")
                                                .default
                                            }
                                            alt="trash"
                                          />
                                        </button>
                                      )}

                                      {questionIndex ==
                                        values.formData.length - 1 && (
                                        <button
                                          onClick={() =>
                                            push({
                                              question: "",
                                              optiontype: "0",
                                              required: false,
                                              correctanswer: "",
                                              options: [
                                                {
                                                  optiontitle: "",
                                                  formOptiontitle: "0",
                                                  custommessage: "",
                                                  adminimage: [
                                                    {
                                                      imagename: "",
                                                    },
                                                  ],
                                                },
                                                {
                                                  optiontitle: "",
                                                  formOptiontitle: "0",
                                                  custommessage: "",
                                                  adminimage: [
                                                    {
                                                      imagename: "",
                                                    },
                                                  ],
                                                },
                                              ],
                                            })
                                          }
                                        >
                                          <img
                                            className="add-sec"
                                            src={
                                              require("../assets/img/greyplus.svg")
                                                .default
                                            }
                                            alt="plus"
                                          />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                />

                {values.formData.map((question, questionIndex) =>
                  question.options.map((option, optionIndex) => (
                    <Modal
                      key={`${questionIndex}-${optionIndex}`}
                      show={
                        show &&
                        currentQuestionIndex === questionIndex &&
                        currentOptionIndex === optionIndex
                      }
                      onHide={handleClose}
                      animation={false}
                    >
                      {/* ... modal header ... */}
                      <Modal.Body className="main_pop">
                        <div className="my_new_pop">
                          <h2>Custom Message</h2>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInput"
                            placeholder="Type here"
                            value={option.custommessage || ""}
                            onChange={(e) =>
                              setFieldValue(
                                `formData.${questionIndex}.options.${optionIndex}.custommessage`,
                                e.target.value
                              )
                            }
                          />
                          <div className="pop_btns">
                            <button
                              className="done_btn"
                              onClick={handleClosedone}
                            >
                              Done
                            </button>
                            <button className="cancel" onClick={handleClose}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  ))
                )}
                <div className="create_tab fixed_btn mb-4">
                  {/* <!-- start page title --> */}

                  <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-between">
                      <span>
                        <button
                          type="button"
                          onClick={() => {
                            prevStep();
                          }}
                          className="lg-btn back w-set"
                        >
                          Back
                        </button>
                      </span>
                      <span>
                        <button type="submit" className="lg-btn w-set">
                          Next
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
