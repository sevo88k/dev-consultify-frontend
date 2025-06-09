import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  aadministratordeleteAction,
  administratorsAction,
} from "../Redux/Action/AdminAuthAction";
import moment from "moment";
import { useCallback } from "react";
import { Encryptedid } from "../Util/BcruptEncyptid";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function Manageadmin() {
  const [show, setShow] = useState(false);
  const [id, setid] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(administratorsAction());
  }, []);
  var Administrators = useSelector((state) => state.Auth.Administrators);

  const navigate = useNavigate();

  var handelclick = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);

    navigate("/edit-admin/" + encodedEncrypted);
  }, []);
  const handleClose = () => {
    setShow(false);
  };

  const deleteProfile = () => {
    dispatch(
      aadministratordeleteAction({
        id: id,
      })
    ).then((result) => {
      dispatch(administratorsAction());
      setShow(false);
    });
  };
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {/* <!-- Begin page --> */}
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
                        <h4 class="mb-sm-0 font-size-28">Administrators </h4>
                        <p className="total">{Administrators.length}</p>
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
            </div>

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text">Administrators</h4>
                        <span>
                          <NavLink to="/Create-admin">
                            {" "}
                            <button class="btn cre_new">Create New</button>
                          </NavLink>
                        </span>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>
                                Position{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th>
                                Created{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th>Access Level</th>
                              <th>Email </th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {Administrators?.map(function (object, i) {
                              return (
                                <tr key={i}>
                                  <td>{object?.name}</td>
                                  <td>
                                    {(() => {
                                      if (object?.position == "1") {
                                        return "Super Admin";
                                      } else if (object?.position == "2") {
                                        return "Admin";
                                      } else {
                                        return "Developer";
                                      }
                                    })()}
                                  </td>
                                  <td>
                                    {moment(object?.createdAt).format("DD/M/y")}
                                  </td>
                                  <td>
                                    {object?.accesslevel == "1"
                                      ? "Full Access"
                                      : "View Only"}
                                  </td>
                                  <td>{object?.email}</td>
                                  <td className="custom-btn-ps">
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        handelclick(object?._id);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        setShow(true);
                                        setid(object?._id);
                                      }}
                                    >
                                      Delete
                                    </button>
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
        {/* <!-- End Page-content --> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button className="delete_btn" onClick={deleteProfile}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
