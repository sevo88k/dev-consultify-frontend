import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { getTradePeople } from "../redux/Action/AdminAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";
import Search from "../components/search/Search";

const TradePersons = () => {
  const limit = 9;
  const dispatch = useDispatch();
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState("");
  const tradePeople = useSelector(
    (state) => state?.adminReducer?.tradePeople_list
  );
  const totalTradePeople = useSelector(
    (state) => state?.adminReducer?.totalTradePeople
  );

  useEffect(() => {
    dispatch(getTradePeople(page || 1, limit, search));
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
                      All Tradespeople
                      <span className="green-top-text">{totalTradePeople}</span>
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
                        <h4 className="title_text">All Tradespeople</h4>
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
                            {tradePeople?.length>0?
                              tradePeople.map((item, i) => {
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
                                        to={`/tradespeople/tradespeaple-details/${item?._id}`}
                                      >
                                        {item?.company_name}
                                      </Link>
                                    </td>
                                    <td>
                                      {item?.firstName + " " + item?.lastName}
                                    </td>
                                    <td>{item?.email}</td>
                                    <td>{item?.mobile}</td>
                                    <td>{item?.country}</td>
                                    <td>{item?.enquiries}</td>
                                    <td>
                                      {item?.verified == 1
                                        ? "Verified"
                                        : "Un-verified"}
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
                                      {moment(item?.date).format("DD/MM/YYYY")}
                                    </td>
                                  </tr>
                                );
                              }):<td colspan="10">
                              <p className="no_content_table">No tradesperson yet</p>
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
                      pageCount={totalTradePeople / limit}
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

export default TradePersons;
