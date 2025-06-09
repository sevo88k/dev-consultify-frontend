import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function CreateConsultationNewTwo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <img src={require("../assets/images/Component.png")} />
                  <h4 className="mb-sm-0 font-size-28">New Consultation</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>

          <div className="container-fluid">
            <div className="new_consult">
              <div className="row">
                <div className="col-lg-12">
                  <div className="create_new">
                    <h2>Create a new consultation form</h2>

                    <ol>
                      <li>Title & Description</li>
                      <li className="active-tab">Questions</li>
                      <li>Review</li>
                    </ol>
                  </div>
                  <div className="create_form">
                    <form className="consultaing_detailsform">
                      <div className="form_Questions">
                        <div className="top_form">
                          <h2>Question 1</h2>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Single Choice</option>
                            <option value="1">Multiple choice</option>
                            <option value="2">Text Field</option>
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
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Enter your question here"
                            />
                          </div>
                          <div className="options">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios"
                                    value="option"
                                  />
                                  <input
                                    type="text"
                                    className="form-control radio_set_c"
                                    id="exampleFormControlInput2"
                                    placeholder="Type Here"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Response Option</option>
                                  <option value="1">No Response</option>
                                  <option value="2">Cannot Proceed</option>
                                  <option value="3">
                                    Proceed with Message
                                  </option>
                                </select>
                              </div>
                              <div className="col-lg-4">
                                <div
                                  onClick={handleShow}
                                  className="custom_msg"
                                >
                                  {" "}
                                  Add a Custom Message
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="options">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios"
                                    value="option"
                                  />
                                  <input
                                    type="text"
                                    className="form-control radio_set_c"
                                    id="exampleFormControlInput2"
                                    placeholder="Type Here"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Response Option</option>
                                  <option value="1">No Response</option>
                                  <option value="2">Cannot Proceed</option>
                                  <option value="3">
                                    Proceed with Message
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-check add">
                            <img
                              className="add_other"
                              src={require("../assets/images/add.svg").default}
                            />
                            <label
                              className="form-check-label"
                              for="exampleRadios"
                            >
                              Add Another
                            </label>
                          </div>
                          <div className="form_bottom_main">
                            <div className="add_bottom_tab">
                              <div className="form-check form-switch">
                                <label
                                  className="form-check-label"
                                  for="flexSwitchCheckDefault"
                                >
                                  Required
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                              <button>
                                <img
                                  src={
                                    require("../assets/images/delete.svg")
                                      .default
                                  }
                                />
                              </button>
                              <button>
                                <img
                                  src={
                                    require("../assets/images/add.svg").default
                                  }
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="create_tab fixed_btn">
            {/* <!-- start page title --> */}

            <div className="row align-items-center">
              <div className="col-12 d-flex justify-content-between">
                <span>
                  <NavLink to="/CreateConsultationNewOne">
                    {" "}
                    <button className="btn cre_new">Back</button>
                  </NavLink>
                </span>
                <span>
                  <NavLink to="/CreateConsulltationNewform">
                    {" "}
                    <button className="btn cre_new">Next</button>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="main_pop">
              <div className="my_new_pop">
                <h2>Custom Message</h2>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput"
                  placeholder="Type here"
                ></input>
                <div className="pop_btns">
                  <button className="done_btn">Done</button>
                  <button className="cancel">Cancel</button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
