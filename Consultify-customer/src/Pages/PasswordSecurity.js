import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../Redux/Action/CustomerAuthAction";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

export default function PasswordSecurity() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      old_password: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      old_password: Yup.string().required("Old Password is required"),
      password: Yup.string().required("Password is required"),
      confirmpassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      dispatch(changePasswordAction(values));
    },
  });
  return (
    <MyAcoountLayout>
      <div className="col-lg-8 mx-auto">
        <div className="account_form pass_security">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h2>Update Password</h2>
              <div className="row">
                <div className="col-lg-12">
                  <input
                    className="form-control mb-0"
                    type="password"
                    placeholder="Old Password *"
                    name="old_password"
                    value={formik.values.old_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.old_password &&
                    formik.errors.old_password && (
                      <div className="error">{formik.errors.old_password}</div>
                    )}
                </div>
                <div className="col-lg-12">
                  <input
                    className="form-control mb-0"
                    type="password"
                    placeholder="New Password *"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="error">{formik.errors.password}</div>
                  )}
                </div>
                <div className="col-lg-12">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Re-Enter New Password *"
                    name="confirmpassword"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmpassword &&
                    formik.errors.confirmpassword && (
                      <div className="error">
                        {formik.errors.confirmpassword}
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" class="btn mb-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
