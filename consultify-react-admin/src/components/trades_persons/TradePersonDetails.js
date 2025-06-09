import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Company from "./Company";
import AccountHolder from "./AccountHolder";
import AllEnquiries from "./AllEnquiries";
import Subscriptions from "./Subscriptions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewTradePeopleDetail } from "../../redux/Action/AdminAction";
import moment from "moment";

const TradePersonDetails = () => {
  const { id } = useParams();
  const [pageClick, setPageClick] = useState("Company");
  const dataArray = [
    "Company",
    "Account Holder",
    "All Enquiries",
    "Subscription",
  ];

  const dispatch = useDispatch();
  const viewDetail = useSelector(
    (state) => state?.adminReducer?.tradePeople_detail
  );
  console.log(viewDetail,'viewDetail');
  const handleClickPage = (data) => {
    setPageClick(data);
  };

  useEffect(() => {
    dispatch(viewTradePeopleDetail(id));
  }, []);
  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between page-title-box_new">
                  <div>
                    <span className="small_text">Smart Choice Traders</span>
                    <h4 className="mb-sm-0 font-size-28 bold-name-heading">
                      {viewDetail?.company_name}
                    </h4>
                  </div>
                  {/* <div className="page-title-right">
                 
                    <form className="app-search d-none d-lg-block ">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative w-100">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <span className="bx bx-search"></span>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="row mb-3 mt-2">
              <div className="col-md-5">
                <h4 className="mb-sm-0 font-size-28 sub-heading-text-header">
                  Joined: {moment(viewDetail?.createdAt).format("DD/MM/YYYY")}
                </h4>
              </div>
              <div className="col-md-7">
                <ul className="tab-ul-inner">
                  {dataArray.map((item, i) => {
                    return (
                      <li>
                        <a
                          onClick={() => handleClickPage(item)}
                          className={
                            pageClick == item
                              ? "primary-green-btn"
                              : "primary-white-btn"
                          }
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {pageClick == "Company" && <Company viewDetail={viewDetail} />}
            {pageClick == "Account Holder" && (
              <AccountHolder viewDetail={viewDetail} />
            )}
            {pageClick == "All Enquiries" && <AllEnquiries />}
            {pageClick == "Subscription" && <Subscriptions />}
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}
        </div>
        {/* <!-- end main content--> */}
      </div>
    </Layout>
  );
};

export default TradePersonDetails;
