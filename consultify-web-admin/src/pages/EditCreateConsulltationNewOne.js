import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";

import { FieldArray, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { imagesaveAction } from "../Redux/Action/ContaindicationAction";
import { deleteConsultaionQuestion, getdetailsConsultationAction } from "../Redux/Action/ManageconsultationAction";

export default function EditCreateConsulltationNewOne({
  formDatavalue,
  setFormData,
  nextStep,
  idconsultaion,
  prevStep,
  handleDelete,

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
              formOptiontitle: Yup.string().required(
                "Form Option Title is required"
              ),
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

  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-sm-12 d-flex align-items-center">
                  <NavLink to="/Manage-consultations">
                    {" "}
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">New Consultation</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>

          <div className="container-fluid">
            <div className="new_consult other_new">
              <div className="row">
                <div className="col-lg-12">
                  <div className="create_new">
                    <h2>Edit consultation form</h2>

                    <ol>
                      <li>Title & Description</li>
                      <li className="active-tab">Questions</li>
                      <li>Options</li>
                      <li>Review</li>
                    </ol>
                  </div>
                  <div className="create_form">
                    <Formik
                      initialValues={initialValues}
                      enableReinitialize={true}
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
                        console.log(values, "ddddddddddddddddd");
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
                            render={({ push, remove, move, insert }) => (
                              <div className="pt-2">
                                {values.formData.map(
                                  (question, questionIndex) => (
                                    <div
                                      className="consultaing_detailsform"
                                      key={questionIndex}
                                    >
                                      <button
                                        className="shifting-btns"
                                        type="button"
                                        onClick={() =>
                                          move(questionIndex, questionIndex + 1)
                                        } // Move up
                                        disabled={
                                          questionIndex ===
                                          values.formData.length - 1
                                        } // Disable if already at the beginning
                                      >
                                        <img
                                          src={
                                            require("../assets/images/arrowup.svg")
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
                                          style={{
                                            transform: "rotatez(180deg",
                                          }}
                                          src={
                                            require("../assets/images/arrowup.svg")
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
                                                [
                                                  { imagename1: "" },
                                                  { imagename2: "" },
                                                ]
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
                                          <option value="0">
                                            Single Choice
                                          </option>
                                          <option value="1">
                                            Multiple choice
                                          </option>
                                          <option value="2">Text Field</option>
                                          <option value="3">Image</option>
                                          <option value="4">
                                            Client Image Upload
                                          </option>
                                          <option value="5">Declaration</option>
                                          <option value="6">Signature</option>
                                        </select>
                                      </div>
                                      <div className="form_field">
                                        <div className="f_field">
                                          <label
                                            for="exampleFormControlInput1"
                                            className="form-label"
                                          >
                                            Question Title
                                          </label>

                                          {/* {question?.optiontype == 5 ? (
                                  <textarea
                                    rows={3}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder={question?.question}
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
                                    // placeholder={question?.question}
                                    placeholder="Enter your question here"
                                    value={question.question}
                                    onChange={(e) =>
                                      setFieldValue(
                                        `formData.${questionIndex}.question`,
                                        e.target.value
                                      )
                                    }
                                  />
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

                                              {/* <button
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
                                        </div>

                                        <div className="error">
                                          <ErrorMessage
                                            name={`formData.${questionIndex}.question`}
                                          />
                                        </div>
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
                                                      <div className="col-lg-6">
                                                        <div className="form-check check-plus-input">
                                                          {question.optiontype ==
                                                          3 ? (
                                                            <>
                                                              <div className="manage_image_upload">
                                                                <p>
                                                                  Upload Image
                                                                </p>
                                                                <img
                                                                  src={
                                                                    option[
                                                                      `imagename${
                                                                        optionIndex +
                                                                        1
                                                                      }`
                                                                    ] != ""
                                                                      ? process
                                                                          .env
                                                                          .REACT_APP_IMAGE_URL +
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
                                                                  alt={
                                                                    option.imageurl1
                                                                  }
                                                                />
                                                                <input
                                                                  className="form-control"
                                                                  type="file"
                                                                  onChange={(
                                                                    e
                                                                  ) => {
                                                                    let formDatavalue =
                                                                      new FormData();
                                                                    formDatavalue.append(
                                                                      "imagename1",
                                                                      e.target
                                                                        .files[0]
                                                                    );

                                                                    dispatch(
                                                                      imagesaveAction(
                                                                        formDatavalue
                                                                      )
                                                                    ).then(
                                                                      function (
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
                                                                      }
                                                                    );

                                                                    setFieldValue(
                                                                      `formData.${questionIndex}.options.${optionIndex}.imageurl${
                                                                        optionIndex +
                                                                        1
                                                                      }`,
                                                                      URL.createObjectURL(
                                                                        e.target
                                                                          .files[0]
                                                                      )
                                                                    );
                                                                  }}
                                                                />
                                                                <div className="error">
                                                                  <ErrorMessage
                                                                    name={`formData.${questionIndex}.options.${optionIndex}.imagename${
                                                                      optionIndex +
                                                                      1
                                                                    }`}
                                                                  />
                                                                </div>
                                                              </div>
                                                            </>
                                                          ) : (
                                                            (question.optiontype ==
                                                              0 ||
                                                              question.optiontype ==
                                                                1) && (
                                                              <>
                                                                <input
                                                                  className="form-check-input form-radio "
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
                                                                  onChange={(
                                                                    e
                                                                  ) =>
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
                                                                  onChange={(
                                                                    e
                                                                  ) => {
                                                                    setFieldValue(
                                                                      `formData.${questionIndex}.options.${optionIndex}.optiontitle`,
                                                                      e.target
                                                                        .value
                                                                    );
                                                                  }}
                                                                  spellcheck="true"
                                                                  rows={
                                                                    option
                                                                      .optiontitle
                                                                      ?.length ==
                                                                    0
                                                                      ? 1
                                                                      : Math.ceil(
                                                                          option
                                                                            .optiontitle
                                                                            .length /
                                                                            40
                                                                        )
                                                                  }
                                                                />
                                                                <br />
                                                              </>
                                                            )
                                                          )}
                                                        </div>
                                                      </div>

                                                      {(question.optiontype ==
                                                        1 ||
                                                        question.optiontype ==
                                                          0) && (
                                                        <div className="col-lg-4  d-flex">
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
                                                            <option
                                                              value="0"
                                                              selected
                                                            >
                                                              Response Option
                                                            </option>
                                                            <option value="1">
                                                              Proceed
                                                            </option>
                                                            <option value="2">
                                                              Cannot Proceed
                                                            </option>
                                                            <option value="3">
                                                              Proceed with
                                                              Message
                                                            </option>
                                                          </select>
                                                          {(question.optiontype ==
                                                            "0" ||
                                                            question.optiontype ==
                                                              "1") && (
                                                            <span
                                                              className="remove-btn"
                                                              onClick={() =>
                                                                removeOption(
                                                                  optionIndex
                                                                )
                                                              }
                                                            >
                                                              <img
                                                                src={
                                                                  require("../assets/images/close.svg")
                                                                    .default
                                                                }
                                                              />
                                                            </span>
                                                          )}
                                                        </div>
                                                      )}

                                                      {(option.formOptiontitle ==
                                                        "2" ||
                                                        option.formOptiontitle ==
                                                          "3") &&
                                                        (option.formOptiontitle ==
                                                          "2" ||
                                                          option.formOptiontitle ==
                                                            "3") && (
                                                          <div className="col-lg-12 mt-1">
                                                            <div className="row">
                                                              <div className="col-lg-11">
                                                                <input
                                                                  className="form-control"
                                                                  type="text"
                                                                  placeholder="Add Custom Message (Optional)"
                                                                  value={
                                                                    option.custommessage ||
                                                                    ""
                                                                  }
                                                                  onChange={(
                                                                    e
                                                                  ) =>
                                                                    setFieldValue(
                                                                      `formData.${questionIndex}.options.${optionIndex}.custommessage`,
                                                                      e.target
                                                                        .value
                                                                    )
                                                                  }
                                                                />
                                                              </div>
                                                              <div className="col-lg-1">
                                                                <button
                                                                  onClick={() =>
                                                                    handleShow(
                                                                      questionIndex,
                                                                      optionIndex
                                                                    )
                                                                  }
                                                                  type="button"
                                                                  className="edit-btn"
                                                                >
                                                                  <svg
                                                                    width="30"
                                                                    height="30"
                                                                    viewBox="0 0 30 30"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                  >
                                                                    <path
                                                                      d="M5.88648 24.1135L6.36539 23.6346L5.88649 24.1135C6.17558 24.4026 6.53209 24.401 6.7128 24.3834C6.87275 24.3677 7.0576 24.3213 7.2084 24.2835C7.21923 24.2808 7.22989 24.2781 7.24035 24.2755L10.8945 23.362C10.9117 23.3577 10.9291 23.3534 10.9465 23.349C11.1606 23.296 11.3908 23.2389 11.601 23.1199C11.8112 23.0009 11.9785 22.8329 12.1342 22.6766C12.1469 22.6639 12.1595 22.6512 12.172 22.6386L21.6161 13.1945L21.6161 13.1945L21.6455 13.1652L21.6478 13.1629C21.9538 12.8569 22.2345 12.5763 22.4321 12.3174C22.6496 12.0322 22.8358 11.687 22.8358 11.25C22.8358 10.813 22.6496 10.4678 22.4321 10.1826C22.2345 9.92368 21.9538 9.64311 21.6478 9.3371L21.6161 9.30546L20.6945 8.38388L20.6629 8.35223C20.3569 8.04615 20.0763 7.76552 19.8174 7.56795C19.5322 7.35038 19.187 7.16421 18.75 7.16421C18.313 7.16421 17.9678 7.35038 17.6826 7.56795C17.4237 7.76552 17.1431 8.04615 16.8371 8.35223L16.8055 8.38388L7.36138 17.828C7.34882 17.8405 7.33615 17.8531 7.3234 17.8658C7.16714 18.0215 6.99913 18.1888 6.88011 18.399L7.51314 18.7574L6.88011 18.399C6.7611 18.6092 6.70404 18.8394 6.65098 19.0535C6.64665 19.0709 6.64234 19.0883 6.63804 19.1055L5.72451 22.7596C5.72189 22.7701 5.71921 22.7808 5.71649 22.7916C5.67866 22.9424 5.63229 23.1273 5.61665 23.2872C5.59897 23.4679 5.59739 23.8244 5.88648 24.1135Z"
                                                                      stroke="#9e97c9"
                                                                      stroke-width="1.5"
                                                                    />
                                                                    <path
                                                                      d="M15.625 9.375L19.375 6.875L23.125 10.625L20.625 14.375L15.625 9.375Z"
                                                                      fill="#9e97c9"
                                                                    />
                                                                  </svg>
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        )}
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
                                                      require("../assets/images/add.svg")
                                                        .default
                                                    }
                                                    alt="plus"
                                                  />
                                                  <label
                                                    className="form-check-label"
                                                    for="exampleRadios"
                                                  >
                                                    Add Another
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
                                                      values?.formData[
                                                        questionIndex
                                                      ]
                                                    );
                                                  }}
                                                >
                                                  <img
                                                    src={
                                                      require("../assets/images/copy-icon.svg")
                                                        .default
                                                    }
                                                    alt="copy"
                                                  />{" "}
                                                  <p className="mb-0">
                                                    Duplicate
                                                  </p>
                                                </button>

                                                {/* {values.formData.length > 1 && (
                                                  <button
                                                    onClick={() =>
                                                      remove(questionIndex)
                                                    }
                                            
                                                  >
                                                    <img
                                                      src={
                                                        require("../assets/images/delete.svg")
                                                          .default
                                                      }
                                                      alt="trash"
                                                    />
                                            
                                                  </button>
                                                )} */}

                                                {values.formData.length > 1 && (
                                                  <button
                                                    type="button"
                                                    className="trash-btn bin"
                                                    // onClick={() => {
                                                    //    dispatch(deleteConsultaionQuestion({id: values.formData[questionIndex]?._id,consultationId : idconsultaion})).then((res) => {
                                                    //      dispatch(getdetailsConsultationAction())
                                                    //    })
                                         
                                                    // }}

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
                                                        require("../assets/images/delete.svg")
                                                          .default
                                                      }
                                                      alt="trash"
                                                    />
                                                    <p className="mb-0">
                                                      Remove Question
                                                    </p>
                                                  </button>
                                                )}

                                                {/* {questionIndex ==
                                                  values.formData.length -
                                                    1 && (
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
                                                            formOptiontitle:
                                                              "0",
                                                            custommessage: "",
                                                            adminimage: [
                                                              {
                                                                imagename: "",
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            optiontitle: "",
                                                            formOptiontitle:
                                                              "0",
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
                                                      src={
                                                        require("../assets/images/add.svg")
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
                                                    {/* <button
      type="button"
      onClick={() => remove(questionIndex)}
      className="btn cre_new mt-2"
    >
      Remove Question
    </button> */}

                                                    <button
                                                      type="button"
                                                      // className="btn cre_new ms-1 mt-2"
                                                      onClick={() => {
                                                        if (
                                                          values.formData
                                                            .length < 20
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
                                                        src={
                                                          require("../assets/images/add.svg")
                                                            .default
                                                        }
                                                        alt="plus"
                                                      />
                                                    </button>
                                                  </>
                                                ) : (
                                                  questionIndex ==
                                                    values.formData.length -
                                                      1 && (
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
                                                              formOptiontitle:
                                                                "",
                                                              custommessage: "",
                                                              adminimage: [
                                                                {
                                                                  imagename: "",
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              optiontitle: "",
                                                              formOptiontitle:
                                                                "",
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
                                                        src={
                                                          require("../assets/images/add.svg")
                                                            .default
                                                        }
                                                        alt="plus"
                                                      />
                                                    </button>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      />
                                    </div>
                                  )
                                )}
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
                                      <button
                                        className="cancel"
                                        onClick={handleClose}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            ))
                          )}
                          <div className="create_tab fixed_btn">
                            {/* <!-- start page title --> */}

                            <div className="row align-items-center">
                              <div className="col-12 d-flex justify-content-between">
                                <span>
                                  <button
                                    onClick={() => {
                                      prevStep();
                                    }}
                                    className="btn cre_new"
                                  >
                                    Back
                                  </button>
                                </span>
                                <span>
                                  <button type="submit" className="btn cre_new">
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
            </div>
          </div>

          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
