import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { userAddConsultations } from "../../../Redux/Actions/user/userAll";
export default function NewConsultationQues({ setConQues }) {
  const [info, setInfo] = useState("");
  const [selceted, setSelected] = useState("");
  const Nevigate = useNavigate();
  const Dispatch = useDispatch();
  const HandleChange = (e) => {
    setInfo(e.target.value);
  };

  const YesClick = () => {
    sessionStorage.setItem("page text", info);
    setSelected(info);
    Dispatch(userAddConsultations(info));

    console.log("quest", info);
  };
  const NoClick = () => {
    console.log("No:>", info);
  };
  const ProceedNext = () => {
    if (sessionStorage.getItem("page text", JSON.stringify(info))) {
      Nevigate("/select-date");
    }
  };
  return (
    <div className="col-lg-10">
      <div className="desc_area">
        <div className="row">
          <div className="col-md-12">
            <div className="new_consultation_booking common_shadow">
              <h2 className="common_title padding_36">Book New Consultation</h2>
              <div className="questions_part  d-flex flex-column justify-content-between">
                <div className="booking_detail">
                  <div className="d-flex justify-content-between align-items-center ques_detail-inner mb-2">
                    <p className="mb-0">
                      Lorum ipsum dolor et. Lorum ipsum dolor et. Lorum ipsum
                      dolor et. Lorum ipsum dolor et. ?
                    </p>
                    <div className="options_part questions_options">
                      <ul className="mb-0 d-flex p-0">
                        <li>
                          <input
                            type="text"
                            placeholder="Write something first"
                            value={info}
                            onChange={HandleChange}
                            style={{
                              borderRadius: "5px",
                              border: "unset",
                              padding: "3px",
                            }}
                            required
                          ></input>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ques_detail-inner">
                    <p className="mb-0">
                      Lorum ipsum dolor et. Lorum ipsum dolor et. Lorum ipsum
                      dolor et. Lorum ipsum dolor et. ?
                    </p>
                    <div className="options_part questions_options">
                      <ul className="mb-0 d-flex p-0">
                        <li>
                          <button
                            onClick={() => YesClick()}
                            className="select_option_btn w-75 hoverYesNo"
                          >
                            Yes
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => NoClick()}
                            className="select_option_btn w-75 hoverYesNo"
                          >
                            No
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="next_page_btn">
                  <button
                    onClick={() => setConQues(true)}
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
    </div>
  );
}
