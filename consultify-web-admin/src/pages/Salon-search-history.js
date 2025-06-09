import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import moment from "moment";
import {
  getAllSaonSearchHistory,
  salonDetailsAction,
} from "../Redux/Action/SalonAction";
import { useDispatch, useSelector } from "react-redux";
import { Decryptedid } from "../Util/BcruptEncyptid";
import SalondetailsNav from "./Include/SalondetailsNav";

export default function Salonsearch() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const idvalue = Decryptedid(atob(id));
  var salondetails = useSelector((state) => state.Salon.salondetails);
  const allSearchHistory = useSelector((state) => state.Salon.allSearchHistory);

  useEffect(() => {
    dispatch(salonDetailsAction(idvalue));
    dispatch(getAllSaonSearchHistory(idvalue));
  }, [idvalue]);

  console.log(allSearchHistory, "allSearchHistory");

  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-6 d-flex align-items-center">
                  <NavLink to="/All-salons">
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">
                    {salondetails.salonname}
                  </h4>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <p className="sub_heading">
                    Joined:{" "}
                    {moment(salondetails.updatedAt).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="container-fluid">
              <div className="row">
                <SalondetailsNav id={id} />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card mt-4">
                    <div className="card-body">
                      {allSearchHistory?.map((item) => {
                        return (
                          <>
                            <div className="searches_main d-flex justify-content-between w-75">
                              <div className="search-inner">
                                <h5>
                                  {moment(item.createdAt).format(
                                    "DD/MM/YYYY hh:mm"
                                  )}
                                </h5>
                              </div>
                              <div className="search-inner">
                                <h5>Typed Search: </h5>
                                <p>{item?.typedSearch || "N/A"}</p>
                              </div>
                              <div className="search-inner">
                                <h5>Viewed During Session:</h5>
                                <ul>
                                  {item?.viewDuringSession?.map((data) => {
                                    return (
                                      <li>
                                        {data?.title}{" "}
                                        {data?.enterytype &&
                                          `(${data?.enterytype})`}{" "}
                                      </li>
                                    );
                                  })}
                                  {item?.viewDuringSession?.length == 0 &&
                                    "N/A"}
                                </ul>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      {allSearchHistory?.length == 0 &&
                        "No data available yet!"}
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
    </div>
  );
}
