import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../../Layout/Layout";
import ConsultationNotes from "./ConsultationNotes";
import UpCommingNotes from "./upCommingNotes";
import {
  cancelConsultation,
  getConsultationDate,
} from "../../../Redux/Actions/user/userAll";
import MomentFunc from "../../../utils/MomentDateTime";
import { useReactToPrint } from "react-to-print";
import moment from "moment";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
import Modal from "react-bootstrap/Modal";
import ModalView from "./ModalView";
export default function Consultations() {
  const [consId, setConsId] = useState();
  const [notes, setNotes] = useState(false);
  const [notesData, setNotesData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pastConsultaions = useSelector(
    (state) => state?.consultaions?.pastConsultations
  );
  const upcomingConsultaion = useSelector(
    (state) => state?.consultaions?.upcomingConsultations
  );
  sessionStorage.setItem("consId", "undefined");
  const NotesRef = useRef();
  const handleNotesPrint = useReactToPrint({
    content: () => NotesRef.current,
  });

  const handleClose = () => {
    setNotes(false);
  };

  useEffect(() => {
    dispatch(startstopLoading(true));
    dispatch(getConsultationDate()).then((res) => {
      if (res?.payload) {
        dispatch(startstopLoading(false));
      }
    });
  }, []);

  const Notes = (item) => {
    setNotesData(item);
    setNotes(true);
  };
  const handleUpdate = () => {
    sessionStorage.setItem("consId", consId);
    navigate("/new-consultation");
  };

  const handleCancel = (id) => {
    // setCancel(cancel)
    dispatch(cancelConsultation(id));
    dispatch(getConsultationDate());
  };

  const handleClickJoinCall = (callId) => {
    navigate(`/join-call/${callId}`);
  };

  return (
    <Layout>
      <div className="col-lg-10 ">
        <div className="desc_area pb-0 ">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body height-330">
                  <div className="consulatation_card">
                    <div className="d-flex justify-content-between align-items-center new_consultation">
                      <h3 className="common_title">Upcoming Consultations</h3>
                      <Link
                        onClick={() =>
                          sessionStorage.setItem(
                            "consIdReschedule",
                            "undefined"
                          )
                        }
                        to="/new-consultation"
                        className="small_dark_btn small_drk_btn_margin"
                      >
                        New Consultation
                      </Link>
                    </div>
                    <div
                      className={
                        upcomingConsultaion?.length > 0
                          ? "overflow_table consultation_table upcoming_consultation_table"
                          : "overflow_table consultation_table scroll-hide"
                      }
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="overflow-y-scroll upcomingConsultation">
                          {upcomingConsultaion?.length ? (
                            upcomingConsultaion?.map((item, i) => {
                              return (
                                <tr className="box_prop" key={i}>
                                  <td>
                                    <p>{MomentFunc.Date(item?.date)}</p>
                                  </td>
                                  <td>
                                    <p>{MomentFunc.Time(item?.date)}</p>
                                    {/* <p>
                                    {}
                                  </p> */}
                                  </td>
                                  <td>
                                    <p>
                                      {item?.assignedDoctor
                                        ? "Dr. " +
                                          item?.assignedDoctor?.firstName.concat(
                                            " ",
                                            item?.assignedDoctor?.lastName
                                          )
                                        : "Not Assigned"}
                                    </p>
                                  </td>
                                  <td>
                                    {Date.now() < moment(item?.date) &&
                                    new Date() >
                                      moment(item?.date) - 10 * 60 * 1000 ? (
                                      <p>
                                        <a
                                          onClick={() => {
                                            handleClickJoinCall(item?._id);
                                          }}
                                          // to={`/join-call/${item?._id}`}
                                          className="join_call"
                                        >
                                          Join Call
                                        </a>
                                      </p>
                                    ) : (
                                      <p>
                                        <a
                                          href="#"
                                          className="join_call"
                                          data-bs-toggle="modal"
                                          data-bs-target="#staticBackdrop"
                                          onClick={() => {
                                            setConsId(item?._id);
                                            // setShowVal(true)
                                          }}
                                        >
                                          Manage Booking
                                        </a>
                                      </p>
                                    )}
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5">
                              No upcoming consultations yet
                            </div>
                          )}
                        </tbody>
                        {/* <tbody className="overflow-y-scroll">
                          {upcomingConsultaion?.length > 0 ? (
                            upcomingConsultaion?.map((item, id) => {
                              return (
                                <div key={id}>
                                  <tr className="box_prop">
                                    <td>
                                      <p>{MomentFunc.Date(item?.date)}</p>
                                    </td>
                                    <td>
                                      <p>{MomentFunc.Time(item?.date)}</p>
                                    </td>
                                    <td>
                                      <p>
                                      {item?.assignedDoctor ?
                                      "Dr. " +
                                        item?.assignedDoctor?.firstName.concat(
                                          " ",
                                          item?.assignedDoctor?.lastName
                                        ) : "Not Assigned"}
                                      </p>
                                    </td>
                                    <td>
                                      {Date.now() < moment(item?.date) &&
                                      new Date() >
                                        moment(item?.date) - 10 * 60 * 1000 ? (
                                        <p>
                                          <Link
                                            to={`/join-call/${item?._id}`}
                                            className="join_call"
                                          >
                                            Join Call
                                          </Link>
                                        </p>
                                      ) : (
                                        <p>
                                          <a
                                            href="#"
                                            className="join_call"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            onClick={() => setConsId(item?._id)}
                                          >
                                            Manage Booking
                                          </a>
                                        </p>
                                      )}
                                    </td>
                                  </tr>
                                </div>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No upcoming Consultations yet
                            </div>
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body height-330">
                  <div className="consulatation_card">
                    <div>
                      <h3 className="common_title">Past Consultations</h3>
                    </div>
                    <div
                      className={
                        pastConsultaions?.length > 0
                          ? "overflow_table consultation_table upcoming_consultation_table"
                          : "overflow_table consultation_table scroll-hide"
                      }
                    >
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="overflow-y-scroll upcomingConsultation">
                          {pastConsultaions?.length ? (
                            pastConsultaions?.map((item, i) => {
                              return (
                                <tr className="box_prop" key={i}>
                                  <td>
                                    <p>{MomentFunc.Date(item?.date)}</p>
                                  </td>
                                  <td>
                                    <p>{MomentFunc.Time(item?.date)}</p>
                                  </td>
                                  <td>
                                    <p>
                                      {item?.assignedDoctor
                                        ? "Dr. " +
                                          item?.assignedDoctor?.firstName.concat(
                                            " ",
                                            item?.assignedDoctor?.lastName
                                          )
                                        : "Not Assigned"}
                                    </p>
                                  </td>
                                  <td>
                                    <p>
                                      <a
                                        onClick={() => Notes(item)}
                                        className="join_call"
                                      >
                                        View Notes
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5">
                              No past consultations yet
                            </div>
                          )}
                        </tbody>
                        {/* <tbody className="">
                          {pastConsultaions?.length > 0 ? (
                            pastConsultaions?.map((item, i) => {
                              return (
                                <div key={i}>
                                  {Date.now() > new Date(item?.date) ? (
                                    <tr className="box_prop" key={i}>
                                      <td>
                                        <p>{MomentFunc.Date(item?.date)}</p>
                                      </td>
                                      <td>
                                        <p>{MomentFunc.Time(item?.date)}</p>
                                      </td>
                                      <td>
                                        <p>{item.assignedDoctor ?
                                      "Dr. " +
                                        item?.assignedDoctor?.firstName.concat(
                                          " ",
                                          item?.assignedDoctor?.lastName
                                        ) : "Not Assigned"}</p>
                                      </td>
                                      <td>
                                        <p>
                                          <a
                                            onClick={() => Notes(item)}
                                            className="join_call"
                                          >
                                            View Notes
                                          </a>
                                        </p>
                                      </td>
                                    </tr>
                                  ) : null}
                                </div>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No past Consultations yet
                            </div>
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 upcoming_consultation">
              {notes ? (
                <ConsultationNotes
                  ref={NotesRef}
                  handleNotesPrint={handleNotesPrint}
                  handleNotesClose={handleClose}
                  notesData={notesData}
                />
              ) : (
                <UpCommingNotes upcomingCons={upcomingConsultaion} />
              )}
            </div>
          </div>
        </div>

        {/*  Appointment Modal */}
        <div
          className="modal fade appointment_modal"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="close-btn">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-btn">
                  <button
                    onClick={() => handleUpdate()}
                    data-bs-dismiss="modal"
                    type="button"
                    className="re-schedule-btn"
                  >
                    Re-Schedule
                  </button>
                  <button
                    onClick={() => handleCancel(consId)}
                    data-bs-dismiss="modal"
                    type="button"
                    className="btn btn-outline-danger cancel-btn mt-3"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
