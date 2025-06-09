import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import RichTextEditor from "../Component/RichTextEditor/RichTextEditor";
import { informationsaveAction } from "../Redux/Action/ManageconsultationAction";


export default function AddFaq() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const ids = queryParams.get("categoryId");

  const formik = useFormik({
    initialValues: {
      question: "",
      usertype: "",
      answer: "",
      id: "",
    },
    validationSchema: Yup.object({
      question: Yup.string().required("Question is required"),
      usertype: Yup.string().required("User type is required"),
      answer: Yup.string().required("Answer is required"),
    }),
    onSubmit: (values) => {
      dispatch(informationsaveAction({ ...values, Faq_category_id: ids })).then(function () {
        navigate(`/faqs?categoryId=${ids}`);
      });
    },
  });
  console.log(ids, "ids")
  return (
    <div>
      <div id="layout-wrapper">
        <div className="vertical-menu">
          <div data-simplebar="" className="h-100">
            <Sidebar />
          </div>
        </div>

        {/* <!-- ============================================================== -->
         <!-- Start right Content here -->
         <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-12 d-flex align-items-center">
                  <NavLink to={`/faqs?categoryId=${ids}`}>
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">Add New FAQ</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="card ">
                      <div className="card-body">
                        <div className="row">
                          <div className="faqs-main">
                            <div className="col-lg-12">
                              <label>Assigned To</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                name="usertype"
                                value={formik.values.usertype}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              >
                                <option selected>Open this select menu</option>
                                <option value="Salon">Salon</option>
                                <option value="Customer">Customer</option>
                              </select>
                              {formik.submitCount > 0 &&
                                formik.touched.usertype &&
                                formik.errors.usertype && (
                                  <div className="error">
                                    {formik.errors.usertype}
                                  </div>
                                )}
                            </div>
                            <div className="col-lg-12">
                              <label>Title</label>
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Type Here...."
                                name="question"
                                value={formik.values.question}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.submitCount > 0 &&
                                formik.touched.question &&
                                formik.errors.question && (
                                  <div className="error">
                                    {formik.errors.question}
                                  </div>
                                )}
                            </div>
                            <div className="col-lg-12">
                              <label>Content</label>
                              <RichTextEditor
                                setFieldValue={(e) => {
                                  formik.setFieldValue("answer", e);
                                }}
                              />

                              {/* <RichTextEditor
                                givenContent={formik.values.answer} // Pass initial content if available
                                setFieldValue={(value) => formik.setFieldValue("answer", value)} // Update formik field
                              /> */}

                              {formik.submitCount > 0 &&
                                formik.touched.answer &&
                                formik.errors.answer && (
                                  <div className="error">
                                    {formik.errors.answer}
                                  </div>
                                )}
                            </div>
                            <div className="col-lg-12">
                              <div className="d-flex justify-content-center align-items-center flex-wrap mb-3 position-relative">
                                <button type="submit" className="new_update">
                                  Create
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
