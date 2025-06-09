import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function ProfiledetailsHeader() {
  return (
    <>
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/client_view">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="green-menu">
              <Nav.Link href="/Consultation" className="green-text-color">
                Consultations
              </Nav.Link>
              <Nav.Link href="#" className="green-text-color">
                My Clients
              </Nav.Link>
              <Nav.Link href="#" className="green-text-color">
                Schedule
              </Nav.Link>
              <NavLink to="/Mydetails" className="green-btn-header">
                My Account
              </NavLink>
              <NavLink
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
                className="green-menu-link logout_new"
              >
                Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      <div className="myaccount_tabcmn">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact-support">
                      Contact Support
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
