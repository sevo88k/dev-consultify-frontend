import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from "react-router-dom";

const addstaff = () => {
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
                                    <div className="col-lg-12">
                                        <div className="accord_main_staff">
                                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                   Profile
                                                </button>
                                                </h2>
                                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div class="accordion-body">
                                                             <div className="account_form">
                                <form>
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <input className="form-control" placeholder="Staff Member Name" />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="logo_upload">
                                                <img src={require('../assets/img/greyrectangle.png')} alt='' />
                                                <p>Upload a Profile Picture</p>
                                            </div>

                                        </div>
                                        <div className="col-lg-12">
                                            <label for="exampleFormControlInput1" className="form-label">Bio</label>
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
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Availability
                                                </button>
                                                </h2>
                                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body"> <div className="treatment_form">
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
                                    </div></div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Services
                                                </button>
                                                </h2>
                                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                        <div class="accordion-body">
                                                            <div className="availability_set">
                                                                <ul>
                                                                    <li>
                                                                        <h3>Category - Treatment</h3>
                                                                        <div className="tick_available">
                                                                            <Nav.Link href="#" className="">Set Availability</Nav.Link>
                                                                            <div class="form-check">
                                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                      <li>
                                                                        <h3>Category - Treatment</h3>
                                                                        <div className="tick_available">
                                                                            <Nav.Link href="#" className="">Set Availability</Nav.Link>
                                                                            <div class="form-check">
                                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                      <li>
                                                                        <h3>Category - Treatment</h3>
                                                                        <div className="tick_available">
                                                                            <Nav.Link href="#" className="">Set Availability</Nav.Link>
                                                                            <div class="form-check">
                                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                      <li>
                                                                        <h3>Category - Treatment</h3>
                                                                        <div className="tick_available">
                                                                            <Nav.Link href="#" className="">Set Availability</Nav.Link>
                                                                            <div class="form-check">
                                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
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


export default addstaff;