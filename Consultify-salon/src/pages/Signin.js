import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Actions/user/auth";
import { Formik } from "formik";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validateValue, setValidateValue] = useState(false);

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Navbar.Brand href="https://consultifyapp.com" target="_blank">
            <img
              className="main-logo"
              // src={require("../assets/img/newconsultlogowhite.png")}
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
              {/* <Nav.Link href="/signup" className="white-btn">
                Sign Up
              </Nav.Link> */}
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
                <h2>Sign in to your account</h2>
                <div className="create-acc-form">
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
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
                          if (!values.password) {
                            errors.password = "Required";
                          }

                          return errors;
                        }}
                        validateOnChange={validateValue}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setValidateValue(true);
                          dispatch(userLogin(values)).then((data) => {
                            if (data?.payload?.user?.success) {
                              resetForm();
                              // if (!data?.payload?.user?.data?.subscriptionId) {
                              //   navigate(
                              //     `/subscription/${data?.payload?.user?.data?._id}`
                              //   );
                              //   return toast.success(
                              //     "Please subscribe first before proceed."
                              //   );
                              // }
                              let x =  Cookies.get('precarepath')                       

                              if (
                                data?.payload?.user?.data?.salonname ==
                                undefined
                              ) {
                                navigate(
                                  `/signup2/${data?.payload?.user?.data?._id}`
                                );
                                toast.success("You’re almost there!");
                              } else if (
                                data?.payload?.user?.data?.hear_about_us ==
                                undefined
                              ) {
                                navigate(
                                  `/signup3/${data?.payload?.user?.data?._id}`
                                );
                                toast.success("You’re almost there!");
                              } else if (
                                data?.payload?.user?.data?.subscription ==
                                undefined
                              ) {
                                navigate(
                                  `/subscription/${data?.payload?.user?.data?._id}`
                                );
                                toast.success("Logged in Successfully");
                              } else {
                                localStorage.setItem(
                                  "token",
                                  data?.payload?.user?.data?.token
                                );
                                localStorage.setItem(
                                  "userId",
                                  data?.payload?.user?.data?._id
                                );
                                localStorage.setItem(
                                  "firstname",
                                  data?.payload?.user?.data?.firstname
                                );
                                localStorage.setItem(
                                  "lastename",
                                  data?.payload?.user?.data?.lastname
                                );
                                localStorage.setItem(
                                  "currentdatetime",
                                  Date.now()
                                );

                                if (x) {
                                  Cookies.remove("precarepath");
                                  window.location.href = x;
                                } else {
                                  if(data?.payload?.user?.data?.status_account == 0) {
                                    toast.error("Account Suspended")
                                    return 
                                  }

                                 window.location.href = "/dashboard";
                                toast.success("Logged in Successfully");
                                }
                              }
                            } else {
                              toast.error(data?.payload?.user?.message);
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
                                     {/* <img src={require("../assets/img/consultify-black-logo.svg").default} /> */}
                              </div>
                              <ul className="">
                                <li className="form-grp">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email *"
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
                                <li className="form-grp">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password *"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                  />
                                  {errors.password && (
                                    <span className="error_valid">
                                      {errors.password}
                                    </span>
                                  )}
                                </li>
                              </ul>

                              <div className="submit-btn">
                                <button type="submit" className="lg-btn">
                                  Sign in
                                </button>
                              </div>
                              <div className="forgot-password">
                                <NavLink
                                  to={"/forgotpassword"}
                                  className="gry-text-link"
                                >
                                  Forgot Password?
                                </NavLink>
                              </div>
                              <div className="forgot-password align-items-center">
                                <p className="mb-0 me-2">Not a member yet?</p>
                                <NavLink
                                  to={"/signup"}
                                  className="gry-text-link"
                                >
                                  <b>Sign Up</b>
                                </NavLink>
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
export default Signin;
