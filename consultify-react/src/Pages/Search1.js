import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Search = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])
    return (
        <div className="banner-section">
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
                            <Nav.Link href="/MyClient">My Clients</Nav.Link>
                            <Nav.Link href="#">Schedule</Nav.Link>
                            <Nav.Link href="/Myaccount" className="white-btn">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Header End */}

            {/* banner Start */}
            <section className=" ">
                <div className="container custom">
                    <div className="banner-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-title">
                                    <h1 className="mb-0">Treatment<br />& Diagnosis Search</h1>
                                    <h3 className="grey-text">Search for Treatments, Diagnosis, Products & More.... </h3>
                                    <div className="form-grp d-flex justify-content-between align-items-end">
                                        <div className="search-input">
                                            <img src={require('../../src/assets/img/search.svg').default} alt='banner' className="img-fluid" />
                                            <input type="search" placeholder="Type here.." className="form-control" />
                                        </div>
                                        <div className="search-btn">
                                            <Nav.Link href="/search_results" className="med-btn">Search</Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="banner-img">
                                    <img src={require('../../src/assets/img/banner.webp')} alt='banner' className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner Start */}

            <div className="view-form">
                <div className="container custom">
                    <div className="row">
                        <div className="col-lg-12 justify-content-end d-flex">
                            <Link to="/SignUp-subscription" type="submit" className="view-forum-inner">
                                View Our Forum
                                <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Search