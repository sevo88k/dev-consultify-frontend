import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const connectpatch = () => {
  return (
    <div className="mydetails connect-patch">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/Search">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              // src={require("../../assets/img/consultify-black-logo.svg").default}
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
              <Nav.Link href="/Myaccount" className="green-btn-header">
                My Account
              </Nav.Link>
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
                    <Link className="nav-link" to="/Myaccount">
                      Salon Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Mydetails">
                      My Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Booking_settings">
                      Booking Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact-preferences">
                      Contact Preferences
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/My-subscription">
                      My Subscription
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/invoice">
                      Invoices
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Password-security">
                      Password & Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="tabs_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="you_know">
                <h2>Did you know?</h2>
                <p>You can now connect your PatchPort profile to Consultify!</p>
                <p>
                  Just add your Key from your PatchPort profile to Consultfiy
                  and you and your salons will be able to access your patch
                  tests.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="account_form">
                <form>
                  <h2>Secret Key</h2>
                  <div className="row justify-content-between;">
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        placeholder="Add your PatchPort Secret Key"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="submit-btn">
                        <Link to="/Booking_settings" class="btn mb-3">
                          Create
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connectpatch;
