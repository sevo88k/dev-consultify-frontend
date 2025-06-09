import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adminRegistationAction } from "../Redux/Action/AdminAuthAction";
export default function Createadmin() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",

      name: "",
      position: "",
      accesslevel: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please Enter your Email"),
      name: Yup.string().required("Please Enter your Name"),
      position: Yup.string().required("Please Select Position"),
      accesslevel: Yup.string().required("Please Select Accesslevel"),
    }),
    onSubmit: (values) => {
      dispatch(adminRegistationAction(values));

      formik.resetForm();

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
          <form onSubmit={formik.handleSubmit}>
            <div className="container-fluid">
              <div className="create_tab">
                {/* <!-- start page title --> */}

                <div className="row align-items-center">
                  <div className="col-sm-6 col-12 d-flex align-items-center">
                    <NavLink to="/Manage-admin">
                      <img src={require("../assets/images/Component.png")} />
                    </NavLink>
                    <h4 className="mb-sm-0 font-size-28">New Admin</h4>
                  </div>
                  <div className="col-sm-6 col-12 d-flex justify-content-start justify-content-sm-end mt-3 mt-sm-0">
                    <span>
                      <button type="submit" className="btn cre_new">
                        Save
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Contact Details</h4>
                        </div>
                        <div className="contact_details">
                          <div className="form_fields_main">
                            <label>Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Type Here.."
                              value={formik.values.name}
                              name="name"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.name && formik.errors.name && (
                            <div className="error">{formik.errors.name}</div>
                          )}
                          <div className="form_fields_main">
                            <label>Position</label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                              value={formik.values.position}
                              name="position"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option>Select or Type</option>
                              <option value="1">Super Admin</option>
                              <option value="2">Admin</option>
                              <option value="3">Developer</option>
                            </select>
                          </div>
                          {formik.touched.position &&
                            formik.errors.position && (
                              <div className="error">
                                {formik.errors.position}
                              </div>
                            )}
                          <div className="form_fields_main">
                            <label>Email</label>
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Type Here.."
                              value={formik.values.email}
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.email && formik.errors.email && (
                            <div className="error">{formik.errors.email}</div>
                          )}
                          <div className="form_fields_main">
                            <label>Access Level</label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect2"
                              value={formik.values.accesslevel}
                              name="accesslevel"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option>Select</option>

                              <option value="1">Full Access</option>
                              <option value="2">View Only</option>
                            </select>
                          </div>
                          {formik.touched.accesslevel &&
                            formik.errors.accesslevel && (
                              <div className="error">
                                {formik.errors.accesslevel}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
