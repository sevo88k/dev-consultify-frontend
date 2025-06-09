import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from "react-router-dom";

const staffoverview = () => {
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
                            <div className="staff_over">
                                <div className="top_bar_staff">
                                    <div className="row">
                                        <div className="col-lg-6">
                                             <div className="search-input">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="group-box-search">
                                        <img src={require('../assets/img/search.svg').default} alt='search' />
                                    </InputGroup.Text>
                                    <Form.Control placeholder="Search here" />
                                </InputGroup>
                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-end">
                                            <Nav.Link href="/Myaccount" className="green-btn">Add</Nav.Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-3">
                                        <NavLink to="/Addedit-staff">
                                        <div className="staff_profile">
                                            <div className="profile_left">
                                                <img src={require('../assets/img/circle.png')} alt='' />
                                                <div className="staff_data">
                                                    <h3>Sarah Jane</h3>
                                                    <p>Created: 23/09/2023</p>
                                                </div>
                                            </div>
                                            <img src={require('../assets/img/Expand_left.png')}/>
                                            </div>
                                            </NavLink>
                                    </div>
                                     <div className="col-lg-12 mt-2">
                                        <NavLink to="/Addedit-staff">
                                        <div className="staff_profile">
                                            <div className="profile_left">
                                                <img src={require('../assets/img/circle.png')} alt='' />
                                                <div className="staff_data">
                                                    <h3>Sarah Jane</h3>
                                                    <p>Created: 23/09/2023</p>
                                                </div>
                                            </div>
                                            <img src={require('../assets/img/Expand_left.png')}/>
                                            </div>
                                            </NavLink>
                                    </div>
                                     <div className="col-lg-12 mt-2">
                                        <NavLink to="/Addedit-staff">
                                        <div className="staff_profile">
                                            <div className="profile_left">
                                                <img src={require('../assets/img/circle.png')} alt='' />
                                                <div className="staff_data">
                                                    <h3>Sarah Jane</h3>
                                                    <p>Created: 23/09/2023</p>
                                                </div>
                                            </div>
                                            <img src={require('../assets/img/Expand_left.png')}/>
                                            </div>
                                            </NavLink>
                                    </div>
                                </div>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
       

    )
}


export default staffoverview;