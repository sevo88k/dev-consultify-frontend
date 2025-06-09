import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const completedconsultation = () => {
    return (
        <div className="completed_consultaion">
            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-blck">
                <Container>
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="">
                            <Nav.Link href="/Consultation">Consultations</Nav.Link>
                            <Nav.Link href="#">My Clients</Nav.Link>
                            <Nav.Link href="#">Schedule</Nav.Link>
                            <Nav.Link href="#" className="white-btn">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Header End */}



            {/* tab-links */}
            <section className="tab-links">
                <div className="container">
                    <ul>
                        <li>
                            <Nav.Link href="/consultation" className="px-0">New Consultation</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#">Completed Consultations</Nav.Link>
                        </li>
                    </ul>
                </div>
            </section>
            {/* tab-links */}


            {/* search header */}
            <section className="search-header">
                <div className="container">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="search-input">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="group-box-search">
                                        <img src={require('../assets/img/search.svg').default} alt='search' />
                                    </InputGroup.Text>
                                    <Form.Control placeholder="Search for a Title or Client" />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="search-input">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="group-box-search">
                                        <img src={require('../assets/img/search.svg').default} alt='dd/mm/yyyy - dd/mm/yyyy' />
                                    </InputGroup.Text>
                                    <Form.Control placeholder="dd/mm/yyyy - dd/mm/yyyy" />
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <section className="search-list-part">
                <div className="container">
                    <div className="search-list-box">
                        <Row className="d-flex align-items-center">
                            <Col xs={12} md={7}>
                                <div className="search-content-left">
                                    <h2>Pre-Botox Injections Consultation</h2>
                                    <div className="sub-heading">Completed by: Lauren Jones Smith</div>
                                    <p>Pre-Botox Questionnaire including medical history for new patients.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <div className="search-content-right">
                                    <Nav.Link href="#" className="white_btn">Completed: 30/08/2023</Nav.Link>
                                    <Nav.Link href="/consultation_form" role="button" data-rr-ui-event-key="#" className="white-btn-back nav-link" tabindex="0">View</Nav.Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="search-list-box">
                        <Row className="d-flex align-items-center">
                            <Col xs={12} md={7}>
                                <div className="search-content-left">
                                    <h2>Pre-Botox Injections Consultation</h2>
                                    <div className="sub-heading">Completed by: Lauren Jones Smith</div>
                                    <p>Pre-Botox Questionnaire including medical history for new patients.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <div className="search-content-right">
                                    <Nav.Link href="#" className="white_btn">Completed: 30/08/2023</Nav.Link>
                                    <Nav.Link href="/consultation_form" role="button" data-rr-ui-event-key="#" className="white-btn-back nav-link" tabindex="0">View</Nav.Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="search-list-box">
                        <Row className="d-flex align-items-center">
                            <Col xs={12} md={7}>
                                <div className="search-content-left">
                                    <h2>Pre-Botox Injections Consultation</h2>
                                    <div className="sub-heading">Completed by: Lauren Jones Smith</div>
                                    <p>Pre-Botox Questionnaire including medical history for new patients.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <div className="search-content-right">
                                    <Nav.Link href="#" className="white_btn">Completed: 30/08/2023</Nav.Link>
                                    <Nav.Link href="/consultation_form" role="button" data-rr-ui-event-key="#" className="white-btn-back nav-link" tabindex="0">View</Nav.Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

        </div>


    )
}


export default completedconsultation;