import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
const treatementavailability = () => {
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
                            <div className="treatment_available_main">
                                <div className="row">
                                    <div className="col-lg-10">
                                <div className="treatment_tab">
                                    <div className="treatement_inner">
                                    <h3>Allow staff to manage treatment availabiltity?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum est leo, at pharetra libero pulvinar sed. Nullam nec erat et enim dictum fringilla.</p>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex justify-content-end">
                                  <div className="right">
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                    />
                                                </Form>
                                            </div>   
                                    </div>
                                    
                                    </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-12">
                                        <div className="treatment_form">
                                            <div className="treatement_form_header">
                                            <h2>Category - Treatment</h2>
                                            <div className="right_head">
                                                <p>Same as Salon Opening Hours</p>
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                    />
                                                </Form>
                                            </div>
                                        </div>
                                        <form className="treat_form">
                                             <div className="row">
                                        <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 
                                            </div>
                                            </div>
                                        </div>
                                          <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                           
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>

                                        
                                        <div className="submit-btn">
                                            <button type="submit" class="btn mb-3">Update</button>
                                        </div>
                                    </div>
                                        </form>
                                    </div>

                                    <div className="treatment_form">
                                            <div className="treatement_form_header">
                                            <h2>Category - Treatment</h2>
                                            <div className="right_head">
                                                <p>Same as Salon Opening Hours</p>
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                    />
                                                </Form>
                                            </div>
                                        </div>
                                        <form className="treat_form">
                                             <div className="row">
                                        <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 
                                            </div>
                                            </div>
                                        </div>
                                          <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                           
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>

                                        
                                        <div className="submit-btn">
                                            <button type="submit" class="btn mb-3">Update</button>
                                        </div>
                                    </div>
                                        </form>
                                    </div>

                                    <div className="treatment_form">
                                            <div className="treatement_form_header">
                                            <h2>Category - Treatment</h2>
                                            <div className="right_head">
                                                <p>Same as Salon Opening Hours</p>
                                                <Form>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                    />
                                                </Form>
                                            </div>
                                        </div>
                                        <form className="treat_form">
                                             <div className="row">
                                        <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 
                                            </div>
                                            </div>
                                        </div>
                                          <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                                </select>
                                                
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>8:00am</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                             <select class="form-select" aria-label="Default select example">
                                            <option selected>18:00pm</option>
                                            <option value="1">8:00am</option>
                                            <option value="2">8:00am</option>
                                            <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                           
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
                                        </div>
                                         <div className="col-lg-12">
                                            <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable"/>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                            </div>
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
                </div>
            </div>
       

    )
}


export default treatementavailability;