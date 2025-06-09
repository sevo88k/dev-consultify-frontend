import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import { NavLink, Row, Col } from "react-bootstrap";
import { getAllForumCategory } from "../Redux/Actions/user/salon";

const ForumHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllForumCategory());
  }, []);

  const forms = useSelector((state) => state.myaccount.forums);
  console.log(forms);

  return (
    <LargeBannerLayout>
      <div className="container">
        <section className="margin-top-set">
          <Row>
            <Col lg={6}>
              <div className="cmn-sec-left">
                <h2>Forum</h2>
                <p>
                  Browse our forum for the latest member topics and comments
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-start"
            >
              {/* <Link to="/precare-presents" className="consult-btn">
              Find More Consultation Options in Settings
            </Link> */}
            </Col>
          </Row>
        </section>
        <div className="forum-main">
          <div className="row">
            {forms?.map((item, i) => {
              return (
                <>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="forum-box">
                      <h3>{item?.title}</h3>
                      <p>{item?.topics?.length} Topics</p>
                      <Link to={`/topiclist/${item?._id}`}>
                        View All Topics
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </LargeBannerLayout>
  );
};

export default ForumHome;
