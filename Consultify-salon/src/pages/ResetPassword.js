import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "../Redux/Actions/user/auth";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validateValue, setValidateValue] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required*";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length <= 6) {
      errors.password = "Password should be 6+ characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    validateOnChange: validateValue,
    onSubmit: async (values) => {
      setValidateValue(true);
      const dataVal = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        token: token,
      };

      console.log(dataVal, "dataVal");

      dispatch(resetPassword(dataVal)).then((data) => {
        if (data?.payload?.success) {
          toast.success(data?.payload?.message);
          navigate("/signin");
        } else {
          toast.error(data?.payload?.message);
        }
      });
    },
  });

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Navbar.Brand href="https://consultifyapp.com" target="_blank">
            <img
              // src={require("../assets/img/logo-white.svg").default}
              className="main-logo"
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"
            />
          </Navbar.Brand>
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
                                type="email"
                                className="form-control"
                                placeholder="Enter Email *"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.email && (
                                <p className="error_valid">
                                  {formik.errors.email}
                                </p>
                              )}
                            </li>
                            <li className="form-grp">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password *"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.password && (
                                <p className="error_valid">
                                  {formik.errors.password}
                                </p>
                              )}
                            </li>
                            <li className="form-grp">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Re Enter Password *"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.confirmPassword && (
                                <p className="error_valid">
                                  {formik.errors.confirmPassword}
                                </p>
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
export default ResetPassword;
