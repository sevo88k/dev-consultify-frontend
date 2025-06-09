import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  SavepostcareAction,
  getCategory,
  getpoastcaredetailsAction,
} from "../Redux/Actions/user/salon";
import { useEffect } from "react";
export default function EditPrecare() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      getCategory({
        page: 1,
        limit: 1000000000000,
        search: "",
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getpoastcaredetailsAction({
        id: id,
      })
    ).then((payload) => {
      var datainfo = payload.payload.data;
      formik.setFieldValue("treatmentname", datainfo.treatmentname, {
        strict: false,
      });
      formik.setFieldValue("description", datainfo.description, {
        strict: false,
      });
      formik.setFieldValue("pre_care_advice", datainfo.pre_care_advice, {
        strict: false,
      });
      formik.setFieldValue("after_care_advice", datainfo.after_care_advice, {
        strict: false,
      });
      formik.setFieldValue("notes", datainfo.notes, {
        strict: false,
      });
      formik.setFieldValue("category", datainfo.category, {
        strict: false,
      });
    });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      treatmentname: "",
      description: "",
      pre_care_advice: "",
      after_care_advice: "",
      category: "",
      notes: "",
    },
    validationSchema: Yup.object({
      treatmentname: Yup.string().required("Treatment name is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      pre_care_advice: Yup.string().required("Pre care advice is required"),
      after_care_advice: Yup.string().required("After care advice required"),
      notes: Yup.string(),
    }),
    onSubmit: (values) => {
      values.id = id;
      dispatch(SavepostcareAction(values)).then(function () {
        navigate("/precare-presents");
      });
    },
  });
  const category = useSelector((state) => state.myaccount.category);
  console.log(formik.errors, "dfffffffffff");

  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange2 = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <MyAcoountLayout>
      <div className="col-lg-9">
        <div className="account_form edit-mail">
          <h2>Update Pre / Post Care Advice</h2>
          <p className="mx-0" style={{ color: "#000" }}>
            Update these details for your clients to view.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div class="form-group mt-4">
                  <label for="exampleInputEmail1">Treatment Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Type Here..."
                    name="treatmentname"
                    value={formik.values.treatmentname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.submitCount > 0 &&
                    formik.touched.treatmentname &&
                    formik.errors.treatmentname && (
                      <div className="error">{formik.errors.treatmentname}</div>
                    )}
                </div>
              </div>

              <div className="col-lg-12">
                <div class="form-group mt-4">
                  <label for="exampleInputEmail1">Category</label>
                  <select
                    name="category"
                    aria-label="Default select example"
                    className={`form-control ${
                      selectedValue === "1" ? "dif-color" : "other-color"
                    }`}
                    class="form-control form-select"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleChange2(e);
                    }}
                    value={formik.values.category}
                    onBlur={formik.handleBlur}
                  >
                    <option value="1" className="dif-color">
                      Select Category from List
                    </option>
                    {category?.category?.map((item) => {
                      return (
                        <option value={item?._id} className="other-color">
                          {item?.title}
                        </option>
                      );
                    })}
                  </select>

                  {formik.submitCount > 0 &&
                    formik.touched.category &&
                    formik.errors.category && (
                      <div className="error">{formik.errors.category}</div>
                    )}
                </div>
              </div>

              <div className="col-lg-12">
                <label>Brief Description</label>
                <textarea
                  rows="2"
                  className="form-control"
                  placeholder="Type Here..."
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.submitCount > 0 &&
                  formik.touched.description &&
                  formik.errors.description && (
                    <div className="error">{formik.errors.description}</div>
                  )}
              </div>
              <div className="col-lg-12">
                <label>Pre-Care Advice</label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Type Here..."
                  name="pre_care_advice"
                  value={formik.values.pre_care_advice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.submitCount > 0 &&
                  formik.touched.pre_care_advice &&
                  formik.errors.pre_care_advice && (
                    <div className="error">{formik.errors.pre_care_advice}</div>
                  )}
              </div>
              <div className="col-lg-12">
                <label>After Care Advice</label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Type Here..."
                  name="after_care_advice"
                  value={formik.values.after_care_advice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.submitCount > 0 &&
                  formik.touched.after_care_advice &&
                  formik.errors.after_care_advice && (
                    <div className="error">
                      {formik.errors.after_care_advice}
                    </div>
                  )}
              </div>
              <div className="col-lg-12">
                <label>Notes</label>
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Type Here..."
                  name="notes"
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.submitCount > 0 &&
                  formik.touched.notes &&
                  formik.errors.notes && (
                    <div className="error">{formik.errors.notes}</div>
                  )}
              </div>

              <div className="col-lg-12">
                <div className="editmail-btns">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/precare-presents");
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit">Confirm</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
