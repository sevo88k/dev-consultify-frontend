import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getpostcarelistAdminAction,
  submitconsultationform,
} from "../Redux/Action/ManageconsultationAction";
import { Col, Row } from "react-bootstrap";

export default function EditCreateConsultationNewForm({ formData, prevStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [precare, setPrecare] = useState({});
  const [draftval, setDraftval] = useState(1);

  const submitform = () => {
    dispatch(submitconsultationform(formData)).then(function () {
      navigate("/Manage-consultations");
    });
  };
  useEffect(() => {
    dispatch(getpostcarelistAdminAction({ search: search }));
  }, [search]);

  var postcarelistData = useSelector(
    (state) => state.ManageConsultation.pre_care_consultation
  );
  postcarelistData = postcarelistData.filter(
    (object) =>
      object.status === 1 &&
      formData?.pre_care_setarray?.some((item1) =>
        item1.pre_care_id?._id == undefined
          ? item1.pre_care_id
          : item1.pre_care_id?._id === object._id
      )
  );

  console.log(
    postcarelistData,
    formData?.pre_care_setarray,
    "postcarelistDatapostcarelistDatapostcarelistData"
  );

  const updatedarftvalue = useCallback(
    (e) => {
      setDraftval(e.target.value);
      formData.draft = e.target.value;
    },
    [draftval]
  );

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
                <div className="col-6 d-flex align-items-center">
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
            <div className="consultation_form">
              <div className="row mt-4 pt-4">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-8">
                  <div className="create_new">
                    <h2>Edit consultation form</h2>

                    <ol>
                      <li>Title & Description</li>
                      <li>Questions</li>
                      <li>Options</li>
                      <li className="active-tab">Review</li>
                    </ol>
                  </div>
                  </div>
                  <div className="col-lg-4 d-flex align-items-center justify-content-end">
                    <div className="draft-set">
                      {/* <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value={draftval == 0 ? 1 : 0}
                          id="flexCheckDefault"
                          onChange={updatedarftvalue}
                          checked={draftval == 0}
                        />
                        <label className="form-check-label ms-2" for="flexCheckDefault">
                          Mark As Draft
                        </label>
                      </div> */}
                    </div>
                  </div>
                  </div>
                  {formData.formData.map(function (question, index) {
                    console.log(question, "werdsfddddddddddd")
                    return (
                      <div className="form_card" key={index}>
                        <h2>
                          {question.optiontype == 5 ? "" : question.question}
                        </h2>

                        {(() => {
                          if (question.optiontype == 4) {
                            return (
                              <div className="create_new_form">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="upload_img_div">
                                      Upload image
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="upload_img_div">
                                      Upload image
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          } else if (question.optiontype == "5") {
                            return (
                              <div className="declaration">
                                <h2>Declaration</h2>
                                <p>{question.question}</p>
                                <div className="d-flex justify-content-end">
                                  <label>I Confirm</label>
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
                                {question?.options?.map(function (
                                  option,
                                  optionindex
                                ) {
                                  return (
                                    <div
                                      className="form-check"
                                      key={optionindex}
                                    >
                                      {(() => {
                                        if (question.optiontype == 3) {
                                          return (
                                            <img
                                              src={
                                                option[
                                                  `imagename${optionindex + 1}`
                                                ] != ""
                                                  ? process.env
                                                      .REACT_APP_IMAGE_URL +
                                                    "/Adminquestionimage" +
                                                    option[
                                                      `imagename${
                                                        optionindex + 1
                                                      }`
                                                    ]
                                                  : option[
                                                      `imageurl${
                                                        optionindex + 1
                                                      }`
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
              </div>
            </div>
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-12 d-flex justify-content-between">
                  <span>
                    <button onClick={prevStep} className="btn cre_new">
                      Back
                    </button>
                  </span>
                  <span>
                    <button className="btn cre_new" onClick={submitform}>
                      Submit
                    </button>
                  </span>
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
