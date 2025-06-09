import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllAppointments,
  getProfileById,
  salonfetchClientsAction,
} from "../Redux/Actions/user/salon";
import moment from "moment";
import toast from "react-hot-toast";
import { Encryptedid } from "../utils/BcruptEncyptid";
import AppointmentModal from "../components/Modals/AppointmentModal";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const Schedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState();
  const [modalShownew, setModalShownew] = React.useState(false);
  const [date, setDate] = useState("");
  const { appointments, salonClients } = useSelector((state) => ({
    appointments: state.myaccount.appointments,
    salonClients: state.myaccount.salonClients,
  }));
  const userProfile = useSelector((state) => state?.myaccount?.userInfo);
  console.log(userProfile, "salonClients")

  useEffect(() => {
     if(userProfile._id) {
    dispatch(fetchAllAppointments(userProfile._id)).then((data) => {
      if (data?.payload?.success) {
        setFilter(data?.payload?.data?.appointments);
      }
    });
  }
  
    dispatch(salonfetchClientsAction());
  }, [dispatch, userProfile]);
  useEffect(() => {
    dispatch(getProfileById())
}, [])

  useEffect(() => {
    setFilter(appointments);
  }, [appointments]);

  console.log(appointments, "appou");

  const handleEventClick = (arg) => {
   
    const appointment = arg.event._def.extendedProps;
  

    if (appointment?.appointmentId?.appointment_type == 0) {
      window.location.href = `/video_consultation/${Encryptedid(
        appointment?.appointmentId?._id
      )}/${Encryptedid(appointment?.appointmentId?.clientId?._id)}`;
    } else if (appointment?.appointmentId?.appointment_type == 1) {
      toast.success("Salon Visit");
    }
  };

  const handleFilter = (e) => {
    console.log(e.target.value, "e");
    const arr = appointments?.filter(
      (item) => item?.appointment_type == e.target.value
    );
    setFilter((e.target.value == "All Staff" && appointments) || arr);
  };

  const handleDateClick = (arg) => {
    
  
    if(  arg.dateStr >= new Date().toISOString().split('T')[0]){
    setModalShownew(true);
    setDate(arg.dateStr);
    }else{

    }
   
  };

  return (
    <Layout>
      <section className="margin-top-set">
        <Row>
          <Col lg={6}>
            <div className="cmn-sec-left">
              <h2>Video Consultation Diary</h2>
              <p>Book and edit video consultations for your clients.</p>
            </div>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </section>

      <section className="schedule-calendor">
        <div className="container">
          <div className="schedule_main">
            <div className="sch_heading text-center mb-4">
              <div className="row">
                <div className="col-lg-6 d-flex justify-content-start"></div>
                <div className="col-lg-4 d-flex justify-content-end">
                  <div className="search-input hiden-mob">
                    <InputGroup className="">
                      <InputGroup.Text className="group-box-search">
                        <img
                          src={require("../assets/img/search.svg").default}
                          alt="search"
                        />
                      </InputGroup.Text>
                      <Form.Control
                        type="search"
                        className="form-control"
                        name="search"
                        placeholder="All Staff Members"
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="col-lg-2">
                  <button
                    onClick={() => setModalShownew(true)}
                    type="button"
                    className="new-appoint mob-view"
                  >
                    New Appointment
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12"></div>

              <div className="col-lg-12 mb-4">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    // left: "prev,next today",
                    // center: "title",
                    left: "dayGridMonth,timeGridWeek,timeGridDay",
                    right: "prev,next",
                  }}
                  initialView="dayGridMonth"
                  events={filter?.map((item) => {
                    return {
                      date: `${item?.date?.split("T")[0]}T${item?.time}`,
                      title:
                        item?.clientId?.first_name +
                        " " +
                        item?.clientId?.last_name,
                      appointmentId: item,
                    };
                  })}
                  dateClick={(e) => handleDateClick(e)}
                  eventClick={handleEventClick}
                  editable={true}
                  eventTimeFormat={{
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }}
                  validRange={{
                  start: new Date().toISOString().split('T')[0], // Disable dates before today
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule new appointment */}
      <AppointmentModal
        show={modalShownew}
        onHide={() => setModalShownew(false)}
        date={date}
        salonClients={salonClients}
      />
    </Layout>
  );
};
export default Schedule;
