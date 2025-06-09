import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const consultationformthree = () => {
    return (
        <div className="consulation_form three">

            {/* Header Start */}
            < Navbar expand="lg" className="bg-body-tertiary header-blck" >
                <Container>
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <a className="exit_btn" href="#">Exit</a>
                </Container>
            </Navbar >
            {/* Header End */}
            <div className="container">
                <div className="consultationform_tab">
                    <h2 className="form_cmn_heading">Create a new consultation form</h2>
                    <div className="steps">
                        <Nav.Link href="#">1. Title & Description</Nav.Link>
                        <Nav.Link href="#">2. Questions</Nav.Link>
                        <Nav.Link href="#">3. Review</Nav.Link>
                    </div>
                </div >

                <form className="symptoms_form">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form_box">
                                <label>Have you had any recent skin infections around the eye or brow area?</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label" for="flexRadioDefault">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                                    <label className="form-check-label" for="flexRadioDefault" checked>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_box">
                                <label>Have you had any of the following in the last 2-6 weeks?</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Anti-aging Creams" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Anti-aging Creams
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Fake Tan" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fake Tan
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" Sun bed" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Sun bed
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Botox or Fillers" id="flexCheckDefault" checked />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Botox or Fillers
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Facial Peels" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Facial Peels, Facials, AHAs
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Antihistamines" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Antihistamines
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Steroid Creams" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Steroid Creams or Tablets
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div >

            <div className="fixed_sec">
                <div className="container">
                    <div className="fixed_inner">
                        <Nav.Link class="back" href="/create_consultation_form_two">Back</Nav.Link>
                        <Nav.Link class="front" href="#">Save</Nav.Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default consultationformthree;
