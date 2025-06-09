import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { adminCompletedConsultation } from "../Redux/Action/ManageconsultationAction";
import moment from "moment";
import { Nav } from "react-bootstrap";
import { Encryptedid } from "../Util/BcruptEncyptid";
import { useState } from "react";
import Pagination from "../Component/Pagination";

export default function Completedconsultation() {
  const dispatch = useDispatch();
  const { completed_consultation } = useSelector((state) => ({
    completed_consultation: state.ManageConsultation.completed_consultation,
  }));
  // ManageConsultation completed_consultation_by_id completed_consultation

  useEffect(() => {
    dispatch(adminCompletedConsultation());
  }, []);

  const [pagiantionselected, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handlePageClick = (selected) => {
    setPagination(selected.selected + 1);

    setCurrentPage(selected.selected + 1);
    dispatch(
      adminCompletedConsultation(selected.selected + 1)
    );
  };

  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
          <Sidebar />
        </div>
        {/* <!-- Left 
                Sidebar End --> */}

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
                        <h4 class="mb-sm-0 font-size-28">
                          Completed Consultations
                        </h4>
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
                    type="text"
                    class="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                  />
                </div>
                {/* 
                                <div className="col-xxl-2 col-lg-3">
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
                              <th>Title</th>
                              <th>
                                Category{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th>
                                Completed{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th>Customer </th>
                              <th>Salon </th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {completed_consultation?.datalist?.map((item, i) => {
                              return (
                                <>
                                  <tr>
                                    <td>{item?.consultationId?.form_title ? item?.consultationId?.form_title : "--"}</td>
                                    <td>--</td>
                                    <td>
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td>
                                      {item?.customerId?.first_name +
                                        " " +
                                        item?.customerId?.last_name}
                                    </td>
                                    <td>{item?.salonId?.salonname}</td>
                                    <td className="d-flex">
                                      <Nav.Link
                                        className="button edit"
                                        href={`/view_consultation_form/${Encryptedid(
                                          item?._id
                                        )}`}
                                        role="button"
                                        data-rr-ui-event-key="#"
                                        tabindex="0"
                                      >
                                        View
                                      </Nav.Link>
                                      <button className="button delete">
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>

                        <div className="btm-pagination">
                          <Pagination
                            handlePageClick={handlePageClick}
                            pageCounttotal={
                              Math.ceil(completed_consultation?.totalpagecount) || 1
                            }
                          />
                        </div>
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
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
