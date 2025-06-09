import React from "react";
import Layout from "../layout/Layout";
import AllEnquiries from "./all_enquiries/AllEnquiries";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewUserDetail } from "../../redux/Action/AdminAction";
import { useParams } from "react-router-dom";
import moment from "moment";
import DeleteModal from "../Modals/DeleteModal";
import { useState } from "react";
const MemberDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [delId, setDeleteId] = useState();
  const viewDetail = useSelector(
    (state) => state?.adminReducer?.view_user_detail
  );
  const userEnquiries = useSelector(
    (state) => state?.adminReducer?.userEnquiries
  );

  useEffect(() => {
    dispatch(viewUserDetail(id));
  }, []);

  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box1 d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Users</span>
                    <h4 className="mb-sm-0 font-size-28 bold-name-heading">
                      {viewDetail?.firstName + " " + viewDetail?.lastName}
                    </h4>
                  </div>
                  <div className="page-title-right">
                    {/* <!-- App Search--> */}
                    {/* <form className="app-search d-none d-lg-block ">
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
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="row mb-3 mt-2">
              <div className="col-md-6">
                <h4 className="mb-sm-0 font-size-28 sub-heading-text-header">
                  Joined: {moment(viewDetail?.createdAt).format("DD/MM/YYYY")}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tbl_user_info">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                              <h4 className="title_text">Customer Details</h4>
                            </div>
                            <DeleteModal
                              showModal={showModal}
                              setShowModal={setShowModal}
                              id={delId}
                              modalName="deleteUser"
                            />
                            <div className="row">
                              <div className="col-md-8">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group mb-3">
                                      <label
                                        for=""
                                        className="view-label-input"
                                      >
                                        Name
                                      </label>
                                      <div className="input-view-text">
                                        {viewDetail?.firstName +
                                          " " +
                                          viewDetail?.lastName}
                                      </div>
                                      {/* <!-- <input type="text" className="form-control-new" placeholder=""> --> */}
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-group mb-3">
                                      <label
                                        for=""
                                        className="view-label-input"
                                      >
                                        DOB
                                      </label>
                                      <div className="input-view-text">N/A</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group mb-3">
                                      <label
                                        for=""
                                        className="view-label-input"
                                      >
                                        Email
                                      </label>
                                      <div className="input-view-text">
                                        {viewDetail?.email}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-group mb-3">
                                      <label
                                        for=""
                                        className="view-label-input"
                                      >
                                        Mailing List
                                      </label>
                                      <div className="input-view-text">
                                        {viewDetail?.mail_list == 0
                                          ? "No"
                                          : "Yes"}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group mb-3">
                                      <label
                                        for=""
                                        className="view-label-input"
                                      >
                                        Phone
                                      </label>
                                      <div className="input-view-text">
                                        {viewDetail?.phone_no}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group mb-3">
                                  <label for="" className="view-label-input">
                                    Address
                                  </label>
                                  {viewDetail?.address
                                    ?.split(",")
                                    .filter((val) => {
                                      return val !== " ";
                                    })
                                    ?.map((item, i) => {
                                      return (
                                        <div className="form-group mb-3">
                                          <div className="input-view-text">
                                            {item}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  {/* <div className="input-view-text">
                                    32 Elthiron Road
                                  </div> */}
                                </div>
                                {/* <div className="form-group mb-3">
                                  <div className="input-view-text">Fulham</div>
                                </div> */}
                                {/* <div className="form-group mb-3">
                                  <div className="input-view-text">
                                    United Kingdom
                                  </div>
                                </div> */}
                                <div className="form-group mb-3">
                                  <div className="input-view-text">
                                    {viewDetail?.postcode}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AllEnquiries userEnquiries={userEnquiries} />
                </div>
                <div className="col-md-3">
                  <div className="user_profile">
                    {viewDetail?.profile_image ? (
                      <img
                        src={
                          process.env.REACT_APP_IMG_URL +
                          "/profile_image/" +
                          viewDetail?.profile_image
                        }
                        alt=""
                        className=""
                      />
                    ) : (
                      <img
                        src={require("../../assets/images/placeholder_img.png")}
                        alt=""
                        className=""
                      />
                    )}

                    <div className="dropdown_items">
                      {/* <div className="dropdown_custom ">
                        <div className="dropdown">
                          <button
                            className="p-0 btn-custom-drop dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Active<i className="mdi mdi-menu-down"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                            style={{ margin: "0px" }}
                          >
                            <a className="dropdown-item" href="#">
                              {" "}
                              Active
                            </a>
                          </div>
                        </div>
                      </div> */}
                      <div className="dropdown_custom ">
                        <div className="dropdown">
                          <button
                            className="p-0 btn-custom-drop dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => {
                              setShowModal(true);
                              setDeleteId(viewDetail?._id);
                            }}
                          >
                            Delete Account
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                            style={{ margin: "0px" }}
                          >
                            <a className="dropdown-item" href="#">
                              {" "}
                              Active
                            </a>
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
    </Layout>
  );
};

export default MemberDetails;
