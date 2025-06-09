import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = ({ pages, type }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      {localStorage.getItem("name") == null ? (
        <Navbar expand="lg" className="bg-body-tertiary border_btm ">
          <Container>
            <Link to="/client_view" className="navbar-brand">
              <img
                src={require("../../assets/img/logo.svg").default}
                alt="logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="green-menu">
                <Link to="/signup" className="green-btn-header">
                  Log in / Register
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          expand="lg"
          className={
            pages
              ? scroll
                ? "bg-body-tertiary header-blck "
                : "green_header bg-body-tertiary header-blck "
              : scroll
              ? "bg-body-tertiary header-blck "
              : "green_header bg-body-tertiary header-blck"
          }
        >
          <Container>
            <Link to="/client_view">
              <img
                className="main-logo"
                // src={require("../../assets/img/newconsultlogo.webp")}
                src={require("../../assets/img/consultify-black-logo.svg").default}
                alt="logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end align-items-center"
            >
              <Nav className="green-menu">
                {/* <Link to="/SalonSearch" className="green-menu-link">
                  Find a Salon
                </Link> */}
                <Link to="/schedule" className="head-link">
                  {" "}
                  <img src={require("../../assets/img/calendor.svg").default} />
                </Link>{" "}
                <Link to="/Mydetails" className="green-btn-header">
                  My Account
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {type == "details" && (
        <div className="myaccount_tabcmn mydetailsmargin">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Mydetails">
                        My Details
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Contact-preferences">
                        Contact Preferences
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/invoice">
                        Invoices
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Password-security">
                        Password & Security
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Password-security">
                        Integrations
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Contact-support">
                        Contact Support
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                        className="nav-link"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
