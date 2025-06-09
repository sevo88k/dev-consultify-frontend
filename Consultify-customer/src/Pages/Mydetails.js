import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  customerdetailsAction,
  updateProfileDetailAction,
} from "../Redux/Action/CustomerAuthAction";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

export default function Mydetails() {
  const dispatch = useDispatch();
  const [customerdetails, setCustomerdetails] = useState("");

  useEffect(() => {
    dispatch(customerdetailsAction()).then(function (data) {
      setCustomerdetails(data.payload);

      formik.setFieldValue("first_name", data?.payload?.first_name);
      formik.setFieldValue("last_name", data.payload?.last_name);
      formik.setFieldValue("self_describe", data.payload?.self_describe);
      formik.setFieldValue("gender", data.payload?.gender);
      formik.setFieldValue("email", data.payload?.email);
      formik.setFieldValue("phone_number", data.payload?.phone_number);
      formik.setFieldValue(
        "first_line_address",
        data.payload?.first_line_address
      );
      formik.setFieldValue(
        "second_line_address",
        data.payload?.second_line_address
      );
      formik.setFieldValue("city", data.payload?.city);
      formik.setFieldValue("pin_code", data.payload?.pin_code);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: customerdetails?.first_name,
      last_name: customerdetails?.last_name,
      email: customerdetails?.email,
      phone_number: customerdetails?.phone_number,
      first_line_address: customerdetails?.first_line_address,
      second_line_address: customerdetails?.second_line_address,
      city: customerdetails?.city,
      gender: customerdetails?.gender?.toString(),
      self_describe: customerdetails?.self_describe,
      pin_code: customerdetails?.pin_code,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),

      email: Yup.string().email().required("Email is required"),
      phone_number: Yup.string().required("Phone Number is required"),
      first_line_address: Yup.string().required(
        "First line Address is required"
      ),
      city: Yup.string().required("City is required"),
      pin_code: Yup.string().required("Pin code is required"),
    }),
    onSubmit: (values) => {
      dispatch(updateProfileDetailAction(values));
      // Handle step 1 submission
    },
  });

  return (
    <MyAcoountLayout>
      <div className="mydetails">
        <div className="col-lg-8 mx-auto">
          <div className="account_form">
            <form onSubmit={formik.handleSubmit}>
              <h2>My Details</h2>
              <div className="row">
                <div className="col-lg-6">
                  <label>First Name</label>
                  <input
                    className="form-control mt-0"
                    placeholder="First Name *"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <div className="error">{formik.errors.first_name}</div>
                  )}
                </div>
                <div className="col-lg-6">
                  <label>Surname</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Surname *"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.last_name && formik.errors.last_name && (
                    <div className="error">{formik.errors.last_name}</div>
                  )}
                </div>

                <div className="col-lg-6">
                  <label>Email</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Email *"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </div>

                <div className="col-lg-6">
                  <label>Gender</label>
                  <select
                    class="form-select mt-0"
                    aria-label="Default select example"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                    <option value="2">Non Binary</option>
                    <option value="3">Others </option>
                    <option value="4">Prefer not to say </option>
                  </select>
                  {formik.submitCount > 0 &&
                    formik.touched.gender &&
                    formik.errors.gender && (
                      <span className="error">{formik.errors.gender}</span>
                    )}
                </div>

                {formik.values.gender == 3 && (
                  <div className="col-lg-12">
                    <label>Self Describe</label>
                    <input
                      className="form-control mt-0"
                      placeholder="Self-Describe"
                      name="self_describe"
                      value={formik.values.self_describe}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.submitCount > 0 &&
                      formik.touched.self_describe &&
                      formik.errors.self_describe && (
                        <span className="error">
                          {formik.errors.self_describe}
                        </span>
                      )}
                  </div>
                )}
                <div className="col-lg-6">
                  <label>Pronouns</label>
                  <select
                    class="form-select mt-0"
                    aria-label="Default select example"
                    name="pronouns"
                  >
                    <option selected>Please Select</option>
                    <option value="She/Her">She/Her</option>
                    <option value="He/Him">He / Him</option>
                    <option value="They/Them">They / Them</option>
                    <option value="Others">Others </option>
                  </select>
                </div>
                <div className="col-lg-6">
                  <label>Phone</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Phone Number *"
                    name="phone_number"
                    value={"0" + formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone_number &&
                    formik.errors.phone_number && (
                      <div className="error">{formik.errors.phone_number}</div>
                    )}
                </div>
                <div className="col-lg-6">
                  <label>First Line of Address</label>
                  <input
                    className="form-control mt-0"
                    placeholder="First Line of Address"
                    name="first_line_address"
                    value={formik.values?.first_line_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.first_line_address &&
                    formik.errors.first_line_address && (
                      <div className="error">
                        {formik.errors.first_line_address}
                      </div>
                    )}
                </div>

                <div className="col-lg-6">
                  <label>Second Line of Address</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Second Line of Address "
                    name="second_line_address"
                    value={formik.values.second_line_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="col-lg-6">
                  <label>Town/City</label>
                  <input
                    className="form-control mt-0"
                    placeholder="City"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className="error">{formik.errors.city}</div>
                  )}
                </div>
                <div className="col-lg-6">
                  <label>Post Code</label>
                  <input
                    className="form-control mt-0"
                    placeholder="Post Code "
                    name="pin_code"
                    value={formik.values.pin_code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.pin_code && formik.errors.pin_code && (
                    <div className="error">{formik.errors.pin_code}</div>
                  )}
                </div>
                <div className="submit-btn">
                  <button type="submit" class="btn mb-3">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
