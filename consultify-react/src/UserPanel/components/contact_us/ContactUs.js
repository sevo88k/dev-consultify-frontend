import React, { useState } from "react";
import LayoutSymtom from "../../Layout/LayoutSymtom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { contactUs } from "../../../Redux/Actions/user/auth";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../../Redux/Reducers/admin/adminPanelSlice";

const ContactUs = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Enter full name";
    } else if (!/^(?=.*[a-zA-Z])[A-Za-z0-9]+$/.test(values.firstName)) {
      errors.firstName = "Number not allowed";
    }

    if (!values.email) {
      errors.email = "Enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Enter correct email";
    }

    if (!values.subject) {
      errors.subject = "Enter subject";
    }
    if (!values.message) {
      errors.message = "Enter message";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => { 
      try {
        dispatch(startstopLoading(true));
        dispatch(contactUs(values)).then((res) => {
          console.log(res,'sadfw');
          if (res?.payload) {
            dispatch(startstopLoading(false));
            toastSuccess(res.payload.message)
            navigate("/")
          }
        });
      } catch (error) {
        console.log("error");
      }
    },
  });
  return (
    <>
      <LayoutSymtom>
        <section class="contact_us_form symptom-checker m-120">
          <div class="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div class="card card_shadow  card-height-box ">
                  <h2 className="text-center">Contact Us</h2>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3 mt-4">
                      <label for="">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik?.values?.fullName}
                      />
                      {formik.errors.fullName ? (
                        <div className="formik-errors">
                          {formik.errors.fullName}
                        </div>
                      ) : null}
                    </div>
                    <div class="form-group mb-3 mt-4">
                      <label for="">Email</label>
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik?.values?.email}
                      />
                      {formik.errors.email ? (
                        <div className="formik-errors">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group mb-3 mt-4">
                      <label for="">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik?.values?.subject}
                      />
                      {formik.errors.subject ? (
                        <div className="formik-errors">
                          {formik.errors.subject}
                        </div>
                      ) : null}
                    </div>
                    <div className="form-group mb-3 mt-4">
                      <label for="">Message</label>
                      <textarea
                        name="message"
                        rows=""
                        cols=""
                        placeholder="Message"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik?.values?.message}
                      ></textarea>
                      {formik.errors.message ? (
                        <div className="formik-errors">
                          {formik.errors.message}
                        </div>
                      ) : null}
                    </div>
                    <div class="btn_submit mt-5">
                      <button
                        type="submit"
                        class="btn btn-primary btn-custom btn-lg w-100"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutSymtom>
    </>
  );
};

export default ContactUs;
