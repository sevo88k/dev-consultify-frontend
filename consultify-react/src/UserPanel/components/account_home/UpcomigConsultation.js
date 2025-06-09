import React from "react";
import temperature from "../../../assets/images/sidebar_icons/temperature.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  cancelConsultation,
  getBlogs,
  getConsultationDate,
  getMedication,
  getPresriptions,
} from "../../../Redux/Actions/user/userAll";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import MomentFunc from "../../../utils/MomentDateTime";
import ViewPrescription from "./ViewPres";
import moment from "moment";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
const UpcomigConsultation = ({ setInfo }) => {
  const [viewPres, setPres] = useState(false);
  const [presData, setPresData] = useState(null);
  const [consId, setConsId] = useState();
  const PrescriptionRef = useRef();
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const handlePresPrint = useReactToPrint({
    content: () => PrescriptionRef.current,
  });
  const convoDetail = useSelector(
    (state) => state?.consultaions?.upcomingConsultations
  );
  const pricriptions = useSelector(
    (state) =>
      state?.consultaions?.pricriptions?.user?.message?.currentPrescriptions
  );
  const blogs = useSelector((state) => state?.consultaions?.blogs);
  const medication = useSelector((state) => state.consultaions.medication);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startstopLoading(true));
    dispatch(getConsultationDate()).then((res) => {
      if (
        res.payload.user.success == true ||
        res.payload.user.success == false
      ) {
        dispatch(startstopLoading(false));
      }
    });
    dispatch(getPresriptions());
    dispatch(getBlogs());
    dispatch(getMedication());
  }, []);

  const viewPrescription = (pres) => {
    setPresData(pres);
    setPres(true);
  };
  const handleClose = () => {
    setPres(false);
  };

  const handleUpdate = () => {
    sessionStorage.setItem("consId", consId);
    navigate("/new-consultation");
  };
  const handleCancel = (id) => {
    dispatch(cancelConsultation(id));
    // dispatch(getConsultationDate());
  };
  const HandleHealthQuestionaire = () => {
    navigate("/my-account/med-history");
  };
  return (
    <div className="consultation_inner">
      <div className="desc_area pb-0 account_home ">
        <div className="row">
          <div className="col-xl-6">
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
                  <div className={convoDetail?.length > 0 ? "overflow_table consultation_table upcoming_consultation_table" : "overflow_table consultation_table scroll-hide"}>
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
                        {convoDetail?.length > 0 ? (
                          convoDetail?.map((item, i) => {
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
                            );
                          })
                        ) : (
                          <div className="d-flex justify-content-center mt-5">
                            No upcoming consultations yet
                          </div>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-body height-330 pres_card_body">
                {!viewPres ? (
                  <div className="consulatation_card">
                    <h3 className="common_title">Prescriptions</h3>
                    <div className={pricriptions?.length > 0 ? "overflow_table pres_table past_pres table-responsive" : "overflow_table pres_table past_pres table-responsive scroll-hide"}>
                      <table className="table admin-prescription prescription_lg_table">
                        <thead>
                          <tr>
                            <th className="border-b-c">Issue Date</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr className="box_prop mb-2"> */}

                          {pricriptions?.length > 0 ? (
                            pricriptions?.map((item, i) => {
                              return (
                                <tr className="box_prop">
                                  <td>
                                    <p>{MomentFunc.Date(item.date)}</p>
                                  </td>
                                  {/* <td className="med-td"> */}
                                  <td className="med-td">
                                  {item?.medication?.map((med) => {
                                      return <p>{med.meds}</p>;
                                    })}
                                  </td>
                                  <td>
                                  <p>
                                      {item?.medication?.map((med) => {
                                        return <p>{med.quantity}</p>;
                                      })}
                                    </p>
                                  </td>
                                  <td>
                                    <p>
                                      <a
                                        onClick={() => viewPrescription(item)}
                                        className="view_btn cursor-pointer"
                                      >
                                        View
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No current prescriptions yet
                            </div>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <ViewPrescription
                    ref={PrescriptionRef}
                    handlePresPrint={handlePresPrint}
                    handleClose={handleClose}
                    viewPresData={presData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Blogs */}

        <div className="row">
          <div className="col-xl-6 mb-4">
            <div className="card blog_card">
              <div className="card-body">
                <div className="blog_card_inner">
                  <h3 className="common_title">Latest Updates</h3>
                  <div className="overflow_scroll">
                    <ul className="blogs_details blog_scroll userportal_blog">
                      {blogs?.length > 0 ? (
                        blogs?.map((item, i) => {
                          return (
                            <li key={i} className="mb-4">
                              <img
                                src={HOST_NAME + "public/uploads/" + item.img}
                                alt="blog"
                                className="img-fluid user-blog-img"
                              />
                              <div className="blog_inner">
                                <div className="blog_title">
                                  <h4>{item.title}</h4>
                                  <p>{item.author}</p>
                                </div>
                                <div className="read_more_btn latest_updates_btn">
                                  <a
                                    onClick={() =>
                                      navigate(`/read-blog/${item.id}`)
                                    }
                                    className="light_btn"
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <div className="d-flex justify-content-center mt-5 ">
                          No blogs yet
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-body medi_details">
                <div className="med_card_inner">
                  <h3 className="common_title">Medical Details</h3>
                </div>
                <div className="overflow_table prescription_table">
                  <table className="table admin-prescription">
                    <thead>
                      <tr>
                        <th>Medication Name</th>
                        <th>Dosage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr className="box_prop mb-2"> */}

                      {medication?.length > 0 ? (
                        medication?.map((item, i) => {
                          return (
                            <tr key={i} className="box_prop">
                              <td>
                                <p>{item?.med_name}</p>
                              </td>
                              {/* <td className="med-td"> */}
                              <td>
                                <p>{item.dosage ? item.dosage : "--"}</p>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <div className="d-flex justify-content-center mt-5 ">
                          No medical details yet
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card questionnaire mb-5">
              <div className="card-body">
                <div className="questionnaire_inner">
                  <a
                    onClick={() => HandleHealthQuestionaire()}
                    className="questionnaire_inner cursor-pointer"
                  >
                    Take Our Health Questionnaire
                    <img src={temperature} alt="temperature" />
                  </a>
                </div>
              </div>
            </div>
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
  );
};

export default UpcomigConsultation;
