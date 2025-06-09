import { Formik } from "formik";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { forgotPassword } from "../Redux/Actions/user/auth";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validateValue, setValidateValue] = useState(false);

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <NavLink to="/">
            <img
              className="main-logo"
              // src={require("../assets/img/newconsultlogowhite.png")}
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <p>Not a member yet?</p>
              <Nav.Link href="/signup" className="white-btn">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* Signup flow Start */}
      <section className="signup-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-inner">
                <h2>Forgot Password</h2>
                <div className="create-acc-form">
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <Formik
                        initialValues={{
                          email: "",
                        }}
                        validate={(values) => {
                          const errors = {};

                          if (!values.email) {
                            errors.email = "Required";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                              values.email
                            )
                          ) {
                            errors.email = "Invalid email address";
                          }

                          return errors;
                        }}
                        validateOnChange={validateValue}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setValidateValue(true);
                          dispatch(forgotPassword(values)).then((data) => {
                            if (data?.payload?.success) {
                              resetForm();
                              toast.success(data?.payload?.message);
                              navigate("/signin");
                            } else {
                              toast.error(data?.payload?.message);
                            }
                          });
                          setSubmitting(false);
                        }}
                      >
                        {({
                          values,
                          errors,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          setFieldValue,
                        }) => (
                          <form onSubmit={handleSubmit}>
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
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email *"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                  />
                                  {errors.email && (
                                    <span className="error_valid">
                                      {errors.email}
                                    </span>
                                  )}
                                </li>
                              </ul>

                              <div className="submit-btn">
                                <button type="submit" className="lg-btn">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        )}
                      </Formik>
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
};
export default ForgotPassword;
