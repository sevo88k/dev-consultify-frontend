import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Search from "../components/search/Search";
import { getPendingVerifications } from "../redux/Action/AdminAction";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link } from "react-router-dom";

const PendingVerification = () => {
  const limit = 9;
  const [page, setPage] = useState();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const pendingVerifyList = useSelector(
    (state) => state?.adminReducer?.all_verification
  );
  const totalPendingVerifyList = useSelector(
    (state) => state?.adminReducer?.totalVerification
  );

  useEffect(() => {
    dispatch(getPendingVerifications(page || 1, limit, search));
  }, [page, limit, search]);
  const handlePageClick = (e) => {
    setPage(e?.selected + 1);
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
                      Pending Verification
                      <span className="green-top-text">
                        {totalPendingVerifyList}
                      </span>
                    </h4>
                  </div>

                  <div className="page-title-right">
                    {/* <!-- App Search--> */}
                    <Search setSearch={setSearch}  setPage={setPage}/>
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
                        <h4 className="title_text">Pending Verification</h4>
                      </div>
                      <div className="table-responsive height-fix-table">
                        <table
                          id="datatable"
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Member No.</th>
                              <th>Joining Date</th>
                              <th>Company Name</th>
                              <th>Account Holder</th>
                              <th>Email Address</th>
                              <th>Phone</th>
                              <th>Location</th>
                              <th>No. Enquiries</th>
                              <th>Status</th>
                              <th>Last Log in</th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {pendingVerifyList?.length>0?
                              pendingVerifyList?.map((item) => {
                                return (
                                  <tr>
                                    <td>{item?.memberNo}</td>
                                    <td>
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td>
                                    <Link
                                        to={`/pending-verification/tradespeaple-details/${item?._id}`}
                                      >
                                        {item?.company_name}
                                      </Link>
                                    </td>
                                    <td>
                                      {item?.firstName + " " + item?.lastName}
                                    </td>
                                    <td>{item?.email}</td>
                                    <td>
                                      {item?.phone_no ? item?.phone_no : "NA"}
                                    </td>
                                    <td>{item?.address.split(",")[3]}</td>
                                    <td>3</td>
                                    <td>
                                    {item?.verified==1?"Verified":"Un-verified"}
                                      {/* <form action="">
                                        <select
                                          name=""
                                          id=""
                                          className="form-control form_select"
                                        >
                                          <option value="">Verified</option>
                                          <option value="">Un-verified</option>
                                        </select>
                                      </form> */}
                                    </td>
                                    <td>
                                      {moment(item?.lastLogin).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                  </tr>
                                );
                              }):<td colspan="10">
                              <p className="no_content_table">No pending verifications</p>
                            </td>}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="pagination_new">
                    <ReactPaginate
                      activeClassName="active"
                      nextLabel="Next"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={1}
                      pageCount={totalPendingVerifyList / limit}
                      previousLabel="Previous"
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

export default PendingVerification;
