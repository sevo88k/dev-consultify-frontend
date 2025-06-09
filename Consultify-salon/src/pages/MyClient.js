import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllAppointments,
  salonfetchClientsAction,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import moment from "moment";

const MyClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [sortData, setSortData] = useState()
  const salonClients = useSelector((state) => state.myaccount.salonClients);

  // useEffect(() => {
  //   dispatch(salonfetchClientsAction({ name: search }));
  // }, [search]);

  useEffect(() => {
    const requestPayload = {};

    if (search) {
      requestPayload.searchdata = search;
    }

    if (sortData) {
      if (sortData === 'latest' || sortData === 'oldest') {
        requestPayload.orderdata = sortData;
      } else {
        requestPayload.sortBy = sortData;
      }
    }

    dispatch(salonfetchClientsAction(requestPayload));
  }, [search, sortData, dispatch]);


  console.log(sortData, "sortData");


  const handleClick = (data) => {
    dispatch(fetchAllAppointments(data?._id));
    // navigate
  };
  return (
    <Layout>
      <section className="margin-top-set">
        <Row>
          <Col lg={5}>
            <div className="cmn-sec-left">
              <h2>Manage Clients</h2>
              <p>Search for, edit and create new clients</p>
            </div>
          </Col>
          <Col lg={7} className="d-flex align-items-end justify-content-end">
            {" "}
            <Row>
              {/* <Col xs={12} lg={12}>
<div className="main_heading">
<h1>All Clients</h1>
</div>
</Col> */}
              <Col xs={12} md={4}>
                <div className="sort-field mb-3">

                  <Form.Select aria-label="Default select example" onChange={(e) => setSortData(e.target.value)}>
                    <option value="name">By Name (Alphabetical) </option>
                    <option value="latest">Joining Date (Soonest) </option>
                    <option value="oldest">Joining Date (Oldest)</option>
                  </Form.Select>

                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="search-input w-100">
                  <InputGroup className="mb-3 w-100">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Member Search"
                    />
                    <InputGroup.Text className="group-box-search">
                      <img
                        src={require("../assets/img/search.svg").default}
                        alt="search"
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="button-link w-100">
                  <Nav.Link
                    as={Link}
                    to="/createClient"
                    className="white-box-link w-100"
                  >
                    Create Client
                  </Nav.Link>
                </div>
                <div className="srch_result mt-3">
                  <p>
                    Showing 1 - {salonClients?.length} of {salonClients?.length}{" "}
                    results
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <div className="myclient">
        {/* search header */}
        <section className="search-header client">
          <div class="table-responsive">
            <table className="client_table client_page">
              <thead>
                {" "}
                <tr>
                  {/* <th>#</th> */}

                  <th className="mob-view-name">Full Name</th>
                  <th className="mobile-none">Contact Number </th>
                  <th className="mobile-none">Email </th>
                  <th className="mob-view-name">
                    <p className="mb-0">View </p>
                  </th>

                  {/* <th>City</th>
<th>First line address</th>
<th>Second line address</th>

<th>Post code</th> */}
                </tr>
              </thead>
              <tbody>
                {salonClients?.map(function (object, i) {
                  return (
                    <tr
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(`/client_view/${Encryptedid(object?._id)}`)
                      }
                      key={i}
                    >
                      <td className="mob-view-name">
                        {object?.first_name} {object?.last_name}
                      </td>
                      {/* <td>
{(object?.dob &&
moment(object?.dob).format("MM/DD/YYYY")) ||
"N/A"}
</td> */}
                  {object?.phone_number ?    <td className="mobile-none">0{object?.phone_number}</td> : <td className="mobile-none"></td>}
                      <td className="mobile-none">{object?.email}</td>

                      {/* <td>{object?.city}</td>
<td>{object?.first_line_address}</td>
<td>{object?.second_line_address}</td>

<td>{object?.pin_code}</td> */}
                      <td
                        className="cursor-pointer "
                        onClick={() => handleClick(object)}
                      >
                        View
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        {/* search list */}
      </div>
    </Layout>
  );
};
export default MyClient;
