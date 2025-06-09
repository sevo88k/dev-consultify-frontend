import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteConsultationAction,
  getlistConsultationAction,
  getpostcarelistAdminAction,
  poastcaredeleteByAdminAction,
} from "../Redux/Action/ManageconsultationAction";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useCallback } from "react";
import { Encryptedid } from "../Util/BcruptEncyptid";
export default function Precare() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    dispatch(getpostcarelistAdminAction({ search: search }));
  }, [search]);

  var postcarelistData = useSelector(
    (state) => state.ManageConsultation.pre_care_consultation
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShow(false);

    setId("");
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
                        <h4 class="mb-sm-0 font-size-28">Pre-Care Presets </h4>
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
              <div class="row mb-4 create-new">
                <div class="col-xxl-4 col-sm-6 ">
                  <input
                    type="text"
                    class="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
                <div className="col-xxl-8 col-sm-6 mt-3 mt-sm-0">
                  <div className="text-end">
                    <NavLink to="/create-pre-care">
                      {" "}
                      <button class="btn cre_new">Create New</button>
                    </NavLink>
                  </div>
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
                        <h4 class="title_text">Advice</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Title</th>

                              <th className="hide-on-small">
                                Created
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>

                              <th className="hide-on-small">Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {postcarelistData?.map(function (object, i) {
                              return (
                                <tr key={i}>
                                  <td
                                    onClick={
                                      isMobile
                                        ? () => {
                                            navigate(
                                              "/edit-pre-care/" + object?._id
                                            );
                                          }
                                        : null
                                    }
                                  >
                                    {object?.treatmentname}
                                  </td>

                                  <td className="hide-on-small">
                                    {moment(object?.createdAt).format("DD/M/y")}
                                  </td>

                                  <td className="hide-on-small">
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        navigate(
                                          "/edit-pre-care/" + object?._id
                                        );
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        setId(object?._id);
                                        setShow(true);
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

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="my_new_consult">
            <h2 className="text-center">
              Are you Sure to delete this Pre-care
            </h2>
            <div className="cent_btns">
              <button
                onClick={() => {
                  dispatch(poastcaredeleteByAdminAction({ id })).then(
                    function () {
                      dispatch(getpostcarelistAdminAction({ search: search }));
                    }
                  );
                  setShow(false);
                }}
              >
                Yes
              </button>
              <button onClick={handleClose}>No</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
