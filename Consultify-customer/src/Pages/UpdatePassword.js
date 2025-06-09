import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setnewPasswordAction } from "../Redux/Action/CustomerAuthAction";

export default function UpdatePassword() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmed_password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please Enter your Password"),
      confirmed_password: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      dispatch(setnewPasswordAction(values));
    },
  });

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Navbar.Brand href="#">
            <img
              // src={require("../assets/img/logo-white.svg").default}
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      {/* Header End */}

      {/* Signup flow Start */}
      <section className="signup-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-inner">
                <h2>Update Password</h2>
                <div className="create-acc-form">
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="create-account create-account-next border-radius-10">
                          <div className="logo-circle">
                            <img
                              // src={require("../assets/img/logo-circle.png")}
                              src={require("../assets/img/circlelogo.svg").default}
                              alt="logo"
                            />
                          </div>
                          <ul className="">
                            <li className="form-grp">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password *"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.password &&
                                formik.errors.password && (
                                  <div className="error">
                                    {formik.errors.password}
                                  </div>
                                )}
                            </li>
                            <li className="form-grp">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Confirmed Password *"
                                name="confirmed_password"
                                value={formik.values.confirmed_password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.confirmed_password &&
                                formik.errors.confirmed_password && (
                                  <div className="error">
                                    {formik.errors.confirmed_password}
                                  </div>
                                )}
                            </li>
                          </ul>

                          <div className="form-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  name="checked"
                                  onChange={(e) => {
                                    formik.setFieldValue("checked", e.target.checked);
                                  }}
                                  // checked={values.checked}
                                />
                                <label>
                                  I accept our{" "}
                                  <Link
                                    to="/terms-conditions"
                                    target="_blank"
                                  >
                                    Terms of Service
                                  </Link>{" "}
                                  and have read our{" "}
                                  <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                  >
                                    {" "}
                                    Privacy Notice
                                  </Link>
                                  .
                                </label>
                              </div>

                          <div className="submit-btn">
                            <button type="submit"
                             disabled={
                              !formik.values.checked ? true  : false
                            }
                            className={
                              formik.values.checked 
                                ? "lg-btn"
                                : "lg-btn-disabled"
                            }
                             >
                              Update Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Signup flow End */}
    </div>
  );
}
