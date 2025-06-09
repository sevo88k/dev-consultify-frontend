import React, { useEffect, useState } from "react";
import Search from "../../../components/search/Search";
import { Link, NavLink } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import {
  AllCategories,
  getServiceCategories,
} from "../../../redux/Action/AdminAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import DeleteModal from "../../../components/Modals/DeleteModal";
import lightLogo from "../../../assets/images/white_logo_main.png";

const Service = () => {
  const limit = 6;
  const dispatch = useDispatch();
  const [page, setPage] = useState();
  const [search, setSearch] = useState();
  const [showModal, setShowModal] = useState(false);
  const [delId, setDeleteId] = useState();
  const { all_cat_list, service_list, serviceCount } = useSelector((state) => ({
    all_cat_list: state.adminReducer.all_cat_list,
    service_list: state.adminReducer.service_list,
    serviceCount: state.adminReducer.serviceCount,
  }));
  useEffect(() => {
    dispatch(AllCategories());
    dispatch(getServiceCategories(page || 1, limit, search));
  }, [page, limit, search]);

  const handlePageClick = (e) => {
    setPage(e?.selected + 1);
  };
  return (
    <Layout>
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        id={delId}
        modalName="deleteServiceCategory"
      />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Smart Choice Traders </span>
                    <h4 className="mb-sm-0 font-size-28">
                      Manage Services
                      {/* <!-- <span className="green-top-text">32</span>   --> */}
                    </h4>
                  </div>
                  <Search setSearch={setSearch} setPage={setPage} />
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row mb-3 d-flex justify-content-end">
              <div className="col-md-6">
                <ul className="tab-ul-inner">
                  <li>
                    <Link to="/manage-categories" className="primary-white-btn">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" className="primary-green-btn">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body height_fix">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">All Services</h4>
                        <span>
                          <NavLink to="/create-service-category">
                            {" "}
                            <button className="btn cre_new">Create New</button>
                          </NavLink>
                        </span>
                      </div>
                      <div className="table-responsive height-fix-table">
                        <table
                          id="datatable"
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Service</th>
                              <th>Image</th>
                              <th>Category</th>
                              <th>Subcategory</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {service_list?.length>0?
                              service_list?.map((item) => {
                              return (
                                <tr key={item?._id}>
                                  <td>{item?.service}</td>
                                  <td className="product-table-img">
                                    <img
                                      src={
                                        item?.service_category_image == null
                                          ? lightLogo
                                          : process.env.REACT_APP_IMG_URL +
                                            "/category_image/" +
                                            item?.service_category_image
                                      }
                                      alt=""
                                    />
                                  </td>
                                  <td>{item?.category_id?.category}</td>
                                  <td>
                                    {item?.sub_category_id?.sub_category == null
                                      ? "N/A"
                                      : item?.sub_category_id?.sub_category}
                                  </td>
                                  <td className="d-flex">
                                    <NavLink
                                      to={`/edit-service-category/${item?._id}`}
                                      className="primary-green-btn mx-2"
                                    >
                                      Edit
                                    </NavLink>
                                    <a
                                      onClick={() => {
                                        setShowModal(true);
                                        setDeleteId(item?._id);
                                      }}
                                      href="#"
                                      className="primary-green-btn"
                                    >
                                      Delete
                                    </a>
                                  </td>
                                </tr>
                              );
                            }):<td colspan="10">
                            <p className="no_content_table">No services yet</p>
                          </td>}
                            {/* <tr><td colspan="5" class="h-250" valign="middle"><p class="no_content_table">No Categories</p></td></tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination_new">
                  <ReactPaginate
                    activeClassName="active"
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={search ? 1 : serviceCount / limit}
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
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </Layout>
  );
};

export default Service;
