import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const searchresult = () => {

    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])

    return (
        <div className="resultbanner_main">

            {/* Header Start */}
            < Navbar expand="lg" className={scroll ? "bg-body-tertiary header-blck active" : "bg-body-tertiary header-blck"} >
                <Container className="custom">
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center">
                            <Nav.Link href="/Consultation">Consultations</Nav.Link>
                            <Nav.Link href="#">My Clients</Nav.Link>
                            <Nav.Link href="#">Schedule</Nav.Link>
                            <Nav.Link href="#" className="white-btn">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Header End */}

            <section className="search_result">
                <div className="container custom">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-grp d-flex justify-content-between align-items-end">
                                <div className="search-input result">
                                    <img src={require('../../src/assets/img/search.svg').default} alt='banner' className="img-fluid" />
                                    <input type="search" placeholder="Prednisolone" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Nav.Link href="/Detail-screen"><div className="searchresult_inner">
                            <h2 className="hdng">Prednisolone</h2>
                            <h6 className="sub_hdng">Medication</h6>
                            <p>Prednisolone is a corticosteroid, a steroid hormone used to treat certain types of allergies, inflammatory conditions, autoimmune disorders, and cancers.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li> <Nav.Link href="/Detail-screen">Side Effects (5)</Nav.Link></li>
                                    {/* <li><Nav.Link href="/Detail-screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Medical Conditions (10)</Nav.Link></li> */}
                                </ul>
                            </div>
                        </div>
                        </Nav.Link>
                    </div>
                    {/* <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/Detail-screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/Detail-screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/Detail-screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/Detail-screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                </div>

            </section >
        </div >

    )
};

export default searchresult;