import React from "react";
import Sidebar from "./Include/Sidebar";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteFaqCategory, faqCategoryListing } from "../Redux/Action/ManageconsultationAction";


export default function CreateFaqCategory() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false);
    const faqcatgeorylists = useSelector((state) => state.ManageConsultation.faqcategorylists);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        dispatch(faqCategoryListing());
    }, [dispatch]);

    return (
        <div>
            <div id="layout-wrapper">
                {/* <!-- ========== Left Sidebar Start ========== --> */}
                <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
                    <Sidebar />
                </div>

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
                                                <h4 class="mb-sm-0 font-size-28">FAQs Categories</h4>
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
                        </div>
                        {/* <!-- end search row --> */}

                        <div class="row">
                            <div class="col-xl-12">
                                <div class="members_tbl">
                                    <div class="card">
                                        <div class="card-body">

                                            <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                                                <h4 class="title_text">FAQs categories</h4>
                                                <div className="text-end">
                                                    <NavLink to="/faq-category/add">
                                                        {" "}
                                                        <button class="btn cre_new" >Create New</button>
                                                    </NavLink>
                                                </div>
                                            </div>


                                            <div class="table-responsive adjust-tb">


                                                <table className="table dt-responsive dealers_table nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="td_color">

                                                        {faqcatgeorylists?.length > 0 ? (
                                                            faqcatgeorylists?.map((item, i) => (
                                                                <tr>
                                                                    <td onClick={() => navigate(`/faqs?categoryId=${item?._id}`)} style={{ cursor: "pointer" }}>{item?.title}</td>

                                                                    <td className="">
                                                                        <Link
                                                                            to={`/faq-category/edit?categoryId=${item?._id}&&title=${item?.title}`}
                                                                            className="button edit"
                                                                        >
                                                                            Edit
                                                                        </Link>
                                                                        <button className="button delete"
                                                                          onClick={() => {
                                                                            dispatch(deleteFaqCategory(item?._id)).then(function () {
                                                                              dispatch(faqCategoryListing());
                                                                            });
                                                                          }}
                                                                        >
                                                                            Delete All
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : ("No Data")}

                                                    </tbody>
                                                </table>
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
