import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const consultationfornone = () => {
    return (
        <div className="consulation_form one">

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
                </div>

                <form className="consultaing_detailsform">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Form Title</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter a title for your consultation form" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Form Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter a description" rows="3"></textarea>
                    </div>
                    <div className="submit-btn">
                        <Link to="/create_consultation_form_two" type="submit" className="lg-btn">
                            Next
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default consultationfornone;
