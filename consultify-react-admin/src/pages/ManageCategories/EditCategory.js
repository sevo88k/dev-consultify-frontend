import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, getCategoryInfo } from "../../redux/Action/AdminAction";
import { toastFunc } from "../../utils/toast";
import Layout from "../../components/layout/Layout";
import lightLogo from "../../assets/images/white_logo_main.png";
const EditCategory = () => {
  const [img, setImg] = useState("");
  const [preView, setPreview] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { category_info } = useSelector(state => ({
    category_info: state?.adminReducer?.category_info,
  }));
  useEffect(() => {
    if (id) {
      dispatch(getCategoryInfo(id));
    }
  }, [id]);
  useEffect(() => {
    if (category_info?._id == id) {
      setImg(category_info?.category_image);
    }
  }, [category_info]);

  const validate = (values) => {
    const errors = {};
    if (!values.category.trimStart()) {
      errors.category = "Title Required*";
    }
    return errors;
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: category_info?.category,
    },
    validate,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("category_id", id);
      formData.append("category_image", img);
      formData.append("category", values.category.trimStart());
      if (!img) {
        toastFunc("warning", "Please provide an Image");
      } else {
         dispatch(editCategory(formData,navigate))
      }
    },
  });
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (

  <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">PayMyMeal</span>
                    <h4 className="mb-sm-0 font-size-28">
                      Manage Categories
                    </h4>
                  </div>

             
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card border-radius-style ">
                    <div className="card-body ">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">Edit Category</h4>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="form-conent-style">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group mb-3">
                                    <label for="">Category Title</label>
                                    <input
                                      type="text"
                                      className="form-control-new"
                                      placeholder="Title Here.."
                                      onChange={(e) => validateAlpha(e)}
                                      name="category"
                                      value={formik.values.category}
                                    />
                                    {formik.errors.category && (
                                      <p className="formik-errors">
                                        {formik.errors.category}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-12 mt-5">
                                  <div className="upload-main-img upload_img_position">
                                    <input
                                      onChange={(e) => handleImageUpload(e)}
                                      type="file"
                                      accept="image/*"
                                    />
                                    <div className="upload-main-img-view">
                                      <img
                                        src={
                                          preView
                                            ? preView
                                            :  category_info?.category_image == null
                                          ? lightLogo: process.env.REACT_APP_IMG_URL +
                                            `/category_image/${category_info?.category_image}`
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
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
                                  Edit Category
                                </button>
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
      </div>
  </Layout>
  );
};

export default EditCategory;
