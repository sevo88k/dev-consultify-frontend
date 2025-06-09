import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategories,
  deleteCategory,
  uploadCsv,
} from "../../redux/Action/AdminAction";
import ReactPaginate from "react-paginate";
import DeleteModal from "../../components/Modals/DeleteModal";
import lightLogo from "../../assets/images/white_logo_main.png";
const ManageCategories = () => {
  const limit = 6;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category_list, totalCategories } = useSelector((state) => ({
    category_list: state?.adminReducer?.category_list,
    totalCategories: state?.adminReducer?.totalCategories,
  }));
  const [page, setPage] = useState();
  const [search, setSearch] = useState();
  const [showModal, setShowModal] = useState(false);
  const [delId, setDeleteId] = useState();
  useEffect(() => {
    dispatch(GetAllCategories(page || 1, limit, search));
  }, [page, limit, search]);

  const handlePageClick = (e) => {
    setPage(e?.selected + 1);
  };
  const uploadCsvData = (e) => {
    const targetFiles = e.target.files[0];
    const formData = new FormData();
    formData.append("csvFile", targetFiles);
    dispatch(uploadCsv(formData))
    
  };
  return (
    <Layout>
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        id={delId}
        modalName="deleteCategory"
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
                    <h4 className="mb-sm-0 font-size-28">Manage Categories</h4>
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
                    <NavLink
                      to="/manage-categories"
                      className="primary-green-btn"
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service" className="primary-white-btn">
                      Services
                    </NavLink>
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
                        <h4 className="title_text">All Categories</h4>
                        <span className="d-flex">
                          <NavLink to="/create-category">
                         
                            
                            <button className="btn cre_new">Create New</button>
                          </NavLink>
                          <div className="upload_csv position-relative">

                          <input
                            id="input-file"
                            type="file"
                            multiple
                            className="form-control box_shadow_new add_gallery_btn"
                            onChange={(e) => uploadCsvData(e)}
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"         
                          />
                          <button className="gallery_btn btn border_btn btn-custom ms-2">
                            Upload CSV
                          </button>
                        </div>
                        </span>
                        
                      </div>
                      <div className="table-responsive height-fix-table">
                        <table
                          id="datatable"
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Category Name</th>
                              <th>Image</th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {category_list?.length>0?
                              category_list?.map((item) => {
                              return (
                                <tr key={item?._id}>
                                  <td>{item?.category}</td>
                                  <td className="product-table-img">
                                    <img
                                      src={
                                        item?.category_image == null
                                          ? lightLogo
                                          : process.env.REACT_APP_IMG_URL +
                                            "/category_image/" +
                                            item?.category_image
                                      }
                                      alt=""
                                    />
                                  </td>
                                  <td className="d-flex">
                                    <NavLink
                                      to={`/edit-category/${item?._id}`}
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
                            }):  <td colspan="3"> <p className="no_content_table" >No enquiries yet</p></td>}
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
                    pageCount={search ? 1 : totalCategories / limit}
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
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </Layout>
  );
};

export default ManageCategories;
