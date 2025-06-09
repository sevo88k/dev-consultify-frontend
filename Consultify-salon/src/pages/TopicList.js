import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createForumTopic,
  getForumCatTopic,
  getcontraindicationlistsAction,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import { NavLink } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Formik } from "formik";
import moment from "moment";
const TopicList = () => {
  const dispatch = useDispatch();
  const { catId } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  var { getsearchresults, allCatTopics } = useSelector((state) => ({
    getsearchresults: state?.myaccount?.getsearchresults,
    allCatTopics: state?.myaccount?.allCatTopics,
  }));

  useEffect(() => {
    dispatch(getForumCatTopic(catId));
  }, [catId]);

  console.log(allCatTopics, "allCatTopics");

  return (
    <LargeBannerLayout>
      <div>
        <section className="search_result">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="form-grp d-flex justify-content-between align-items-center">
                  <div className="prev_main pb-3">
                    <img
                      src={
                        require("../../src/assets/img/right-arrow.svg").default
                      }
                      alt="arrow"
                      className="arrow-next-green"
                    />
                    <Link className="prev_result" to="/forumhome">
                      Back to Forum Categories
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="start-new-forum"
                  onClick={handleShow}
                >
                  Start New Topic
                </button>
              </div>
            </div>
            <div className="row">
              {allCatTopics?.map((item) => {
                return (
                  <>
                    <Link to={`/topiclistview/${item?._id}/${catId}`}>
                      <div className="col-lg-12">
                        <div className="searchresult_inner">
                          <h2 className="hdng">{item?.topic_title}</h2>
                          <h6 className="sub_hdng">
                            Created{" "}
                            {moment(item?.createdAt).format("DD/MM/YYYY")}
                          </h6>
                          <div className="bottom_info">
                            <ul className="justify-content-start">
                              <li>Replies ({item?.reply?.length})</li>
                              <li className="ms-4">
                                Last Post:{" "}
                                {moment(
                                  item?.reply[item?.reply?.length - 1]
                                    ?.createdAt
                                ).format("DD/MM/YYYY")}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
              {allCatTopics?.length == 0 && <p>No data available yet!</p>}
            </div>
          </div>
        </section>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="forum-main-page">
            <Formik
              initialValues={{
                topic_title: "",
                topic_desc: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.topic_title) {
                  errors.topic_title = "Required*";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values, "values");
                values.salonId = localStorage.getItem("userId");
                values.forumId = catId;
                dispatch(createForumTopic(values)).then((data) => {
                  if (data?.payload?.success) {
                    dispatch(getForumCatTopic(catId));
                    toast.success(data?.payload?.message);
                    handleClose();
                  }
                });
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      name="topic_title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.topic_title}
                    />
                    <span className="formik-errors">
                      {errors.topic_title &&
                        touched.topic_title &&
                        errors.topic_title}
                    </span>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Write your first post</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Type here"
                      name="topic_desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.topic_desc}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center mt-4">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </LargeBannerLayout>
  );
};

export default TopicList;
