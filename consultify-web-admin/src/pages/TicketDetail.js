import React, { useCallback, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { Decryptedid, Encryptedid } from "../Util/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import {
  CustomerResetpasswordAction,
  customerDetailsAction,
  deleteUserAction,
  updateaccountstatusAction,
  updateuserdetailsAction,
} from "../Redux/Action/UserAction";
import moment from "moment";
import { updateSalondetailsAction } from "../Redux/Action/SalonAction";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function TicketDetail() {
  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <div data-simplebar="" className="h-100">
            {/* <!--- Sidemenu --> */}
            <Sidebar />
            {/* <!-- Sidebar --> */}
          </div>
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
         <!-- Start right Content here -->
         <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-6 d-flex align-items-center">
                  <NavLink to="/help-support">
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">Ticket 000001</h4>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <p className="sub_heading">Registered: 01/02/2023</p>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8">
                <div className="members_tbl">
                  <div className="card ">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Member Information</h4>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="ticket-box">
                            <h2>Details</h2>
                            <p>Member: Tony Jones Smith</p>
                            <p>Email: tonyjonessmith@gmail. com</p>
                            <p>Phone: +44 7577 202 124</p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="ticket-box">
                            <h2>Address</h2>
                            <p>Old Trafford</p>
                            <p>Stretford</p>
                            <p>Manchester</p>
                            <p>M16 0RA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card w-96">
                    <div className="card-body">
                      {" "}
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Ticket Details</h4>
                      </div>{" "}
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h5>1/02/202312:01pm</h5>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque id commodo nunc. Fusce enim ligula,
                        consectetur et velit nec, rutrum hendrerit risus. Proin
                        non tristique ipsum. Quisque nec ante dignissim,
                        lobortis tortor at, bibendum tellus. Praesent ultrices
                        odio urna, et volutpat ex placerat id. Aliquam ante
                        eros, scelerisque et leo id, convallis rhoncus odio.
                        Donec elit nibh, eleifend sit amet dignissim sed, semper
                        vitae leo.
                      </p>
                    </div>
                  </div>
                  <div className="card w-96">
                    <div className="card-body">
                      {" "}
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Notes</h4>
                      </div>{" "}
                      <div className="d-flex justify-content-end align-items-center flex-wrap mb-3 position-relative">
                        <h5>CONSULTIFY ADMIN 1/02/2023 12:01pm</h5>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque id commodo nunc. Fusce enim ligula,
                        consectetur et velit nec, rutrum hendrerit risus. Proin
                        non tristique ipsum. Quisque nec ante dignissim,
                        lobortis tortor at, bibendum tellus. Praesent ultrices
                        odio urna, et volutpat ex placerat id. Aliquam ante
                        eros, scelerisque et leo id, convallis rhoncus odio.
                        Donec elit nibh, eleifend sit amet dignissim sed, semper
                        vitae leo.
                      </p>
                    </div>
                    <div className="card-body">
                      {" "}
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Notes</h4>
                      </div>{" "}
                      <div className="d-flex justify-content-end align-items-center flex-wrap mb-3 position-relative">
                        <h5>CONSULTIFY ADMIN 1/02/2023 12:01pm</h5>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque id commodo nunc. Fusce enim ligula,
                        consectetur et velit nec, rutrum hendrerit risus. Proin
                        non tristique ipsum. Quisque nec ante dignissim,
                        lobortis tortor at, bibendum tellus. Praesent ultrices
                        odio urna, et volutpat ex placerat id. Aliquam ante
                        eros, scelerisque et leo id, convallis rhoncus odio.
                        Donec elit nibh, eleifend sit amet dignissim sed, semper
                        vitae leo.
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="text-field">
                        <textarea rows={3} placeholder="Type Here.."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                {" "}
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                      <h4 className="title_text">Status</h4>
                    </div>
                    <select
                      class="form-select ticketselect"
                      aria-label="Default select example"
                    >
                      <option selected>Open</option>
                      <option value="1">Close</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
