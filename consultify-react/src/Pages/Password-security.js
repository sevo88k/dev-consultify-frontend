import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



const passsecurity = () => {
    return (

        <div className="mydetails">
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
                        <div className="col-lg-5">
                            <div className="you_know">
                                <h2>Did you know?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="account_form pass_security">
                                <form>
                                    <div>
                                    <h2>Update Password</h2>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input className="form-control" type="number" placeholder="Old Password *" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className="form-control" type="number" placeholder="New Password *" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className="form-control" type="number" placeholder="Re-Enter New Password *" />
                                            </div>
                                            </div>
                                    </div>
                                    <div className="submit-btn">
                                            <button type="submit" class="btn mb-3">Update</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default passsecurity;