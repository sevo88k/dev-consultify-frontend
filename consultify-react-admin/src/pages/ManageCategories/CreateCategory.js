import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Search from "../../components/search/Search";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toastFunc } from "../../utils/toast";
import { AllCategories, createCategory } from "../../redux/Action/AdminAction";
import Select from "react-select";
const CreateCategory = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [prevImage, setPreview] = useState("");
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.category.trimStart()) {
      errors.category = "Title Required*";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      category: "",
    },
    validate,
    onSubmit: async (values) => {
      let formData = new FormData();
      if (!image) {
        toastFunc("warning", "Please provide an Image");
      } else {
        formData.append("category_image", image);
        formData.append("category", values.category);

        dispatch(createCategory(formData, navigate));
      }
    },
  });
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateAlpha = (e) => {
    let eventVal = e.target.value.trimStart();
    function onlyLettersAndSpaces(str) {
      return /^[A-Za-z\s]*$/.test(str);
    }
    if (onlyLettersAndSpaces(eventVal)) {
      return formik.handleChange(e)
    }
  }

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
                    <span className="small_text">Smart Choice Traders </span>
                    <h4 className="mb-sm-0 font-size-28">
                      Manage Categories
                      {/* <!-- <span className="green-top-text">32</span>   --> */}
                    </h4>
                  </div>
              
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body ">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Add New Category</h4>
                        </div>
                        <div>
                          <div className="form-group mb-5 w-450">
                            <label for="">Category Title</label>

                            {/* <Select
                              value={selectedVal}
                              onChange={(e) => setSelectedVal(e)}
                              options={catList}
                            /> */}

                            <input
                              type="text"
                              className="form-control-new"
                              placeholder="Title Here.."
                              onChange={(e) => validateAlpha(e)}
                              name="category"
                              value={formik.values.category.trimStart()}
                            />
                            {formik.errors.category && (
                              <p className="formik-errors">
                                {formik.errors.category}
                              </p>
                            )}
                          </div>

                          <div className="form-group mb-3">
                            <div className="upload-main-img">
                              <input
                                onChange={(e) => handleImageUpload(e)}
                                type="file"
                                accept="image/*"
                              />
                              <div className="upload-main-img-view">
                                {image ? (
                                  <img src={prevImage} />
                                ) : (
                                  "Add a Main Image"
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-3 d-flex justify-content-end">
                            <Link
                              to="/manage-categories"
                              className="btn btn-secondary border-5"
                            >
                              Cancel
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-primary btn-primary-lg ms-3"
                            >
                              Create Category
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </Layout>
  );
};

export default CreateCategory;
