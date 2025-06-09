import React, { useCallback, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { Decryptedid, Encryptedid } from "../Util/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import {
  CustomerResetpasswordAction,
  customerDetailsAction,
  deleteUserAction,
  updateaccountstatusAction,
  updateuserdetailsAction,
} from "../Redux/Action/UserAction";
import moment from "moment";
import { updateSalondetailsAction } from "../Redux/Action/SalonAction";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CustomerOverview() {
  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var idvalue = Decryptedid(atob(id));
  console.log(idvalue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerDetailsAction(idvalue));
  }, [idvalue]);

  var userdetails = useSelector((state) => state.User.userdetails);

  useEffect(() => {
    formik.setFieldValue("first_name", userdetails.first_name);
    formik.setFieldValue("last_name", userdetails.last_name);
    formik.setFieldValue("email", userdetails.email);
    formik.setFieldValue("phone_number", userdetails.phone_number);
    formik.setFieldValue("first_line_address", userdetails.first_line_address);
    formik.setFieldValue(
      "second_line_address",
      userdetails.second_line_address
    );
    formik.setFieldValue("city", userdetails.city);
    formik.setFieldValue("pin_code", userdetails.pin_code);
  }, [userdetails]);

  console.log(userdetails, "userdetailsuserdetails");

  const navigate = useNavigate();

  const deleteProfile = useCallback(() => {
    dispatch(
      deleteUserAction({
        id: idvalue,
      })
    );

    setShow(false);
    navigate("/All-users");
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      first_line_address: "",
      second_line_address: "",
      city: "",
      pin_code: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),
      email: Yup.string().email().required("Email is required"),
      phone_number: Yup.string().required("Phone Number is required"),
    }),
    onSubmit: (values) => {
      values.id = idvalue;

      dispatch(updateuserdetailsAction(values));
      // Handle step 1 submission
    },
  });
  console.log(formik.errors);

  const updateaccountstatus = (status) => {
    dispatch(
      updateaccountstatusAction({
        status_account: status,
        id: idvalue,
      })
    );
  };
  const resetPasword = () => {
    dispatch(
      CustomerResetpasswordAction({
        email: userdetails.email,
      })
    );

    // navigate('/reset-password/'+idvalue)
  };

  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <div data-simplebar="" className="h-100">
            {/* <!--- Sidemenu --> */}
            <Sidebar />
            {/* <!-- Sidebar --> */}
          </div>
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
                <div className="col-sm-6 d-flex align-items-center">
                  <NavLink to="/All-users">
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">
                    {userdetails.first_name + " " + userdetails.last_name}
                  </h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-sm-end justify-content-start mt-3 mt-sm-0">
                  <p className="sub_heading">
                    Joined: {moment(userdetails.updatedAt).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-md-end justify-content-startd rikki-nav-ps">
                  <button className="btn cre_new">Overview</button>
                  <NavLink
                    to={
                      "/Completed-consultations-user/" +
                      Encryptedid(userdetails?._id)
                    }
                  >
                    {" "}
                    <button className="btn cre_new_one">Consultations</button>
                  </NavLink>
                </div>
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

                        <div className="contact_details custom">
                          <div className="form_fields_main mb-2">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name*"
                              name="first_name"
                              value={formik.values.first_name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.first_name &&
                            formik.errors.first_name && (
                              <div className="error show_error">
                                {formik.errors.first_name}
                              </div>
                            )}
                          <div className="form_fields_main mb-2">
                            <label>Surname</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name*"
                              name="last_name"
                              value={formik.values.last_name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.last_name &&
                            formik.errors.last_name && (
                              <div className="error show_error">
                                {formik.errors.last_name}
                              </div>
                            )}
                          <div className="form_fields_main mb-2">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email*"
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
                              type="number"
                              className="form-control"
                              name="phone_number"
                              value={formik.values.phone_number}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.phone_number &&
                            formik.errors.phone_number && (
                              <div className="error show_error">
                                {formik.errors.phone_number}
                              </div>
                            )}
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
                            <div className="col-xxl-5 col-xl-5 col-lg-5">
                              <div className="form_fields_main additional">
                                <label> Address</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id=""
                                  placeholder=""
                                  name="first_line_address"
                                  value={formik.values.first_line_address}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  id=""
                                  placeholder=""
                                  name="second_line_address"
                                  value={formik.values.second_line_address}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  id=""
                                  placeholder=""
                                  name="city"
                                  value={formik.values.city}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                <input
                                  type="text"
                                  class="form-control"
                                  id=""
                                  placeholder=""
                                  name="pin_code"
                                  value={formik.values.pin_code}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>
                            </div>

                            <div className="col-lg-7">
                              <div className="additional_info">
                                <ul>
                                  <li>
                                    Last Log In
                                    <p>
                                      {moment(userdetails.lastLogin).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </p>
                                  </li>
                                  <li>
                                    Account Status
                                    <p>
                                      {" "}
                                      <img
                                        src={require("../assets/images/check_circle.png")}
                                      />{" "}
                                      {userdetails?.status == 1
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
                                          userdetails?.status_account == 1
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
                                          userdetails?.status_account == 0
                                        }
                                      >
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
                                      onClick={resetPasword}
                                    >
                                      Reset Password
                                    </button>
                                  </li>
                                  <li>
                                    <span className="hide-label">
                                      {" "}
                                      Delete Salon
                                    </span>
                                    <button
                                      className="delete_btn"
                                      onClick={() => {
                                        handleShow();
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-body">
                        <div className="test_reports">
                          <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                            <div className="d-flex align-items-center">
                              <h4 className="title_text">Patch Tests</h4>
                              <p className="sub_heading">By PatchPort</p>
                            </div>
                            <button className="delete_btn">Disconnect</button>
                          </div>
                          <div class="table-responsive">
                            <table
                              id=""
                              class="table dt-responsive dealers_table nowrap w-100"
                            >
                              <thead>
                                <tr>
                                  <th>Test ID</th>
                                  <th>Treatment Type</th>
                                  <th>Expiry</th>
                                  <th>Linked Products</th>
                                </tr>
                              </thead>
                              <tbody class="td_color">
                                <tr>
                                  <td>12323</td>
                                  <td>Botox - Frown Lines</td>
                                  <td>25/07/2023</td>
                                  <td>
                                    <button className="view_patch">
                                      View in PatchPort
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>12323</td>
                                  <td>Botox - Frown Lines</td>
                                  <td>25/07/2023</td>
                                  <td>
                                    <button className="view_patch">
                                      View in PatchPort
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>12323</td>
                                  <td>Botox - Frown Lines</td>
                                  <td>25/07/2023</td>
                                  <td>
                                    <button className="view_patch">
                                      View in PatchPort
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
              </form>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
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
    </div>
  );
}
