import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getCustomerAction } from "../Redux/Action/UserAction";
import { Encryptedid } from "../Util/BcruptEncyptid";
import Sidebar from "./Include/Sidebar";
import moment from "moment";
import Pagination from "../Component/Pagination";
import { useState } from "react";

export default function AllUsers() {
  const dispatch = useDispatch();
  const [pagiantionselected, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getCustomerAction());
  }, []);

  var userlist = useSelector((state) => state.User.user);

  const navigate = useNavigate();

  var userprofile = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/Customer-overview/" + encodedEncrypted);
  }, []);

  const handlePageClick = (selected) => {
    setPagination(selected.selected + 1);
    setCurrentPage(selected.selected + 1);
    dispatch(
      getCustomerAction({
        pageno: selected.selected + 1,
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
          <div data-simplebar="" className="h-100">
            <Sidebar />
          </div>
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
                        <h4 className="mb-sm-0 font-size-28">All Users</h4>
                        <p className="total">{userlist?.length}</p>
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
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 ">
                  <input
                    type="text"
                    className="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
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
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6 mt-3  mt-md-0">
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
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-6  mt-3  mt-md-0">
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
                        <h4 className="title_text">Users</h4>
                      </div>

                      <div className="table-responsive">
                        <table className="table dt-responsive dealers_table nowrap w-100">
                          <thead>
                            <tr>
                              <th className="hide-on-small">Customer ID</th>
                              <th>Customer Name</th>
                              <th className="hide-on-small">
                                Date Joined
                                <img
                                  className="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th className="hide-on-small">Contact Email</th>
                              <th className="hide-on-small">Contact Phone</th>
                              <th className="hide-on-small">City</th>
                              <th className="hide-on-small">
                                Last Active
                                <img
                                  className="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th className="hide-on-small">Consultations</th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {userlist?.datalist?.map(function (user_object, i) {
                              return (
                                <tr key={i}>
                                  <td className="hide-on-small">
                                    {(currentPage - 1) * 20 + i + 1}
                                  </td>
                                  <td>
                                    <span
                                      className="cursor-pointer"
                                      onClick={() => {
                                        userprofile(user_object._id);
                                      }}
                                    >
                                      {user_object.first_name +
                                        " " +
                                        user_object.last_name}
                                    </span>
                                  </td>
                                  <td className="hide-on-small">
                                    {moment(user_object.updatedAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="hide-on-small">
                                    {user_object.email}
                                  </td>
                                  <td className="hide-on-small">
                                    {user_object.phone_number
                                      ? user_object.phone_number
                                      : "-"}
                                  </td>
                                  <td className="hide-on-small">
                                    {user_object.city ? user_object.city : "-"}
                                  </td>
                                  <td className="hide-on-small">
                                    {moment(user_object.lastLogin).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="hide-on-small">---</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="btm-pagination">
                          <Pagination
                            handlePageClick={handlePageClick}
                            pageCounttotal={
                              Math.ceil(userlist?.totalpagecount) || 1
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
