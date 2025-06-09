import { useEffect, useState } from "react";
import React from "react";
import MomentFunc from "../../../utils/MomentDateTime";
import { useDispatch, useSelector } from "react-redux";
import { getAvailability } from "../../../Redux/Actions/user/userAll";
import moment from "moment";

export default function TimePicker({
  setPaymentProc,
  setTpicker,
  setSelectDate,
  setSecTime,
  timeArr,
}) {
  const [time, setTime] = useState("");
  const [selectedtime, setSelectedTime] = useState("");
  const [startEnd, setStartEnd] = useState({
    start: "",
    end: "",
  });
  const [alreadyBooked, setAlreadyBooked] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [currentDay, setCurrentDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [status, setStatus] = useState(null);
  const [todayDisabledTimes, setTodayDisabledTimes] = useState(null);
  const [availTimeArr, setAvailTimeArr] = useState(null);
  var today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
  const docAvail = useSelector((state) => state.consultaions.docAvail);
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
  function hoursIntervals(startString, endString) {
    var start = moment(startString, "YYYY-MM-DD hh:mm a");
    var end = moment(endString, "YYYY-MM-DD hh:mm:ss a");
    // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
    // note that 59 will round up to 60, and moment.js handles that correctly
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var result = [];

    var current = moment(start);

    while (current <= end) {
      result.push(current.format("hh:mm a"));
      current.add(15, "minutes");
    }

    return result;
  }

  useEffect(() => {
    if (todayDisabledTimes) {
      const newArr = intervals(startEnd.start, startEnd.end).map((timeStr) => {
        return todayDisabledTimes.includes(timeStr)
          ? { state: "enabled", time: timeStr }
          : { state: "disabled", time: timeStr };
      });
      setAvailTimeArr(newArr);
    }
  }, [todayDisabledTimes]);

  useEffect(() => {
    if (currentDate && currentDay) {
      if (currentDate.status == "Open") {
        const morningShift = intervals(
          setSelectDate.concat(" ", currentDate.morningStart),
          setSelectDate.concat(" ", currentDate.morningEnd)
        );
        const eveningShift = intervals(
          setSelectDate.concat(" ", currentDate.eveningStart),
          setSelectDate.concat(" ", currentDate.eveningEnd)
        );
        setStartEnd({
          start: setSelectDate.concat(" ", currentDate.morningStart),
          end: setSelectDate.concat(" ", currentDate.eveningEnd),
        });
        setTodayDisabledTimes([...morningShift, ...eveningShift]);
      }
      setStatus(currentDate.status);
    }
    if (currentDay && !currentDate) {
      const morningShift = intervals(
        setSelectDate.concat(" ", currentDay.morningStart),
        setSelectDate.concat(" ", currentDay.morningEnd)
      );
      const eveningShift = intervals(
        setSelectDate.concat(" ", currentDay.eveningStart),
        setSelectDate.concat(" ", currentDay.eveningEnd)
      );
      setStartEnd({
        start: setSelectDate.concat(" ", currentDay.morningStart),
        end: setSelectDate.concat(" ", currentDay.eveningEnd),
      });
      setTodayDisabledTimes([...morningShift, ...eveningShift]);
      setStatus(currentDay.status);
    }

    if (alreadyBooked) {
      const bookedTime = alreadyBooked.map((consObject) => {
        return moment(consObject.date).format("hh:mm a");
      });
      setTodayDisabledTimes((prev) => {
        // let arr = [...prev, ...bookedTime];
        // let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
        let newArr = prev?.filter((val) => !bookedTime.includes(val));
        return newArr;
      });
    }

    if (setSelectDate == today) {
      setTodayDisabledTimes((prev) => {
        const tillNow = hoursIntervals(
          today.concat(" ", "12:00 am"),
          today.concat(" ", new Date().toLocaleString().split(",")[1])
        );
        let newArr = prev?.filter((val) => !tillNow.includes(val));
        return newArr;
      });
    }
  }, [currentDay, currentDate, alreadyBooked]);

  useEffect(() => {
    dispatch(getAvailability());
    setSelectedDay(moment(setSelectDate).format("dddd"));
  }, []);

  useEffect(() => {
    if (docAvail) {
      if (docAvail?.avail?.regular) {
        var regularDay = docAvail?.avail?.regular?.filter(
          (dayObject) => dayObject.day == selectedDay
        );
        setCurrentDay(regularDay[0]);
      }
      if (docAvail?.avail?.special) {
        var specialDay = docAvail?.avail?.special?.filter(
          (dateObject) => dateObject.date == setSelectDate
        );
        setCurrentDate(specialDay == [] ? null : specialDay[0]);
      }
      if (docAvail?.cons) {
        const alreadyBookedCons = docAvail?.cons?.filter(
          (cons) => moment(cons.date).format("YYYY-MM-DD") == setSelectDate
        );
        setAlreadyBooked(alreadyBookedCons == [] ? null : alreadyBookedCons);
      }
    }
  }, [docAvail]);

  const TimeSelect = (timeString) => {
    setTime(timeString);
    setSelectedTime(timeString);
  };

  const PickerChange = (e) => {
    e.preventDefault();
  };
  const NextProceed = () => {
    if (time) {
      setSecTime(selectedtime);
      setPaymentProc(true);
    }
  };

  return (
    <div className="col-md-10">
      <div className="desc_area">
        <div className="row">
          <div className="col-md-12">
            <div className="new_consultation_booking common_shadow">
              <h2 className="common_title padding_36">Select a Date & Time</h2>
              <div className="questions_part  d-flex flex-column justify-content-between">
                <div className="booking_detail">
                  <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                    <p className="mb-0 selected_date_text">Selected Date</p>

                    <div className="options_part date-picker">
                      <form action="">
                        <input
                          min={today}
                          name="date"
                          value={MomentFunc.Date(setSelectDate)}
                          onChange={PickerChange}
                          style={{
                            borderRadius: "5px",
                            border: "unset",
                            padding: "3px",
                          }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ques_detail">
                  <div className="ques_detail-inner mb-2 ">
                    <p className="mb-0">Select a time</p>

                    <div className="time_picker_inner mt-2">
                      <ul className="d-flex align-items-center p-0 single_time flex-wrap mb-0">
                        {availTimeArr ? (
                          status != null &&
                          availTimeArr?.map((timeObject, i) => {
                            return status == "Closed" ? (
                              <li
                                key={i}
                                // className="timecss cursor-pointer disabled-time"
                                className="timecss disabled-time"
                              >
                                {timeObject.time}
                              </li>
                            ) : (
                              <li
                                key={i}
                                onClick={() =>
                                  timeObject.state == "enabled" &&
                                  TimeSelect(timeObject.time)
                                }
                                className={
                                  timeObject.state == "disabled"
                                    ? "disabled-time timecss"
                                    : selectedtime == timeObject.time
                                    ? "selected-timecss timecss cursor-pointer"
                                    : "timecss cursor-pointer"
                                }

                                // {status == "Closed" ? () : (className = "timecss cursor-pointer") }
                              >
                                {timeObject.time}
                              </li>
                            );
                          })
                        ) : (
                          <div className="options_part date-picker">
                            <input
                              name="date"
                              value={"Availability Not Set Yet"}
                              onChange={PickerChange}
                              style={{
                                borderRadius: "5px",
                                border: "unset",
                                padding: "3px",
                              }}
                            />
                          </div>
                        )}
                        {/* {status != null &&
                          timeArr?.map((timeString, i) => {
                            return status == "Closed" ? (
                              <li
                                key={i}
                                // className="timecss cursor-pointer disabled-time"
                                className="timecss cursor-pointer selected-timecss"
                              >
                                {timeString}
                              </li>
                            ) : (
                              <li
                                key={i}
                                onClick={() => TimeSelect(timeString)}
                                className={
                                  selectedtime == timeString
                                    ? "selected-timecss timecss cursor-pointer"
                                    : "timecss cursor-pointer"
                                }
                                // {status == "Closed" ? () : (className = "timecss cursor-pointer") }
                              >
                                {timeString}
                              </li>
                            );
                          })} */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="next_page_btn-flex">
                  <button
                    onClick={() => setTpicker(false)}
                    className="btn dark_btn"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => NextProceed()}
                    className="btn dark_btn"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* }
      {next == true &&
        <ConfirmBooking
          selectedDate={selectedDate}
          selectedTime={time}
        />
      }
      {pre == true &&
        <SelectDate />
      } */}
    </div>
  );
}
