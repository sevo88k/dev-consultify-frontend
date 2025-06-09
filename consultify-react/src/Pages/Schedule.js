    import React from "react";
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';


    const schedule = () => {


        return (

            <div className="result_view">
                {/* Header Start */}
                <Navbar expand="lg" className="bg-body-tertiary header-blck" >
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


                <section>
                    <div className="container">
                        <div className="schedule_main salon">
                            <div className="sch_heading">
                                <h2>Calendar</h2>
                                <button className="appointment" type="button">New Appointment</button>
                                </div>
                        <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-3">
                                        <div className="select_box">
                                    <select class="form-select" aria-label="Default select example">
                                    <option selected>All Staff</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                </div>
                                        </div>
                                            <div className="col-lg-3">
                                        <div className="select_box">
                                    <select class="form-select" aria-label="Default select example">
                                    <option selected>Booking Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                </div>
                                        </div>

                                        <div className="col-lg-6 d-flex justify-content-end align-items-center schedule-btns">
                                            <button className="day">Day</button>
                                            <button className="month">Month</button>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col-lg-4">
                                    <div className="schedule_details">
                                        <ul>
                                            <li>
                                                <button><img src={require('../assets/img/Book_check.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/Close_round_duotone.png')} alt='' /></button>
                                                <h3>The Lovely Clinic LTD</h3>
                                                <h4>Pre-Botox Consultation</h4>
                                                <div>
                                                    Video Consultation <p>Today <span>09:00am</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <button><img src={require('../assets/img/Book_check.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/Close_round_duotone.png')} alt='' /></button>
                                                <h3>The Lovely Clinic LTD</h3>
                                                <h4>Pre-Botox Consultation</h4>
                                                <div>
                                                    Video Consultation <p>Today <span>09:00am</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <button><img src={require('../assets/img/Book_check.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/Close_round_duotone.png')} alt='' /></button>
                                                <h3>The Lovely Clinic LTD</h3>
                                                <h4>Pre-Botox Consultation</h4>
                                                <div>
                                                    Video Consultation <p>Today <span>09:00am</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <button><img src={require('../assets/img/Book_check.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/Close_round_duotone.png')} alt='' /></button>
                                                <h3>The Lovely Clinic LTD</h3>
                                                <h4>Pre-Botox Consultation</h4>
                                                <div>
                                                    Video Consultation <p>Today <span>09:00am</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <button><img src={require('../assets/img/Book_check.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/Close_round_duotone.png')} alt='' /></button>
                                                <h3>The Lovely Clinic LTD</h3>
                                                <h4>Pre-Botox Consultation</h4>
                                                <div>
                                                    Video Consultation <p>Today <span>09:00am</span></p>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <img src={require('../assets/img/calendor.png')} alt='' className="img-fluid" />
                                </div>
                        </div>
                        </div>
                        </div>
            </section>
            </div>

        )
    }
    export default schedule;
