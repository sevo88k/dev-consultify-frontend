import React, { useState } from "react";
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

import toast from "react-hot-toast";
import DeletePopup from "../../../components/Modals/DeletePopup";
import { imagesaveAction } from "../../../Redux/Actions/user/salon";
export default function EditConsultationForm2Preset({
  formDatavalue,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [delModalShow, setDelModalShow] = React.useState(false);
  const [cunsultationId, setConsultationId] = React.useState();
  const [trashIndex, setTrashIndex] = React.useState();

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
      formDatavalue?.formData?.length > 0
        ? formDatavalue.formData
        : [
            {
              confirmation: "",
              question: "",
              optiontype: "0",
              required: false,
              correctanswer: "",
              options: [
                {
                  optiontitle: "",
                  formOptiontitle: "0",
                  custommessage: "",
                  imagename1: "",
                  imageurl1: "",
                },
                {
                  optiontitle: "",
                  formOptiontitle: "0",
                  custommessage: "",
                  imagename2: "",
                  imageurl2: "",
                },
              ],
            },
          ],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(null);
  const questions = [
    {
      quest_title: "Question Title",
      description: "Enter your question here",
      option_type: "0",
    },
    {
      quest_title: "Question Title",
      description: "Enter your question here",
      option_type: "1",
    },
    {
      quest_title: "Question Title",
      description: "Enter your question here",
      option_type: "2",
    },
    {
      quest_title: "Image Caption",
      description: "Enter A Caption for Your Image Here",
      option_type: "3",
    },
    {
      quest_title: "Client Image Request",
      description: "What Do You Want Your Client To Upload",
      option_type: "4",
    },
    {
      quest_title: "Customer Declaration",
      description: "Enter Your Declaration Text Here",
      option_type: "5",
    },
    {
      quest_title: "Customer Signature",
      description: "Add Any Supporting Text Here",
      option_type: "6",
    },
  ];

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

  return (
    <div className="consulation_form two">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../../../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to="/consultation-presets">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Edit consultation form</h2>
          <div className="steps two">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
        </div>

        <div className="create_form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={(values) => {
              try {
                validationSchema.validateSync(values, {
                  abortEarly: false,
                });
              } catch (error) {
                // toast.error("Please select response option, it’s mandatory")
                console.error("Validation errors:", error.errors);
              }
            }}
            onSubmit={(values) => {
              if (values) {
                for (let i = 0; i < values?.formData?.length; i++) {
                  const isExist = values?.formData[i]?.options?.find(
                    (data) => data?.formOptiontitle == "0"
                  );

                  if (isExist) {
                    return toast.error(
                      "Please select a response option. It's mandatory."
                    );
                  }
                }
              }

              // Handle form submission
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
                      {values.formData.map((question, questionIndex) => {
                        const questExist = questions?.find(
                          (item) => item?.option_type == question?.optiontype
                        );

                        return (
                          <div
                            className="consultaing_detailsform"
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
                                    e.target.value == "5" ||
                                    e.target.value == "6"
                                  ) {
                                    let isExist = values?.formData?.find(
                                      (item) =>
                                        item?.optiontype == e.target.value
                                    );
                                    if (isExist) {
                                      toast.error(
                                        e.target.value == "5"
                                          ? "You already have a declaration field."
                                          : "You already have a signature field."
                                      );

                                      return;
                                    }
                                  }

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
                                  {questExist?.quest_title}
                                </label>

                                {questExist?.option_type == 5 ? (
                                  <textarea
                                    rows={3}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={questExist?.description}
                                    value={question.question}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.question`,
                                        e.target.value
                                      )
                                    }
                                  />
                                ) : (
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={questExist?.description}
                                    value={question.question}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.question`,
                                        e.target.value
                                      )
                                    }
                                  />
                                )}
                                {questExist?.option_type == 5 && (
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={"Confirmation Button Text"}
                                    value={question.confirmation}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.confirmation`,
                                        e.target.value
                                      )
                                    }
                                  />
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
                                                              `imageurl${
                                                                optionIndex + 1
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
                                                              if (
                                                                data.payload
                                                              ) {
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
                                                                e.target
                                                                  .files[0]
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
                                                    (question.optiontype ==
                                                      "0" ||
                                                      question.optiontype ===
                                                        "1") && (
                                                      <>
                                                        {/* <input
                                                          className="form-check-input form-radio"
                                                          type={
                                                            question.optiontype ===
                                                            "0"
                                                              ? "radio"
                                                              : "radio"
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
                                                        /> */}
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

                                              {(question.optiontype == "1" ||
                                                question.optiontype == "0") && (
                                                <div className="col-lg-4 d-flex align-items-center">
                                                  <select
                                                    class="form-select"
                                                    aria-label="Default select example"
                                                    value={
                                                      option.formOptiontitle
                                                    }
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
                                                  <button
                                                    className="tooltip-btn"
                                                    type="button"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title=" Proceed: Client can proceed with the treatment if this answer is selected
                                Cannot Proceed: Client cannot proceed with the treatment if this answer is selected, the treatment should not be performed on the client
                              Proceed With Message: Client can proceed with treatment, but a customisable message will be displayed, possibly containing a warning or additional information"
                                                  >
                                                    <img
                                                      src={require("../../../assets/img/infoicon.png")}
                                                    />
                                                  </button>
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

                                              <div className="col-lg-12">
                                                <div className="row">
                                                  <div className="col-lg-11 col-10">
                                                    <input
                                                      className="form-control custom-msg"
                                                      type="text"
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
                                            </div>
                                          </div>
                                        )
                                      )}

                                      {(question.optiontype == "0" ||
                                        question.optiontype == "1") && (
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
                                          />{" "}
                                          <p>Duplicate</p>
                                        </button>
                                        {values.formData.length > 1 && (
                                          <button
                                            className="trash-btn bin"
                                            onClick={() => {
                                              setDelModalShow(true);
                                              setConsultationId(() => remove);
                                              setTrashIndex(questionIndex);
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

                                        {questionIndex ==
                                          values.formData.length - 1 && (
                                          <div className="add-btn-form">
                                            <button
                                              onClick={() => {
                                                console.log(
                                                  values.formData[
                                                    questionIndex
                                                  ],
                                                  "formdata----------------->>>>"
                                                );
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
                                            </button>
                                            <p>Add Question</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              />
                            </div>
                          </div>
                        );
                      })}
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
                        <button className="lg-btn w-set">Next</button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <DeletePopup
            delModalShow={delModalShow}
            setDelModalShow={setDelModalShow}
            dropFun={cunsultationId}
            trashIndex={trashIndex}
          />
        </div>
      </div>
    </div>
  );
}
