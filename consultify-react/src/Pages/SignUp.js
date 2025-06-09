import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const SignUp = () => {
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
                        <h2>Get Started by creating your account!</h2>
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
                              <form action="">
                                 <div className="create-account">
                                       <ul className="">
                                          <li className="form-grp">
                                             <input type="text" className="form-control" placeholder="First Name*" name="first-name" />
                                          </li>
                                          <li className="form-grp">
                                             <input type="text" className="form-control" placeholder="Last Name*" name="last-name" />
                                          </li>
                                          <li className="form-grp">
                                             <input type="email" className="form-control" placeholder="Email*" name="email" />
                                          </li>
                                          <li className="form-grp">
                                             <input type="password" className="form-control" placeholder="Password (16+ Characters) *" name="password" />
                                          </li>
                                       </ul>
                                       <div className="form-checkbox">
                                          <input type="checkbox" name="checkbox" />
                                          <label>I accept our <Link to="#">Terms of Service </Link>
                                             and have read our <Link to="#"> Privacy Notice.</Link>
                                             If I am a micro- or small enterprise or a not-for-
                                             profit organization in the EEA or UK, I agree to the
                                             <Link to="#"> European Electronic Communications Code Rights
                                                Waiver. </Link></label>
                                       </div>
                                       <div className="submit-btn">
                                          <Link to="/signup2" type="submit" className="lg-btn">
                                             Register Now
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
export default SignUp;