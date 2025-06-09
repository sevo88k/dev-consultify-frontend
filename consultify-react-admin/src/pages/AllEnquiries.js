import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getAllEnquiry } from "../redux/Action/AdminAction";
import Search from "../components/search/Search";
import moment from "moment";
import { Link } from "react-router-dom";

const AllEnquiries = () => {
  const dispatch = useDispatch();
  const limit = 7;
  const [page, setPage] = useState();
  const [search, setSearch] = useState();

  const allEnquiries = useSelector(
    (state) => state?.adminReducer?.allEnquiries
  );

  const totalEnquiries = useSelector(
    (state) => state?.adminReducer?.totalEnquiries
  );

  useEffect(() => {
    dispatch(getAllEnquiry(page, limit, search));
  }, [page, search]);

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
                      All Enquiries
                      <span className="green-top-text">{totalEnquiries}</span>
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
                  <Search setSearch={setSearch} setPage={setPage} />
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Enquiries</h4>
                        {/* <div className="right-date-table-head">
                          <div className="date-group-part">
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
                          </div>
                        </div> */}
                      </div>

                      <div className="table-responsive height-fix-table">
                        <table
                          id="datatable"
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Enquiry #</th>
                              <th>Date</th>
                              <th>Service</th>
                              <th>Category</th>
                              <th>Tradesperson</th>
                              <th>User Name</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {allEnquiries?.length > 0 ? (
                              allEnquiries?.map((enquiry) => {
                                return (
                                  <tr>
                                    <td>{enquiry?.enquiryNo}</td>
                                    <td>
                                      {moment(enquiry?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td>
                                      {enquiry?.service}
                                      {/* <!-- <select name="" id="" className="form-control form_select">
                                                        <option value="">
                                                            Appliance Repair
                                                        </option>
                                                        <option value="">
                                                            Appliance Repair
                                                        </option>
                                                    </select> --> */}
                                    </td>
                                    <td>
                                      {
                                        enquiry?.serviceId?.category_id
                                          ?.category
                                      }
                                      {/* <!-- <select name="" id="" className="form-control form_select">
                                                        <option value="">
                                                            Plumbing
                                                        </option>
                                                        <option value="">
                                                            Plumbing
                                                        </option>
                                                    </select> --> */}
                                    </td>
                                    <td>{enquiry?.company_name}</td>
                                    <td>
                                      {enquiry?.userId?.firstName.concat(
                                        " ",
                                        enquiry?.userId?.firstName
                                      )}
                                    </td>
                                    <td>
                                      <Link
                                        to={`/all-enquiries/view-enquiry-detail/${enquiry?._id}`}
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
                              <p className="no_content_table">No enquiries yet</p>
                            </td>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {totalEnquiries > limit && (
                    <div className="pagination_new">
                      <ReactPaginate
                        activeClassName="active"
                        nextLabel="Next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={totalEnquiries / limit}
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
                  )}
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

export default AllEnquiries;
