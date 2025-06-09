import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MyClient = () => {
    return (
        <div className="myclient">
            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-blck">
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
                            <Nav.Link href="#" className="green-btn-header">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Header End */}


            {/* search header */}
            <section className="search-header client pt-110">
                <div className="container">
                    <Row>
                        <Col xs={12} lg={12}>
                            <div className="main_heading">
                                <h1>All Clients</h1>
                            </div>
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="search-input">
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Member Search" />
                                    <InputGroup.Text className="group-box-search">
                                        <img src={require('../assets/img/search.svg').default} alt='search' />
                                    </InputGroup.Text>
                                </InputGroup>
                                <div className="srch_result">
                                    <p>Showing 1 - 8   of   8  results</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={7} className="d-flex justify-content-end">
                            <div className="button-link">
                                <Nav.Link href="/Mydetails" className="white-box-link">Create Client</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                    <table className="client_table">
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>Email </th>
                            <th>Consultations</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sarah Jones-Smith</td>
                            <td>01/02/1990</td>
                            <td>32 Elthiron Road, London, SW6 4BW</td>
                            <td>email@emailaddress .com</td>
                            <td>12</td>
                            <td><Nav.Link href="/client_view" className="white_btn">View</Nav.Link></td>
                        </tr>
                    </table>
                </div>
            </section>
            {/* search list */}

        </div>
    )
}
export default MyClient