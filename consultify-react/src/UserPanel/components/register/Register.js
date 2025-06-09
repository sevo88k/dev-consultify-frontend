import React, { useEffect, useState } from "react";
import user_main_logo from "../../../assets/images/logo.svg";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../../Redux/Actions/user/auth";
import * as Yup from "yup";
import { resetRegistered } from "../../../Redux/Reducers/user/RegAuthSlice";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
import { Link } from "react-router-dom";

export default function Register() {
  const isReg = useSelector((state) => state.userRegAuth.isRegistered);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [Show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [checkbox, setCheckbox] = useState({
    recieve_offers: false,
    recieve_confirmation: false,
    recieve_reminders: false,
  });

  var today = new Date().toISOString().split("T")[0];
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Enter first name";
    } else if (values.firstName.split(" ").length > 1) {
      errors.firstName = "Space not Allowed";
    } else if (!/^(?=.*[a-zA-Z])[A-Za-z0-9]+$/.test(values.firstName)) {
      errors.firstName = "Number not allowed";
    }
    if (!values.lastName) {
      errors.lastName = "Enter last name";
    } else if (values.lastName.split(" ").length > 1) {
      errors.lastName = "Space not allowed";
    } else if (!/^(?=.*[a-zA-Z])[A-Za-z0-9]+$/.test(values.lastName)) {
      errors.lastName = "Number not allow";
    }
    if (!values.email) {
      errors.email = "Enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Enter correct email";
    }
    if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password.split(" ").length > 1) {
      errors.password = "Space not allowed";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long ";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password";
    } else if (values.confirmPassword.split(" ").length > 1) {
      errors.confirmPassword = "Space not allowed";
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password doesn't match";
    }
    if (!values.dob) {
      errors.dob = "Required";
    }
    return errors;
  };
  const memberEmail = sessionStorage.getItem("Email");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: memberEmail,
      password: "",
      confirmPassword: "",
      dob: "",
    },
    validate,
    onSubmit: async (values) => {
      const responseObject = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        dob: values.dob,
        recieve_offers: checkbox.recieve_offers ? "Yes" : "No",
        recieve_confirmation: checkbox.recieve_confirmation ? "Yes" : "No",
        recieve_reminders: checkbox.recieve_reminders ? "Yes" : "No",
      };
      try {
        dispatch(startstopLoading(true));
        dispatch(userRegister(responseObject)).then((res) => {
          if (res?.payload) {
            dispatch(startstopLoading(false));
          }
        });
      } catch (error) {
        console.log("error");
      }
    },
  });

  useEffect(() => {
    if (isReg) {
      dispatch(resetRegistered());
      Navigate("/");
    }
  }, [isReg]);

  const handleCheckBoxes = (e, type) => {
    setCheckbox((prev) => {
      return { ...prev, [type]: e.target.checked };
    });
  };

  return (
    <>
      <section
        onSubmit={formik.handleSubmit}
        className="wrapper_login login_page"
      >
        <div className="container-fluid">
          <div className="container_data">
            <div className="row ">
              <div className="col-md-12">
                <div className="navbar_set ">
                  <Link to="/">
                    <img
                      src={require("../../../assets/images/logo.png")}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row login_page">
              <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 text_flex_end">
                <div className="login_desc  pb-5">
                  <h4>Our Vision:</h4>
                  <p className="mt-3">
                    Our aim is to diagnose your dental problem and get you out
                    of pain as soon as possible. Sign in to access your
                    personalised patient dashboard where you can book an online
                    consultation with a Toothaid Dentist.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div className="sign_in">
                  <form className="w-100">
                    <div className="card">
                      <div className="card-body">
                        <div className="title_signin">
                          <h1 aria-label="registerPage">Register</h1>
                          <div className="form-group mb-2 mt-4">
                            <label for="">First Name</label>
                            <input
                              name="firstName"
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              onChange={formik.handleChange}
                              value={formik.values.firstName.trim()}
                            />
                            {formik.errors.firstName ? (
                              <div className="formik-errors">
                                {formik.errors.firstName}
                              </div>
                            ) : null}
                          </div>

                          <div className="form-group mb-2">
                            <label for="">Surname</label>
                            <input
                              name="lastName"
                              type="text"
                              className="form-control"
                              placeholder="Surname"
                              onChange={formik.handleChange}
                              value={formik.values.lastName.trim()}
                            />
                            {formik.errors.lastName ? (
                              <div className="formik-errors">
                                {formik.errors.lastName}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-group mb-2">
                            <label for="">Email</label>
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                            {formik.errors.email ? (
                              <div className="formik-errors">
                                {formik.errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-group mb-2">
                            <label for="">Date of birth</label>
                            <input
                              name="dob"
                              type="date"
                              className="form-control"
                              max={today}
                              onChange={formik.handleChange}
                              value={formik.values.dob}
                            />
                            {formik.errors.dob ? (
                              <div className="formik-errors">
                                {formik.errors.dob}
                              </div>
                            ) : null}
                          </div>

                          <div className="form-group mb-2">
                            <label for="">Password</label>
                            <div className="input-group">
                              <input
                                name="password"
                                type={Show ? "text" : "password"}
                                className="form-control br-none"
                                id="password"
                                placeholder="Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={formik.handleChange}
                                value={formik?.values?.password?.trim()}
                              />
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text bl-none "
                                  id="basic-addon1"
                                >
                                  <i
                                    className={
                                      Show ? "fa fa-eye" : "fa fa-eye-slash"
                                    }
                                    id="eye"
                                    onClick={() =>
                                      setShow((prevState) => !prevState)
                                    }
                                  ></i>
                                </span>
                              </div>
                            </div>
                            {formik.errors.password ? (
                              <div className="formik-errors">
                                {formik.errors.password}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-group mb-2">
                            <label for="">Confirm Password </label>
                            <div className="input-group">
                              <input
                                name="confirmPassword"
                                type={confirmShow ? "text" : "password"}
                                className="form-control br-none"
                                id="c-password"
                                placeholder="Confirm Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={formik.handleChange}
                                value={formik?.values?.confirmPassword?.trim()}
                              />
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text bl-none "
                                  id="basic-addon1"
                                >
                                  <i
                                    className={
                                      confirmShow
                                        ? "fa fa-eye"
                                        : "fa fa-eye-slash"
                                    }
                                    id="c-eye"
                                    onClick={() =>
                                      setConfirmShow((prev) => !prev)
                                    }
                                  ></i>
                                </span>
                              </div>
                            </div>
                            {formik.errors.confirmPassword ? (
                              <div className="formik-errors">
                                {formik.errors.confirmPassword}
                              </div>
                            ) : null}
                            <div className="form-group mb-2 mt-3">
                              <div className="d-flex checkbox_input">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={(e) =>
                                    handleCheckBoxes(e, "recieve_offers")
                                  }
                                />
                                <p className="mb-0 ms-2">
                                  Recieve offers and new information about
                                  ToothAid
                                </p>
                              </div>
                              <div className="d-flex checkbox_input">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={(e) =>
                                    handleCheckBoxes(e, "recieve_confirmation")
                                  }
                                />
                                <p className="mb-0 ms-2">
                                  Recieve appointment confirmation
                                </p>
                              </div>
                              <div className="d-flex checkbox_input">
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  onChange={(e) =>
                                    handleCheckBoxes(e, "recieve_reminders")
                                  }
                                />
                                <p className="mb-0 ms-2">
                                  Recieve appointment reminders
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="btn_submit mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-custom btn-lg w-100"
                            >
                              Register
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
