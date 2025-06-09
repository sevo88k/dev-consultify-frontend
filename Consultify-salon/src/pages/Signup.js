import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { userRegister } from "../Redux/Actions/user/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-bootstrap";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [moveOn, setMoveOn] = useState();
  function onChange(value) {
    setMoveOn(value);
    console.log("Captcha value:", value);
  }
  const [validateValue, setValidateValue] = useState(false);

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Link to="/">
            <img
              className="main-logo"
              // src={require("../assets/img/newconsultlogowhite.png")}
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <p>Already have an account?</p>
              <Nav.Link href="/signin" className="white-btn">
                Login
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
                <h2 className="mb-4">Get Started by creating your account!</h2>
                <div className="create-acc-form">
                  <div className="row">
                    <div className="col-lg-5 pe-0">
                      <div className="features">
                        {/* <h6>WITH CONSULTIFY YOU CAN:</h6> */}
                        <ul>
                        <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>£14.99 Per Month</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Dedicated Account Manager</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Unlimited Consultations</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Unlimited Clients</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Cancel Anytime</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 ps-0">
                      <Formik
                        initialValues={{
                          firstname: "",
                          lastname: "",
                          password: "",
                          email: "",
                          promotionaloffers: false,
                          checked: false,
                          leaveformstep:0
                        }}
                        validate={(values) => {
                          const errors = {};

                          if (!values.firstname) {
                            errors.firstname = "Required*";
                          }
                          if (!values.lastname) {
                            errors.lastname = "Required*";
                          }
                          if (!values.password) {
                            errors.password = "Required*";
                          } else if (values.password.length <= 5) {
                            errors.password =
                              "Password should be 6+ characters";
                          }
                          if (!values.email) {
                            errors.email = "Required*";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.email
                            )
                          ) {
                            errors.email = "Invalid email address";
                          }

                          if (!values.checked) {
                            errors.checked = "Required*";
                          }

                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          dispatch(userRegister(values)).then((data) => {
                            console.log(data, "data signup");
                            if (data?.payload?.success) {
                              resetForm();
                              //navigate("/signin")
                              navigate(`/signup2/${data?.payload?.data?._id}`);
                            } else {
                              toast.error(data?.payload?.message);
                            }
                            setSubmitting(false);
                          });
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
                          <form
                            onSubmit={(e) => {
                              setValidateValue(true);
                              handleSubmit(e);
                            }}
                          >
                            <div className="create-account">
                              <ul className="">
                                {console.log(errors, "errorss")}
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name*"
                                    name="firstname"
                                    onChange={handleChange}
                                    value={values.firstname}
                                  />
                                  {validateValue && errors.firstname && (
                                    <span className="error_valid">
                                      {errors.firstname}
                                    </span>
                                  )}
                                </li>
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name*"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                  />
                                  {validateValue && errors.lastname && (
                                    <span className="error_valid">
                                      {errors.lastname}
                                    </span>
                                  )}
                                </li>
                                <li className="form-grp">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email*"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                  />
                                  {validateValue && errors.email && (
                                    <span className="error_valid">
                                      {errors.email}
                                    </span>
                                  )}
                                </li>
                                <li className="form-grp">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password (6+ Characters) *"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                  />
                                  {validateValue && errors.password && (
                                    <span className="error_valid">
                                      {errors.password}
                                    </span>
                                  )}
                                </li>
                              </ul>
                              <div className="form-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  name="checked"
                                  onChange={(e) => {
                                    setFieldValue("checked", e.target.checked);
                                  }}
                                  checked={values.checked}
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

                              <div className="form-checkbox">
                                <input
                                  type="checkbox"
                                  name="promotionaloffers"
                                  onChange={handleChange}
                                  value={true}
                                />
                                <label>
                                  I'd like to receive promotional offers and
                                  information from Consultify.
                                </label>
                              </div>
                              <ReCAPTCHA
                                sitekey={process.env.REACT_APP_ReCAPTCHAKey}
                                onChange={onChange}
                              />
                              <div className="submit-btn">
                                <button
                                  type="submit"
                                  disabled={
                                    !values.checked
                                      ? true
                                      : isSubmitting
                                      ? true
                                      : false
                                  }
                                  className={
                                    values.checked && !isSubmitting
                                      ? "lg-btn"
                                      : "lg-btn-disabled"
                                  }
                                >
                                  {isSubmitting
                                    ? "In progress...."
                                    : "Register Now"}
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
export default SignUp;
