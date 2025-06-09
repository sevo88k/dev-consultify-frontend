import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  DeleteSalonAction,
  SalonResetpasswordAction,
  UpdateaccountstatussalonAction,
  salonDetailsAction,
  updateSalondetailsAction,
} from "../Redux/Action/SalonAction";
import moment from "moment";
import Sidebar from "./Include/Sidebar";
import SalondetailsNav from "./Include/SalondetailsNav";
import CryptoJS from "crypto-js";
import { Decryptedid } from "../Util/BcruptEncyptid";
import { updateProfileDetailAction } from "../Redux/Action/AdminAuthAction";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function SalonOverview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  const idvalue = Decryptedid(atob(id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(salonDetailsAction(idvalue));
  }, [idvalue]);

  var salondetails = useSelector((state) => state.Salon.salondetails);

  const navigate = useNavigate();

  const resetPasword = () => {
    dispatch(
      SalonResetpasswordAction({
        email: salondetails.email,
      })
    );

    // navigate('/reset-password/'+idvalue)
  };

  const deleteProfile = useCallback(() => {
    dispatch(
      DeleteSalonAction({
        id: idvalue,
      })
    );
    setShow(false);
    navigate("/All-salons");
  }, []);

  useEffect(() => {
    formik.setFieldValue("firstname", salondetails.firstname);
    formik.setFieldValue("lastname", salondetails.lastname);
    formik.setFieldValue("salonname", salondetails.salonname);
    formik.setFieldValue("website_url", salondetails.website_url);
    formik.setFieldValue("email", salondetails.email);
    formik.setFieldValue("personal_phone", salondetails.personal_phone);
    formik.setFieldValue("personal_address1", salondetails.personal_address1);
    formik.setFieldValue("personal_address2", salondetails.personal_address2);
    formik.setFieldValue("personal_city", salondetails.personal_city);
    formik.setFieldValue("personal_postcode", salondetails.personal_postcode);
  }, [salondetails]);

  const updateaccountstatus = (status) => {
    dispatch(
      UpdateaccountstatussalonAction({
        status_account: status,
        id: idvalue,
      })
    ).then(() => {
        dispatch(salonDetailsAction(idvalue));
    })
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      salonname: "",
      email: "",
      personal_phone: "",
      website_url: "",
      personal_address1: "",
      personal_address2: "",
      personal_city: "",
      personal_postcode: "",
    },
    // validationSchema: Yup.object({
    //   salonname: Yup.string().required('Salon Name is required'),
    //   email: Yup.string().email().required('Email is required'),
    //   personal_phone:Yup.number().required('Phone Number is required'),
    //   website_url:Yup.string().required('Website Url is required'),
    //   personal_address1:Yup.string().required('Adress line1 is required'),
    //   personal_postcode:Yup.string().required('Post code is required'),
    //   personal_city:Yup.string().required('City is required'),
    // }),
    onSubmit: (values) => {
      values.id = idvalue;

      console.log(values, "salon-----------salon");
      dispatch(updateSalondetailsAction(values));
      // Handle step 1 submission
    },
  });
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
          <div className="container-fluid ">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-sm-6 d-flex align-items-center">
                  <NavLink to="/All-salons">
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">
                    {salondetails.salonname}
                  </h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-end mt-3 mt-sm-0">
                  <p className="sub_heading">
                    Joined:{" "}
                    {moment(salondetails.updatedAt).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="">
              <div className="row">
                <SalondetailsNav id={id} />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <form onSubmit={formik.handleSubmit}>
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card mt-4">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Contact Details</h4>
                          <button
                            type="submit"
                            className="new_update web-update-btn"
                          >
                            Update
                          </button>
                        </div>
                        <div className="row extra_salon">
                          <div className="col-lg-6">
                            <div className="contact_details">
                              <div className="form_fields_main mb-2">
                                <label>Salon Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="salonname"
                                  value={formik.values.salonname}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>
                              {formik.touched.salonname &&
                                formik.errors.salonname && (
                                  <div className="error show_error">
                                    {formik.errors.salonname}
                                  </div>
                                )}

                              <div className="form_fields_main mb-2">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="firstname"
                                  value={formik.values.firstname}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>
                              <div className="form_fields_main mb-2">
                                <label>Last Name</label>
                                <input
                                  name="lastname"
                                  type="text"
                                  class="form-control"
                                  value={formik.values.lastname}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>

                              <div className="form_fields_main mb-2">
                                <label>Email</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>
                              {formik.touched.email && formik.errors.email && (
                                <div className="error show_error">
                                  {formik.errors.email}
                                </div>
                              )}
                              <div className="form_fields_main mb-2">
                                <label>Phone</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  pattern="[0-9]*"
                                  name="personal_phone"
                                  value={formik.values.personal_phone}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>

                              {formik.touched.personal_phone &&
                                formik.errors.personal_phone && (
                                  <div className="error show_error">
                                    {formik.errors.personal_phone}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contact_details">
                              <div className="form_fields_main mb-2">
                                <label>Website</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  value={formik.values.website_url}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="website_url"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Additional Details</h4>
                        </div>
                        <div className="contact_details">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="form_fields_main additional">
                                <label> Address</label>

                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder=""
                                  value={formik.values.personal_address1}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="personal_address1"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder=""
                                  value={formik.values.personal_address2}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="personal_address2"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder=""
                                  value={formik.values.personal_city}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="personal_city"
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder=""
                                  value={formik.values.personal_postcode}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="personal_postcode"
                                />
                              </div>
                            </div>

                            <div className="col-lg-7">
                              <div className="additional_info">
                                <ul>
                                  <li>
                                    Last Log In
                                    <p>
                                      {moment(salondetails.lastLogin).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </p>
                                  </li>
                                  <li>
                                    Account Status
                                    <p>
                                      {" "}
                                      <img
                                        src={require(`../assets/images/check_circle.png`)}
                                      />{" "}
                                      {salondetails?.status_account == 1
                                        ? "Active"
                                        : "Inactive"}
                                    </p>
                                  </li>
                                  <li>
                                    Live / Suspend
                                    <select
                                      class="selected_status"
                                      aria-label=".form-select-lg example"
                                      onChange={(e) => {
                                        updateaccountstatus(e.target.value);
                                      }}
                                    >
                                      <option
                                        value="1"
                                        selected={
                                          salondetails?.status_account == 1
                                        }
                                      >
                                        <img
                                          src={require("../assets/images/check_circle.png")}
                                        />{" "}
                                        Live
                                      </option>
                                      <option
                                        value="0"
                                        selected={
                                          salondetails?.status_account == 0
                                        }
                                      >
                                        <img
                                          src={require("../assets/images/Close_square_fill.png")}
                                        />
                                        Suspend
                                      </option>
                                    </select>
                                  </li>
                                  <li>
                                    <span className="hide-label">
                                      Password Reset
                                    </span>
                                    <button
                                      className="reset_btn"
                                      onClick={() => {
                                        resetPasword(salondetails._id);
                                      }}
                                    >
                                      Reset Password
                                    </button>
                                  </li>
                                  <li>
                                    <span className="hide-label">
                                      {" "}
                                      Delete Salon{" "}
                                    </span>
                                    <button
                                      className="delete_btn"
                                      onClick={handleShow}
                                    >
                                      Delete
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="btn-pos-chnage">
                              <button type="submit" className="new_update">
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Salon</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button className="delete_btn" onClick={deleteProfile}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
