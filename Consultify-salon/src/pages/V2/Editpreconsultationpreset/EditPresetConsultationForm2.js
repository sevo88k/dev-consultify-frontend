import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { FieldArray, Formik, ErrorMessage } from "formik";
import { imagesaveAction } from "../../../Redux/Actions/user/salon";

export default function EditPresetConsultationForm2({
  formDatavalue,
  setFormData,
  nextStep,
  idconsultaion,
  prevStep,
  view,
  handleDelete
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
  const [searchParams] = useSearchParams();

  searchParams.get("path");
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
              src={require("../../../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to={"/" + searchParams.get("path")}>
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Edit Consultation Form</h2>
          <div className="steps two w-75">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
        </div>

        <div className="create_form">
          <Formik
           enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={(values) => {
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
                  render={({ push, remove, insert, move }) => (
                    <div className="pt-2">
                      {values.formData.map((question, questionIndex) => (
                        <div
                          className={`consultaing_detailsform   ${
                            view == "only_view" && "pointer-nones"
                          }`}
                          key={questionIndex}
                        >
                          <button
                            className="shifting-btns"
                            type="button"
                            onClick={() =>
                              move(questionIndex, questionIndex + 1)
                            } // Move up
                            disabled={
                              questionIndex === values.formData.length - 1
                            } // Disable if already at the beginning
                          >
                            <img
                              src={
                                require("../../../assets/img/arrowup.svg")
                                  .default
                              }
                            />
                          </button>
                          <button
                            className="shifting-btns"
                            type="button"
                            onClick={() =>
                              move(questionIndex, questionIndex - 1)
                            } // Move down
                            disabled={questionIndex === 0} // Disable if already at the end
                          >
                            <img
                              style={{ transform: "rotatez(180deg" }}
                              src={
                                require("../../../assets/img/arrowup.svg")
                                  .default
                              }
                            />
                          </button>

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
                                  // setFieldValue(
                                  //   `formData.${questionIndex}.options`,
                                  //   [
                                  //     {
                                  //       optiontitle: "",
                                  //       formOptiontitle: "0",
                                  //       custommessage: "",
                                  //     },
                                  //     {
                                  //       optiontitle: "",
                                  //       formOptiontitle: "0",
                                  //       custommessage: "",
                                  //     },
                                  //   ]
                                  // );
                                  const existingOptions =
                                  values.formData[questionIndex]
                                    ?.options || [];

                                  if (
                                    existingOptions.length === 0
                                  ) {
                                    setFieldValue(
                                      `formData.${questionIndex}.options`,
                                      [
                                        // {
                                        //   optiontitle: "",
                                        //   formOptiontitle: "0",
                                        //   custommessage: "",
                                        // },
                                        // {
                                        //   optiontitle: "",
                                        //   formOptiontitle: "0",
                                        //   custommessage: "",
                                        // },
                                        {
                                          optiontitle: "",
                                          formOptiontitle: "",
                                          custommessage: "",
                                          imagename1: "",
                                          imageurl1: "",
                                        },
                                        {
                                          optiontitle: "",
                                          formOptiontitle: "",
                                          custommessage: "",
                                          imagename2: "",
                                          imageurl2: "",
                                        },
                                      ]
                                    );
                                  }
                                

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

                              {/* {question?.optiontype == 5 ? (
                                  <textarea
                                    rows={3}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={question?.description}
                                    value={question.question}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.question`,
                                        e.target.value
                                      )
                                    }
                                  />
                                ) : (
                                  <>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    // placeholder={question?.description}
                                    placeholder="Enter your question here"
                                    value={question.question}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.question`,
                                        e.target.value
                                      )
                                    }
                                  />
                                  </>
                                 
                                )} */}

                              {question?.optiontype == 5 ? (
                                <>
                                  <Field
                                    as="textarea"
                                    rows={3}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={question.question}
                                    name={`formData.${questionIndex}.question`}
                                  />
                                  {/* 
                                    <button
                                      type="button"
                                      onClick={() => remove(questionIndex)}
                                      className="btn cre_new mt-2"
                                    >
                                      Remove Question
                                    </button> */}

                                  {/* <button
                                      type="button"
                                      className="btn cre_new ms-1 mt-2"
                                      onClick={() =>
                                        push({
                                          question: "",
                                          optiontype: "5",
                                          required: 0,
                                          correctanswer: "",
                                          options: [],
                                        })
                                      }
                                    >
                                      Add Question
                                    </button> */}
                                </>
                              ) : (
                                <>
                                  <Field
                                    as="input"
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your question here"
                                    name={`formData.${questionIndex}.question`}
                                  />
                                </>
                              )}

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
                                                    question.optiontype ==
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

                                                      <textarea
                                                        className="form-control radio_set_c"
                                                        id="exampleFormControlInput2"
                                                        type="text"
                                                        placeholder="Type a response here"
                                                        // placeholder={
                                                        //   option.optiontitle
                                                        // }
                                                        value={
                                                          option.optiontitle
                                                        }
                                                        onChange={(e) => {
                                                          setFieldValue(
                                                            `formData.${questionIndex}.options.${optionIndex}.optiontitle`,
                                                            e.target.value
                                                          );
                                                        }}
                                                        spellcheck="true"
                                                        rows={
                                                          option.optiontitle
                                                            .length == 0
                                                            ? 1
                                                            : Math.ceil(
                                                                option
                                                                  .optiontitle
                                                                  .length / 40
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
                                              <div className="col-lg-4 d-flex align-items-center">
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
                                                {(question.optiontype == "0" ||
                                                  question.optiontype ==
                                                    "1") && (
                                                  <span
                                                    className="remove-btn ms-2"
                                                    onClick={() =>
                                                      removeOption(optionIndex)
                                                    }
                                                  >
                                                    <img
                                                      src={
                                                        require("../../../assets/img/close.svg")
                                                          .default
                                                      }
                                                    />
                                                  </span>
                                                )}
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

                                            {(option.formOptiontitle == "2" ||
                                              option.formOptiontitle ==
                                                "3") && (
                                              <div className="col-lg-12">
                                                <div className="row">
                                                  <div className="col-lg-11 col-10">
                                                    <input
                                                      className="form-control custom-msg"
                                                      type="text"
                                                      value={
                                                        option.custommessage ||
                                                        ""
                                                      }
                                                      onChange={(e) =>
                                                        setFieldValue(
                                                          `formData.${questionIndex}.options.${optionIndex}.custommessage`,
                                                          e.target.value
                                                        )
                                                      }
                                                      placeholder="Add Custom Message (Optional)"
                                                    />
                                                  </div>
                                                  <div className="col-lg-1 col-2 d-flex align-items-center">
                                                    <button
                                                      type="button"
                                                      className="edit-btn"
                                                      onClick={() =>
                                                        handleShow(
                                                          questionIndex,
                                                          optionIndex
                                                        )
                                                      }
                                                    >
                                                      <img
                                                        src={
                                                          require("../../../assets/img/pencil-edit.svg")
                                                            .default
                                                        }
                                                      />
                                                    </button>
                                                  </div>
                                                </div>
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
                                            require("../../../assets/img/greyplus.svg")
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
                                            require("../../../assets/img/copy-icon.svg")
                                              .default
                                          }
                                          alt="copy"
                                        />
                                        <p>Duplicate</p>
                                      </button>

                                      {values.formData.length > 1 && (
                                        <button
                                          type="button"
                                          className="trash-btn bin"
                                          // onClick={() => remove(questionIndex)}
                                          onClick={() =>{ 
                                            if(values.formData[questionIndex]?._id) {
                                              handleDelete(values.formData[questionIndex]?._id) 

                                            } else {
                                             remove(questionIndex)
                                            }
                                          }} 
                                        >
                                          <img
                                            src={
                                              require("../../../assets/img/Trash.svg")
                                                .default
                                            }
                                            alt="trash"
                                          />
                                          <p>Remove Question</p>
                                        </button>
                                      )}

                                      {/* {questionIndex ==
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
                                              require("../../../assets/img/greyplus.svg")
                                                .default
                                            }
                                            alt="plus"
                                          />
                                        </button>
                                      )} */}

                                      {question?.optiontype == 5 &&
                                      questionIndex ==
                                        values.formData.length - 1 ? (
                                        <>
                                          <div className="add-btn-form">
                                            <button className="d-flex align-items-center"
                                              type="button"
                                              onClick={() => {
                                                if (
                                                  values.formData.length < 20
                                                ) {
                                                  push({
                                                    question: "",
                                                    optiontype: "5",
                                                    required: 0,
                                                    correctanswer: "",
                                                    options: [],
                                                  });
                                                }
                                              }}
                                            >
                                              <img
                                                className="add-sec"
                                                src={
                                                  require("../../../assets/img/greyplus.svg")
                                                    .default
                                                }
                                                alt="plus"
                                              />
                                            <p>Add Question</p>
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        questionIndex ==
                                          values.formData.length - 1 && (
                                          <div className="add-btn-form">
                                            <button
                                              onClick={() => {
                                                push({
                                                  question: "",
                                                  optiontype: "0",
                                                  required: false,
                                                  correctanswer: "",
                                                  options: [
                                                    {
                                                      optiontitle: "",
                                                      formOptiontitle: "",
                                                      custommessage: "",
                                                      adminimage: [
                                                        {
                                                          imagename: "",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      optiontitle: "",
                                                      formOptiontitle: "",
                                                      custommessage: "",
                                                      adminimage: [
                                                        {
                                                          imagename: "",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                });
                                              }}
                                            >
                                              <img
                                                className="add-sec"
                                                src={
                                                  require("../../../assets/img/greyplus.svg")
                                                    .default
                                                }
                                                alt="plus"
                                              />
                                              <p>Add Question</p>
                                            </button>
                                          </div>
                                        )
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
