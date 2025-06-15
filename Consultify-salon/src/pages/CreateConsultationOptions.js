import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Actions/user/salon";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

export default function CreateConsultationOptions({}) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  return (
    <div className="consulation_form one">
      {/* Header Start */}
      <Navbar
        expand="lg"
        className={
          scroll
            ? "bg-body-tertiary header-blck active"
            : "bg-body-tertiary header-blck"
        }
      >
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to="/consultation-presets">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Create a new consultation form</h2>
          <div className="steps mb-0 two">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
          <p className="w-50">
            Would you like to add a pre/post care instructions to the
            consultation forms? This will be emailed to your customer when we
            notify them of their consultation.{" "}
          </p>
        </div>

        <Row className="mt-4 pt-4">
          <Col lg={5}>
            <div className="search-input">
              <InputGroup className="mb-3">
                <InputGroup.Text className="group-box-search">
                  <img
                    src={require("../assets/img/search.svg").default}
                    alt="search"
                  />
                </InputGroup.Text>
                <Form.Control placeholder="Search...." />
              </InputGroup>
            </div>
          </Col>
          <Col lg={7}>
            <div className="d-flex justify-content-end add-tick">
              <p>Tick box to add</p>
            </div>
          </Col>
        </Row>

        <section className="search-list-part presents">
          <div className="search-list-box">
            <Row className="d-flex align-items-center">
              <Col xs={12} md={8} sm={8}>
                <div className="search-content-left">
                  <h2>Testing With A Category</h2>
                  <div className="sub-heading">1 Question</div>
                  <p>Testing</p>
                </div>
              </Col>

              <Col
                xs={4}
                md={4}
                sm={4}
                className="d-flex justify-content-center"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    // value=""
                    id="flexCheckDefault"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <div className="create_tab new-fixed-btns mb-4">
          {/* <!-- start page title --> */}

          <div className="row align-items-center">
            <div className="col-12 d-flex justify-content-between">
              <span>
                <Link
                  to="/consultation-presets-questions"
                  type="button"
                  className="lg-btn back w-set"
                >
                  Back
                </Link>
              </span>
              <span>
                <Link
                  to="/view-Consultation-form-two"
                  type="submit"
                  className="lg-btn w-set"
                >
                  Next
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
