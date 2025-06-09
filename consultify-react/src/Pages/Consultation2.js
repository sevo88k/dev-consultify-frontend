import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Consultation2 = () => {
    return (
        <div className="banner-section">
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

            {/* Forum Start */}
            <section className="categories">
                <div class="container">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="category-detail">
                                    <h3>Forum Category Goes Here</h3>
                                    <p>10 Topics</p>
                                    <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                        View All Topics
                                        <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="category-detail">
                                    <h3>Forum Category Goes Here</h3>
                                    <p>10 Topics</p>
                                    <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                        View All Topics
                                        <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="category-detail">
                                    <h3>Forum Category Goes Here</h3>
                                    <p>10 Topics</p>
                                    <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                        View All Topics
                                        <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="category-detail">
                                    <h3>Forum Category Goes Here</h3>
                                    <p>10 Topics</p>
                                    <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                        View All Topics
                                        <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="category-detail">
                                <h3>Forum Category Goes Here</h3>
                                <p>10 Topics</p>
                                <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                View All Topics
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category-detail">
                                <h3>Forum Category Goes Here</h3>
                                <p>10 Topics</p>
                                <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                View All Topics
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category-detail">
                                <h3>Forum Category Goes Here</h3>
                                <p>10 Topics</p>
                                <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                View All Topics
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category-detail">
                                <h3>Forum Category Goes Here</h3>
                                <p>10 Topics</p>
                                <Link to="/SignUp-subscription" type="submit" className="lg-btn">
                                View All Topics
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Forum End */}
        </div>
    )
}
export default Consultation2