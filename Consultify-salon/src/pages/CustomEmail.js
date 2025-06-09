import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CustomemaillistAction } from "../Redux/Actions/user/salon";
import { useState } from "react";
export default function CustomEmail() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(
      CustomemaillistAction({
        search,
      })
    );
  }, [search]);
  return (
    <MyAcoountLayout>
      <section className="cmn-sec-headings">
        <Row>
          <Col lg={8}>
            <div className="cmn-sec-left mob-view">
              <h2>Automated Email Presets</h2>
              <p>
                View and edit content in the automated emails that will be sent
                to your clients. Please note that emails are sent generically to
                client. So please avoid using names or any other personal
                details in the text boxes.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <div className="consultation-presents-tabs">
          <div className="d-flex">
            <button type="button" className="active-tab mob-hide">
              View All <span>(4)</span>
            </button>
          </div>
          <div className="search-input w-50 mob-hide">
            <InputGroup className="">
              <InputGroup.Text className="group-box-search">
                <img
                  src={require("../assets/img/search.svg").default}
                  alt="search"
                />
              </InputGroup.Text>
              <Form.Control
                type="search"
                className="form-control"
                name="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Here"
              />
            </InputGroup>
          </div>
        </div>
      </section>

      <Row>
        <Col lg={12}>
          <div className="d-flex justify-content-end add-tick"></div>
        </Col>
      </Row>
      <section className="search-list-part presents mob-view">
        <div className="search-list-box">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={9} sm={9}>
              <div className="search-content-left">
                <h2>New Client Welcome Email</h2>
                <div className="sub-heading">New clients to your salon</div>
                <p>
                  This email will be sent to a client when you register them as
                  a new client in your Consultify account. The email will
                  include their log in details and any additional information
                  you wish to add.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              sm={3}
              className="d-flex justify-content-center"
            >
              <Link to="/edit-email">View / Edit</Link>
            </Col>
          </Row>
        </div>

        <div className="search-list-box">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={9} sm={9}>
              <div className="search-content-left">
                <h2>Sending a Consultation to a Client</h2>
                <div className="sub-heading">
                  New Consultation to your salon
                </div>
                <p>
                  This email will be sent to a client when you choose to send
                  them a consultation form electronically. The email will
                  include a link to the consultation form and any pre / post
                  care attached, plus any additional information you wish to
                  add. The form will show in the clients profile once they have
                  completed it.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              sm={3}
              className="d-flex justify-content-center"
            >
              <Link to="/edit-new-consultation-mail">View / Edit</Link>
            </Col>
          </Row>
        </div>

        <div className="search-list-box">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={9} sm={9}>
              <div className="search-content-left">
                <h2>Sending Pre / Post Care to a Client</h2>
                <div className="sub-heading">
                  New Pre-Care Advice to your salon
                </div>
                <p>
                  This email will be sent to a client when you choose to send
                  them pre / post care electronically. The email will include
                  the relevant pre / post care information, plus any additional
                  information you wish to add.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              sm={3}
              className="d-flex justify-content-center"
            >
              <Link to="/edit-Precare-advice-mail">View / Edit</Link>
            </Col>
          </Row>
        </div>
        {/* 
        <div className="search-list-box">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={9} sm={9}>
              <div className="search-content-left">
                <h2>New Appointment Created</h2>
                <div className="sub-heading">New Appointment Created</div>
                <p>New Appointment Created to your salon</p>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              sm={3}
              className="d-flex justify-content-center"
            >
              <Link to="/edit-appointment-created-mail">View / Edit</Link>
            </Col>
          </Row>
        </div> */}

        <div className="search-list-box">
          <Row className="d-flex align-items-center">
            <Col xs={12} md={9} sm={9}>
              <div className="search-content-left">
                <h2>New Video Consultation Created</h2>
                <div className="sub-heading">
                  New Video Call Appointment Created
                </div>
                <p>
                  This email will be sent to a client when you create a new
                  video consultation appointment for them. The email will
                  include appointment details, a link to join the call , plus
                  any additional information you wish to add
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={3}
              sm={3}
              className="d-flex justify-content-center"
            >
              <Link to="/edit-appointment-created-mail">View / Edit</Link>
            </Col>
          </Row>
        </div>
      </section>
    </MyAcoountLayout>
  );
}
