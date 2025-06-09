import React from "react";
import Sidebar from "./Include/Sidebar";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  informationlistAction,
} from "../Redux/Action/ManageconsultationAction";
import DragDropTable from "../Component/DragDropTable";


export default function Faqs() {
  const dispatch = useDispatch();

    const location = useLocation()
  
    const queryParams = new URLSearchParams(location.search);
    const ids = queryParams.get("categoryId");

  var faqlists = useSelector((state) => state.ManageConsultation.faqlists);

  const [toggle, setToggle] = useState(false);
  const [faqOrder, setFaqOrder] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if(ids){
      dispatch(informationlistAction({Faq_category_id : ids}));
    }
  }, [dispatch, ids]);

  useEffect(() => {
    setFaqOrder(faqlists);
  }, [faqlists]);


  return (
    <div>
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              {/* <!-- start page title --> */}
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span class="small_text">Consultify</span>
                      <div className="d-flex justify-content-center align-items-center">
                           <NavLink to="/faq-category">
                                            <img src={require("../assets/images/Component.png")} />
                                          </NavLink>
                         <h4 class="mb-sm-0 font-size-28">FAQs</h4>
                        <p className="total"></p>
                      </div>
                    </div>

                    <div class="page-title-right">
                      {/* <!-- App Search--> */}
                      <div
                        className="hamburger-menu-btn"
                        onClick={handleToggle}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="35px"
                          height="35px"
                        >
                          <path
                            fill="#607D8B"
                            d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
                          />
                        </svg>
                      </div>

                      <img
                        src={require("../assets/images/avatar.svg").default}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              {/* <!-- start search row --> */}
              <div class="row mb-4 create-new">
                <div class="col-xxl-4 col-sm-6 ">
                  <input
                    name="title"
                    type="text"
                    class="form-control cmn_fields"
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    //  onChange={(e) => handleFilter(e, 'message')}
                    //  onKeyDown={(e) => handleFilter(e)}
                    //value = {filter?.title}
                  />
                </div>

                <div className="col-xxl-8 col-sm-6 mt-3 mt-sm-0">
                  <div className="text-end">
                    <NavLink to={`/add-faq?categoryId=${ids}`}>
                      {" "}
                      <button class="btn cre_new">Add</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end search row --> */}

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text">FAQs</h4>
                      </div>

                      <div class="table-responsive">
                        {/* <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>S.No </th>
                              <th>Title</th>

                              <th>Assigned To</th>
                              <th>Actions</th>
                              <th>Arrange Order</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                          {faqOrder.length > 0  && faqOrder?.map(function (object, i) {
                              return (
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>{object?.question}</td>
                                  <td>{object?.usertype}</td>
                                  <td className="custom-btn-ps">
                                    <Link
                                      to={"/edit-faq/" + object?._id}
                                      className="button edit"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        dispatch(
                                          informationdeleteAction({
                                            id: object?._id,
                                          })
                                        ).then(function () {
                                          dispatch(informationlistAction());
                                        });
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </td>

                                  <td>
                                    
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 7H19"
                                      stroke="#979699"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M5 12H19"
                                      stroke="#979699"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M5 17H19"
                                      stroke="#979699"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                    />
                                  </svg>

                                </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table> */}

                     <DragDropTable  faqOrder={faqOrder} setFaqOrder={setFaqOrder} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
      </div>
    </div>
  );
}
