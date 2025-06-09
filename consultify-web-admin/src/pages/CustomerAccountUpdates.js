import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { adminCompletedConsultation } from "../Redux/Action/ManageconsultationAction";
import moment from "moment";
import { Nav } from "react-bootstrap";
import { Encryptedid } from "../Util/BcruptEncyptid";
import { customerlogsAction } from "../Redux/Action/SalonAction";
import { useState } from "react";

export default function CustomerAccountUpdates() {
  const dispatch = useDispatch();
  const [serach, setSearch] = useState("");
  useEffect(() => {
    dispatch(customerlogsAction());
  }, []);
  var logslist = useSelector(
    (state) => state.ManageConsultation.customeraccountupdates
  );

  logslist = logslist.filter((object) => {
    var fullName = (
      object.customer_id.first_name + object.customer_id.last_name
    )
      ?.toLowerCase()
      .trim();
    var searchTerm = serach?.toLowerCase().trim();

    return fullName.includes(searchTerm);
  });

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
                          Customer Account Updates
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
                <div class="col-xxl-4 col-md-6">
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
              </div>
            </div>
            {/* <!-- end search row --> */}

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text"> Customer Account Updates</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th className="hide-on-small">Id</th>
                              <th>Customer Name</th>
                              <th>Salon Name</th>
                              <th>Updates Made (Date) </th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {logslist?.map(function (object, i) {
                              return (
                                <tr>
                                  <td className="hide-on-small">{i + 1}</td>
                                  <td>
                                    {object?.customer_id?.first_name +
                                      " " +
                                      object?.customer_id?.last_name}
                                  </td>
                                  <td>
                                    {object?.salon_id?.firstname +
                                      " " +
                                      object?.salon_id?.lastname}
                                  </td>
                                  <td>
                                    {moment(object?.createdAt).format(
                                      "DD/MM/YYYY"
                                    )}
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
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
