import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/Actions/user/salon";
export default function CreateConsultationFormVoltwo({
  formData,
  setFormData,
  nextStep,
}) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.myaccount.category);

  const formik = useFormik({
    initialValues: {
      form_title: formData?.form_title,
      category: formData?.categoy,
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
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
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
    <div className="consulation_form one">
      {/* Header Start */}
      <Navbar
        expand="lg"
        className={
          scroll
            ? "bg-body-tertiary header-blck active"
            : "bg-body-tertiary header-blck"
        }
      >
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to="/consultation-presets">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Create a new consultation form</h2>
          <div className="steps two">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
        </div>

        <form
          className="consultaing_detailsform"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Form Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Here"
              name="form_title"
              value={formik.values.form_title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.form_title && formik.errors.form_title && (
              <span className="error">{formik.errors.form_title}</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Form Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter a description"
              rows="5"
              name="form_description"
              value={formik.values.form_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.form_description &&
              formik.errors.form_description && (
                <span className="error">{formik.errors.form_description}</span>
              )}
          </div>

          <div className="submit-btn">
            <Link to="/consultation-presets-questions" className="lg-btn">
              Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
