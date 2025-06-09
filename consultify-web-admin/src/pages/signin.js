import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginAdminLoginAction } from "../Redux/Action/AdminAuthAction";
import { NavLink } from "react-router-dom";
export default function Signin() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please Enter your Email"),
      password: Yup.string().required("Please Enter your password"),
    }),
    onSubmit: (values) => {
      dispatch(loginAdminLoginAction(values));

      // Handle step 1 submission
    },
  });

  useEffect(() => {
    // Add meta tag to disable zooming
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(metaViewport);

    // Cleanup meta tag on component unmount
    return () => {
      document.head.removeChild(metaViewport);
    };
  }, []);

  return (
    <div className="signin-container">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="auth-full-page-content login-padding">
              <div className="w-100">
                <div className="d-flex flex-column h-100">
                  <div className="my-auto">
                    <div className="mt-4">
                      <h2 className="mb-4 cmn_dash">Signin</h2>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <label for="username" className="form-label">
                            Email<span className="blue_text">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <div className="error">{formik.errors.email}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Password<span className="blue_text">*</span>{" "}
                          </label>
                          <div className="input-group auth-pass-inputgroup">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password *"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.password &&
                            formik.errors.password && (
                              <div className="error">
                                {formik.errors.password}
                              </div>
                            )}
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <NavLink
                            to="/forgot-password"
                            className="font-weight-semibold"
                          >
                            Forgot password?
                          </NavLink>
                        </div>

                        <div className="mt-4 d-grid">
                          <button
                            to="/dashboard"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 login-back-image">
            <div className="auth-full-bg bg-black pt-lg-5 p-4">
              <div className="bg-overlay">
                <div className="new_logo">
                  {/* <img src={require("../assets/images/logo-light.png")} /> */}
                  <img src={require("../assets/images/whitelogo.svg").default} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
