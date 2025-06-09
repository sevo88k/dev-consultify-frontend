import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const clientview = () => {

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
                                    <h2 className="client_cmn_heading">Active Patch Tests</h2>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <th className="pl-5">Treatment Type</th>
                                                <th className="text-left">Expiry</th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td className="text-left">Eyebrow Tinting</td>
                                                <td className="text-left">01/02/2024</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td className="text-left">Eyebrow Tinting</td>
                                                <td className="text-left">Expired</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                                <div className="invoices bod_cmn">
                                    <Nav.Link href="/send_consulation">New +</Nav.Link>
                                    <h2 className="client_cmn_heading">Invoices</h2>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                            <tr>
                                                <td className="text-left">10/08/2023</td>
                                                <td className="text-left">Booking Deposit</td>
                                                <td className="text-left"><Nav.Link href="#" className="d-cont">£15.00</Nav.Link></td>
                                                {/* <td><img src={require('../assets/img/Remove_duotone.png')} alt='arrow' /></td> */}
                                                <td><img src={require('../assets/img/Done_duotone.png')} alt='arrow' /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-left">21/09/2023</td>
                                                <td className="text-left">No Show Fee</td>
                                                <td className="text-left"><Nav.Link href="#" className="d-cont">£55.00</Nav.Link></td>
                                                <td><img src={require('../assets/img/Done_duotone.png')} alt='arrow' /></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="schedule bod_cmn">
                                    <div className="schedule_top">
                                        <h2 className="client_cmn_heading">Upcoming Schedule</h2>
                                        <div className="buttnm">
                                            <Nav.Link href="/send_consulation">New Appointment</Nav.Link>
                                            <Nav.Link href="#">New Consultation</Nav.Link>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <td>30/11/2023  10:00am</td>
                                                <td className="text-left">Eyelash Extensions Infill (Classic)</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>30/11/2023  09:15am</td>
                                                <td className="text-left">Brow Lamination</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>09/11/2023 16:00pm</td>
                                                <td className="text-left">Eyelash Extensions (Classic)</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>25/10/2023  14:00pm</td>
                                                <td className="text-left">Brow Wax and Tint</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                                <div className="appointment bod_cmn">
                                    <div className="schedule_top">
                                        <h2 className="client_cmn_heading">Appointment History</h2>
                                    </div>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <td>16/10/2023  14:30pm</td>
                                                <td className="text-left">Gel Manicure - Treatment</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>21/09/2023  12:00pm</td>
                                                <td className="text-left">Brow Lamination</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>15/09/2023  10:00am</td>
                                                <td className="text-left">Gel Manicure</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                            <tr>
                                                <td>17/08/2023  13:00pm</td>
                                                <td className="text-left">Brow Wax and Tint</td>
                                                <td>Treatment</td>
                                                <td><Nav.Link href="#">View</Nav.Link></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div>

    )
}
export default clientview;
