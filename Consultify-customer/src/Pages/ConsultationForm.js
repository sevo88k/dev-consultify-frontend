import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Decryptedid, Encryptedid } from "../utils/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Signaturecompo from "../components/Signaturecompo";
import {
  consultationformdetails,
  imagesaveAction,
  updateCustomerConsultationForm,
} from "../Redux/Action/CustomerRestAction";
import { useReactToPrint } from "react-to-print";
import { consultationFormCompleteCheck } from "../Redux/Action/CustomerAuthAction";
import Cookies from "js-cookie";

const ConsultationForm = () => {
  const { id, formId } = useParams();
  const componentRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToken = window.localStorage.getItem("accessToken");

  // var idvalue = atob(id);
  // var formIdValue = atob(formId);
  const [saveSignature, setSaveSignature] = useState();
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [loading, setLoading] = useState(true);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const consultationquestion = useSelector(
    (state) => state.customer?.consultationquestion
  );

  useEffect(() => {
    console.log(id, "idvalue");
    if (id) {
      dispatch(consultationformdetails(id));
    }
  }, [id]);

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
      // if (
      //   !values[`signature${i + 1}`] &&
      //   consultationquestion?.question[i]?.required &&
      //   consultationquestion?.question[i]?.optiontype == 6
      // ) {
      //   toast.error("Please save your signature first to proceed further.");
      //   errors[`signature${i + 1}`] = "This field is required";
      // }

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

  //   else if (consultationquestion?.question[i]?.optiontype == 3) {
  //     console.log(consultationquestion?.question[i]?.options[0]?.img1, "values------3333333333333333333");
  //   initialValues[`image${i + 1}`] = {
  //     img1: consultationquestion?.question[i]?.options[0]?.imagename1 || "",
  //     img2: consultationquestion?.question[i]?.options[1]?.imagename2 || "",
  //   };
  // }

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      const existSignature = consultationquestion?.question?.find(
        (item) => item.optiontype == "6"
      );
      console.log(existSignature, saveSignature);
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
        // var isExist = arr?.find(
        //   (data) => data?.custommsg != "" && data?.custommsg != undefined
        // );

        var isExist = arr?.find((data) => data?.formProceedStatus == 2);

        if (isExist) break;
      }

      if (isExist) {
        toast.error("The one user has filled when creating the question.");
      }

      if (!isExist) {
        dispatch(
          updateCustomerConsultationForm({
            id: formId,
            status: 1,
            answers: values,
          })
        ).then((data) => {
          if (data?.payload?.status == 200) {
            // formik.resetForm();
            toast.success(data?.payload?.message);
            // setShowSubmitButton(false);
            // window.location.reload()
            navigate("/completed");
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
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   const currentPath = window.location.pathname;

  //   if (!token) {
  //     localStorage.setItem('redirectPath', currentPath);
  //     // navigate('/');
  //   }
  // }, []);

  //  useEffect(() => {
  //   const currentPath = window.location.pathname;

  //   if (id) {
  //     dispatch(consultationFormCompleteCheck({ id: formId })).then(
  //       (response) => {
  //         console.log(response, "werewrwerwerwer");
  //         if (
  //           response?.payload?.status === 200 &&
  //           response?.payload?.data === 0
  //         ) {
  //         } else if (
  //           response?.payload?.status === 200 &&
  //           response?.payload?.data === 1
  //         ) {
  //           // toast.success("Form has been Completed.");
  //           // navigate("/");
  //           navigate(`{/view_consultation_form/${Encryptedid(id)}`)
  //         } else {
  //           Cookies.set("redirectPath", currentPath);
  //           toast.success(response?.payload?.message);
  //           //  navigate("/")
  //         }
  //       }
  //     );
  //   }
  // }, []);

  const hasShownToast = useRef(false);

  // useEffect(() => {
  //   const currentPath = window.location.pathname;

  //   if (id) {
  //     dispatch(consultationFormCompleteCheck({ id: formId })).then((response) => {
  //       if (
  //         response?.payload?.status === 200 &&
  //         response?.payload?.data === 0
  //       ) {
  //         // Do nothing
  //       } else if (
  //         response?.payload?.status === 200 &&
  //         response?.payload?.data === 1
  //       ) {
  //         if (!hasShownToast.current) {
  //           toast.success("Form has been Completed.");
  //           hasShownToast.current = true;
  //           navigate("/");
  //         }
  //       } else {
  //         if (!hasShownToast.current) {
  //           Cookies.set("redirectPath", currentPath);
  //           toast.success(response?.payload?.message);
  //           hasShownToast.current = true;
  //         }
  //       }
  //     });
  //   }
  // }, [dispatch, id, formId, navigate]);

  useEffect(() => {
    if (id) {
      dispatch(consultationFormCompleteCheck({ id: formId })).then(
        (response) => {
          if (
            response?.payload?.status === 200 &&
            response?.payload?.data === 0
          ) {
            // Do nothing
          } else if (
            response?.payload?.status === 200 &&
            response?.payload?.data === 1
          ) {
            if (!hasShownToast.current) {
              // navigate(`/view_consultation_form/${Encryptedid(formId)}`);
              navigate(`/view-consultation/${Encryptedid(formId)}`);
              // toast.success("Form has been Completed.");
              // hasShownToast.current = true;
              // navigate("/client_view")
            }
          } else {
            if (!hasShownToast.current) {
              // toast.success(response?.payload?.message);
              hasShownToast.current = true;
            }
          }
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, [dispatch, id, formId]);

  return (
    <div className="consulting_form">
      {loading && <h2></h2>}
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
          {userToken ? (
            <>
              {" "}
              <Navbar.Brand to="/client_view">
                <img
                  className="main-logo"
                  src={require("../assets/img/newconsultlogo.webp")}
                  alt="logo"
                />
              </Navbar.Brand>{" "}
            </>
          ) : (
            <Navbar.Brand>
              <img
                className="main-logo"
                src={require("../assets/img/newconsultlogo.webp")}
                alt="logo"
              />
            </Navbar.Brand>
          )}
        </Container>
      </Navbar>
      {/* Header End */}

      {/* search header */}
      <section ref={componentRef} className="search-header">
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
                <h2>{consultationquestion?.formcreatedby?.salonname}</h2>
                <h3 style={{ textWrap: "pre-line" }}>
                  {consultationquestion?.form_title}
                </h3>

                <p className="mt-3 mb-0" style={{ textWrap: "pre-line" }}>
                  {consultationquestion?.form_description}
                </p>

                <p>Started by: {localStorage.getItem("name")}</p>
              </div>
            </Col>
            <Col xs={12} md={2} className="d-flex justify-content-end">
              <div className="button-link">
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

          {consultationquestion ? (
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
                              <div className="create_new_form ">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="upload_img_div">
                                      <div className="upload-inner">
                                        {formik.values[`clientImage${i + 1}`]
                                          ?.img1 ? (
                                          <img
                                            src={
                                              process.env.REACT_APP_IMAGE_URL +
                                              "/Adminquestionimage/" +
                                              formik.values[
                                                `clientImage${i + 1}`
                                              ]?.img1
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
                                  </div>
                                  <div className="col-6">
                                    <div className="upload_img_div">
                                      <div className="upload-inner">
                                        {formik.values[`clientImage${i + 1}`]
                                          ?.img2 ? (
                                          <img
                                            src={
                                              process.env.REACT_APP_IMAGE_URL +
                                              "/Adminquestionimage" +
                                              formik.values[
                                                `clientImage${i + 1}`
                                              ]?.img2
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
                                <p>{question_object.question}</p>
                                <div className="d-flex justify-content-end">
                                  <label>I Confirm</label>
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
                                  <div className="form-check" key={optionindex}>
                                    {(() => {
                                      if (question_object.optiontype == 3) {
                                        return (
                                          option[
                                            `imagename${optionindex + 1}`
                                          ] && (
                                            <img
                                              src={
                                                process.env
                                                  .REACT_APP_IMAGE_URL +
                                                "/Adminquestionimage" +
                                                option[
                                                  `imagename${optionindex + 1}`
                                                ]
                                              }
                                              alt={option.imageurl1}
                                              className="option_image"
                                            />
                                          )
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
                                          </>
                                        );
                                      }
                                    })()}
                                  </div>
                                );
                              })}

                              {question_object.optiontype == 0 &&
                              formik.submitCount > 0
                                ? formik.errors[`radioQues${i + 1}`] && (
                                    <div className="error_valid">
                                      {formik.errors[`radioQues${i + 1}`]}
                                    </div>
                                  )
                                : formik.errors[`checkBoxQues${i + 1}`] && (
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

                <div className="col-lg-12">
                  <div className="submit-btn d-flex justify-content-end">
                    {showSubmitButton && (
                      <div className="submit-btn d-flex justify-content-end">
                        <button type="submit" className="lg-btn">
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <>
              <div className="loader-parent">
                <div class="loader"></div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* search list */}
    </div>
  );
};

export default ConsultationForm;
