import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteConsultationAction,
  getlistConsultationAction,
  updateConsultationStatusAdmin,
} from "../Redux/Action/ManageconsultationAction";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useCallback } from "react";
import { Encryptedid } from "../Util/BcruptEncyptid";
export default function Manageconsultation() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(getlistConsultationAction());
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Manageconsultationlists = useSelector(
    (state) => state.ManageConsultation.ManageConsultationLists
  );
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

    setId("");
  };
  const handleShow = (idvalue) => {
    setShow(true);
    setId(idvalue);
  };
  const navigate = useNavigate();

  var editcontaindication = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/Edit-consultation/" + encodedEncrypted);
  }, []);

  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    const initialStatuses = Manageconsultationlists.reduce((acc, object) => {
      acc[object._id] = object.status;
      return acc;
    }, {});
    setStatuses(initialStatuses);
  }, [Manageconsultationlists]);

  const handleStatusChange = (id) => {
    const newStatus = statuses[id] === 1 ? 0 : 1;
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: newStatus,
    }));
    dispatch(
      updateConsultationStatusAdmin({
        consultation_id: id,
        status: newStatus,
      })
    );
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
                        <h4 class="mb-sm-0 font-size-28">Consultations </h4>
                        <p className="total">
                          {Manageconsultationlists.length}
                        </p>
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
                  />
                </div>
                <div className="col-xxl-8 col-sm-6 mt-3 mt-sm-0">
                  <div className="text-end">
                    <NavLink to="/CreateConsultationNew">
                      {" "}
                      <button class="btn cre_new">Create New</button>
                    </NavLink>
                  </div>
                </div>

                {/* <div className="col-xxl-2 col-lg-3">  
                                    <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect1">
                                    <option>Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                                  </div>
                                      
                               <div className="col-xxl-2 col-lg-3"> 
                                      <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect2">
                                    <option>Last Active</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                                  </div>
                                      
                               <div className="col-xxl-2 col-lg-3"> 
                                       <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect3">
                                    <option>Purchases</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                              </div> */}
              </div>
            </div>
            {/* <!-- end search row --> */}

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text">Consultations</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Publish</th>
                              <th>Title</th>

                              <th className="hide-on-small">
                                Created
                                {/* <img class="filt_arrow" src={require('../assets/images/greydownarrow.svg').default}  /> */}
                              </th>
                              <th className="hide-on-small">Created By</th>
                              <th className="hide-on-small">Category</th>
                              <th className="hide-on-small">Questions</th>
                              {/* <th>In Progress </th>
                                                        <th>Complete</th>
                                                        <th>Last Viewed</th> */}
                              <th className="hide-on-small"> Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {Manageconsultationlists.map(function (object, i) {
                              return (
                                <tr key={i}>
                                  <td>
                                    {/* <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value={object?.status == 0 ? 1 : 0}
                                      checked={object?.status == 0}
                                      onChange={() => {
                                        dispatch(
                                          updateConsultationStatusAdmin({
                                            consultation_id: object?._id,
                                            status:  object?.status == 0 ? 1 : 0,
                                          })
                                        );
                                      }}
                                      id="flexCheckDefault"
                                    /> */}

                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      checked={statuses[object._id] === 1}
                                      onChange={() =>
                                        handleStatusChange(object._id)
                                      }
                                      id="flexCheckDefault"
                                    />
                                  </td>

                                  <td
                                    onClick={
                                      isMobile
                                        ? () => {
                                            editcontaindication(object?._id);
                                          }
                                        : null
                                    }
                                  >
                                    {object.form_title}
                                  </td>

                                  <td className="hide-on-small">
                                    {" "}
                                    {object?.createdAt ?   moment(object?.createdAt).format(
                                      "DD/MM/YYYY"
                                    ) : "--"}
                                  </td>
                                  <td className="hide-on-small">--</td>
                                  <td className="hide-on-small">
                                    {object?.category_details?.title
                                      ? object?.category_details?.title
                                      : "-"}
                                  </td>
                                  <td className="hide-on-small">
                                    {object?.question.length}
                                  </td>
                                  {/* <td>5</td>
                                                        <td>332</td>
                                                        <td>29/08/2023</td> */}

                                  <td className="hide-on-small">
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        editcontaindication(object?._id);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        handleShow(object?._id);
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
              Are you Sure to delete this Consultation
            </h2>
            <div className="cent_btns">
              <button
                onClick={() => {
                  dispatch(deleteConsultationAction(id)).then(function () {
                    dispatch(getlistConsultationAction());
                  });
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
