import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const SignUp_subscription = () => {
    return (
        <div className="bg-color">

            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-main">
            <Container>
               <Navbar.Brand href="#">
                  <img src={require('../assets/img/logo-white.svg').default} alt='logo' />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="">
                     <p>Already have an account?</p>
                     <Nav.Link href="/signin" className="white-btn">Login</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
            {/* Header End */}

            {/* Subscription Start */}
            <section className="signup-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="signup-inner">
                                <h2>Choose your subscription</h2>
                                <div className="subscription-plan">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="subscription-content standard-plan">
                                                <div className="subscription-type">
                                                    <div className="subscription-img">
                                                        <img src={require('../assets/img/subscription-img.svg').default} alt='img' />
                                                    </div>
                                                    <div className="plan-type-name">
                                                        <h3>Standard</h3>
                                                        <h3>£10.00 per month</h3>
                                                    </div>
                                                </div>
                                                <ul className="plan-features">
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Unlimited searches</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Access to our entire database</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Up to 3 user logins</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Upgrade anytime</h3>
                                                    </li>
                                                </ul>
                                                <div className="submit-btn">
                                                    <Link to="/signup2" type="submit" className="lg-btn">
                                                        Choose Plan
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="subscription-content">
                                                <div className="badge">
                                                    <p>Most popular</p>
                                                </div>
                                                <div className="subscription-type">

                                                    <div className="subscription-img">
                                                        <img src={require('../assets/img/subscription-img.svg').default} alt='img' />
                                                    </div>
                                                    <div className="plan-type-name">
                                                        <h3>Pro</h3>
                                                        <h3>£20.00 per month</h3>
                                                    </div>
                                                </div>
                                                <ul className="plan-features">
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Unlimited searches</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Access to our entire database</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Unlimited User Logins</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Full Consultation Access</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Create Custom Consultations</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Manage Clients </h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Schedule Appointments</h3>
                                                    </li>
                                                    <li>
                                                        <img src={require('../assets/img/drk-tick.svg').default} alt='img' />
                                                        <h3>Host Video Consultations</h3>
                                                    </li>
                                                </ul>
                                                <div className="submit-btn">
                                                    <Link to="/signup2" type="submit" className="lg-btn">
                                                        Choose Plan
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Subscription End */}
        </div>
    )
}
export default SignUp_subscription;