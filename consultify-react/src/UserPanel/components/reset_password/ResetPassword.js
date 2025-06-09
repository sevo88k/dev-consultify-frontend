import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import user_main_logo from "../../../assets/images/logo.svg";
import { resetPassword } from "../../../Redux/Actions/user/auth";
import { toastError } from "../../../Redux/Reducers/admin/adminPanelSlice";
export default function ResetPassword() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.password === password.confirmPassword) {
      dispatch(resetPassword({ password: password.password, resetToken })).then(
        navigate("/userlogin")
      );
    } else {
      toastError("Passwords doesn't match");
    }
  };
  return (
    <>
      <section className="wrapper_login login_page">
        <div className="container-fluid">
          <div className="container_data">
            <div className="row ">
              <div className="col-md-12">
                <div className="navbar_set">
                  <a href="/">
                    <img
                      src={require("../../../assets/images/logo.png")}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row ">
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
                  <form onSubmit={handleSubmit} className="w-100">
                    <div className="card">
                      <div className="card-body">
                        <div className="title_signin">
                          <h1>Reset Password</h1>

                          <div className="form-group mb-3 mt-4">
                            <label for="">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              minLength={8}
                              name="password"
                              value={password.password}
                              onChange={handleChange}
                              required={true}
                            />
                          </div>
                          <div className="form-group mb-3 ">
                            <label for="">Confirm Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              minLength={8}
                              name="confirmPassword"
                              value={password.confirmPassword}
                              onChange={handleChange}
                              required={true}
                            />
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
