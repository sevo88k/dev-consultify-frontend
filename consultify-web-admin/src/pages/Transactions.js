import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useState } from "react";
export default function Transactions() {
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
                        <h4 class="mb-sm-0 font-size-28">Transactions </h4>
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
                <div class="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                  />
                </div>

                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6  mt-3  mt-sm-0">
                  <div class="form-group">
                    <select
                      class="form-control cmn_fields"
                      id="exampleFormControlSelect1"
                    >
                      <option>Date Range</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3  mt-lg-0 ">
                  <input
                    type="number"
                    class="form-control cmn_fields"
                    id=""
                    aria-describedby="emailHelp"
                    value=""
                    placeholder="Total: £10,549.00"
                  />
                </div>

                <div className="col-xxl-4 col-xl-2 col-lg-3 col-md-6 col-sm-6 mt-3  mt-lg-0  d-flex justify-content-end">
                  <span>
                    <NavLink to="">
                      {" "}
                      <button class="btn cre_new">Export</button>
                    </NavLink>
                  </span>
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
                        <h4 class="title_text">Transactions</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Salon Name</th>
                              <th>
                                Date{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th>Payment #</th>
                              <th>Stripe ID</th>
                              <th>Value </th>
                            </tr>
                          </thead>
                          <tbody class="td_color"></tbody>
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
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
