import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import LpSymtomCheckerOne from "../lp_symtom_checker/LpSymtomCheckerOne";
const cookies = new Cookies();
const TopBarBlue = () => {
  const [showContent,setShowContent]=useState(false)
  const [symtomClick, setSymtomClick] = useState(false);
  const [token, setToken] = useState(false);
  const [offset, setOffset] = useState(0);
  const Navigate = useNavigate();
  const LoginPage = () => {
    Navigate("/userlogin");
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (cookies.get("userToken")) {
      setToken(cookies.get("userToken"));
    } else if (window.sessionStorage.getItem("token")) {
      setToken(window.sessionStorage.getItem("token"));
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HandleLogout = () => {
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("user");
    // sessionStorage.removeItem("join");
    // sessionStorage.removeItem("page text");

    // cookies.remove("userToken", { path: "/" });
    // setLoginState(false);
    // Navigate("/userlogin")
    if (sessionStorage.getItem("token")) {
      Navigate("/accountHome");
    }
  };

  return (
    <div>
      {/* {symtomClick == false && ( */}
        <header
          className={
            offset == 0
              ? "position-relative dark-header main_header"
              : "position-relative dark-header main_header sticky-blue-header"
          }
        >
          <div className="container-fluid padding_none">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img
                  src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </Link>
              <button
                className={showContent?"navbar-toggler collapsed" : "navbar-toggler"}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded={showContent?"true" : "false"}
                aria-label="Toggle navigation"
                onClick={()=>setShowContent((prevState) => !prevState)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={showContent?"collapse navbar-collapse" : "collapse navbar-collapsing show"} id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/userlogin">
                    Book an Online Consultation
                    </Link>
                  </li>
                  <li className="nav-item cursor_pointer">
                    <Link to="/lp-symtom-checker-one"
                      className="nav-link"
                      // onClick={() => setSymtomClick(true)}
                    >
                      Symptom Checker
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/prevention-education">
                      Prevention & Education
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
              
          
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    {token ? (
                      <button
                        onClick={() => Navigate("/accountHome")}
                        className="btn btn-primary white-btn r-btn"
                      >
                        Return to Dashboard
                      </button>
                    ) : (
                      <button
                        onClick={() => LoginPage()}
                        className="btn btn-primary white-btn"
                      >
                        Sign in
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      {/* )} */}

      {/* {symtomClick == true && <LpSymtomCheckerOne />} */}
    </div>
  );
};

export default TopBarBlue;
