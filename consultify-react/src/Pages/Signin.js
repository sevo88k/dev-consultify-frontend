import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const Signin = () => {
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
                            <p>Not a member yet?</p>
                            <Nav.Link href="/signup" className="white-btn">Sign Up</Nav.Link>
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
                                <h2>Sign in to your account</h2>
                                <div className="create-acc-form">
                                    <div className="row">                                  
                                        <div className="col-lg-7 mx-auto">                                         
                                            <form action="" >
                                                <div className="create-account create-account-next border-radius-10">
                                                    <div className="logo-circle">
                                                    <img src={require('../assets/img/logo-circle.png')} alt='logo' />
                                                    </div>
                                                    <ul className="">
                                                        <li className="form-grp">
                                                            <input type="email" className="form-control" placeholder="Email *" name="emai" />
                                                        </li>
                                                        <li className="form-grp">
                                                            <input type="password" className="form-control" placeholder="Password *" name="password" />
                                                        </li>                                                  
                                                    
                                                    </ul>
                                                
                                                    <div className="submit-btn">
                                                        <Link to="/signup2" type="submit" className="lg-btn">
                                                        Sign in
                                                        </Link>
                                                    </div>
                                                    <div className="forgot-password">
                                                    <Nav.Link href="#" className="gry-text-link">Forgot Password?</Nav.Link>
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
export default Signin;