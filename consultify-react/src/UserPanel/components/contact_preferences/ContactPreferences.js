import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getContactPref,
  saveContactPref,
} from "../../../Redux/Actions/user/userAll";
import Layout from "../../Layout/Layout";
export default function ContactPreferences() {
  const [contactInput, setContactInput] = useState({
    recieve_offers: "",
    recieve_confirmation: "",
    recieve_reminders: "",
  });
  const dispatch = useDispatch();
  const contactPref = useSelector((state) => state.consultaions.contactPref);
  useEffect(() => {
    dispatch(getContactPref());
  }, []);

  useEffect(() => {
    if (contactPref) {
      setContactInput(contactPref);
    }
  }, [contactPref]);

  const handleClick = (ques, ans) => {
    setContactInput((prev) => {
      return {
        ...prev,
        [ques]: ans,
      };
    });
  };

  const updateContactPrefs = () => {
    dispatch(saveContactPref(contactInput));
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
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-9 col-12">
              <div className="new_consultation_booking common_shadow">
                <h2 className="common_title padding_36">Contact Preferences</h2>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="personal_details contact_preferneces medical_history_details">
                      <div className="card">
                        <div className="card-body inner_padding personal_info_inner">
                          <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
                            <h6 className="mb-0">
                              Recieve offers and new information about ToothAid
                            </h6>
                            <div className="options_part questions_options">
                              <ul className="mb-0 d-flex p-0">
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_offers", "Yes")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_offers == "Yes"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    Yes
                                  </a>
                                </li>
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_offers", "No")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_offers == "No"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    No
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3  peronal-content-detail">
                            <h6 className="mb-0">
                              Recieve appointment confirmation
                            </h6>
                            <div className="options_part questions_options">
                              <ul className="mb-0 d-flex p-0">
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_confirmation", "Yes")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_confirmation ==
                                          "Yes"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    Yes
                                  </a>
                                </li>
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_confirmation", "No")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_confirmation ==
                                          "No"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    No
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center  peronal-content-detail">
                            <h6 className="mb-0">
                              Recieve appointment reminders
                            </h6>
                            <div className="options_part questions_options">
                              <ul className="mb-0 d-flex p-0">
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_reminders", "Yes")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_reminders ==
                                          "Yes"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    Yes
                                  </a>
                                </li>
                                <li>
                                  <a
                                    onClick={() =>
                                      handleClick("recieve_reminders", "No")
                                    }
                                    className={
                                      contactPref
                                        ? contactInput?.recieve_reminders ==
                                          "No"
                                          ? "select_option_btn w-75 box_shadow selected_color"
                                          : "select_option_btn w-75 box_shadow"
                                        : "select_option_btn w-75 box_shadow"
                                    }
                                  >
                                    No
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-100 d-flex justify-content-end add-more-btn mt-4">
                            <button
                              className="dark_btn"
                              onClick={updateContactPrefs}
                            >
                              Update
                            </button>
                          </div>
                        </div>
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
