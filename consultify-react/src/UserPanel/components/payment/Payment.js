import React from "react";
import file_dock_add_fill from "../../../assets/images/sidebar_icons/file_dock_add_fill.svg";
import home_duotone from "../../../assets/images/sidebar_icons/home_duotone.svg";
import date_drk from "../../../assets/images/sidebar_icons/date_drk.svg";
import circleblue from "../../../assets/images/sidebar_icons/circle-blue.svg";
import home_white from "../../../assets/images/sidebar_icons/home_white.svg";
import folder_search_duotone from "../../../assets/images/sidebar_icons/folder_search_duotone.svg";
import temperature_white from "../../../assets/images/sidebar_icons/temperature_white.svg";
import date_today_duotone from "../../../assets/images/sidebar_icons/date_today_duotone.svg";
import user_cicrle_duotone from "../../../assets/images/sidebar_icons/user_cicrle_duotone.svg";
import temperature from "../../../assets/images/sidebar_icons/temperature.svg";
import close from "../../../assets/images/icons/close.svg";
import { Link } from "react-router-dom";
import Navbar from "../account_home/Navbar";
import Sidebar from "../account_home/Sidebar";
import MainPay from "./MainPay";
import Layout from "../../Layout/Layout";
import { useState } from "react";
import ConfirmBooking from "../confirm_booking/ConfirmBooking";
export default function Payment({ setPayLast, consInfo }) {
  const [pre, setPre] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <>
      {/* {pre == false && */}
      <div className="desc_area payment-stripe">
        <div className="row">
          <div className="col-md-12">
            <div className="new_consultation_booking common_shadow">
              <h2 className="common_title padding_36">Payment</h2>
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6">
                    <div className="payment_inner_details d-flex justify-content-between flex-column">
                      <div className="payment_detail">
                        <div className="problem_treat mb-4">
                          <p className="mb-0 color_grey">Pay ToothAid</p>
                          <h3 className="text-start mt-2">£ 19.99</h3>
                        </div>
                        <div className="consultation_fee d-flex justify-content-between align-items-start">
                          <div className="quantity">
                            <form action="">
                              <p className="mb-0 small_parah">
                                ToothAid Dental Consultation
                              </p>
                              {/* <select name="" id="">
                                <option value="1">Qty 1</option>
                                <option value="2">Qty 2</option>
                              </select> */}
                            </form>
                          </div>
                          <div className="amount">
                            <p>£ 19.99</p>
                          </div>
                        </div>
                        <div className="fees_total">
                          <ul>
                            <li className="d-flex justify-content-between align-items-center">
                              <p className="small_parah mb-0">Subtotal</p>
                              <p className="small_parah mb-0">£ 19.99</p>
                            </li>
                            {/* <li className="d-flex justify-content-between align-items-center salec_tax">
                              <p className="small_parah mb-0">
                                Sales tax (20%)
                              </p>
                              <p className="small_parah mb-0">£5.00</p>
                            </li> */}
                            <li className="d-flex justify-content-between align-items-center">
                              <p className="small_parah mb-0">Total due</p>
                              <p className="small_parah mb-0">£ 19.99</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="privacy-policy-section d-flex align-items-center justify-content-between">
                        <a href="#" className="color_grey powered">
                          Powered by stripe
                        </a>
                        <p className="line">I</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#" className="color_grey terms">
                            Terms
                          </a>
                          <a href="#" className="color_grey privacy">
                            Privacy
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <div className="next_page_btn-flex">
                      <button
                        onClick={() => setPayLast(false)}
                        className="btn dark_btn"
                      >
                        Back
                      </button>
                    </div> */}
                  </div>
                  <div className="col-lg-6">
                    <div className="payment_method">
                      <MainPay consInfo={consInfo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* }
                {pre == true &&
        <ConfirmBooking />
      } */}
    </>
  );
}
