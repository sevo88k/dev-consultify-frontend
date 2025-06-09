import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../../../Redux/Actions/admin/auth";
import admin_logo_login from "../../../../assets/images/logo-light.svg";
import Cookies from "universal-cookie";
import { keepMeLoggedIn } from "../../../../Redux/Reducers/admin/authSlice";
import {
  toastError,
  toastSuccess,
} from "../../../../Redux/Reducers/admin/adminPanelSlice";

export default function Login() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.sessionStorage.getItem("token") || cookies.get("admintoken")) {
      if (
        cookies.get("admintoken") &&
        !window.sessionStorage.getItem("token")
      ) {
        window.sessionStorage.setItem("token", cookies.get("admintoken"));
        window.sessionStorage.setItem("user", cookies.get("user"));
        window.sessionStorage.setItem("join", cookies.get("join"));
        window.sessionStorage.setItem("cid", cookies.get("cid"));
        // navigate("/admin/dashboard");
        window.location.href = "/admin/dashboard";
      }
    }
  }, []);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long";
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
        // dispatch(startstopLoading(true));
        await dispatch(adminLogin(values)).then((res) => {
          if (res.payload.success) {
            if (res.payload.user.role == "admin") {
              navigate(`/verifyotp/${res.payload.user._id}`);
              toastSuccess(res.payload.message);
            }
          }
          if (res.payload.success) {
            toastError(res.payload.message);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <div className="bg-grey-admin">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-page-content p-md-4 p-4 h-100">
                <div className="w-100 h-100">
                  <div className="d-flex flex-column h-100">
                    <div className="my-auto mx-width">
                      <div className="mt-4">
                        <div className="titl_text mb-5">
                          <h1 className="blue-heading-admin">Sign In</h1>
                          <p className="g-color fw-regular">
                            Enter your email and password to sign in!
                          </p>
                        </div>
                        <form
                          className="login-from-p"
                          onSubmit={formik.handleSubmit}
                        >
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label ">
                              Email<span className="blue_text">*</span>
                            </label>
                            <input
                              name="email"
                              onChange={formik.handleChange}
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="example@mail.com"
                              value={formik.values.email}
                            />
                            {formik.errors.email ? (
                              <p style={{ color: "red" }}>
                                {formik.errors.email}*
                              </p>
                            ) : null}
                          </div>

                          <div className="mb-3 ">
                            <label htmlFor="username" className="form-label ">
                              Password<span className="blue_text">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                onChange={formik.handleChange}
                                name="password"
                                type={show ? "text" : "password"}
                                className="form-control br-none"
                                id="password"
                                placeholder="Min.8 characters "
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={formik.values.password}
                              />

                              <button
                                onClick={() => setShow((prevVal) => !prevVal)}
                                className="btn btn-light "
                                type="button"
                                id="password-addon"
                              >
                                <i
                                  className={
                                    show
                                      ? "mdi mdi-eye-off-outline"
                                      : "mdi mdi-eye-outline"
                                  }
                                ></i>
                              </button>
                            </div>
                            {formik.errors.password ? (
                              <p style={{ color: "red" }}>
                                {formik.errors.password}*
                              </p>
                            ) : null}
                          </div>

                          <div className="d-flex justify-content-between check-login mb-3">
                            <div className="form-check ">
                              <input
                                onChange={(e) =>
                                  dispatch(keepMeLoggedIn(e.target.checked))
                                }
                                className="form-check-input"
                                type="checkbox"
                                id="remember-check"
                              />
                              <label
                                className="form-check-label light-green-text"
                                htmlFor="remember-check"
                              >
                                Keep me logged in
                              </label>
                            </div>
                            {/* <Link
                              id="adminForgotLink"
                              to="/adminforgotPassword"
                              className="font-weight-semibold blue-color-font"
                            >
                              Forgot password?
                            </Link> */}
                          </div>
                          <div className="mt-4 d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary-admin"
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-bg bg-black pt-lg-5 p-4">
                <div className="bg-overlay">
                  <div className="new_logo">
                    <img src={admin_logo_login} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container-fluid --> */}
      </div>
    </div>
  );
}
