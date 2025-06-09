import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Action/ContaindicationAction";

export default function CreateConsultationNew({
  formData,
  setFormData,
  nextStep,
}) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Forum.category);

  const formik = useFormik({
    initialValues: {
      form_title: formData.form_title,
      category: formData.category,
      form_description: formData?.form_description,
    },
    validationSchema: Yup.object({
      form_title: Yup.string().required("Form title is required"),
      form_description: Yup.string().required("Form description  is required"),
    }),
    onSubmit: (values) => {
      setFormData({
        ...formData,
        ...values,
      });
      nextStep();

      // Handle step 1 submission
    },
  });

  useEffect(() => {
    dispatch(
      getCategory({
        page: 1,
        limit: 1000000000000,
        search: "",
      })
    );
  }, []);

  console.log(category, "category");
  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-12 d-flex align-items-center">
                  <NavLink to="/Manage-consultations">
                    {" "}
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">New Consultation</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>

          <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
              <div className="new_consult">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="create_new">
                      <h2>Create a new consultation form</h2>

                      <ol>
                        <li className="active-tab">Title & Description</li>
                        <li>Questions</li>
                        <li>Options</li>
                        <li>Review</li>
                      </ol>
                    </div>
                    <div className="create_form">
                      <div className="form-group mb-4">
                        <label for="exampleFormControlInput1">Form Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter a title for your consultation form"
                          name="form_title"
                          value={formik.values.form_title}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.form_title &&
                          formik.errors.form_title && (
                            <div className="error">
                              {formik.errors.form_title}
                            </div>
                          )}
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                          Form Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter a description"
                          name="form_description"
                          value={formik.values.form_description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.form_description &&
                          formik.errors.form_description && (
                            <div className="error">
                              {formik.errors.form_description}
                            </div>
                          )}
                      </div>

                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Category
                        </label>
                        <select
                          name="category"
                          aria-label="Default select example"
                          className="form-control form-select"
                          onChange={formik.handleChange}
                          value={formik.values.category}
                        >
                          <option>Select Category from List</option>
                          {category?.map((item) => {
                            return (
                              <option value={item?._id}>{item?.title}</option>
                            );
                          })}
                        </select>
                        {formik.touched.category && formik.errors.category && (
                          <div className="error">{formik.errors.category}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create_tab fixed_btn">
                {/* <!-- start page title --> */}

                <div className="row align-items-center">
                  <div className="col-12 d-flex justify-content-between">
                    <span>
                      {/* <NavLink to=""> <button  className="btn cre_new">Back</button></NavLink> */}
                    </span>
                    <span>
                      <button className="btn cre_new" type="submit">
                        Next
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </div>
  );
}
