import React from 'react'
import logoMain from '../../../assets/images/logo-1.svg';
import expand_right from '../../../assets/images/icons/expand_right.svg';
import { Link } from 'react-router-dom';
export default function GettingResultSeven() {
  return (
   <>
<div id="wrapper">
            {/* <!-- header start --> */}
            <header className="position-relative dark-header main_header">
                <div className="container-fluid padding_none">  
                  {/* <!-- Navbar --> */}
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <a className="navbar-brand" href="/">
                         <img src={require("../../../assets/images/blck-logo.png")}  alt="logo" />
                     </a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
                         <ul className="navbar-nav">
                         <li className="nav-item active">
                             <Link className="nav-link" to="/prevention-education">Prevention & Education<span className="sr-only">(current)</span></Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/lp-symtom-checker-one">Symptom Checker</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/userlogin">Book an Online Consultation</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/about">
                             About Us
                             </Link>
                         </li>
                         <li>
                             <Link className="btn btn-primary white-btn" to="/userlogin" >
                                 Sign In
                             </Link>
                         </li>
                         </ul>
                     </div>
                     
                 </nav>
                 {/* <!-- Navbar / End --> */}
                </div>
             </header>
            {/* <!-- header end -->

            <!-- Question  Bar --> */}
       
            {/* <!-- Question  Bar --> */}
            <section className="question_bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">Loading Results</h4>
                            <div className="progress_bar">
                                <p className="ques-nine"></p>
                            </div>
                            <div className="back_btn">
                                <Link to="/lp-symtom-checker-seven" className="white-btn">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Question  Bar / End-->
           
            <!-- Tooth-aid problems start --> */}
            <section className="tooth-aid-prblms  symptom-checker ">
                <div className="container">
                    <div className="card card_shadow ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center mb-5">Getting your results</h2>
                               <div className="loader d-flex justify-content-center align-items-center">
                                    <img src={require("../../../assets/images/loader.gif")} alt="loader"/>
                               </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-5 next_page_btn">
                                <Link to="/lp-symtom-see-result-seven" className="dark_btn">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Tooth-aid problems end -->

            
        <!-- Call-to-action start --> */}
        <section className="cta-section common-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <h2>Become a  Member</h2>
                            <p>Sign up today for access to online consultations, treatments and more.</p>
                            <div className="d-flex justify-content-center input-mail">
                                <input type="mail" name="mail" placeholder="Type your email here"/>
                                <input type="submit" name="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Call-to-action end --> */}
        
         <footer>
            <div className="footer_upper common-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="footer_innner-content">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="footer-content">
                                            <h3>Help</h3>
                                            <p>Contact</p>
                                            <p>FAQs</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-content">
                                            <h3>Solutions</h3>
                                            <p>Treatments</p>
                                            <p>Book an Online Consultation</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="footer-content">
                                            <h3>Responsibility</h3>
                                            <p>Service Charter</p>
                                            <p> Terms & Conditions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="footer_iner_content_right">
                                <div className="row">
                                    <div className="col-md-6 col-4 offset-md-0 offset-2">
                                        <div className="footer-content">
                                            <h3>Account</h3>
                                            <p>Sign in</p>
                                            <p>My Account</p>
                                            <p>My Prescriptions</p>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-4">
                                        <div className="footer-content">
                                            <h3>Newsletter</h3>
                                            <div className="d-flex justify-content-center">
                                                <input type="mail" name="mail" placeholder="Type your email here"/>
                                                <input type="submit" name="submit" value="Submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_btm">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-2">
                            <div className="footer-img">
                                <a href="#"><img src={require("../../../assets/images/blck-logo.png")} alt="logo-footer" className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="copyright">
                                <p className="mb-0">©2022 Copyright ToothAid LTD. All Rights Resrved. Terms & Conditions,
                                    Privacy Policy & Complaints, Cookie Policy, Terms of Use, Accessibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Footer End --> */}
        </div>


   </>
  )
}
