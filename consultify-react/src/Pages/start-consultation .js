import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Startconsultation = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])
    return (

        <div className="consulting_form start_consultation">
            {/* Header Start */}
            < Navbar expand="lg" className={scroll ? "bg-body-tertiary header-blck active" : "bg-body-tertiary header-blck"} >
                <Container className="custom">
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                </Container>
            </Navbar >
            {/* Header End */}

            {/* search header */}
            <section className="search-header">
                <div className="container custom">
                    <Row className="mb-4">
                        <div className="col-lg-12">
                            <div className="prev_main">
                                <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                                <a class="prev_result" href="#">
                                    Back to All Forms
                                </a>
                            </div>
                        </div>
                        <Col xs={12} md={10}>
                            <div className="search-input">
                                <h2>Consultation Form</h2>
                                <p>Started by: Jules LTD</p>
                            </div>
                        </Col>
                        <Col xs={12} md={2} className="d-flex justify-content-end">
                            <div className="button-link">
                                <Nav.Link href="#" className="white-box-link">Print</Nav.Link>
                            </div>
                        </Col>
                    </Row>

                    <form className="symptoms_form">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Have you received and performed a successful patch test?*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname1" id="radio1" />
                                        <label className="form-check-label" for="radio1">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname1" id="radio2" />
                                        <label className="form-check-label" for="radio2">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Do you suffer from Trichotillomania*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname2" id="radio3" />
                                        <label className="form-check-label" for="radio3">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname2" id="radio4" />
                                        <label className="form-check-label" for="radio4" >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Do you suffer from Psoriasis or Dermatitis?*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname3" id="radio5" />
                                        <label className="form-check-label" for="radio5">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname3" id="radio6" />
                                        <label className="form-check-label" for="radio6" >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Does any of the following apply to you around the eye area:*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Anti-aging Creams" id="1" />
                                        <label className="form-check-label" for="1">
                                            Recent infections
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="2" />
                                        <label className="form-check-label" for="2">
                                            Eczema
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Fake Tan" id="3" />
                                        <label className="form-check-label" for="3">
                                            Sensitive Skin
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=" Sun bed" id="4" />
                                        <label className="form-check-label" for="4">
                                            Psoriasis
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Botox or Fillers" id="5" />
                                        <label className="form-check-label" for="5">
                                            None of these apply
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Have you suffered from or received treatment for:*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Anti-aging Creams" id="6" />
                                        <label className="form-check-label" for="6">
                                            Acne
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="7" />
                                        <label className="form-check-label" for="7">
                                            Allergies
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Fake Tan" id="8" />
                                        <label className="form-check-label" for="8">
                                            Chemo or Radiotherapy
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=" Sun bed" id="9"  />
                                        <label className="form-check-label" for="9">
                                            Diabetes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Botox or Fillers" id="10"  />
                                        <label className="form-check-label" for="10">
                                            None of these apply
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Have you ever reacted to any tint, perm, henna, dyes or lightening solutions?*</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname6" id="radio7" />
                                        <label className="form-check-label" for="radio7">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioname6" id="radio8" checked />
                                        <label className="form-check-label" for="radio8">
                                            No
                                        </label>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Is there anything else that may affect your treatment?*</label>
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Type Here" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Face Map</label>
                                    <div class="form-group">
                                        <img src={require('../assets/img/Face.png')} alt='' className="fave" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form_box">
                                    <label>Your Signature*</label>
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea3" placeholder="Signature" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="submit-btn d-flex justify-content-end">
                                    <Link to="/create_consultation_form_two" type="submit" className="lg-btn">
                                        Save
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* search list */}
        </div>
    )
}

export default Startconsultation;