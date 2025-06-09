import React from "react";
import blacklogo from "../../../assets/images/blck-logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

const cookies = new Cookies();
const Navbar = () => {
  const [LoginState, setLoginState] = useState(false);
  const Nevigate = useNavigate();
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    token ? setLoginState(true) : setLoginState(false);
  }, []);

  useEffect(() => {
    if (LoginState == true) {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("user");
      window.sessionStorage.removeItem("join");
      window.sessionStorage.clear();
      cookies.remove("userToken", { path: "/" });
    }
  }, [window.sessionStorage]);

  const HandleLogout = () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("join");
    window.sessionStorage.removeItem("page text");

    cookies.remove("userToken", { path: "/" });
    setLoginState(false);
    Nevigate("/");
  };
  return (
    <div className="header_main">
      <header className="position-relative">
        <div className="container-fluid p-0">
          <ul className="mb-0 d-flex justify-content-between align-items-center header_inner">
            <li>
              <Link to="/">
                <img
                  src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <button
                onClick={() => HandleLogout()}
                className="btn btn-primary white-btn mt-0 signOut_btn topbar_signout_btn"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
