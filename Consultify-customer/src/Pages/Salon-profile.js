import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';



const salonview = () => {
    
    return (
      <div className="saloon-view">
        {/* Header Start */}
        <Navbar expand="lg" className="bg-body-tertiary border_btm">
          <Container>
            <Navbar.Brand href="/Search">
              <img
                className="main-logo"
                src={require("../assets/img/newconsultlogo.webp")}
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end align-items-center"
            >
              <Nav className="green-menu">
                <Nav.Link href="/" className="green-menu-link">
                  Find a Salon
                </Nav.Link>
                <Nav.Link href="/" className="green-menu-link">
                  Schedule
                </Nav.Link>
                <Nav.Link href="/Myaccount" className="green-btn-header">
                  My Account
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Header End */}

        <section className="saloon_banner">
          <div className="container custom">
            <div className="row justify-content-between ">
              <div className="col-lg-12">
                <div className="prev_main">
                  <img
                    src={
                      require("../../src/assets/img/right-arrow.svg").default
                    }
                    alt="arrow"
                    className="arrow-next-green"
                  />
                  <a class="prev_result" href="#">
                    Back to search results
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="button-link">
                  <Nav.Link href="/Mydetails" className="green-box">
                    Add to My Salons
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container custom">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="saloon_profile_main">
                <div className="salon_logo">
                  <img
                    src={require("../assets/img/Sarahs.png")}
                    alt="arrow"
                    className=""
                  />
                </div>
                <h3>Sarah Jones Salon LTD</h3>
                <p>22 Shelton Street, London SW6</p>
                <p>
                  At Sarah Jones, we believe that beauty is not just skin deep;
                  it's an art, a journey, and a reflection of your unique
                  personality. Founded with a passion for enhancing your natural
                  beauty, Sarah Jones has become a sanctuary of style,
                  relaxation, and transformation.
                </p>
                <img
                  src={require("../assets/img/vt.png")}
                  alt="arrow"
                  width="100%"
                  className=""
                />
                <div className="open_hours">
                  <p>Opening Hours</p>
                  <ul>
                    <li>
                      <p>Monday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Tuesday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Wednesday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Thursday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Friday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Saturday</p>
                      <p>10:00 - 18:00</p>
                    </li>
                    <li>
                      <p>Sunday</p>
                      <p>Closed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="srch_bar">
                <h2>Treatments & Services</h2>
                <div className="search-input">
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Search" />
                    <InputGroup.Text className="group-box-search">
                      <img
                        src={require("../assets/img/search.svg").default}
                        alt="search"
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </div>
              <div className="accord_tab">
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img
                        src={require("../assets/img/logo-circle.png")}
                        alt="arrow"
                        className="accord_logo"
                      />
                      <h3>Christine </h3>{" "}
                      <span className="services_count">17 Services</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link className="green-box">Book</Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <img
                        src={require("../assets/img/logo-circle.png")}
                        alt="arrow"
                        className="accord_logo"
                      />
                      <h3>Sarah </h3>{" "}
                      <span className="services_count">10 Services</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Frown Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Jelly Rolls</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Lip Flip</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Down Turn Smile</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Gummy Smile</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Dimple Chin</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Jawline</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <img
                        src={require("../assets/img/logo-circle.png")}
                        alt="arrow"
                        className="accord_logo"
                      />
                      <h3>Christine </h3>{" "}
                      <span className="services_count">17 Services</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                      <div className="accord_body_content">
                        <h3>Botox Injections - Bunny Lines</h3>
                        <div className="accord_content_right">
                          <div className="acrd_lft">
                            <p>£55.00</p>
                            <p>30 minutes</p>
                          </div>
                          <div className="acrd_rght">
                            <Nav.Link href="#" className="green-box">
                              Book
                            </Nav.Link>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


}
export default salonview;

