import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createForumTopicReply,
  getForumReply,
  getForumTopicById,
  getcontraindicationlistsAction,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import { NavLink, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Formik } from "formik";
import moment from "moment";
import ColumnGroup from "antd/es/table/ColumnGroup";

const TopicListView = () => {
  const { topicId, catId } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  var { getsearchresults, forumReplies, topicDetail } = useSelector(
    (state) => ({
      getsearchresults: state?.myaccount?.getsearchresults,
      forumReplies: state?.myaccount?.forumReplies,
      topicDetail: state?.myaccount?.topicDetail,
    })
  );
  console.log(forumReplies, "forumReplies");
  useEffect(() => {
    dispatch(getForumReply(topicId));
    dispatch(getForumTopicById(topicId));
  }, [topicId]);

  console.log(topicDetail, "topicDetail");
  return (
    <LargeBannerLayout>
      {/* <div className="resultbanner_main"> */}
      <div>
        <section className="search_result topic-view">
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
                    <Link className="prev_result" to={`/topiclist/${catId}`}>
                      Back to Topics
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="searchresult_inner">
                  <h2 className="hdng">{topicDetail?.topic_title}</h2>
                  <h6 className="sub_hdng">
                    Created{" "}
                    {moment(topicDetail?.createdAt).format("DD/MM/YYYY")}
                  </h6>
                  <div className="forum-info">
                    <p>
                      Started by:{" "}
                      {topicDetail?.salonId?.firstname +
                        " " +
                        topicDetail?.salonId?.lastname}
                    </p>
                  </div>
                  <div className="desc_topic">
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      {topicDetail?.topic_desc}
                    </p>
                  </div>
                </div>
                <div className="forum-main-page view mb-2">
                  <Formik
                    initialValues={{
                      reply_desc: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.reply_desc) {
                        errors.reply_desc = "Required*";
                      }

                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log(values, "values");
                      values.salonId = localStorage.getItem("userId");
                      values.forumTopicId = topicId;
                      dispatch(createForumTopicReply(values)).then((data) => {
                        if (data?.payload?.success) {
                          dispatch(getForumReply(topicId));
                          resetForm();
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
                        <Form.Label>Reply To The Thread </Form.Label>
                        <Row>
                          <Col lg={10}>
                            <Form.Group className="mb-2">
                              <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Enter Description"
                                name="reply_desc"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.reply_desc}
                              />
                              <span className="formik-errors">
                                {errors.reply_desc &&
                                  touched.reply_desc &&
                                  errors.reply_desc}
                              </span>
                            </Form.Group>
                          </Col>
                          <Col lg={2}>
                            <div className="d-flex justify-content-end mt-2">
                              <Button variant="primary" type="submit">
                                <img
                                  src={
                                    require("../assets/img/arrow-white.svg")
                                      .default
                                  }
                                />
                                Reply
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>

                <div className={` ${ forumReplies?.length > 0 ? 'reply-box' : ""} `}>
                  {forumReplies?.length > 0 && forumReplies?.map((item) => {
                    return (
                      <>
                      <p>
                        <span>
                          {item?.salonId?.firstname +
                            " " +
                            item?.salonId?.lastname}
                        </span>
                        <span style={{fontSize:"15px"}}>{moment(item?.createdAt).format(
                            "DD/MM/YYYY HH:MM A"
                          )}</span>
                       
                      <span> {item?.reply_desc}</span>
                      </p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </LargeBannerLayout>
  );
};

export default TopicListView;
