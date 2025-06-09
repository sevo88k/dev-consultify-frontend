import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { adminDashboardKPI } from "../Redux/Action/AdminAuthAction";

export default function Dashboard() {
  const dispatch = useDispatch();
  const adminDataKpisCount = useSelector((e) => e.AdminSlice.adminDataKpis);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(adminDashboardKPI());
  }, [dispatch]);

  return (
    <div>
      {/* // <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* 
            <!-- ============================================================== -->
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
                      <h4 className="mb-sm-0 font-size-28">Dashboard </h4>
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

                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src={require("../assets/images/avatar.svg").default}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              {/* <!-- dashboard first row start --> */}
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-body h160">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text black">Salon Overview</h4>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <div className="bglight dasb_text">
                            <h2>{adminDataKpisCount?.totalSalons}</h2>
                            <p className="dasb_text_p">Total Salons</p>
                            <p className="dasb_textlastp">
                              {adminDataKpisCount?.increaseFromPreviousMonth
                                ? `${adminDataKpisCount.increaseFromPreviousMonth}% Increase from Last Month`
                                : "-"}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="bgbrown dasb_text">
                            <h2>{adminDataKpisCount?.activeSalons}</h2>
                            <p className="dasb_text_p">Active Salons</p>
                            <p className="dasb_textlastp">
                              Logins past 4 weeks
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="bgblue dasb_text">
                            <h2>{adminDataKpisCount?.newSignUpSalons}</h2>
                            <p className="dasb_text_p">New Sign Ups </p>
                            <p className="dasb_textlastp">
                              Within Past 24 hours
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="bgblue dasb_text">
                            <h2>
                              {adminDataKpisCount?.totalActiveSubscriptions}
                            </h2>
                            <p className="dasb_text_p">
                              {" "}
                              Total Active Salon Subscriptions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-xxl-4 col-xl-8 col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body ">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text black">Searches</h4>
                        <span>
                          <div className="dropdown_custom ">
                            <div className="dropdown">
                              <button
                                className="p-0 btn-custom-drop dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Lifetime <i className="mdi mdi-menu-down"></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <NavLink className="dropdown-item" to="#">
                                  Lifetime
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>

                      <div className="row">
                        <div className="col-xl-2 col-lg-1 col-md-1"></div>
                        <div className="col-xl-8 col-lg-10 col-md-10">
                          <div className="bg_dasg_ble bgblue dasb_text">
                            <h1>0</h1>
                            <p className="mb-2">
                              Total Trade <br /> Deals Complete
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-1 col-md-1"></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <!-- dashboard first row end --> */}

              <div className="row">
                {/* <div className="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text black">
                          Top {adminDataKpisCount?.topActiveSalons?.length}{" "}
                          Active Salons
                        </h4>

                        <span>
                          <div className="searcg_icon">
                            <form className="app-search d-none d-lg-block ">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative w-100">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                  />
                                  <span className="bx bx-search-alt cgrey"></span>
                                </div>
                              </div>
                            </form>
                          </div>
                        </span>
                      </div>

                      <div className="tab_le_dealer">
                        <div className="table-responsive">
                          <table
                            id=""
                            className="table dt-responsive ff-inter active_dealer nowrap w-100"
                          >
                            <thead>
                              <tr>
                                <th>Salon ID</th>
                                <th>Salon Name</th>
                                <th>Location </th>
                                <th>Searches</th>
                              </tr>
                            </thead>

                            <tbody className="td_color">
                              {adminDataKpisCount?.topActiveSalons?.length >
                                0 &&
                                adminDataKpisCount?.topActiveSalons?.map(
                                  (item, i) => (
                                    <tr>
                                      <td>{i + 1}</td>
                                      <td>
                                        {item?.salonname
                                          ? item?.salonname
                                          : "-"}
                                      </td>
                                      <td>
                                        {item?.address ? item?.address : "-"}
                                      </td>
                                      <td>-</td>
                                    </tr>
                                  )
                                )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-xxl-8 col-xl-12 col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="garph_1">
                            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                              <h4 className="title_text black">
                                Trade Statistics
                              </h4>
                            </div>
                            <div className="days_moth d-block">
                              <ul className="nav nav-pills">
                                <li className="nav-item">
                                  <NavLink className="nav-link" to="#">
                                    Day
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link" to="#">
                                    Week
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link active" to="#">
                                    Month
                                  </NavLink>
                                </li>
                              </ul>
                            </div>

                            <div className="tot_trd_vech pt-3 d-block">
                              <p className="mb-2">Total Traded Sales</p>
                              <h5>
                                <b>00</b>
                              </h5>
                            </div>

                            <div
                              id="spline_area"
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="garph_2">
                            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                              <h4 className="title_text black">
                                Underwrite Statistics
                              </h4>
                            </div>
                            <div className="days_moth">
                              <ul className="nav nav-pills">
                                <li className="nav-item">
                                  <NavLink className="nav-link" to="#">
                                    Day
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link" to="#">
                                    Week
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link active" to="#">
                                    Month
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div className="tot_trd_vech pt-3">
                              <p className="mb-2">Total Underwrite Sales</p>
                              <h5>
                                <b>00</b>
                              </h5>
                            </div>

                            <div
                              id="spline_area1"
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}
        </div>
        {/* <!-- end main content--> */}
      </div>
      {/* <!-- END layout-wrapper --> */}
    </div>
  );
}
