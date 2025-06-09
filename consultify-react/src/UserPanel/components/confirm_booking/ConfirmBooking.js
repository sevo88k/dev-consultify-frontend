import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getConsultationDate,
  rescheduleConsultations,
  userAddConsultations,
} from "../../../Redux/Actions/user/userAll";
import NewConsultationQues from "../consultaions/NewConsultaionQues";
import { useState } from "react";
import Payment from "../payment/Payment";
import TimePicker from "../time_picker/TimePicker";
import MomentFunc from "../../../utils/MomentDateTime";
import { toastSuccess } from "../../../Redux/Reducers/user/ConsultationSlice";
import moment from "moment";
export default function ConfirmBooking({
  setPayLast,
  setPaymentProc,
  setSelectDate,
  setSecTime,
}) {
  const [next, setNext] = useState(false);
  const [pre, setPre] = useState(false);
  const navigate = useNavigate();
  const addConsultation = useSelector(
    (state) => state?.consultaions?.conversation?.user?.message
  );
  const Dispatch = useDispatch();
  const ConsultInfo = {
    date: MomentFunc.Date(setSelectDate),
    time: setSecTime,
  };
  const PaySucceed = () => {
    // console.log(ConsultInfo, "info");

    // setPayLast(true);
    // console.log(
    //   typeof sessionStorage.getItem("consIdReschedule"),
    //   sessionStorage.getItem("consIdReschedule"),
    //   "ajayuuuu"
    // ); 

    if (sessionStorage.getItem("consIdReschedule") != "undefined") {
      const datetime = setSelectDate + " " + setSecTime;
      const date = moment(datetime, "YYYY-MM-DD hh:mm a");
      Dispatch(
        rescheduleConsultations({
          id: sessionStorage.getItem("consIdReschedule"),
          date: date.toISOString(),
          // date: MomentFunc.Date(setSelectDate),
          // time: setSecTime,
        })
      );
      sessionStorage.setItem("consIdReschedule", "undefined");
      navigate("/accountHome");
    } else {
      setNext(true);
    }
    // else {
    //   console.log("consIdReschedule ajay");
    //   Dispatch(userAddConsultations(ConsultInfo));
    // }
    // Dispatch(getConsultationDate());
    // navigate("/accountHome");
  };

  return (
    <div className="col-lg-10">
      {next == false && pre == false && (
        <div className="desc_area">
          <div className="row">
            <div className="col-md-12">
              <div className="new_consultation_booking common_shadow">
                <h2 className="common_title padding_36">
                  Confirm your Booking
                </h2>
                <div className="questions_part  d-flex flex-column justify-content-between">
                  <div className="booking_inner_info">
                    <div className="sub-head">
                      <p className="mb-0">Date & Time</p>
                    </div>
                    <div className="booking_detail pt-2">
                      <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                        <p className="mb-0 selected_date_text">Selected Date</p>
                        <div className="options_part date-picker date_width_input">
                          <form action="">
                            <input
                              value={MomentFunc.Date(setSelectDate)}
                              style={{
                                borderRadius: "5px",
                                border: "unset",
                                padding: "3px",
                                textAlign: "center",
                              }}
                            />
                          </form>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                        <p className="mb-0 selected_date_text">Selected Time</p>
                        <div className="options_part date-picker date_width_input">
                          <form action="">
                            <input
                              value={setSecTime.replace("00:00PM", "12:00PM")}
                              name="date"
                              style={{
                                borderRadius: "5px",
                                border: "unset",
                                padding: "3px",
                                textAlign: "center",
                              }}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking_inner_info mt-4">
                    <div className="sub-head">
                      <p className="mb-0">Cost</p>
                    </div>
                    <div className="booking_detail pt-2">
                      <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                        <p className="mb-0">Total Cost for your Consultation</p>
                        <div className="options_part">
                          <ul className="mb-0 d-flex p-0">
                            <li>
                              <a
                                href="#"
                                className="select_option_btn booking_date_width"
                              >
                                {/* 25.00 */}£ 19.99
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="next_page_btn-flex">
                    <button
                      onClick={() => setPaymentProc(false)}
                      className="btn dark_btn"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => PaySucceed()}
                      className="btn dark_btn"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {next == true && ConsultInfo && <Payment consInfo={ConsultInfo} />}
      {/* {pre == true &&
        <TimePicker />
      } */}
    </div>
  );
}
