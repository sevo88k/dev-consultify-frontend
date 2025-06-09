import React, { useCallback, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getSalonListAction } from "../Redux/Action/SalonAction";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";
import CryptoJS from "crypto-js";
import { Encryptedid } from "../Util/BcruptEncyptid";
import { useState } from "react";
import Pagination from "../Component/Pagination";

export default function AllSalons() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSalonListAction());
  // }, []);
  const salonlist = useSelector((state) => state.Salon.salonlist);
  const navigate = useNavigate();

  const [pagiantionselected, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);

  var salonprofile = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/Salon-overview/" + encodedEncrypted);
  }, []);

  useEffect(() => {
    dispatch(
      getSalonListAction({
        pageno: currentPage,
        search: searchTerm,
      })
    );
  }, [currentPage, searchTerm, dispatch]);


  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handlePageClick = (selected) => {
    setPagination(selected.selected + 1);
    setCurrentPage(selected.selected + 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // const handlePageClick = (selected) => {
  //   setPagination(selected.selected + 1);
  //   setCurrentPage(selected.selected + 1);
  //   dispatch(
  //     getSalonListAction({
  //       pageno: selected.selected + 1,
  //     })
  //   );
  // };

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
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* <!-- start page title --> */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span className="small_text">Consultify</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <h4 className="mb-sm-0 font-size-28">All Salons</h4>
                        <p className="total">{salonlist?.length}</p>
                      </div>
                    </div>
                    <div className="page-title-right">
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
              <div className="row mb-4">
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                {/* <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-0">
                  <div className="form-group">
                    <select
                      className="form-control cmn_fields"
                      id="exampleFormControlSelect1"
                    >
                      <option>Type</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div> */}

                {/* <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-0">
                  <div className="form-group">
                    <select
                      className="form-control cmn_fields"
                      id="exampleFormControlSelect2"
                    >
                      <option>Last Active</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div> */}

                {/* <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-0">
                  <div className="form-group">
                    <select
                      className="form-control cmn_fields"
                      id="exampleFormControlSelect3"
                    >
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

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Salons</h4>
                      </div>
                      <div className="table-responsive">
                        <table
                          id=""
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th className="hide-on-small">Salon ID</th>
                              <th>Salon Name</th>
                              <th className="hide-on-small">Contact</th>
                              <th className="hide-on-small">
                                Date Joined{" "}
                                <img
                                  className="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th className="hide-on-small">Contact Email </th>
                              <th className="hide-on-small">Contact Phone</th>
                              <th className="hide-on-small">City </th>
                              <th className="hide-on-small">
                                Last Active{" "}
                                <img
                                  className="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th className="hide-on-small">Clients</th>
                              <th className="hide-on-small">Consultations</th>
                            </tr>
                          </thead>
                          <tbody className="td_color">
                            {salonlist?.datalist?.map(function (
                              salonobject,
                              i
                            ) {
                              return (
                                <tr key={i}>
                                  <td className="hide-on-small">{salonobject.memberNo}</td>
                                  <td>
                                    <span
                                      className="cursor-pointer"
                                      onClick={() => {
                                        salonprofile(salonobject._id);
                                      }}
                                    >
                                      {salonobject.salonname
                                        ? salonobject.salonname
                                        : "-"}
                                    </span>
                                  </td>
                                  <td
                                    className="hide-on-small"
                                    onClick={() => {
                                      salonprofile(salonobject._id);
                                    }}
                                  >
                                    {salonobject.firstname +
                                      " " +
                                      salonobject.lastname}
                                  </td>
                                  <td className="hide-on-small">
                                    {moment(salonobject.updatedAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="hide-on-small">{salonobject.email}</td>
                                  <td className="hide-on-small">
                                    {salonobject.personal_phone
                                      ? salonobject.personal_phone
                                      : "-"}{" "}
                                  </td>

                                  <td className="hide-on-small">{salonobject.address}</td>
                                  <td className="hide-on-small">
                                    {moment(salonobject.lastLogin).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="hide-on-small">---</td>
                                  <td className="hide-on-small">---</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        {
                          salonlist?.datalist?.length > 0 && <div className="btm-pagination">
                            <Pagination
                              handlePageClick={handlePageClick}
                              pageCounttotal={
                                Math.ceil(salonlist?.totalpagecount) || 1
                              }
                            />
                          </div>}
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
