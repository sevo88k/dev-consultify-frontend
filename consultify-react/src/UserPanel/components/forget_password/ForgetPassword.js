import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user_main_logo from "../../../assets/images/logo.svg";
import { sendEmail } from "../../../Redux/Actions/user/auth";
import { useFormik } from "formik";

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     dispatch(sendEmail(email)).then(navigate("/userlogin"));
  //   }
  // };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: async (values) => {
      const email=values.email
      console.log(email);
     await dispatch(sendEmail(email)).then(navigate("/userlogin"))
    },
  });
  return (
    <>
      <section className="wrapper_login login_page">
        <div className="container-fluid">
          <div className="container_data">
            <div className="row ">
              <div className="col-md-12">
                <div className="navbar_set ">
                  <a href="/">
                    <img
                      src={require("../../../assets/images/logo.png")}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row login_page">
              <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 text_flex_end">
                <div className="login_desc  pb-5">
                  <h4>Our Vision:</h4>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div className="sign_in">
                  <form onSubmit={formik.handleSubmit} className="w-100">
                    <div className="card">
                      <div className="card-body">
                        <div className="title_signin">
                          <h1>Forgot Password</h1>

                          <div className="form-group mb-3 mt-4">
                            <label for="">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                              // onChange={(e) => setEmail(e.target.value)}
                              // required={true}
                              value={formik.values.email}
                              onChange={formik.handleChange}
                            />
                            {formik.errors.email && (
                              <p className="formik-errors">
                                {formik.errors.email}
                              </p>
                            )}
                          </div>

                          <div className="btn_submit mt-5">
                            <button
                              type="submit"
                              className="btn btn-primary btn-custom btn-lg w-100"
                            >
                              Submit
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
    </>
  );
}
