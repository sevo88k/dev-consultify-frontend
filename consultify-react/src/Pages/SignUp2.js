import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const SignUp2 = () => {
    return (
        <div className="bg-color">

            {/* Header Start */}
            <Navbar expand="lg" className="bg-body-tertiary header-main">
            <Container>
               <Navbar.Brand href="#">
                  <img src={require('../assets/img/logo-white.svg').default} alt='logo' />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="">
                     <p>Already have an account?</p>
                     <Nav.Link href="/signin" className="white-btn">Login</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
            {/* Header End */}

            {/* Signup flow Start */}
            <section className="signup-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="signup-inner">
                                <h2>You’re almost there!</h2>
                                <div className="create-acc-form">
                                    <div className="row">
                                        <div className="col-lg-5 pe-0">
                                            <div className="features">
                                                <h6>WITH CONSULTIFY YOU CAN:</h6>
                                                <ul>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                    <li><img src={require('../assets/img/tick.svg').default} alt='tick' /><p>Lorum ipsum</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 ps-0">
                                            <form action="" className="h-100">
                                                <div className="create-account create-account-next">
                                                    <ul className="">
                                                        <li className="form-grp">
                                                            <input type="text" className="form-control" placeholder="Your Salon Name" name="salon-name" />
                                                        </li>
                                                        <li className="form-grp">
                                                            <input type="text" className="form-control" placeholder="Salon Post Code" name="post-code" />
                                                        </li>
                                                        <li className="form-grp ">
                                                            <Form.Select aria-label="Default select example" className="form-control form-select">
                                                                <option>Select Address From List</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Select>
                                                        </li>                                                     
                                                    </ul>
                                                    
                                                    <div className="submit-btn">
                                                        <Link to="/signup3" type="submit" className="lg-btn">
                                                            Next
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Signup flow End */}
        </div>
    )
}
export default SignUp2;