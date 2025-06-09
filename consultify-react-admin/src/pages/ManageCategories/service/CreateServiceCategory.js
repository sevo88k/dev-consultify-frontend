import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AllCategories, createCategory, createServiceCategory, createSubCategory, fetchSubCategory } from "../../../redux/Action/AdminAction";
import Layout from "../../../components/layout/Layout";
import Select from 'react-select'

 

const CreateServiceCategory = () => {
  const navigate = useNavigate();

  const { all_cat_list, all_sub_cat_list } = useSelector((state) => ({
    all_cat_list: state.adminReducer.all_cat_list,
    all_sub_cat_list: state.adminReducer.all_sub_cat_list,
  }))

  const [image, setImage] = useState("");
  const [prevImage, setPreview] = useState("");
  const [addCat, setAddCat] = useState("");
  const [addSubCat, setAddSubCat] = useState("");
  const [selectedVal, setSelectedVal] = useState();
  const [addParent, setAddParent] = useState(false);
  const [addSubParent, setSubAddParent] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.category_id) {
      errors.category_id = "Category Required*";
    }
    if (!values.service.trimStart()) {
      errors.service = "Service Required*";
    }
    return errors;
  };

  useEffect(() => {
    dispatch(AllCategories());
    dispatch(fetchSubCategory());
  }, [])

  const formik = useFormik({
    initialValues: {
      category_id: "",
      sub_category_id: "",
      service: "",
      service_category_image: ""
    },
    validate,
    onSubmit: async (values) => {
      let formData = new FormData();

      formData.append("service_category_image", image);
      formData.append("category_id", values.category_id);
      formData.append("sub_category_id", values.sub_category_id);
      formData.append("service", values.service);

      dispatch(createServiceCategory(formData, navigate));

    },
  });
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSelect = (e, formik, type) => {
    if (type == "subcat") {
      if (e.label == "Add New Subcategory") {
        setSubAddParent(true)
      } else {
        setSubAddParent(false);
        formik.setFieldValue("sub_category_id", e.value)
      }
    } else {
      if (e.label == "Add New Category") {
        setAddParent(true)
      } else {
        setAddParent(false);
        formik.setFieldValue("category_id", e.value)
      }
    }
  }

  const service_list = [{ _id: "Add New Category", category: "Add New Category" }, ...all_cat_list]?.map((item) => {
    return {
      value: item?._id,
      label: item?.category
    }
  })

  const sub_category_list = [{ _id: "Add New Subcategory", sub_category: "Add New Subcategory" }, ...all_sub_cat_list]?.map((item) => {
    return {
      value: item?._id,
      label: item?.sub_category
    }
  })

  const handleAddCat = (val, type, category_id) => {
    if (addCat.trimStart() != "" || addSubCat.trimStart() != "") {
      type == "sub_cat" ? dispatch(createSubCategory({ sub_category: val, category_id: category_id }))
        :
        dispatch(createCategory({ category: val }));
      setAddCat("");
      setAddSubCat("")
      setSubAddParent(false);
      setAddParent(false);
    }
  }

  const validateAlpha = (e, type) => {
    let eventVal = e.target.value.trimStart();
    function onlyLettersAndSpaces(str) {
      return /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-\s]*$/.test(str);
    }
    if (onlyLettersAndSpaces(eventVal)) {
      return type == "subcat" ? setAddSubCat(e.target.value) :
        setAddCat(e.target.value)
    }
  }

  const validateAlphaformik = (e) => {
    let eventVal = e.target.value.trimStart();
    function onlyLettersAndSpaces(str) {
      return /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-\s]*$/.test(str);
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
                      Manage Service
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
                      <div className="card-body height_fix">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Add New Service</h4>
                        </div>
                        <div>
                          <div className="form-group mb-0 w-450">
                            <label for="">Select Category</label>

                            <Select
                              value={selectedVal}
                              onChange={(e) => handleSelect(e, formik, "cat")}
                              options={service_list}
                              name="category_id"
                            />
                            {formik.errors.category_id && (
                              <p className="formik-errors">
                                {formik.errors.category_id}
                              </p>
                            )}


                          </div>
                          {
                            addParent && <>
                              <div className="form-group mb-5 w-450 w-150 input_row_add">
                                <input
                                  type="text"
                                  className="form-control-new"
                                  placeholder="Title Here.."
                                  onChange={(e) => validateAlpha(e)}
                                  name="category"

                                  value={addCat.trimStart()}
                                />
                                <button
                                  //type="submit"
                                  onClick={() => handleAddCat(addCat)}
                                  className="btn btn-primary btn-primary-lg ms-3 add_title_btn"
                                >
                                  Add
                                </button>
                              </div>
                            </>
                          }

                          <div className="form-group mt-3 w-450">
                            <label for="">Select Subcategory</label>

                            <Select
                              value={selectedVal}
                              onChange={(e) => handleSelect(e, formik, "subcat")}
                              options={sub_category_list}
                              name="category_id"
                            />


                          </div>
                          {
                            addSubParent && <>
                              <div className="form-group mb-5 w-450 w-150 input_row_add">
                                <input
                                  type="text"
                                  className="form-control-new"
                                  placeholder="Title Here.."
                                  onChange={(e) => validateAlpha(e, "subcat")}
                                  name="sub_category"
                                  value={addSubCat.trimStart()}
                                />
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-primary-lg ms-3 add_title_btn"
                                  onClick={() => handleAddCat(addSubCat, "sub_cat", formik.values.category_id)}
                                >
                                  Add
                                </button>

                              </div>

                            </>
                          }

                          <div className="form-group mt-2 w-450">
                            <label for="">Service</label>
                            <input
                              type="text"
                              className="form-control-new"
                              placeholder="Title Here.."
                              onChange={(e) => validateAlphaformik(e)}
                              name="service"
                              value={formik.values.service.trimStart()}
                            />
                            {formik.errors.service && (
                              <p className="formik-errors">
                                {formik.errors.service}
                              </p>
                            )}
                          </div>

                          <div className="form-group mt-5 mb-3">
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
                              Create Service
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

export default CreateServiceCategory;
