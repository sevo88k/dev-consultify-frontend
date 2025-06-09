import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addConsultationAction } from "../Redux/Actions/user/salon";

export default function ConsultationForm3({ formData, prevStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitform = () => {
    console.log(formData, "formData");
    dispatch(addConsultationAction(formData)).then(function () {
      navigate("/consultation");
    });
  };
  return (
    <div className="consulation_form three">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
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

        {formData.formData.map(function (question, index) {
          return (
            <div className="form_card" key={index}>
              <h2>{question.optiontype == 5 ? "" : question.question}</h2>

              {(() => {
                if (question.optiontype == 4) {
                  return (
                    <div className="create_new_form">
                      <div className="row">
                        <div className="col-6">
                          <div className="upload_img_div">Upload image</div>
                        </div>
                        <div className="col-6">
                          <div className="upload_img_div">Upload image</div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (question.optiontype == 5) {
                  return (
                    <div className="declaration">
                      <label>Declaration</label>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {question.question}
                      </p>
                      <div className="d-flex justify-content-end">
                        <label>{question.confirmation || "I Confirm"} </label>
                        <input type="checkbox" />
                      </div>
                    </div>
                  );
                } else if (question.optiontype == 6) {
                  return (
                    <div className="sign_box">
                      <p>{question.question}</p>
                    </div>
                  );
                }
              })()}

              {question.optiontype == 2 ? (
                <div className="options_form">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter your answer here"
                  ></textarea>
                </div>
              ) : (
                (question.optiontype == 0 ||
                  question.optiontype == 1 ||
                  question.optiontype == 3) && (
                  <div className="options_form">
                    <div
                      className={
                        question.optiontype == 3
                          ? "d-flex justify-content-between  create_new_form"
                          : " "
                      }
                    >
                      {question?.options?.map(function (option, optionindex) {
                        return (
                          <div
                            className="form-check"
                            key={optionindex}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={
                              option?.formOptiontitle == 1
                                ? "Proceed"
                                : option?.formOptiontitle == 2
                                ? "Cannot Proceed"
                                : option?.formOptiontitle == 3 &&
                                  "Proceed With Message"
                            }
                          >
                            {(() => {
                              if (question.optiontype == 3) {
                                return (
                                  <img
                                    src={
                                      option[`imagename${optionindex + 1}`] !=
                                      ""
                                        ? process.env.REACT_APP_HOST_NAME +
                                          "/Adminquestionimage" +
                                          option[`imagename${optionindex + 1}`]
                                        : option[`imageurl${optionindex + 1}`]
                                    }
                                    alt={option.imageurl1}
                                    className="option_image"
                                  />
                                );
                              } else {
                                return (
                                  <>
                                    <input
                                      className="form-check-input"
                                      type={
                                        question.optiontype === "0"
                                          ? "radio"
                                          : "checkbox"
                                      }
                                      name="flexRadioDefault"
                                      id="flexRadioDefault1"
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
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>

      <div className="fixed_sec">
        <div className="container">
          <div className="fixed_inner">
            <button className="lg-btn back w-set" onClick={prevStep}>
              Back
            </button>
            <button className="  lg-btn w-set" onClick={submitform}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
