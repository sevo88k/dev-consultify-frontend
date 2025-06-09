import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Search from "../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllReviews, updateStatus } from "../redux/Action/AdminAction";
import moment from "moment";
import ReactStars from "react-rating-stars-component";
const AllReviews = () => {
  const limit = 6;
  const [page, setPage] = useState();
  const [search, setSearch] = useState();
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state?.adminReducer?.all_reviews);
  const totalReviews = useSelector(
    (state) => state?.adminReducer?.totalReviews
  );
  useEffect(() => {
    dispatch(getAllReviews(page || 1, limit, search));
  }, [page, limit, search]);
  useEffect(() => {
    setStatus(allReviews?.status);
  }, [allReviews]);
  const handlePageClick = (e) => {
    setPage(e?.selected + 1);
  };
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
                      All Reviews
                      {/* <!-- <span className="green-top-text">189</span>   --> */}
                    </h4>
                  </div>

                  <div className="page-title-right">
                    {/* <!-- App Search--> */}
                    <Search setSearch={setSearch} setPage={setPage} />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body height_fix">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">All Reviews</h4>
                        <div className="right-date-table-head">
                          {/* <div className="date-group-part">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text bx bx-search"></span>
                              </div>
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                          <div className="date-group-part">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text bx bx-search"></span>
                              </div>
                              <input type="date" className="form-control" />
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <form action="">
                        <div className="table-responsive height-fix-table">
                          <table
                            id="datatable"
                            className="table dt-responsive dealers_table nowrap "
                          >
                            <thead>
                              <tr>
                                <th>Enquiry #</th>
                                <th>Date</th>
                                <th>Service</th>
                                <th>Category</th>
                                <th>Tradesperson</th>
                                <th>User Name</th>
                                <th>Star Rating</th>
                                <th>Status</th>
                                <th></th>
                              </tr>
                            </thead>

                            <tbody className="td_color">
                              {allReviews?.length > 0 ? (
                                allReviews?.map((item, i) => {
                                  const service =
                                    item?.appointmentId?.enquiryId?.service?.split(
                                      " - "
                                    )[0];
                                  const category =
                                    item?.appointmentId?.enquiryId?.service?.split(
                                      " - "
                                    );
                                  return (
                                    <tr>
                                      <td>{item?.review_id}</td>
                                      <td>
                                        {" "}
                                        {moment(
                                          item?.appointmentId?.createdA
                                        ).format("DD/MM/YYYY")}
                                      </td>
                                      <td> {service}</td>
                                      <td>{category?.slice(-1)}</td>
                                      <td>
                                        {item?.receiverId?.user_role == "trade"
                                          ? item?.receiverId?.company_name
                                          : item?.senderId?.user_role == "trade"
                                          ? item?.senderId?.company_name
                                          : "N/A"}
                                      </td>
                                      <td>
                                        {item?.receiverId?.user_role == "user"
                                          ? item?.receiverId?.firstName +
                                            " " +
                                            item?.receiverId?.lastName
                                          : item?.senderId?.user_role == "user"
                                          ? item?.senderId?.firstName +
                                            " " +
                                            item?.senderId?.lastName
                                          : "N/A"}
                                      </td>
                                      <td>
                                        {item?.overall_rating && (
                                          <ReactStars
                                            count={5}
                                            value={item?.overall_rating}
                                            edit={false}
                                            isHalf={true}
                                            size={15}
                                            className={"starBig"}
                                            activeColor="#ffd700"
                                          />
                                        )}
                                      </td>
                                      <td>
                                        <select
                                          name=""
                                          id=""
                                          className="form-control form_select"
                                          onChange={(e) =>
                                            handleSelect(
                                              e.target.value,
                                              item?._id
                                            )
                                          }
                                        >
                                          <option hidden>
                                            {item?.status === 0
                                              ? "Pending"
                                              : item?.status === 2
                                              ? "Decline"
                                              : item?.status === 1
                                              ? "Approved"
                                              : "Select"}
                                          </option>

                                          <option value="1">Approved</option>
                                          <option value="2">Decline</option>
                                        </select>
                                      </td>
                                      <td>
                                        <Link
                                          to={`/all-reviews/review-detail/${item._id}`}
                                          className="btn btn-primary drk_btn"
                                        >
                                          View Details
                                        </Link>
                                      </td>
                                    </tr>
                                  );
                                })
                              ) : (
                                <td colspan="7">
                                  <p className="no_content_table">
                                    No reviews yet
                                  </p>
                                </td>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="pagination_new">
                    <ReactPaginate
                      activeClassName="active"
                      nextLabel="Next"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={1}
                      pageCount={totalReviews / limit}
                      previousLabel="Prev"
                      renderOnZeroPageCount={null}
                      containerClassName="pagination"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                    />
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

export default AllReviews;
