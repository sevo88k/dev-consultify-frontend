import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const consultationformtwo = () => {
    return (
        <div className="consulation_form two">

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

                <form className="consultaing_detailsform">
                    <div className="form_Questions">
                        <div className="top_form">
                            <h2>Question 1</h2>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Single Choice</option>
                                <option value="1">Multiple choice</option>
                                <option value="2">Text Field</option>
                            </select>
                        </div>
                        <div className="form_field">
                            <label for="exampleFormControlInput1" className="form-label">Question Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter a title for your consultation form" />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Type Option 1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Type Option 2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Add Another
                                </label>
                            </div>
                            <div className="form_bottom_main">
                                <div className="form-bottom">
                                    <Form>
                                        <label>Required</label>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            name="Required"
                                            id="custom-switch"
                                        />

                                    </Form>
                                    <Nav.Link href="#"><img src={require('../assets/img/Trash.png')} alt='logo' /></Nav.Link>
                                    <Nav.Link href="#"><img src={require('../assets/img/plus.png')} alt='logo' /></Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form_Questions">
                        <div className="top_form">
                            <h2>Question 1</h2>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Single Choice</option>
                                <option value="1">Multiple choice</option>
                                <option value="2">Text Field</option>
                            </select>
                        </div>
                        <div className="form_field">
                            <label for="exampleFormControlInput1" className="form-label">Question Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter a title for your consultation form" />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Type Option 1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Type Option 2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="option" />
                                <label className="form-check-label" for="exampleRadios">
                                    Add Another
                                </label>
                            </div>
                            <div className="form_bottom_main">
                                <div className="form-bottom">
                                    <Form>
                                        <label>Required</label>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            name="Required"
                                            id="custom-switch"
                                        />

                                    </Form>
                                    <Nav.Link href="#"><img src={require('../assets/img/Trash.png')} alt='logo' /></Nav.Link>
                                    <Nav.Link href="#"><img src={require('../assets/img/plus.png')} alt='logo' /></Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >

            <div className="fixed_sec">
                <div className="container">
                    <div className="fixed_inner">
                        <Nav.Link class="back" href="/create_consultation_form_one">Back</Nav.Link>
                        <Nav.Link class="front" href="/create_consultation_form_three">Next</Nav.Link>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default consultationformtwo;
