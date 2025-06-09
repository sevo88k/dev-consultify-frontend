import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const consultingfrom = () => {
  return (
    <div className="consulting_form">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/client_view">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* search header */}
      <section className="search-header">
        <div className="container">
          <Row className="mb-4">
            <div className="col-lg-12">
              <div className="prev_main">
                <img
                  src={require("../../src/assets/img/right-arrow.svg").default}
                  alt="arrow"
                  className="arrow-next-green"
                />
                <Link class="prev_result" to="/client_view">
                  Back to Dashboard
                </Link>
              </div>
            </div>
            <Col xs={12} md={10}>
              <div className="search-input">
                <h2>Pre-Botox Injections Consultation</h2>
                <p>Started by: Jules LTD</p>
              </div>
            </Col>
            <Col xs={12} md={2} className="d-flex justify-content-end">
              <div className="button-link">
                <Nav.Link href="#" className="white-box-link">
                  Print
                </Nav.Link>
              </div>
            </Col>
          </Row>

          <form className="symptoms_form">
            <div className="row">
              <div className="col-lg-12">
                <div className="form_box">
                  <label>
                    Have you had any recent skin infections around the eye or
                    brow area?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault"
                    />
                    <label className="form-check-label" for="flexRadioDefault">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault"
                    />
                    <label
                      className="form-check-label"
                      for="flexRadioDefault"
                      checked
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <label>
                    Have you had any of the following in the last 2-6 weeks?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Anti-aging Creams"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Anti-aging Creams
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Fake Tan"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Fake Tan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=" Sun bed"
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Sun bed
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Botox or Fillers"
                      id="flexCheckDefault"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Botox or Fillers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Facial Peels"
                      id="flexCheckChecked"
                      checked
                    />
                    <label className="form-check-label" for="flexCheckChecked">
                      Facial Peels, Facials, AHAs
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Antihistamines"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Antihistamines
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Steroid Creams"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Steroid Creams or Tablets
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <label>
                    Have you had any recent skin infections around the eye or
                    brow area?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault"
                    />
                    <label className="form-check-label" for="flexRadioDefault">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault4"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <label>
                    Have you had any recent skin infections around the eye or
                    brow area?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault"
                    />
                    <label className="form-check-label" for="flexRadioDefault">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="submit-btn d-flex justify-content-end">
                  <Link
                    to="/create_consultation_form_two"
                    type="submit"
                    className="lg-btn"
                  >
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
  );
};

export default consultingfrom;
