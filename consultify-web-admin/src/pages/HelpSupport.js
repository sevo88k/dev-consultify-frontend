import React from "react";
import Sidebar from "./Include/Sidebar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  deletehelpsupportAction,
  getlistHelpSupportAction,
} from "../Redux/Action/ContaindicationAction";
import { useEffect } from "react";
import moment from "moment";
import { Encryptedid } from "../Util/BcruptEncyptid";
export default function HelpSupport() {
  const [show, setShow] = useState(false);
  const [serach, setSearch] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getlistHelpSupportAction());
  }, []);

  ///getallhelpsuport
  var helpsupport = useSelector((state) => state.Salon.getallhelpsuport);

  helpsupport = helpsupport.filter((object) => {
    var searchTerm = serach?.toLowerCase().trim();

    return object.title.toLowerCase().trim().includes(searchTerm);
  });

  const deletehelpsupport = () => {
    dispatch(
      deletehelpsupportAction({
        id: id,
      })
    ).then(function () {
      dispatch(getlistHelpSupportAction());
      setShow(false);
    });
  };
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              {/* <!-- start page title --> */}
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span class="small_text">Consultify</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <h4 class="mb-sm-0 font-size-28">Help & Support</h4>
                        <p className="total"></p>
                      </div>
                    </div>

                    <div class="page-title-right">
                      {/* <!-- App Search--> */}
                      <div
                        className="hamburger-menu-btn"
                        onClick={handleToggle}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="35px"
                          height="35px"
                        >
                          <path
                            fill="#607D8B"
                            d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
                          />
                        </svg>
                      </div>

                      <img
                        src={require("../assets/images/avatar.svg").default}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              {/* <!-- start search row --> */}
              <div class="row mb-4">
                <div class="col-xxl-4 col-sm-8">
                  <input
                    name="title"
                    type="text"
                    class="form-control cmn_fields"
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-6 d-flex justify-content-end">
                  {/* <span>
                    <button class="btn cre_new">Create New</button>
                  </span> */}
                </div>
              </div>
            </div>
            {/* <!-- end search row --> */}

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text">Help & Support</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              {/* <th>Entry ID</th> */}
                              <th>Ticket ID </th>
                              <th>Date</th>
                              <th>Name</th>
                              <th>Member Type</th>
                              <th>Issue Type</th>
                              <th>Message</th>
                              <th>Assigned To </th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {helpsupport?.map(function (supportobject, i) {
                              return (
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>
                                    {moment(supportobject.createdAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td>
                                    {" "}
                                    <NavLink
                                      to={
                                        supportobject?.salonId?._id != undefined
                                          ? "/Salon-overview/" +
                                            Encryptedid(
                                              supportobject?.salonId?._id
                                            )
                                          : "/Customer-overview/" +
                                            Encryptedid(
                                              supportobject?.customerid?._id
                                            )
                                      }
                                    >
                                      {(supportobject?.salonId?.firstname ==
                                      undefined
                                        ? supportobject?.customerid?.first_name
                                        : supportobject?.salonId?.firstname) +
                                        "  " +
                                        (supportobject?.salonId?.lastname ==
                                        undefined
                                          ? supportobject?.customerid?.last_name
                                          : supportobject?.salonId
                                              ?.lastname)}{" "}
                                    </NavLink>
                                  </td>
                                  <td>
                                    <NavLink
                                      to={
                                        "/Salon-overview/" +
                                        Encryptedid(supportobject?.salonId?._id)
                                      }
                                    >
                                      <b>Salon</b>
                                    </NavLink>
                                  </td>
                                  <td>{supportobject.title}</td>
                                  <td> {supportobject.description}</td>
                                  <td>Admin</td>
                                  <td>OPEN</td>
                                  <td
                                    onClick={() => {
                                      setShow(true);
                                      setId(supportobject?._id);
                                    }}
                                  >
                                    Clear / Delete{" "}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setId("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button className="delete_btn" onClick={deletehelpsupport}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
