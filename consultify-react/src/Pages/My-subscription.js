import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


const mysubscription = () => {
    return (

        <div className="Booking_main">
            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-blck">
                <Container>
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="green-menu">
                            <Nav.Link href="/Consultation" className="green-text-color">Consultations</Nav.Link>
                            <Nav.Link href="#" className="green-text-color">My Clients</Nav.Link>
                            <Nav.Link href="#" className="green-text-color">Schedule</Nav.Link>
                            <Nav.Link href="/Myaccount" className="green-btn-header">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Header End */}

            <div className="myaccount_tabcmn">
                <div className="container" >
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Myaccount">Salon Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                         <Link className="nav-link" to="/Mydetails">My Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Booking_settings">Booking Settings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contact-preferences">Contact Preferences</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/My-subscription">My Subscription</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/invoice">Invoices</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Password-security">Password & Security</Link>
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
                        <div className="col-lg-4">
                            <div className="you_know">
                                <h2>Did you know?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. </p>
                            </div>
                        </div>
                       <div className="col-lg-4">
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
                                        <div className="col-lg-4">
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
    )


}
export default mysubscription;