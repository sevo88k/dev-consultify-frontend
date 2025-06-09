import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddHelpAndSupportAction,
  changePass,
  informationlistAction,
} from "../Redux/Actions/user/salon";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { Accordion } from "react-bootstrap";
import { convertFromRaw }  from "draft-js";
import { stateToHTML }  from "draft-js-export-html";

const HelpAndSupport = () => {
  const dispatch = useDispatch();
  //AddHelpAndSupportAction
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
      dispatch(AddHelpAndSupportAction(values));
      formik.handleReset();
      toast.success(
        "Thank you for submitting a request for Help & Support. One of our team will be in touch in the next 48 hours."
      );
    },
  });
  useEffect(() => {
    dispatch(informationlistAction());
  }, []);
  const faqlist = useSelector((state) => state.myaccount?.faqlist);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange2 = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <MyAcoountLayout DidYouKnow={true}>
      <div className="col-lg-8 mx-auto">
        <div className="setting-titles"> <h1>Contact Us</h1></div> 
        <div className="customer-faqs">
          {/* <h2 className="mb-3">FAQs</h2> */}

          {/* <Accordion defaultActiveKey="0">
            {faqlist?.length === 0 ? (
              <div className="faqs-wrapper">
                <p>No FAQs Available</p>
              </div>
            ) : (
              faqlist?.map(function (object, i) {
                if (object?.usertype === "Salon")
                return (
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{object?.question}</Accordion.Header>
                    <Accordion.Body>
                      {JSON.parse(object?.answer).blocks?.map((block) => (
                        <p style={{ whiteSpace: "pre-line" }} className="mt-2">
                          {block.text}{" "}
                        </p>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })
            )}
          </Accordion> */}

{/* <Accordion defaultActiveKey="0">
  {faqlist?.length === 0 ? (
    <div className="faqs-wrapper">
      <p>No FAQs Available</p>
    </div>
  ) : (
    faqlist?.map((object, i) => {
      if (object?.usertype === "Salon")
        return (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{object?.question}</Accordion.Header>
            <Accordion.Body>
              {(() => {
                const answer = JSON.parse(object?.answer);
                const { blocks, entityMap } = answer;

                return blocks?.map((block, index) => {
                  if (block.type === "atomic") {
                    const entityKey = block.entityRanges[0]?.key;
                    const imageUrl = entityMap[entityKey]?.data?.src;

                    return imageUrl ? (
                      <div key={index} className="mt-2">
                        <img
                          src={imageUrl}
                          alt="FAQ Image"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    ) : null;
                  } else {
                    return (
                      <p key={index} style={{ whiteSpace: "pre-line" }} className="mt-2">
                        {block.text}
                      </p>
                    );
                  }
                });
              })()}
            </Accordion.Body>
          </Accordion.Item>
        );
    })
  )}
</Accordion> */}

{/* <Accordion defaultActiveKey="0">
      {faqlist?.length === 0 ? (
        <div className="faqs-wrapper">
          <p>No FAQs Available</p>
        </div>
      ) : (
        faqlist?.map((object, i) => {
          if (object?.usertype === "Salon") {
            return (
              <div >
              <Accordion.Item eventKey={i} key={i}>
                <Accordion.Header>{object?.question}</Accordion.Header>
                <Accordion.Body>
                  {(() => {
                    try {
                      const contentState =  convertFromRaw(JSON.parse(object?.answer));
                      const html = stateToHTML(contentState);

                      return <div className="mt-2 image-fix" dangerouslySetInnerHTML={{ __html: html }} />;
                    } catch (error) {
                      console.error("Error parsing FAQ answer:", error);
                      return <p>Error displaying content</p>;
                    }
                  })()}
                </Accordion.Body>
              </Accordion.Item>
              </div>
            );
          }
          return null;
        })
      )}
    </Accordion> */}

        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="account_form pass_security mt-4">
            <div>
              <h2>Help & Support</h2>
              <div className="row">
                <div className="col-lg-12">
                  <label className="mb-1">Issue Type</label>
                  <br></br>

                  <select
                    name="title"
                    placeholder="Type Here"
                    class="form-select"
                    className={`form-control ${
                      formik.values.title === "" ? "dif-color" : "other-color"
                    }`}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleChange2(e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  >
                    <option
                      value="0"
                      className={
                        selectedValue === "" ? "dif-color" : "other-color"
                      }
                    >
                      Please select Issue Type
                    </option>
                    <option
                      value="Issue with my account"
                      className="other-color"
                    >
                      Issue with my account
                    </option>
                    <option
                      value="Payments and Subscription"
                      className="other-color"
                    >
                      Payments and Subscription
                    </option>
                    <option value="Technical Issue" className="other-color">
                      {" "}
                      Technical Issue
                    </option>
                    <option value="General" className="other-color">
                      {" "}
                      General
                    </option>
                  </select>
                  {formik.submitCount > 0 && formik.errors.title && (
                    <div className="error_valid">{formik.errors.title}</div>
                  )}
                </div>
                <div className="col-lg-12">
                  <label className="mb-1">Description</label>
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
    </MyAcoountLayout>
  );
};
export default HelpAndSupport;
