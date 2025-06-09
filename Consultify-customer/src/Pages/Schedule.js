import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchAllAppointments } from "../Redux/Action/CustomerRestAction";
import { Encryptedid } from "../utils/BcruptEncyptid";
import toast from "react-hot-toast";
import { Button, Col, InputGroup, Modal, Row } from "react-bootstrap";

const Schedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState();

  const { appointments } = useSelector((state) => ({
    appointments: state.customer.appointments,
  }));

  useEffect(() => {
    dispatch(fetchAllAppointments()).then((data) => {
      setFilter(data?.payload?.appointments);
    });
  }, []);

  console.log(filter, "filter");

  const handleEventClick = (arg) => {
    const appointment = arg.event._def.extendedProps;
    console.log(appointment, "appointment");
    if (appointment?.appointmentId?.appointment_type == 0) {
      navigate(
        `/video_consultation/${Encryptedid(appointment?.appointmentId?._id)}`
      );
    } else if (appointment?.appointmentId?.appointment_type == 1) {
      toast.success("Salon Visit");
    }
  };

  const handleFilter = (e) => {
    const arr = appointments?.filter(
      (item) => item?.appointment_type == e.target.value
    );
    setFilter(arr);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <div className="container">
        <section className="margin-top-set">
          <Row>
            <Col lg={6}>
              <div className="cmn-sec-left">
                <h2>Video Call Diary</h2>
                <p>Find all of your scheduled video consultations here.</p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </section>
      </div>
      <section className="schedule-calendor">
        <div className="container">
          <div className="schedule_main">
            {/* <div className="row">
              <div className="col-lg-6 d-flex justify-content-start"></div>
              <div className="col-lg-4 d-flex justify-content-end">
                <div className="search-input">
                  <div class="form-group">
                    <img
                      src={require("../assets/img/search.svg").default}
                      alt="search"
                    />
                    <input
                      type="search"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="All Staff Members"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <button
                  type="button"
                  className="new-appoint"
                  onClick={handleShow}
                >
                  New Appointment
                </button>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-12">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  headerToolbar={{
                    left: "dayGridMonth,timeGridWeek,timeGridDay",
                    right: "",
                  }}
                  initialView="dayGridMonth"
                  events={filter?.map((item) => {
                    return {
                      date: `${item?.date?.split("T")[0]}T${item?.time}`,
                      title: item?.salonId?.salonname,
                      appointmentId: item,
                    };
                  })}
                  eventClick={handleEventClick}
                  eventTimeFormat={{
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body>
            <div className="client_consulation">
              <div className="container">
                <form className="w-100 px-0 " style={{ border: "none" }}>
                  <h2>New Appointment</h2>
                  <div className="row">
                    <div className="col-lg-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="appointment_type"
                      >
                        <option selected>Select Appointment Type</option>
                        <option value="0">Video Consultation</option>
                        <option value="1">Salon Visit</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="clientId"
                      >
                        <option selected>Select Client</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        placeholder="Give your Appointment a Description"
                        name="description"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date: dd/mm/yyyy"
                        name="date"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Time: --:--"
                        name="time"
                      />
                    </div>

                    <Row className="mt-4">
                      <Col
                        lg={6}
                        sm={6}
                        xs={6}
                        className="d-flex justify-content-end"
                      >
                        <div className="submit-btn schedule pt-0">
                          <button
                            type="submit"
                            class="btn mb-3 w-100"
                            onClick={handleClose}
                          >
                            Schedule Appointment
                          </button>
                        </div>
                      </Col>
                      <Col
                        lg={6}
                        sm={6}
                        xs={6}
                        className="d-flex justify-content-start"
                      >
                        <div className="cancel-btn">
                          <button
                            type="submit"
                            class="btn mb-3"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </Layout>
  );
};
export default Schedule;
