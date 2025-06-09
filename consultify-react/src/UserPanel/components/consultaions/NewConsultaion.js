import React, { useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import SelectDate from "../select_date/SelectDate";
import TimePicker from "../time_picker/TimePicker";
import ConfirmBooking from "../confirm_booking/ConfirmBooking";
import Payment from "../payment/Payment";
import { useEffect } from "react";
import {
  getMedicalHistory,
  getPersonalInfo,
} from "../../../Redux/Actions/user/userAll";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import { resetGotMedHistory } from "../../../Redux/Reducers/user/ConsultationSlice";
import RedirectMedHistory from "./RedirectMedHistory";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import RedirecPersonalInfo from "./RedirectPersonalInfo";

export default function NewConsultation() {
  const [info, setInfo] = useState(false);
  const [tpicker, setTpicker] = useState(false);
  const [paymentProc, setPaymentProc] = useState(false);
  const [paylast, setPayLast] = useState(false);
  const [theSelectedDate, setSelectedDate] = useState();
  const [theSeclectedTime, setSecTime] = useState();
  const [haveMedHistory, setHaveMedHistory] = useState(false);
  const [viewVal, setShowVal] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [personalInfoStatus, setPersonalInfoStatus] = useState(false);
  const [personalViewVal, setPersonalViewVal] = useState(false);
  const timeArr = useRef();
  const dispatch = useDispatch();

  const medicalHistory = useSelector(
    (state) => state?.consultaions?.medicalHistory
  );
  const gotMedicalHistory = useSelector(
    (state) => state?.consultaions?.gotMedicalHistory
  );

  const gotPersonalInfo = useSelector(
    (state) => state.consultaions.personalInfo
  );
console.log(gotPersonalInfo,"personal");
  function intervals(startString, endString) {
    var start = moment(startString, "YYYY-MM-DD hh:mm a");
    var end = moment(endString, "YYYY-MM-DD hh:mm a");
    // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
    // note that 59 will round up to 60, and moment.js handles that correctly
    start.minutes(Math.ceil(start.minutes() / 15) * 15);   

    var result = [];

    var current = moment(start);

    while (current <= end) {
      // result.push(current.format("YYYY-MM-DD hh:mm a"));
      result.push(current.format("hh:mm a"));
      current.add(15, "minutes");
    }

    return result;
  }

  timeArr.current = intervals("2023-01-01 8:00:00 AM", "2023-01-01 8:00:00 PM");

  useEffect(() => {
    dispatch(getMedicalHistory());
    dispatch(getPersonalInfo());

    if (sessionStorage.getItem("consId") != "undefined") {
      setInfo(true);
      sessionStorage.setItem(
        "consIdReschedule",
        sessionStorage.getItem("consId")
      );
      sessionStorage.setItem("consId", "undefined");
    }
  }, []);
  useEffect(() => {
    if (gotPersonalInfo) {
      const checkList = {
        phnNumber: "",
        age: "",
        address: "",
      };
      checkList.phnNumber = gotPersonalInfo?.phnNumber
        ? gotPersonalInfo?.phnNumber == null
          ? false
          : true
        : false;
      checkList.age = gotPersonalInfo?.age
        ? gotPersonalInfo?.age == null
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
        Object.keys(gotPersonalInfo.address).length < 4
          ? false
          : checkAdd(gotPersonalInfo.address);

      if (checkList.phnNumber && checkList.age && checkList.address) {
        setPersonalInfoStatus(true);
        setPersonalViewVal(false);
      } else if (!checkList.phnNumber || !checkList.age || !checkList.address) {
        medicalHistory?.length > 0 && setPersonalViewVal(true);
      }
    }
  }, [gotPersonalInfo]);

  useEffect(() => {
    if (gotMedicalHistory == false) {
      setShowVal(true);
    }
    if (gotMedicalHistory == true) {
      if (medicalHistory?.length > 0) {
        setHaveMedHistory(true);
      }
    }
  }, [gotMedicalHistory, medicalHistory]);

  const handleNextClick = () => {
    if (medicalHistory && personalInfoStatus && !checkBox) {
      toastInfo("Please agree to our Terms & Conditions");
    }
  };

  return (
    <Layout>
      {info == false && (
        <div className="col-lg-10">
          <RedirectMedHistory viewVal={viewVal} setShowVal={setShowVal} />
          <RedirecPersonalInfo
            personalViewVal={personalViewVal}
            setPersonalShowVal={setPersonalViewVal}
          />
          <div className="desc_area">
            <div className="row">
              <div className="col-md-12">
                <div className="new_consultation_booking common_shadow">
                  <h2 className="common_title padding_36">
                    Book New Consultation
                  </h2>
                  <div className="prblm_inner_content d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="red_text">Before we start</h3>
                      <p>
                        Book a consultation with a ToothAid dentist for same day
                        assessment, treatment advice and prescriptions if
                        indicated - to help solve your dental concern.
                        Disclaimer if you have a facial swelling that is
                        spreading towards your eye, neck, or trouble breathing
                        or swallowing, please seek emergency services / 999
                        immediately.
                      </p>
                      <h4 className="red_text mb-5 fw-500">
                        If you have an urgent medical emergency CALL 999.
                      </h4>
                      <p>
                        <input
                          onChange={(e) => setCheckBox(e.target.checked)}
                          type="checkbox"
                          className="me-1"
                        />
                        Please tick the box to show you agree with our Terms &
                        Conditions
                      </p>
                    </div>
                    <div className="next_page_btn">
                      {haveMedHistory && personalInfoStatus && checkBox ? (
                        <button
                          onClick={() => setInfo(true)}
                          className="btn dark_btn"
                        >
                          Next
                        </button>
                      ) : (
                        <div onClick={() => handleNextClick()}>
                          <button className="btn dark_btn" disabled>
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {info == true && tpicker == false && (
        <SelectDate
          setInfo={setInfo}
          // setMod={setMod}
          setTpicker={setTpicker}
          selectedDate={(date) => setSelectedDate(date)}
        />
      )}

      {timeArr.current?.length > 0 &&
        tpicker == true &&
        paymentProc == false && (
          <TimePicker
            timeArr={timeArr.current}
            setSelectDate={theSelectedDate}
            setTpicker={setTpicker}
            setPaymentProc={setPaymentProc}
            setSecTime={(time) => setSecTime(time)}
          />
        )}
      {paymentProc == true && paylast == false && (
        <ConfirmBooking
          setPaymentProc={setPaymentProc}
          setPayLast={setPayLast}
          setSelectDate={theSelectedDate}
          setSecTime={theSeclectedTime}
        />
      )}
      {paylast == true && <Payment setPayLast={setPayLast} />}
    </Layout>
  );
}
