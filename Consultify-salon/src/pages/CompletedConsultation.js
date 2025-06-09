import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompletedConsultation } from "../Redux/Actions/user/salon";
import moment from "moment";
import { Encryptedid } from "../utils/BcruptEncyptid";
import { DateRangePicker, Loader } from "rsuite";
import "rsuite/dist/rsuite.css";

const CompletedConsultation = () => {
  const dispatch = useDispatch();
  const [dateRange, setDateRangeValue] = useState([]);
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const { completed_consultation } = useSelector((state) => ({
    completed_consultation: state.myaccount.completed_consultation,
  }));

  useEffect(() => {
    dispatch(fetchCompletedConsultation());
  }, []);

  const handleDateChange = (dates) => {
    console.log(dates, "dates");
    setDateRangeValue(dates);
    if (dates?.length > 0) {
      const filtered = result?.filter((item) => {
        return (
          new Date(dates[0]) <= new Date(item?.createdAt) &&
          new Date(item?.createdAt) <= new Date(dates[1])
        );
      });

      setResult(filtered);
    }
    if (dates == null) {
      setResult(completed_consultation);
    }
  };

  useEffect(() => {
    setResult(completed_consultation);
  }, [completed_consultation]);

  const handleEnterFilter = (val) => {
    if (val?.length > 1) {
      const filteredData = result?.filter((element) => {
        //console.log(element?.consultationId?.form_title,"element?.consultationId?.form_title");

        if (element?.formCompletedBy == "salon") {
          return (
            (element?.salonId?.firstname + " " + element?.salonId?.lastname)
              .toLowerCase()
              .includes(val?.toLowerCase()) ||
            (element?.consultationId?.form_title)
              .toLowerCase()
              .includes(val?.toLowerCase())
          );
        } else if (element?.formCompletedBy == "customer") {
          return (
            (
              element?.customerId?.first_name +
              " " +
              element?.customerId?.last_name
            )
              .toLowerCase()
              .includes(val?.toLowerCase()) ||
            (element?.consultationId?.form_title)
              .toLowerCase()
              .includes(val?.toLowerCase())
          );
        } else {
          return false;
        }
      });
      setResult(filteredData);
    }
    if (val == "") {
      return setResult(completed_consultation);
    }
  };

  return (
    <Layout>
      <section className="margin-top-set">
        <Row>
          <Col lg={6}>
            <div className="cmn-sec-left">
              <h2>Consultations</h2>
              <p>
                These instructions are an overview of pre and post care for
                treatments. Medical & health checks should be checked on an
                individual basis and advice given on a personal basis. Please
                share these prior to treatment.{" "}
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-end align-items-start">
            {/* <Link to="/precare-presents" className="consult-btn">
              Find More Consultation Options in Settings
            </Link> */}
          </Col>
        </Row>
      </section>
      <div className="completed_consultaion pt-0">
        {/* tab-links */}
        <section className="tab-links">
          <ul>
            <li>
              <Nav.Link
                as={Link}
                to="/consultation"
                className="uncolored-btn ms-0"
              >
                New Consultation
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="#" className="colored-btn ms-3">
                Completed{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_4502_265)">
                    <path
                      d="M7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM6.66665 11.3334L3.33331 8.00004L4.27331 7.06004L6.66665 9.44671L11.7266 4.38671L12.6666 5.33337L6.66665 11.3334Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4502_265">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Nav.Link>
            </li>
          </ul>
        </section>
        {/* tab-links */}

        {/* search header */}
        <section className="search-header">
          <Row>
            <Col xs={12} md={4}>
              <div className="search-input full-width-in">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="group-box-search">
                    <img
                      src={require("../assets/img/search.svg").default}
                      alt="search"
                    />
                  </InputGroup.Text>
                  <input
                    placeholder="Search for a Title or Client"
                    name="search"
                    value={search}
                    onChange={(e) => handleEnterFilter(e.target.value)}
                    // onKeyDown={(e) => handleEnterFilter(e)}
                    // handleEnterFilter
                  />
                </InputGroup>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="search-input">
                <DateRangePicker
                  className="mt-0"
                  placeholder="Date Range"
                  value={dateRange}
                  onChange={handleDateChange}
                  cleanable={true}
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className="search-list-part">
          {result?.map((item, i) => {
            return (
              <>
                <div className="search-list-box">
                  <Row className="d-flex align-items-center">
                    <Col xs={12} md={7}>
                      <div className="search-content-left">
                        <h2>{item?.consultationId?.form_title}</h2>
                        <div className="sub-heading">
                          Completed by:{" "}
                          {item?.formCompletedBy == "salon"
                            ? item?.salonId?.firstname +
                              " " +
                              item?.salonId?.lastname
                            : item?.customerId?.first_name +
                              " " +
                              item?.customerId?.last_name}
                        </div>
                        <div className="sub-heading">
                          Client Name:{" "}
                          {item?.formCompletedBy == "salon"
                            ? item?.customerId?.first_name +
                              " " +
                              item?.customerId?.last_name
                            : item?.customerId?.first_name +
                              " " +
                              item?.customerId?.last_name}
                        </div>
                        <p style={{ textWrap: "pre-line" }}>{item?.consultationId?.form_description}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={5}>
                      <div className="search-content-right">
                        <Nav.Link href="#" className="white_btn p-0 m-0">
                          Completed:{" "}
                          {moment(item?.createdAt).format("DD/MM/YYYY")}
                        </Nav.Link>

                        <Nav.Link
                          href={`/view_consultation_form/${Encryptedid(
                            item?._id
                          )}`}
                          role="button"
                          data-rr-ui-event-key="#"
                          className="white-btn-back nav-link"
                          tabindex="0"
                        >
                          View
                        </Nav.Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default CompletedConsultation;
