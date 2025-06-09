import React from "react";
import close from "../../../assets/images/icons/close.svg";
import Layout from "../../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Adress } from "./Adress";
import ContactDetail from "./ContactDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  getPersonalInfo,
  updateProfile,
} from "../../../Redux/Actions/user/userAll";
export default function PersonalInformation() {
  const userInfo = useSelector((state) => state?.consultaions?.userInfo);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [viewVal, setViewVal] = useState(true);
  var today = new Date().toISOString().split("T")[0];

  const { from } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(getPersonalInfo());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpdate = () => {
    dispatch(updateProfile({ personalInfo: userData })).then((res) => {
      const personalInfoObject = res.payload.user.data;
      const checkList = {
        phnNumber: "",
        age: "",
        address: "",
      };
      checkList.phnNumber = personalInfoObject?.phnNumber
        ? personalInfoObject?.phnNumber == null
          ? false
          : true
        : false;
      checkList.age = personalInfoObject?.age
        ? personalInfoObject?.age == null
          ? false
          : true
        : false;

      const checkAdd = (obj) => {
        var count = 0;
        for (let key in obj) {
          if (key != "secondLine") {
            if (obj[key] == "") {
              count = count + 1;
            }
          }
        }
        return count >= 1 ? false : true;
      };

      checkList.address =
        Object.keys(personalInfoObject.address).length < 4
          ? false
          : checkAdd(personalInfoObject.address);

      if (checkList.phnNumber && checkList.age && checkList.address) {
        if (from == "fromnewcons") {
          navigate("/new-consultation");
        }
      }
    });
  };
  const handleClose = () => {
    setViewVal(false);
  };

  return (
    <Layout>
      <div className="col-lg-10">
        <div className="desc_area pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="back-button mb-4">
                <Link to="/my-account/sidebar" className="white-btn">
                  Back
                </Link>
              </div>
            </div>
          </div>

          {from == "fromnewcons" && (
            <Modal
              show={viewVal}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="admin-popup provisional-popup detailed_popup"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="table-responsive table-defaut-design text_inner">
                  {/* <h4> Personal Info required</h4> */}
                  Please provide following details
                </div>
              </Modal.Body>

              <Modal.Footer>
                <div className="d-flex flex-column">
                  <div className="btn_submit mb-3">
                    <button
                      onClick={handleClose}
                      className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </Modal>
          )}

          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-9 col-12">
              <div className="new_consultation_booking common_shadow personal_info_page">
                <h2 className="common_title padding_36">
                  Personal Information
                </h2>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="personal_details medical_history_details">
                      <div id="accordion" className="accordian_collapse">
                        <div className="card mb-2">
                          <div
                            className="card-header accordian_head"
                            id="headingOne"
                          >
                            <h5 className="mb-0">
                              <div
                                className=" d-flex personal_inner_sec dropdown_arrow collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                type="button"
                              >
                                <h6 className="mb-0">General</h6>
                              </div>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body inner_padding personal_info_inner">
                              <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
                                <h6 className="mb-0">First Name</h6>
                                <div className="options_part questions_options">
                                  <ul className="mb-0 d-flex p-0 questions_options_inner">
                                    <li>
                                      <input
                                        className="select_option_btn width_200 box_shadow"
                                        onChange={handleChange}
                                        value={userData?.firstName}
                                        name="firstName"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
                                <h6 className="mb-0">Second Name</h6>
                                <div className="options_part questions_options">
                                  <ul className="mb-0 d-flex p-0 questions_options_inner">
                                    <li>
                                      <input
                                        className="select_option_btn width_200 box_shadow"
                                        onChange={handleChange}
                                        value={userData?.lastName}
                                        name="lastName"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center peronal-content-detail">
                                <h6 className="mb-0">Date of Birth</h6>
                                <div className="options_part questions_options">
                                  <ul className="mb-0 d-flex p-0 questions_options_inner">
                                    <li>
                                      <input
                                        className="select_option_btn width_200 box_shadow date_width"
                                        onChange={handleChange}
                                        value={userData?.age}
                                        max={today}
                                        type="date"
                                        name="age"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="add-more-btn mt-4">
                                <button
                                  onClick={handleUpdate}
                                  className="d-flex justify-content-center dark_btn"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Adress userData={userData} />
                        <ContactDetail userData={userData} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad-sidebar d-flex justify-content-between flex-column">
          <div className="advertisement_info">
            <div className="ad-title">
              <h3>Did You know? </h3>
              <p className="text-center">
                Bleeding Gums are the leading cause of tooth loss in the UK?
              </p>
            </div>
            <img
              src={require("../../../assets/images/advertisement/ad-1.png")}
              alt="advertisement"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
