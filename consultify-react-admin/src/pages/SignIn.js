import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo-light.svg"
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AdminLogin } from "../redux/Action/SuperAdminAction";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [passHide,setPassHide]=useState(false)
  const [keepLogin,setKeepLogin]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
var cookies = new Cookies();
useEffect(() => {
  if (
    window.sessionStorage.getItem("adminToken") ||
    cookies.get("adminToken")
  ) {
    if (
      cookies.get("adminToken") &&
      !window.sessionStorage.getItem("adminToken")
    ) {
      window.sessionStorage.setItem("adminToken",cookies.get("adminToken"));
    }
    window.location.href="/all-users";
  }
}, []);
 const validate =(values)=> {
  const errors={};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.password){
    errors.password="Required"
  }else if (values.password.length < 8 || values.password.length > 10) {
    errors.password = "Invalid Password";
  }
  return errors;
}
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },   
    validate,   
    onSubmit: values => {
      dispatch(AdminLogin(values,keepLogin))
    },
  });
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="auth-full-page-content p-md-10 p-4">
            <div className="w-100">
              <div className="d-flex flex-column h-100">
                <div className="my-auto">
                  <div className="mt-4">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="titl_text mb-5">
                      <h1 className="p-color font-weight-semibold">Sign In</h1>
                      <p className="g-color fw-regular">
                        Enter your email and password to sign in!
                      </p>
                    </div>
                      <div className="mb-3">
                        <label for="username" className="form-label">
                          Email<span className="blue_text">*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          id="username"
                          placeholder="mail@simmmple.com"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && <p className="formik-error">{formik.errors.email}</p>}
                      </div>
   
                      <div className="mb-3">
                        <label className="form-label">
                          Password<span className="blue_text">*</span>{" "}
                        </label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type={passHide ? "text":"password"}
                            name="password"
                            className="form-control bright"
                            placeholder="Min.8 characters "
                            aria-label="Password"
                            aria-describedby="password-addon"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          <button
                            className="btn btn-light "
                            type="button"
                            id="password-addon"
                            onClick={()=>setPassHide((pre)=>!pre)}
                          >
                            <i className={passHide?"mdi mdi-eye-outline":"mdi mdi-eye-off-outline"}></i>
                          </button>
                        </div>
                        {formik.errors.password && <p className="formik-error">{formik.errors.password}</p>}
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-check"
                            onChange={(e)=>setKeepLogin(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            for="remember-check"
                          >
                            Keep me logged in
                          </label>
                        </div>
                        {/* <a
                          href="forgot-password.html"
                          className="font-weight-semibold"
                        >
                          Forgot password?
                        </a> */}
                      </div>

                    <div className="mt-4 d-grid">
                      <button
                         type="submit"
                        className="btn btn-primary waves-effect waves-light"
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
                <img src={"https://consultifyapp.com/static/media/logo.0b1b80e2a3f77e068f27914c8ad2f1e4.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end col --> */}
      </div>
      {/* <!-- end row --> */}
    </div>
  );
};

export default SignIn;
