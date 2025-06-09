import React, { useEffect, useState } from "react";
import { Form, NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Action/ContaindicationAction";
import { Col, InputGroup, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getpostcarelistAdminAction } from "../Redux/Action/ManageconsultationAction";

export default function CreateConsultationOptions({
  formDatavalue,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [precare, setPrecare] = useState({});
  useEffect(() => {
    dispatch(getpostcarelistAdminAction({ search: search }));
  }, [search]);

  var postcarelistData = useSelector(
    (state) => state.ManageConsultation.pre_care_consultation
  );

  const formik = useFormik({
    initialValues: {
      pre_care_setarray: formDatavalue?.pre_care_setarray || [],
    },
    validationSchema: Yup.object({
      pre_care_setarray: Yup.array(),
    }),
    onSubmit: (values) => {
      console.log(values, "valuesvaluesvalues");
      setFormData({
        ...formDatavalue,
        ...values,
      });
      nextStep();
    },
  });

  console.log(formik.values.pre_care_setarray);

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
            {" "}
            <div className="new_consult other_new">
              <div className="row">
                <div className="col-lg-12">
                  <div className="create_new">
                    <h2>Create a new consultation form</h2>

                    <ol>
                      <li>Title & Description</li>
                      <li>Questions</li>
                      <li className="active-tab">Options</li>
                      <li>Review</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-8">
                  <Row className="mt-4 pt-4">
                    <Col lg={5}>
                      <div className="search-input">
                        <input
                          type="search"
                          className="form-control group-box-search"
                          placeholder="Search...."
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
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
                </div>
                <form className="mb-4 pb-4" onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-10">
                      <section className="search-list-part presents">
                        {postcarelistData?.map(function (object) {
                          return (
                            <div className="search-list-box">
                              <Row className="d-flex align-items-center">
                                <Col xs={12} md={9} sm={9}>
                                  <div className="search-content-left">
                                    <h2>{object?.treatmentname}</h2>
                                    <div className="sub-heading">
                                      Pre & Post Treatment Care Advice
                                    </div>
                                    <p>{object?.description}</p>
                                  </div>
                                </Col>
                                <Col
                                  xs={12}
                                  md={2}
                                  sm={2}
                                  className="d-flex justify-content-center"
                                >
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setPrecare(object);
                                      handleShow();
                                    }}
                                  >
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
                                      checked={formik?.values?.pre_care_setarray?.some(
                                        (item) =>
                                          item.pre_care_id === object._id
                                      )}
                                      onChange={() => {
                                        const existingIndex =
                                          formik.values.pre_care_setarray.findIndex(
                                            (item) =>
                                              item.pre_care_id === object._id
                                          );

                                        if (existingIndex === -1) {
                                          // Item not found in the array, so we push the new item
                                          const newArray = [
                                            ...formik.values.pre_care_setarray,
                                            { pre_care_id: object._id },
                                          ];
                                          formik.setFieldValue(
                                            "pre_care_setarray",
                                            newArray
                                          );
                                        } else {
                                          // Item found in the array, so we remove the item
                                          const newArray = [
                                            ...formik.values.pre_care_setarray,
                                          ];
                                          newArray.splice(existingIndex, 1);
                                          formik.setFieldValue(
                                            "pre_care_setarray",
                                            newArray
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          );
                        })}
                      </section>
                    </div>
                  </div>
                  <div className="create_tab fixed_btn ms-0">
                    {/* <!-- start page title --> */}

                    <div className="row align-items-center">
                      <div className="col-12 d-flex justify-content-sm-between flex-wrap justify-content-center gap-2 gap-sm-0">
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
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <div className="treat-box h-100">
            <h2 className="text-center">{precare.treatmentname}</h2>
            <Row>
              <Col lg={6}>
                <div className="left-instruct">
                  <h3>Pre Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>
                      {" "}
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
        {/* <Modal.Footer className="precare-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
