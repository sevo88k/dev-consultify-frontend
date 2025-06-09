import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  AddHelpAndSupportAction,
  informationlistAction,
} from "../Redux/Action/CustomerRestAction";
import { Accordion } from "react-bootstrap";
export default function ContactSupport() {
  const dispatch = useDispatch();
  //AddHelpAndSupportAction

  useEffect(() => {
    dispatch(informationlistAction());
  }, []);
  const faqlist = useSelector((state) => state.customer?.faqlist);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      values.type = "customer";
      dispatch(AddHelpAndSupportAction(values));
      formik.handleReset();
      toast.success(
        "Thank you for submitting a request for Help & Support. One of our team will be in touch in the next 48 hours."
      );
    },
  });
  return (
    <MyAcoountLayout>
      <div className="col-lg-8 mx-auto">
        <div className="customer-faqs">
          <h2 className="mb-3">FAQs</h2>

          <Accordion defaultActiveKey="0">
            {faqlist?.length === 0 ? (
              <div className="faqs-wrapper">
                <p>No FAQs Available</p>
              </div>
            ) : (
              faqlist?.map(function (object, i) {
                if (object?.usertype === "Customer")
                  return (
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>{object?.question}</Accordion.Header>
                      <Accordion.Body>
                        {JSON.parse(object?.answer).blocks?.map((block) => (
                          <p
                            style={{ whiteSpace: "pre-line" }}
                            className="mt-2"
                          >
                            {block.text}{" "}
                          </p>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
              })
            )}
          </Accordion>
        </div>
        <div className="account_form contact_support">
          <form onSubmit={formik.handleSubmit}>
            <div className=" pass_security">
              <div>
                <h2>Help & Support</h2>
                <div className="row">
                  <div className="col-lg-12">
                    <label className="mb-0">Issue Type</label>

                    <select
                      name="title"
                      placeholder="Type Here"
                      className="form-select mt-2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.title}
                    >
                      <option value="">Please select Issue Type</option>
                      <option value="Issue with my account">
                        Issue with my account
                      </option>
                      <option value="Payments and Subscription">
                        Payments and Subscription
                      </option>
                      <option value="Technical Issue"> Technical Issue</option>
                      <option value="General"> General</option>
                    </select>
                    {formik.submitCount > 0 && formik.errors.title && (
                      <div className="error_valid">{formik.errors.title}</div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <label>Description</label>
                    <textarea
                      rows={3}
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Type Here"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                    />
                    {formik.submitCount > 0 && formik.errors.description && (
                      <div className="error_valid">
                        {formik.errors.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="submit-btn">
                <button type="submit" class="btn mb-3">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
