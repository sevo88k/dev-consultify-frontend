import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const videoconsultation = () => {

    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    return (

        <div className="result_view">
            {/* Header Start */}
            <Navbar expand="lg" className={scroll ? "bg-body-tertiary header-blck active" : "bg-body-tertiary header-blck"} >
                <Container>
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


            <section className="product_view" >
                <div className="container custom">
                    <div className="productmain_wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="prev_main">
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                                    <a class="prev_result" href="#">
                                        Back to search results
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="user_info bod_cmn">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src={require('../assets/img/logo-circle.png')} alt='arrow' className="logo-main" />
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="client_cmn_heading">Sarah Jones Smith</h2>
                                            <p>71-75 Shelton Street
                                                Covent Garden
                                                London<br />
                                                SW18 1TY</p>
                                            <p>sarah@sarahjones.com</p>
                                            <p>+447380 605060</p>
                                            <p>Age: 36   (23/07/1986)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tests bod_cmn">
                                    <h2 className="client_cmn_heading">Appointment Details</h2>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <td className="text-left">Eyebrow Tinting</td>
                                                <td className="text-left">01/02/2024</td>
                                                <td className="text-left">09:00am</td>
                                            </tr>
                                           
                                        </table>
                                 <div className="mt-4 d-flex justify-content-center">
                                            <button className="submit_big_button">Reschedule?</button>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="video_sec">
                                     <img src={require('../assets/img/bigrectangle.png')} alt='' />
                                </div>
                                  <div className="mt-4 d-flex justify-content-center">
                                            <button className="submit_big_button">Start</button>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
export default videoconsultation;
