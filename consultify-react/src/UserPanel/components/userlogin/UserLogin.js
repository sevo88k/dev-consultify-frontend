import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import user_main_logo from "../../../assets/images/logo.svg";
import { userLogin } from "../../../Redux/Actions/user/auth";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useFormik } from "formik";
import { rememberMe } from "../../../Redux/Reducers/user/authSlice";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
export default function UserLogin() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [ShowPass, setShowPass] = useState(false);
  useEffect(() => {
    if (window.sessionStorage.getItem("token") || cookies.get("userToken")) {
      if (cookies.get("userToken") && !window.sessionStorage.getItem("token")) {
        window.sessionStorage.setItem("token", cookies.get("userToken"));
        window.sessionStorage.setItem("user", cookies.get("user"));
        window.sessionStorage.setItem("join", cookies.get("join"));
        window.location.href = "/accountHome";
      }
    }
  }, []);
  const clickToRegister = () => {
    Navigate("/register");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Enter correct email";
    }
    if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password.split(" ").length > 1) {
      errors.password = "Space not Allowed";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long ";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        dispatch(startstopLoading(true));
        await dispatch(userLogin(values)).then((res) => {
          if (res?.payload) {
            dispatch(startstopLoading(false));
          }
        });
      } catch (error) {
        console.log(error);
      }
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
                  <Link to="/">
                    {/* <img src={user_main_logo} alt="logo" /> */}
                    <img
                      src={require("../../../assets/images/logo.png")}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row login_reverse">
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
                  <form onSubmit={formik.handleSubmit} className="w-100">
                    <div className="card">
                      <div className="card-body">
                        <div className="title_signin">
                          <h1>Nice to see you again</h1>
                          <div className="form-group mb-3 mt-4">
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
                              <p style={{ color: "red" }}>
                                {formik.errors.email}
                              </p>
                            ) : null}
                          </div>

                          <div className="form-group mb-3">
                            <label for="">Password</label>
                            <div className="input-group">
                              <input
                                name="password"
                                type={ShowPass ? "text" : "password"}
                                className="form-control br-none"
                                id="password"
                                placeholder="Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={formik.handleChange}
                                value={formik.values.password.trim()}
                              />

                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text bl-none "
                                  id="basic-addon1"
                                >
                                  <i
                                    className={
                                      ShowPass ? "fa fa-eye" : "fa fa-eye-slash"
                                    }
                                    id="eye"
                                    onClick={() =>
                                      setShowPass((prevState) => !prevState)
                                    }
                                  ></i>
                                </span>
                              </div>
                            </div>
                            {formik.errors.password ? (
                              <div style={{ color: "red", fontSize: "12px" }}>
                                {formik.errors.password}
                              </div>
                            ) : null}
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="custom-control custom-switch">
                                <input
                                  onChange={(e) =>
                                    dispatch(rememberMe(e.target.checked))
                                  }
                                  aria-label="checkbox"
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customSwitch1"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customSwitch1"
                                  id="label"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div className="frgt-pw">
                              <Link to="/forget-password">
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <div className="btn_submit mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-custom btn-lg w-100"
                            >
                              Sign In
                            </button>
                          </div>

                          <div className="regs_tody">
                            <h2>Not a member?</h2>
                            <div className="regist_tody">
                              <button
                                aria-label="registerToday"
                                onClick={() => clickToRegister()}
                                className="btn btn-primary btn-custom-border btn-lg w-100"
                              >
                                Register Today
                              </button>
                            </div>
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
