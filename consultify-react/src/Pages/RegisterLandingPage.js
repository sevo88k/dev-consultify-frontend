import React from "react";
import vdo from "../assets/img/video.mp4";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/Actions/user/auth";
import mobilevdo from "../assets/img/phone.mp4";
import { NavLink } from "react-router-dom";

const RegisterLandingPage = () => {
  const dispatch = useDispatch();
  return (
    <div id="wrapper">
      {/* <!---------------------- Header ----------------------->
    <!-- <header className="main-header">
        <div className="container">   -->
            <!-- Navbar -->
            <!-- <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                    <img src="img/logo.svg" alt="logo">
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link white-text" href="#">Register your interest today</a>
                        </li>
                    </ul>
                </div>
            </nav> -->
        <!-- Navbar / End -->
        <!-- </div>
    </header> -->
    <!---------------------- Header / End ------------------->


   <!-- <section className="video-section">
        <video width="100%" height="100%" controls autoplay loop>
            <source src="img/video.mp4" type="video/mp4">
            <source src="img/video.mp4" type="video/ogg">
        </video>
    </section> --> */}

      <div className="video-section">
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="img/poster.png"
          className="desktop-video"
        >
          <source src={vdo} type="video/mp4" />
          <source src={vdo} type="video/ogg" />
        </video>

        <video
          autoPlay
          muted
          playsInline
          loop
          poster="img/poster.png"
          className="mobile-video"
        >
          <source src={mobilevdo} type="video/mp4" />
          <source src={mobilevdo} type="video/ogg" />
        </video>
      </div>

      <section className="register-section ">
        <div className="container">
          <div className="form">
            <div className="row">
              <div className="col-lg-12">
                <Formik
                  initialValues={{
                    firstName: "",
                    surname: "",
                    salon_name: "",
                    email: "",
                    checked: false,
                  }}
                  validate={(values) => {
                    const errors = {};

                    if (!values.firstName) {
                      errors.firstName = "Required*";
                    }
                    if (!values.surname) {
                      errors.surname = "Required*";
                    }
                    if (!values.salon_name) {
                      errors.salon_name = "Required*";
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
                    console.log(values);
                    dispatch(userRegister(values)).then(resetForm());
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
                      <div className="form-content">
                        <h2 className="white-text">
                          Register your interest to be the first to know about
                          our Summer 2024 launch!
                        </h2>
                        <div className="form-detail">
                          <h3>My Details</h3>
                          <ul>
                            <li className="form-grp">
                              <input
                                type="text"
                                placeholder="First Name *"
                                name="firstName"
                                className="form-control"
                                onChange={handleChange}
                                value={values.firstName}
                              />
                              {errors.firstName && (
                                <span>{errors.firstName}</span>
                              )}
                            </li>
                            <li className="form-grp">
                              <input
                                type="text"
                                placeholder="Surname *"
                                name="surname"
                                className="form-control"
                                onChange={handleChange}
                                value={values.surname}
                              />
                              {errors.surname && <span>{errors.surname}</span>}
                            </li>
                            <li className="form-grp">
                              <input
                                type="text"
                                placeholder="Salon Name"
                                name="salon_name"
                                className="form-control"
                                onChange={handleChange}
                                value={values.salon_name}
                              />
                              {errors.salon_name && (
                                <span>{errors.salon_name}</span>
                              )}
                            </li>
                            <li className="form-grp">
                              <input
                                type="email"
                                placeholder="Email *"
                                name="email"
                                className="form-control"
                                onChange={handleChange}
                                value={values.email}
                              />
                              {errors.email && <span>{errors.email}</span>}
                            </li>
                          </ul>
                          <div className="terms-text">
                            <input
                              type="checkbox"
                              name="checked"
                              onChange={(e) => {
                                setFieldValue("checked", e.target.checked);
                              }}
                              checked={values.checked}
                            />
                            <label for="" className="form-label">
                              I accept our{" "}
                              <NavLink to="/terms_condition">
                                Terms of Service
                              </NavLink>{" "}
                              and have read our{" "}
                              <NavLink to="/privacy_policy">
                                Privacy Notice.
                              </NavLink>
                            </label>
                          </div>
                          <div className="submit-btn">
                            <button
                              type="submit"
                              disabled={values.checked ? isSubmitting : true}
                              className={
                                values.checked ? "lg-btn" : "lg-btn-disabled"
                              }
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- Registration Section / End -----------------------> */}
    </div>
  );
};

export default RegisterLandingPage;
