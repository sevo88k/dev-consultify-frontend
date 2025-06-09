import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateStatus, viewReviewDetail } from "../../redux/Action/AdminAction";
import ReactStars from "react-rating-stars-component";
const ViewDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [star,setStar]=useState(false)
  const viewDetail = useSelector((state) => state?.adminReducer?.review_detail);
  console.log(viewDetail, "viewDetailviewDetail");
  useEffect(() => {
    dispatch(viewReviewDetail(id)).then((res)=>{
      if(res?.success){
        setStar(true)
      }
    });
  }, []);
  const handleSelect = (val, Id) => {
    if (val) {
      dispatch(
        updateStatus({
          id: Id,
          status: val,
        })
      );
    }
  };
  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Smart Choice Traders</span>
                    <h4 className="mb-sm-0 font-size-28">
                      Review Detail
                      <span className="green-top-text">
                        {viewDetail?.review_id}
                      </span>
                    </h4>
                  </div>

                  <div className="page-title-right">
                    {/* <!-- App Search--> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body ">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Reviews</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-7">
                         <div className="row">
                            <div className="col-md-6">
                              <p className="reviews-tilte-text">Tradesperson</p>
                              <p className="reviews-detail-text">
                                {viewDetail?.receiverId?.user_role == "trade"
                                  ? viewDetail?.receiverId?.company_name
                                    ? viewDetail?.receiverId?.company_name
                                    : "N/A"
                                  : viewDetail?.senderId?.user_role == "trade"
                                  ? viewDetail?.senderId?.company_name
                                    ? viewDetail?.senderId?.company_name
                                    : "N/A"
                                  : "N/A"}
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="reviews-tilte-text">Service</p>
                              <p className="reviews-detail-text">
                                {viewDetail?.appointmentId?.enquiryId?.service}
                              </p>
                            </div>                         
                            <div className="col-md-6">
                              <p className="reviews-tilte-text">Customer</p>
                              <p className="reviews-detail-text">
                                {" "}
                                {viewDetail?.receiverId?.user_role == "user"
                                  ? viewDetail?.receiverId?.firstName +
                                    " " +
                                    viewDetail?.receiverId?.lastName
                                  : viewDetail?.senderId?.user_role == "user"
                                  ? viewDetail?.senderId?.firstName +
                                    " " +
                                    viewDetail?.senderId?.lastName
                                  : "N/A"}
                              </p>
                            </div>
                            <div className="review-status col-md-6">
                              <p className="reviews-tilte-text m-0 mb-2">
                                Status
                              </p>
                              <div className="dropdown_custom custom-width">
                                <select
                                  name=""
                                  id=""
                                  className="form-control form_select"
                                  onChange={(e) =>
                                    handleSelect(e.target.value, viewDetail?._id)
                                  }
                                >
                                  <option hidden>
                                    {viewDetail?.status === 0
                                      ? "Pending"
                                      : viewDetail?.status === 2
                                      ? "Decline"
                                      : viewDetail?.status === 1
                                      ? "Approved"
                                      : "Select"}
                                  </option>

                                  <option value="1">Approved</option>
                                  <option value="2">Decline</option>
                                </select>
                                {/* <div className="dropdown">
                                  <button
                                    className="p-0 btn-custom-drop dropdown-toggle unactive-color"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Pending<i className="mdi mdi-menu-down"></i>
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
                                </div> */}
                              </div>
                            </div>
                            <div className="comments-text col-md-12">
                            <p className="reviews-tilte-text m-0 mb-2">
                              Comments
                            </p>
                            <p className="comment comment_bx">{viewDetail?.comments}</p>
                            {/* <ul className="tab-ul-inner">
                              <li>
                                <a
                                  href="#"
                                  className="primary-white-btn custom-radius"
                                >
                                  Cancel
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="primary-green-btn custom-radius"
                                >
                                  Save
                                </a>
                              </li>
                            </ul> */}
                          </div>
                          
                          <div className="img-upload-width col-md-6">
                            <p className="reviews-tilte-text">Before</p>
                            <img
                              src={
                                viewDetail?.before_Img
                                  ? process.env.REACT_APP_IMG_URL +
                                    viewDetail?.before_Img
                                  : require("../../assets/images/placeholder_img.png")
                              }
                              alt=""
                              className="ml-2"
                            />
                          </div>
                          <div className="img-upload-width  col-md-6">
                            <p className="reviews-tilte-text">After</p>
                            <img
                              src={
                                viewDetail?.after_Img
                                  ? process.env.REACT_APP_IMG_URL +
                                    viewDetail?.after_Img
                                  : require("../../assets/images/placeholder_img.png")
                              }
                              alt=""
                              className="ml-2"
                            />
                          </div>
                         </div>
                          
                        
                        

                          
                        </div>
                        <div className="col-md-5">                      
                          <div className="row">
                          <div className="col-md-12">
                           <div className="overall-rating">
                           <p className="reviews-tilte-text">Overall Rating</p>
                            <p className="reviews-detail-text">
                              {star==true && (
                                <ReactStars
                                  count={5}
                                  value={viewDetail?.overall_rating}
                                  edit={false}
                                  isHalf={true}
                                  size={55}
                                  className={"starBig"}
                                  activeColor="#ffd700"
                                />
                              )}
                            </p>
                           </div>
                          </div>
                          <div className="col-md-12 ">
                                <div className="star-divide">
                                <p className="reviews-tilte-text">Quote Accuracy</p>
                                <p className="reviews-detail-text">
                                  {star==true && (
                                    <ReactStars
                                      count={5}
                                      value={viewDetail?.quoteAccuracy}
                                      edit={false}
                                      isHalf={true}
                                      size={40}
                                      className={"starBig"}
                                      activeColor="#ffd700"
                                    />
                                  )}
                                </p>
                                </div>
                          </div>
                          <div className="col-md-12">
                          <div className="star-divide">
                          <p className="reviews-tilte-text">Tidiness</p>
                            <p className="reviews-detail-text">
                              {star==true && (
                                <ReactStars
                                  count={5}
                                  value={viewDetail?.tidiness}
                                  edit={false}
                                  isHalf={true}
                                  size={40}
                                  className={"starBig"}
                                  activeColor="#ffd700"
                                />
                              )}
                            </p>
                           </div>
                          </div>
                          <div className="col-md-12">
                          <div className="star-divide">
                            <p className="reviews-tilte-text">Friendliness</p>
                            <p className="reviews-detail-text">
                              {star==true && (
                                <ReactStars
                                  count={5}
                                  value={viewDetail?.friendliness}
                                  edit={false}
                                  isHalf={true}
                                  size={40}
                                  className={"starBig"}
                                  activeColor="#ffd700"
                                />
                              )}
                            </p>
                            </div>
                          </div>                          
                          <div className="col-md-12">
                          <div className="star-divide">
                            <p className="reviews-tilte-text">Punctuality</p>
                            <p className="reviews-detail-text">
                              {star==true && (
                                <ReactStars
                                  count={5}
                                  value={viewDetail?.punctuality}
                                  edit={false}
                                  isHalf={true}
                                  size={40}
                                  className={"starBig"}
                                  activeColor="#ffd700"
                                />
                              )}
                            </p>
                            </div>
                          </div>
                          <div className="col-md-12">
                          <div className="star-divide">
                          <p className="reviews-tilte-text">
                              Quality of Work
                            </p>
                            <p className="reviews-detail-text">
                              {star==true && (
                                <ReactStars
                                  count={5}
                                  value={viewDetail?.quality_of_Work}
                                  edit={false}
                                  isHalf={true}
                                  size={40}
                                  className={"starBig"}
                                  activeColor="#ffd700"
                                />
                              )}
                            </p>
                          </div>
                          </div>       
                          </div>                
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
    </Layout>
  );
};

export default ViewDetail;
