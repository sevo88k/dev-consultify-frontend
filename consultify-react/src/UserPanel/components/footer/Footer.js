import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_upper common-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="footer_innner-content">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <div className="footer-content">
                        <h3>Help</h3>
                        <Link to="/contact-us">
                          <p>Contact Us</p>
                        </Link>
                        <p>FAQs</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="footer-content">
                        <h3>Solutions</h3>
                        <p>Treatments</p>
                        <p>Book an Online Consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="footer_iner_content_right">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <div className="footer-content">
                        <h3>Responsibility</h3>
                        <p>Service Charter</p>
                        <p> Terms & Conditions</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-6 ">
                      <div className="footer-content">
                        <h3>Account</h3>
                        <Link to={"/userlogin"}>
                          <p>Sign In</p>
                        </Link>
                        <p>My Account</p>
                        <p>Apply as a Dentist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="footer-content">
                  <h3>Newsletter</h3>
                  <div className="d-flex justify-content-center email-insert">
                    <input type="mail" name="mail" placeholder="Your email" />
                    <input type="submit" name="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_btm">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-2">
                <div className="footer-img">
                  <Link to="/">
                    <img
                      src={require("../../../assets/images/blck-logo.png")}
                      alt="logo-footer"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-10">
                <div className="copyright">
                  <p className="mb-0">
                    ©2022 Copyright ToothAid LTD. All Rights Reserved. Terms &
                    Conditions, Privacy Policy & Complaints, Cookie Policy,
                    Terms of Use, Accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
