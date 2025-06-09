import React, { useEffect, useState } from "react";
import { Form, NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Action/ContaindicationAction";
import { Button, Col, InputGroup, Modal, Row } from "react-bootstrap";

export default function AddConsultationOptions({
  formData,
  setFormData,
  nextStep,
}) {
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
            {" "}
            <div className="new_consult">
              <div className="row">
                <div className="col-lg-12">
                  <div className="create_new">
                    <h2>Edit consultation form</h2>

                    <ol>
                      <li>Title & Description</li>
                      <li>Questions</li>
                      <li className="active-tab">Options</li>
                      <li>Review</li>
                    </ol>
                  </div>
                </div>
                <Row className="mt-4 pt-4">
                  <Col lg={5}>
                    <div className="search-input">
                      <input
                        type="search"
                        className="form-control group-box-search"
                        placeholder="Search...."

                

                      />
                      <img
                        src={require("../assets/images/search.svg").default}
                      />
                    </div>
                  </Col>
                  <Col
                    lg={7}
                    className="d-flex align-items-end justify-content-end"
                  >
                    <div className="d-flex justify-content-end  add-tick">
                      <p className="mb-0">Tick box to add</p>
                    </div>
                  </Col>
                </Row>
                <div className="col-lg-12">
                  <section className="search-list-part presents">
                    <div className="search-list-box">
                      <Row className="d-flex align-items-center">
                        <Col xs={12} md={9} sm={9}>
                          <div className="search-content-left">
                            <h2>Titile</h2>
                            <div className="sub-heading">
                              Pre & Post Treatment Care Advice
                            </div>
                            <p>Description</p>
                          </div>
                        </Col>
                        <Col
                          xs={12}
                          md={2}
                          sm={2}
                          className="d-flex justify-content-center"
                        >
                          <button type="button" onClick={handleShow}>
                            View
                          </button>
                        </Col>
                        <Col
                          xs={12}
                          md={1}
                          sm={1}
                          className="d-flex justify-content-center"
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="treat-box h-100">
            <h2 className="text-center">adadd</h2>
            <Row>
              <Col lg={6}>
                <div className="left-instruct">
                  <h3>Pre Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>adad</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="right-instruct">
                  <h3>Post Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>adad</p>
                  </div>
                </div>
              </Col>

              <Col lg={12}>
                <div className="right-instruct text-center">
                  <h3>Notes</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>addda</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer className="precare-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
