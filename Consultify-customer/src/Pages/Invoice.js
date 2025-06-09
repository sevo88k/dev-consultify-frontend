import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

const Invoices = () => {
  return (
    <MyAcoountLayout>
      <div className="col-lg-8 mx-auto">
        <div className="invoices bod_cmn">
          <div className="inner_invoice">
            <h2 className="client_cmn_heading">Invoices</h2>
          </div>

          <div class="table-responsive">
            <table>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>

              {/* <tr>
                        <td className="text-left">01/02/2024</td>
                        <td className="text-left">Pre-Botox Consultation</td>
                        <td className="text-left">Joanne Denby Wiltshire</td>
                        <td className="text-left">
                          <Nav.Link href="#" className="d-cont">
                            £15.00
                          </Nav.Link>
                        </td>
                        <td>
                          <img
                            src={require("../assets/img/Remove_duotone.png")}
                            alt="arrow"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">01/02/2024</td>
                        <td className="text-left">Pre-Botox Consultation</td>
                        <td className="text-left">Joanne Denby Wiltshire</td>
                        <td className="text-left">
                          <Nav.Link href="#" className="d-cont">
                            £55.00
                          </Nav.Link>
                        </td>
                        <td>
                          <img
                            src={require("../assets/img/Done_duotone.png")}
                            alt="arrow"
                          />
                        </td>
                      </tr> */}
            </table>
            <p className="no-information">No information to show</p>
          </div>
        </div>
      </div>
    </MyAcoountLayout>
  );
};
export default Invoices;
