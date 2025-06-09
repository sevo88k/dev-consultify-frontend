import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const managetreatment = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                            <div className="treatement">
                                <div className="main_medicine">
                                    <div className="medi_buttons">
                                    <div className="madeicine_inner">
                                    <p>Botox Injections</p>
                                    <img src={require('../assets/img/Expand_left.png')} alt='' />
                                    </div>
                                    <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                        </div>
                                    </div>
                                    
                                    <ul>
                                        
                                        <li><div className="medi_symptoms"><p>Frown Lines</p><p>£55.00</p></div><div className="edit_btns">
                                            <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                        </div>
                                            </li>
                                        <li><div className="medi_symptoms"><p>Frown Lines</p><p>£55.00</p></div><div className="edit_btns">
                                            <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                            <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                        </div>
                                            </li>
                                   </ul>
                                </div>
                                   <div className="main_medicine">
                                    <div className="medi_buttons">
                                    <div className="madeicine_inner">
                                    <p>Dental</p>
                                    <img src={require('../assets/img/Expand_left.png')} alt='' />
                                    </div>
                                    <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                            <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                             <button  onClick={handleShow}><img src={require('../assets/img/add.png')} alt='' /></button>
                                        </div>
                                    </div>
                                    
                                    <ul>
                                        
                                        <li><div className="medi_symptoms"><p>Teeth Whitening</p><p>£55.00</p></div><div className="edit_btns">
                                            <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                        </div>
                                        </li>
                                         <li><div className="medi_symptoms"><p>Alignment</p><p>£55.00</p></div><div className="edit_btns">
                                            <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                 <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                        </div>
                                            </li>
                                        <li><div className="medi_symptoms"><p>Alignment</p><p>£55.00</p></div><div className="edit_btns">
                                            <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                            <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                             <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                        </div>
                                            </li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
      
                   <Modal show={show} onHide={handleClose}>
                     <Modal.Header>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body><div class="form-group">
    
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Save
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
                </Modal>
                </div>
        
        
       
    )
}


export default managetreatment;