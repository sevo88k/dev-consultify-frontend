import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Invoicesalon = () => {
  return (
    <Layout type="details">
      <div className="Booking_main">
        {/* Header Start */}

        {/* Header End */}

        <div className="tabs_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="you_know">
                  <h2>Did you know?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Morbi ac dolor
                    viverra, varius massa sit ame. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Morbi ac dolor viverra, varius
                    massa sit ame. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Morbi ac dolor viverra, varius massa sit
                    ame. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Morbi ac dolor viverra, varius massa sit ame.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="invoices bod_cmn">
                  <div className="inner_invoice">
                    <h2 className="client_cmn_heading">My Salons</h2>
                    <Nav.Link href="/send_consulation">New +</Nav.Link>
                  </div>

                  <div class="table-responsive">
                    <table>
                      <tr>
                        <th>Salon</th>
                        <th>Location</th>
                        <th>Contact Number</th>
                        <th>Booking Link</th>
                      </tr>
                      <tr>
                        <td className="text-left">The Lovely Clinic</td>
                        <td className="text-left">London, SW6</td>
                        <td className="text-left">07800992381</td>
                        <td className="text-left">
                          <Nav.Link href="#" className="d-cont">
                            Click Here
                          </Nav.Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">The Lovely Clinic</td>
                        <td className="text-left">London, SW6</td>
                        <td className="text-left">07800992381</td>
                        <td className="text-left">
                          <Nav.Link href="#" className="d-cont">
                            Click Here
                          </Nav.Link>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Invoicesalon;
