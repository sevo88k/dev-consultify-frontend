import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addFaqCategory, editFaqCategory } from "../Redux/Action/ManageconsultationAction";

export default function AddNewFaqCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const ids = queryParams.get("categoryId");
  const titleText = queryParams.get("title");


  const formik = useFormik({
    initialValues: {
      title: titleText ? titleText : "",
      id: ids ? ids : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),

    }),
    onSubmit: (values) => {
      if (ids) {
        dispatch(editFaqCategory(values)).then(function () {
          navigate("/faq-category");
        });
      } else {
        dispatch(addFaqCategory(values)).then(function () {
          navigate("/faq-category");
        });
      }
    },
  });

  console.log(titleText, "titleText")


  return (
    <div>
      <div id="layout-wrapper">
        <div className="vertical-menu">
          <div data-simplebar="" className="h-100">
            <Sidebar />
          </div>
        </div>

        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">

              <div className="row align-items-center">
                <div className="col-12 d-flex align-items-center">
                  <NavLink to="/faq-category">
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">New FAQ Category</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="card ">
                      <div className="card-body">
                        <div className="row labell">
                          <div className="create-new-faq">
                            <h3 >{ids ? "Edit" : "Create"} an FAQ Category</h3>
                            <div className="d-flex justify-content-center align-items-center flex-wrap mb-3 position-relative">
                              <button type="submit" className="new_update">
                                {ids ? "Edit" : "Save"}
                              </button>
                            </div>
                          </div>
                          <div className="faqs-main">
                            <div className="category-name-title">
                              <label>Title</label>
                              <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Type Here...."
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.submitCount > 0 &&
                                formik.touched.title &&
                                formik.errors.title && (
                                  <div className="error">
                                    {formik.errors.title}
                                  </div>
                                )}
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
        </div>
      </div>
    </div>
  );
}
