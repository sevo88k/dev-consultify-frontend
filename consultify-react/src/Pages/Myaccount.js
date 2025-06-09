import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Myaccount = () => {
    return (

        <div className="salon_profile">
            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-blck" >
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
                        <div className="col-lg-3">
                            <div className="aside">
                                <ul>
                                    <li><Link to="/Myaccount">Salon Profile</Link></li>
                                    <li><Link to="/Opening-hours">Opening Hours</Link></li>
                                    <li><Link to="/Manage-treatments">Treatments</Link></li>
                                    <li><Link to="/Treatement-availability">Treatment Availability</Link></li>
                                    <li><Link to="/Staff-overview">Staff Members</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="account_form">
                                <form>
                                    <h2>Salon Profile</h2>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control" placeholder="Salon Name" />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="logo_upload">
                                                <img src={require('../assets/img/greyrectangle.png')} alt='' />
                                                <p>Upload a Logo</p>
                                            </div>

                                        </div>
                                        <div className="col-lg-12">
                                            <label for="exampleFormControlInput1" className="form-label">Salon Description</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                        <div className="col-lg-3">
                                            <input className="form-control" placeholder="Post Code" />
                                        </div>
                                        <div className="col-lg-9">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Confirm Address</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <input className="form-control" placeholder="Website URL" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input className="form-control" placeholder="Contact Number" />
                                        </div>
                                        <div className="col-lg-6">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Parking Availability</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Child Friendly</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <label for="exampleFormControlInput1" className="form-label">Any Other Amenities? (Optional) </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" class="btn mb-3">Update</button>
                                        </div>
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


export default Myaccount;