import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addConsultationAction } from "../Redux/Actions/user/salon";
import { Modal } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
export default function EditConsultationForm3({ formData, prevStep, view }) {
  const dispatch = useDispatch();
  const componentRef = useRef();
  const navigate = useNavigate();
  const submitform = () => {
    dispatch(addConsultationAction(formData)).then(function () {
      navigate("/consultation");
    });
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  if (view == "only_view") {
    formData = {
      formData: formData?.question,
    };
  }

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [fileTwo, setFileTwo] = useState();
  function handleChangeTwo(e) {
    console.log(e.target.files);
    setFileTwo(URL.createObjectURL(e.target.files[0]));
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="consulation_form three">
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
      <div className="container" ref={componentRef}>
        <div className="consultationform_tab d-flex">
          <h2 className="form_cmn_heading">Consultation Title , Description</h2>
          <div className="steps">
            {view != "only_view" && (
              <>
                <Nav.Link href="#">1. Title & Description</Nav.Link>
                <Nav.Link href="#">2. Questions</Nav.Link>
                <Nav.Link href="#">3. Review</Nav.Link>
              </>
            )}
          </div>
          {view == "only_view" && (
            <div className="button-link ms-2">
              <Nav.Link
                onClick={handlePrint}
                href="#"
                className="white-box-link"
              >
                Print
              </Nav.Link>
            </div>
          )}
        </div>

        {formData?.formData?.map(function (question, index) {
          return (
            <div
              className={`form_card ${view == "only_view" && "pointer-nones"}`}
              key={index}
            >
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
                      <h2>Declaration</h2>
                      <p>{question.question}</p>
                      <div className="d-flex justify-content-end">
                        <label>{question?.confirmation || "I Confirm"}</label>
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
                          <div className="form-check" key={optionindex}>
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
                                        question.optiontype === 0
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
            {view != "only_view" && (
              <>
                <button className="lg-btn back w-set" onClick={prevStep}>
                  Back
                </button>
                <button className="  lg-btn w-set" onClick={submitform}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
        <Modal.Body>
          <div className="permission-popup text-center">
            <p> Are You Sure to Delete This Note</p>
          </div>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-center"
          style={{ border: "0" }}
        >
          <div className="submit-btn schedule p-0">
            <button type="submit" class="btn mb-3" onClick={handleClose}>
              Delete
            </button>
          </div>
          <div className="cancel-btn" onClick={handleClose}>
            <button type="submit" class="btn mb-3">
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
