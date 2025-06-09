import React from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { userRegister } from "../../../Redux/Actions/user/Auth";
export default function SeeResultOne() {
  const status = useSelector((state) => state.userRegAuth.success);
  const userAuth = useSelector((state) => state.userRegAuth);
  const Nevigate=useNavigate()
  const dispatch = useDispatch();
  const [Hide, setHide] = useState(false)
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Enter at least 2 chracters")
      .max(70, "Too Long!")
      .required("Enter first name"),
    lastName: Yup.string()
      .min(2, "Enter at least 2 chracters")
      .max(70, "Too Long!")
      .required("Enter last name"),
    email: Yup.string().email("Enter correct email").required("Enter email"),
    password: Yup.string()
      .min(8, "Password must be 8 chracters long")
      .max(70, "Too Long!")
      .required("Enter password"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        console.log(values, "rrrrrrrrrrrrrr");
        //  dispatch(userRegister(values));
        Nevigate("/lp-symtom-swelling-result");
      } catch (error) {
        console.log(error);
      }
    },  
  });
  return (
    <>
      <div id="wrapper">
        {/* <!-- header start --> */}
        <header className="position-relative dark-header main_header">
          <div className="container-fluid padding_none">
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/prevention-education">
                      Prevention & Education
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/lp-symtom-checker-one">
                      Symptom Checker
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/userlogin">
                    Book an Online Consultation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-primary white-btn" to="/userlogin">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <!-- Navbar / End --> */}
          </div>
        </header>
        {/* <!-- header end --> */}

        {/* <!-- Question  Bar --> */}
        <section className="question_bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-center">Done</h4>
                <div className="progress_bar">
                  <p className="ques-nine"></p>
                </div>
                <div className="back_btn">
                  <Link to="/lp-symtom-checker-seven" className="white-btn">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Question  Bar / End-->
           
            <!-- Tooth-aid problems start --> */}
        <section onSubmit={formik.handleSubmit} className="tooth-aid-prblms  symptom-checker result_ready">
          <div className="container">
            <div style={{ height:"135vh" }} className="card card_shadow lg_height">
              <div className="row">
                <div className="col-md-12">
                  <div className="detail_page_title">
                    <h2 className="text-center mb-2">Your results are ready</h2>
                    <p className="text-center drk_parah">
                      Fill in the details below and we’ll save your results for
                      30 days
                    </p>
                  </div>

                  <div className="detail_page">
                    <form
                      className="w-100"
                    >
                      <div className="card mb-0">
                        <div className="card-body">
                          <div className="title_signin">
                            <h4 className="text-center drk_parah">
                              Your Details
                            </h4>
                            <div className="form-group mb-3 mt-4">
                              <label for="">Your Name</label>
                              <input
                              name="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                onChange={formik.handleChange}
                              value={formik.values.firstName}
                              />
                            </div>
                            {formik.errors.firstName ? (
             <div style={{ color:"red" }}>{formik.errors.firstName}</div>
           ) : null}
                            <div className="form-group mb-3 mt-4">
                              <label for="">Surname</label>
                              <input
                              name="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Surname"
                                onChange={formik.handleChange}
                              value={formik.values.lastName}
                              />
                            </div>
                            {formik.errors.lastName ? (
                              <div style={{ color:'red' }}>{formik.errors.lastName}</div>
                            ) : null}
                            <div className="form-group mb-3 mt-4">
                              <label for="">Your Email</label>
                              <input
                              name="email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={formik.handleChange}
                              value={formik.values.email}
                              />
                            </div>
                            {formik.errors.email ? (
                              <div style={{ color:'red' }}>{formik.errors.email}</div>
                            ) : null}
                            <div className="form-group mb-3">
                              <label for="">Create a password</label>
                              <div className="input-group">
                                <input
                                name="password"
                                  type={Hide ? "text":'password'}
                                  className="form-control br-none"
                                  id="password"
                                  placeholder="Type here"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  onChange={formik.handleChange}
                                value={formik.values.password}
                                />
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text bl-none "
                                    id="basic-addon1"
                                  >
                                    <i className="fa fa-eye" id="eye" onClick={()=>setHide(preState=>!preState)}></i>
                                  </span>
                                </div>
                              </div>
                              {formik.errors.password ? (
                                <div style={{ color:'red' }}>{formik.errors.password}</div>
                              ) : null}
                            </div>

                            <div className="btn_submit">
                              <button 
                               type="submit"
                                // to="/lp-symtom-checker-thirteen"
                                className="btn btn-primary btn-custom btn-lg w-100"
                              >
                                See Results
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Tooth-aid problems end -->            
        <!-- Call-to-action start --> */}
        <section className="cta-section common-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form action="">
                  <h2>Become a Member</h2>
                  <p>
                    Sign up today for access to online consultations, treatments
                    and more.
                  </p>
                  <div className="d-flex justify-content-center input-mail">
                    <input
                      type="mail"
                      name="mail"
                      placeholder="Type your email here"
                    />
                    <input type="submit" name="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call-to-action end --> */}

        <footer>
          <div className="footer_upper common-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-12">
                  <div className="footer_innner-content">
                    <div className="row">
                      <div className="col-4">
                        <div className="footer-content">
                          <h3>Help</h3>
                          <p>Contact</p>
                          <p>FAQs</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="footer-content">
                          <h3>Solutions</h3>
                          <p>Treatments</p>
                          <p>Book an Online Consultation</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="footer-content">
                          <h3>Responsibility</h3>
                          <p>Service Charter</p>
                          <p> Terms & Conditions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div className="footer_iner_content_right">
                    <div className="row">
                      <div className="col-md-6 col-4 offset-md-0 offset-2">
                        <div className="footer-content">
                          <h3>Account</h3>
                          <p>Sign in</p>
                          <p>My Account</p>
                          <p>My Prescriptions</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-4">
                        <div className="footer-content">
                          <h3>Newsletter</h3>
                          <div className="d-flex justify-content-center">
                            <input
                              type="mail"
                              name="mail"
                              placeholder="Type your email here"
                            />
                            <input type="submit" name="submit" value="Submit" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_btm">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-2">
                  <div className="footer-img">
                    <a href="#">
                      <img
                        src={require("../../../assets/images/blck-logo.png")}
                        alt="logo-footer"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="copyright">
                    <p className="mb-0">
                      ©2022 Copyright ToothAid LTD. All Rights Resrved. Terms &
                      Conditions, Privacy Policy & Complaints, Cookie Policy,
                      Terms of Use, Accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer End --> */}
      </div>
    </>
  );
}
