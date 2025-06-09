import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAddConsultations } from "../../../Redux/Actions/user/userAll";
import TimePicker from "../time_picker/TimePicker";
import Layout from "../../Layout/Layout";
import NewConsultation from "../consultaions/NewConsultaion";
import MomentFunc from "../../../utils/MomentDateTime";
export default function SelectDate({ setTpicker, setInfo, selectedDate }) {
  const [selectDate, setSelectDate] = React.useState("");
  const [next, setNext] = useState(false);
  // const [pre, setPre] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PickerChange = (e) => {
    e.preventDefault();
    setSelectDate(e.target.value);
  };
  var today = new Date().toISOString().split("T")[0];
  const Move = () => {
    if (selectDate) {
      setTpicker(true);
      selectedDate(selectDate);
    }
  };

  return (
    <div className="col-lg-10">
      {/* {next == false && pre == false && */}
      <div className="desc_area">
        <div className="row">
          <div className="col-md-12">
            <div className="new_consultation_booking common_shadow">
              <h2 className="common_title padding_36">Select a Date & Time</h2>
              <div className="questions_part  d-flex flex-column justify-content-between">
                <div className="booking_detail">
                  <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                    <p className="mb-0">Select a Date</p>
                    <div className="options_part date-picker">
                      <form>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={selectDate}
                          onChange={PickerChange}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="next_page_btn-flex">
                    <button
                      onClick={() => setInfo(false)}
                      className="btn dark_btn"
                    >
                      Back
                    </button>
                    <button onClick={() => Move()} className="btn dark_btn">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* }
      {next == true &&
        <TimePicker selectedDate={selectDate} />
      }
      {pre == true &&
        <NewConsultation />
      } */}
    </div>
  );
}
