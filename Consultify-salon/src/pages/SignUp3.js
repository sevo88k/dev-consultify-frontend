import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { editProfile } from "../Redux/Actions/user/auth";
import { useDispatch } from "react-redux";
import useGetAddressIO from "../Hooks/getAddressIo";

const arrHearAboutUs = [
  "Friend or Relative Referral",
  "Social Media (Facebook, Instagram etc)",
  "Networking Event",
  "Promotional Video",
  "Newspaper",
  "Podcast",
  "Search Engines",
  "Blog",
  "Customer Review Site",
];

const SignUp3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { addressData, getAddress } = useGetAddressIO();

  const [postcode, setPostcode] = useState();

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      getAddress(postcode);
    }
  };

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Navbar.Brand href="#">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogowhite.png")}
              alt="logo"
            />
          </Navbar.Brand>
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
                <h2>Just a few more details!</h2>
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
                          id: params?.id,
                          instagram_info: "",
                          facebook_info: "",
                          linkedin_info: "",
                          hear_about_us: "",
                          leaveformstep:2
                        }}
                        validate={(values) => {
                          const errors = {};

                          // if (!values.hear_about_us) {
                          //   errors.hear_about_us = "Required*";
                          // }

                          return errors;
                        }}
                        validateOnChange={false}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          console.log(values, "values hear");
                          values. leaveformstep=2
                          dispatch(editProfile(values)).then((data) => {
                            if (data?.payload?.success) {
                              resetForm();
                              navigate(
                                // `/subscription/${data?.payload?.data?._id}`
                                `/subscription/${data?.meta?.arg?.id}`
                              );
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
                          <form onSubmit={handleSubmit} className="h-100">
                            <div className="create-account create-account-next">
                              <ul className="">
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Instagram (Optional)"
                                    name="instagram_info"
                                    onChange={handleChange}
                                    value={values.instagram_info}
                                  />
                                  {errors.instagram_info && (
                                    <span className="error_valid">
                                      {errors.instagram_info}
                                    </span>
                                  )}
                                </li>
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Facebook (Optional)"
                                    name="facebook_info"
                                    onChange={handleChange}
                                    onKeyPress={handleKeyEnter}
                                    value={values.facebook_info}
                                  />
                                  {errors.facebook_info && (
                                    <span className="error_valid">
                                      {errors.facebook_info}
                                    </span>
                                  )}
                                </li>
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="LinkedIn (Optional)"
                                    name="linkedin_info"
                                    onChange={handleChange}
                                    onKeyPress={handleKeyEnter}
                                    value={values.linkedin_info}
                                  />
                                  {errors.linkedin_info && (
                                    <span className="error_valid">
                                      {errors.linkedin_info}
                                    </span>
                                  )}
                                </li>

                                <li className="form-grp ">
                                  <select
                                    name="hear_about_us"
                                    aria-label="Default select example"
                                    className="form-control form-select"
                                    onChange={handleChange}
                                    value={values.hear_about_us}
                                    //placeholder="Where did you hear about us?"
                                  >
                                    <option>
                                      Where did you hear about us? (Optional)
                                    </option>
                                    {arrHearAboutUs?.map((item) => {
                                      return (
                                        <option value={item}>{item}</option>
                                      );
                                    })}
                                  </select>
                                  {/* {errors.hear_about_us && (
                                    <span className="error_valid">
                                      {errors.hear_about_us}
                                    </span>
                                  )} */}
                                </li>
                              </ul>

                              <div className="submit-btn">
                                <button type="submit" className="lg-btn">
                                  Next
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
    </div>
  );
};
export default SignUp3;
