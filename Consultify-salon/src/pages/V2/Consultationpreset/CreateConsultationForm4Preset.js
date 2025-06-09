import React, { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addConsultationAction } from "../../../Redux/Actions/user/salon";
import {
  SavepostcareAction,
  getCategory,
  getpostcarelistAction,
} from "../../../Redux/Actions/user/salon";
import { Col, Modal, Row } from "react-bootstrap";
export default function CreateConsultationForm4Preset({ formData, prevStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [precare, setPrecare] = useState({});

  const [draftval, setDraftval] = useState(1);
  const submitform = () => {
    console.log(formData, "formData");
    dispatch(addConsultationAction(formData)).then(function () {
      navigate("/consultation-presents");
    });
  };

  const updatedarftvalue = useCallback(
    (e) => {
      setDraftval(e.target.value);
      formData.draft = e.target.value;
    },
    [draftval]
  );

  let postcarelistData = useSelector((state) => state?.myaccount?.postcarelist);
  const handleClose = () => setShow(false);
  postcarelistData = postcarelistData.filter(
    (object) =>
      object.status === 1 &&
      formData?.pre_care_setarray?.some(
        (item1) => item1.pre_care_id === object._id
      )
  );

  postcarelistData.filter((formobject) => {
    return (
      formobject?.salon_id == localStorage.getItem("userId") ||
      formobject.admin_id?._id != undefined
    );
  });

  console.log(formData);

  return (
    <div className="consulation_form one">
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
          <NavLink className="exit_btn" to="/consultation-presents">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="consultationform_tab  ">
              <h2 className="form_cmn_heading">
                Create a new consultation form
              </h2>
              <div className="steps two w-75">
                <Nav.Link href="#">1. Title & Description</Nav.Link>
                <Nav.Link href="#">2. Questions</Nav.Link>
                <Nav.Link href="#">3. Options</Nav.Link>
                <Nav.Link href="#">4. Review</Nav.Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-end">
            <div className="draft-set">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={draftval == 0 ? 1 : 0}
                  id="flexCheckDefault"
                  onChange={updatedarftvalue}
                  checked={draftval == 0}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Mark As Draft
                </label>
              </div>
            </div>
          </div>
        </div>
        {formData?.formData?.map(function (question, index) {
          return (
            <>
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
                                            option[
                                              `imagename${optionindex + 1}`
                                            ]
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
            </>
          );
        })}

        {postcarelistData.map((object, i) => (
          <section className="search-list-part presents mt-4" key={i}>
            <div className="search-list-box">
              <Row className="d-flex align-items-center">
                <Col xs={12} md={8} sm={8}>
                  <div className="search-content-left">
                    <h2>{object?.treatmentname}</h2>
                    <div className="sub-heading">
                      Pre & Post Treatment Care Advice
                    </div>
                    <p>{object?.description}</p>
                  </div>
                </Col>
                <Col
                  xs={8}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-center"
                >
                  <Link
                    to=""
                    className="consult-view-btn"
                    onClick={() => {
                      setPrecare(object);
                      setShow(true);
                    }}
                  >
                    View
                  </Link>
                </Col>
              </Row>
            </div>
          </section>
        ))}
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
}
