import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  customerDashboardDetails,
  fetchAllAppointments,
  medicalhistoryquestionAction,
  updatemedicalhistoryAction,
} from "../Redux/Action/CustomerRestAction";
import { Link, NavLink, useNavigate } from "react-router-dom";
import moment from "moment";
import { Encryptedid } from "../utils/BcruptEncyptid";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import toast from "react-hot-toast";
const Clientview = () => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const [customermedicalhistory, Setcustomermedicalhistory] = useState([]);
  const [medications, setMedications] = useState([{ name: "", dosage: "" }]);
  const {
    upcomingSchedule,
    appointmentHistory,
    customerDetail,
    upcomingSchedule2,
    appointmentHistory2,
    questionlist,
  } = useSelector((state) => ({
    upcomingSchedule: state.customer.userInfo?.upcomingSchedule,
    appointmentHistory: state.customer.userInfo?.appointmentHistory,
    customerDetail: state.customer.userInfo?.customerDetail,

    questionlist: state.customer.questionlist,
    //APPOINTMENTS
    upcomingSchedule2: state.customer?.upcomingSchedule,
    appointmentHistory2: state.customer?.appointmentHistory,
  }));

  useEffect(() => {
    dispatch(customerDashboardDetails());
    dispatch(fetchAllAppointments());

    dispatch(medicalhistoryquestionAction());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Setcustomermedicalhistory(customerDetail?.customermedicalhistory);
    setMedications(customerDetail?.medications);
  }, [customerDetail]);

  // const updatethestatus = (id, status, notes) => {
  //   // Find the index of the item
  //   const index = customermedicalhistory?.findIndex(
  //     (obj) => obj?.medicalquestion_id?.toString() === id?.toString()
  //   );

  //   if (index !== -1) {
  //     // If the item exists, update its status
  //     const updatedHistory = customermedicalhistory?.map((item, i) =>
  //       i === index ? { ...item, notes, status: status } : item
  //     );
  //     //   console.log(updatedHistory,"updatedHistoryupdatedHistoryupdatedHistory")
  //     Setcustomermedicalhistory(updatedHistory);
  //   } else {
  //     // If the item does not exist, add a new item
  //     Setcustomermedicalhistory([
  //       ...customermedicalhistory,
  //       { medicalquestion_id: id, status: status, notes },
  //     ]);
  //   }
  // };

  const updatethestatus = (id, status, notes = null) => {
    const index = customermedicalhistory?.findIndex(
      (obj) => obj?.medicalquestion_id?.toString() === id?.toString()
    );
  
    if (index !== -1) {
      const updatedHistory = customermedicalhistory?.map((item, i) =>
        i === index
          ? { ...item, status: status ?? item.status, notes: notes ?? item.notes }
          : item
      );
      Setcustomermedicalhistory(updatedHistory);
    } else {
      Setcustomermedicalhistory([
        ...customermedicalhistory,
        { medicalquestion_id: id, status: status, notes: notes || "" },
      ]);
    }
  };
  

  const updatemedicalhistory = () => {
    dispatch(
      updatemedicalhistoryAction({
        customermedicalhistory: customermedicalhistory,
      })
    ).then(function () {
      Setcustomermedicalhistory(customermedicalhistory);
      setShow(false);
      dispatch(customerDashboardDetails());
    });
  };

  const handleAddMore = () => {
    setMedications([...medications, { name: "", dosage: "", lengthuses: "" }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newMedications = medications?.map((medication, i) => {
      if (i === index) {
        return { ...medication, [name]: value };
      }
      return medication;
    });
    setMedications(newMedications);
  };

  const handleSaveData = () => {
    // Handle save data logic here
    dispatch(
      updatemedicalhistoryAction({
        customer_id: customerDetail?._id,
        medications: medications,
        customermedicalhistory: customermedicalhistory,
      })
    ).then(function () {
      Setcustomermedicalhistory(customermedicalhistory);
      setMedications(medications);
      setShow(false);
      dispatch(customerDashboardDetails());
    });

  };

  const today = moment();

  const birthDate = moment(customerDetail?.dob);
  const calculatedAge = today.diff(birthDate, "years");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const navigate = useNavigate()
  return (
    <Layout>
      <section className="product_view">
        <div className="container custom">
          <div className="productmain_wrap">
            <div className="row">
              {/* <div className="col-lg-12">
                                <div className="prev_main">
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                                    <a class="prev_result" href="#">
                                        Back to search results
                                    </a>
                                </div>
                            </div> */}
              <div className="col-lg-6">
                <div className="user_info bod_cmn">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="profile-upload">
                        {" "}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <img
                          className="client-logo"
                          // src={require("../assets/img/logo-circle.png")}
                          src={require("../assets/img/circlelogo.svg").default}

                        />
                        {selectedImage && (
                          <img src={selectedImage} alt="Uploaded" />
                        )}
                      </div>
                      {/* <img
                        src={
                          customerDetail?.profileimage == undefined
                            ? require("../assets/img/logo-circle.png")
                            : process.env.REACT_APP_HOST_NAME +
                              customerDetail?.profileimage
                        }
                        alt="arrow"
                        className="logo-main"
                      /> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <h2 className="client_cmn_heading">
                        {customerDetail?.first_name +
                          " " +
                          customerDetail?.last_name}
                      </h2>

                      <p> {customerDetail?.first_line_address}</p>
                      <p>{customerDetail?.second_line_address}</p>

                      <p>{customerDetail?.city}</p>

                      <p>{customerDetail?.pin_code}</p>
                      <br />
                      <p>
                        <a href={"mailto:" + customerDetail?.email}>
                          {customerDetail?.email}
                        </a>
                      </p>
                      <br />
                      <p>
                        +44{" "}
                        <a href={"tel:+44" + customerDetail?.phone_number}>
                          {customerDetail?.phone_number}
                        </a>
                      </p>
                      <br />
                      <p>
                        {" "}
                        {(() => {
                          if (customerDetail?.gender == 3) {
                            return customerDetail?.self_describe; // Render self_describe if gender is 3
                          } else if (customerDetail?.gender == 4) {
                            return "Prefer not to say";
                          } else if (customerDetail?.gender == 2) {
                            return "Non Binary";
                          } else if (customerDetail?.gender == 1) {
                            return "Female";
                          } else if (customerDetail?.gender == 0) {
                            return "Male";
                          }
                        })()}
                      </p>

                      <br />

                      {/* {customerDetail?.phone_number && (
                        <p>{`+44 ` + customerDetail?.phone_number}</p>
                      )} */}

                      <p>
                        {customerDetail?.dob && (
                          <p>
                            Age: {calculatedAge} (
                            {moment(customerDetail?.dob).format("DD/MM/YYYY")})
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="view-medical mb-4">
                  <button type="button" onClick={handleShow}>
                    View Medical History
                  </button>

                  <button type="button" className="mt-3" onClick={() => navigate("/pre-care")}>
                    View Pre & Post Treatment Advice
                  </button>
                </div>
                <div className="col-lg-12 consultations-mob-show">
                  <div className="schedule bod_cmn set activity-tab order-1">
                    <div className="schedule_top">
                      <h2 className="client_cmn_heading mx-0">Consultations</h2>
                    </div>
                    {/* <div className="schedule_top px-0 ms-0">
                        <Nav.Link onClick={() => setModalShownew(true)}>
                          New Appointment
                        </Nav.Link>
                      </div> */}
                    <h4 className="activity-heading">Upcoming</h4>
                    <div class="table-responsive">
                      <table>
                        {upcomingSchedule?.length > 0 ||
                          upcomingSchedule2?.length > 0 ? (
                          <>
                            {upcomingSchedule?.map((item, i) => {
                              return (
                                <>
                                  <tr key={i}>
                                    <td>
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {item?.consultationId?.form_title
                                        .substring(0, 20)
                                        .trimEnd() + "..." || "N/A"}
                                    </td>
                                    <td>Online Consultation</td>
                                    <td>
                                      {customermedicalhistory?.length > 0 ? (
                                        <>
                                          {/* <NavLink
                                        to={`/consultation_form/${Encryptedid(
                                          item?.consultationId?._id
                                        )}/${Encryptedid(item?._id)}`}
                                      >
                                        View
                                      </NavLink> */}

                                          <NavLink
                                            to={`/consultation_form/${item?.consultationId?._id
                                              }/${item?._id}`}
                                          >
                                            View
                                          </NavLink>
                                        </>

                                      ) : (
                                        <NavLink
                                          onClick={() => {
                                            toast.error(
                                              "Must complete the medical history"
                                            );
                                          }}
                                        >
                                          View
                                        </NavLink>
                                      )}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                            {upcomingSchedule2?.map((item, i) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      {moment(item?.date).format("DD/MM/YYYY")}{" "}
                                      {item?.time}
                                    </td>
                                    <td className="text-left">
                                      {item?.description
                                        .substring(0, 20)
                                        .trimEnd() + "..." || "N/A"}
                                    </td>
                                    <td>
                                      {item?.appointment_type == 0
                                        ? "Video Consultation"
                                        : "Salon Visit"}
                                    </td>
                                    <td>
                                      {item?.appointment_type == 0 ? (
                                        <Nav.Link
                                          as={Link}
                                          to={`/video_consultation/${Encryptedid(
                                            item?._id
                                          )}`}
                                        >
                                          View
                                        </Nav.Link>
                                      ) : (
                                        "View"
                                      )}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <p className="no-information">No information to show</p>
                        )}
                      </table>
                    </div>
                    <h4 className="activity-heading">Past</h4>

                    <div class="table-responsive">
                      <table>
                        {appointmentHistory?.length > 0 ||
                          appointmentHistory2?.length > 0 ? (
                          <>
                            {appointmentHistory?.map((item, i) => {
                              return (
                                <>
                                  <tr key={i}>
                                    <td>
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {item?.consultationId?.form_title
                                        .substring(0, 20)
                                        .trimEnd() + "..." || "N/A"}
                                    </td>
                                    <td>Online Consultation</td>
                                    <td>
                                      <NavLink
                                        to={`/view_consultation_form/${Encryptedid(
                                          item?._id
                                        )}`}
                                      >
                                        View
                                      </NavLink>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                            {appointmentHistory2?.map((item, i) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      {moment(item?.date).format("DD/MM/YYYY")}{" "}
                                      {item?.time}
                                    </td>
                                    <td className="text-left">
                                      {item?.description
                                        .substring(0, 20)
                                        .trimEnd() + "..."}
                                    </td>
                                    <td>
                                      {item?.appointment_type == 0
                                        ? "Video Consultation"
                                        : "Salon Visit"}
                                    </td>
                                    <td>
                                      {item?.appointment_type == 0 ? (
                                        <Nav.Link
                                          as={Link}
                                          to={`/video_consultation/${Encryptedid(
                                            item?._id
                                          )}`}
                                        >
                                          View
                                        </Nav.Link>
                                      ) : (
                                        "View"
                                      )}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <p className="no-information">No information to show</p>
                        )}
                      </table>
                    </div>
                  </div>{" "}
                </div>
                <div className="tests bod_cmn set pt-3 ">
                  <div className="schedule_top">
                    <h2 className="client_cmn_heading">Uploads </h2>
                  </div>
                  <table>
                    {customerDetail?.documentcustomer.length > 0
                      ? customerDetail?.documentcustomer?.map(function (
                        object
                      ) {
                        return (
                          <tr>
                            <td>{object?.document_title}</td>
                            <td>
                              {" "}
                              {object?.client_document
                                .substring(
                                  object?.client_document.lastIndexOf("/") + 1
                                )
                                .split(".")
                                .pop()}
                            </td>
                            <td>
                              <a
                                href={
                                  process.env.REACT_APP_HOST_NAME +
                                  object?.client_document
                                }
                                target="_blank"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        );
                      })
                      : ""}
                  </table>

                  {/* {customerDetail?.documentcustomer.length > 0 ? (
                    customerDetail?.documentcustomer?.map(function (object) {
                      return (
                        <div className="row justify-content-center">
                          <div className="col-lg-12">
                            <div className="upload-doc-main">
                              <div className="uploaded-doc-box">
                                <h2>{object?.document_title}</h2>

                                <p>
                                  {object?.client_document
                                    .substring(
                                      object?.client_document.lastIndexOf("/") +
                                        1
                                    )
                                    .split(".")
                                    .pop()}
                                </p>
                                <a
                                  href={
                                    process.env.REACT_APP_HOST_NAME +
                                    object?.client_document
                                  }
                                  target="_blank"
                                >
                                  View
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-lg-6 d-flex justify-content-center">
                      <div className="documents-view">
                        <div className="pdf-upload-view">
                          {" "}
                          <p>No Document Uploaded Yet!</p>
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>

                {/* <div className="appointment bod_cmn">
                  <div className="schedule_top">
                    <h2 className="client_cmn_heading">Appointment History</h2>
                  </div>
                  <div class="table-responsive"></div>
                </div> */}
                {/* <div className="invoices bod_cmn">
                  <h2 className="client_cmn_heading">Invoices</h2>
                  <div class="table-responsive">
                    <table>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                     
                    </table>
                    <p className="no-information">No information to show</p>
                  </div>
                </div> */}
              </div>

              <div className="col-lg-6 consultations-mob-hide">
                <div className="schedule bod_cmn set activity-tab order-1">
                  <div className="schedule_top">
                    <h2 className="client_cmn_heading mx-0">Consultations</h2>
                  </div>
                  {/* <div className="schedule_top px-0 ms-0">
                        <Nav.Link onClick={() => setModalShownew(true)}>
                          New Appointment
                        </Nav.Link>
                      </div> */}
                  <h4 className="activity-heading">Upcoming</h4>
                  <div class="table-responsive">
                    <table>
                      {upcomingSchedule?.length > 0 ||
                        upcomingSchedule2?.length > 0 ? (
                        <>
                          {upcomingSchedule?.map((item, i) => {
                            return (
                              <>
                                <tr key={i}>
                                  <td>
                                    {moment(item?.createdAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="text-left">
                                    {item?.consultationId?.form_title
                                      .substring(0, 20)
                                      .trimEnd() + "..." || "N/A"}
                                  </td>
                                  <td>Online Consultation</td>
                                  <td>
                                    {customermedicalhistory?.length > 0 ? (
                                      <>
                                        {/* <NavLink
                                        to={`/consultation_form/${Encryptedid(
                                          item?.consultationId?._id
                                        )}/${Encryptedid(item?._id)}`}
                                      >
                                        View
                                      </NavLink> */}

                                        <NavLink
                                          to={`/consultation_form/${item?.consultationId?._id
                                            }/${item?._id}`}
                                        >
                                          View
                                        </NavLink>
                                      </>

                                    ) : (
                                      <NavLink
                                        onClick={() => {
                                          toast.error(
                                            "Must complete the medical history"
                                          );
                                        }}
                                      >
                                        View
                                      </NavLink>
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                          {upcomingSchedule2?.map((item, i) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    {moment(item?.date).format("DD/MM/YYYY")}{" "}
                                    {item?.time}
                                  </td>
                                  <td className="text-left">
                                    {item?.description
                                      .substring(0, 20)
                                      .trimEnd() + "..." || "N/A"}
                                  </td>
                                  <td>
                                    {item?.appointment_type == 0
                                      ? "Video Consultation"
                                      : "Salon Visit"}
                                  </td>
                                  <td>
                                    {item?.appointment_type == 0 ? (
                                      <Nav.Link
                                        as={Link}
                                        to={`/video_consultation/${Encryptedid(
                                          item?._id
                                        )}`}
                                      >
                                        View
                                      </Nav.Link>
                                    ) : (
                                      "View"
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </>
                      ) : (
                        <p className="no-information">No information to show</p>
                      )}
                    </table>
                  </div>
                  <h4 className="activity-heading">Past</h4>

                  <div class="table-responsive">
                    <table>
                      {appointmentHistory?.length > 0 ||
                        appointmentHistory2?.length > 0 ? (
                        <>
                          {appointmentHistory?.map((item, i) => {
                            return (
                              <>
                                <tr key={i}>
                                  <td>
                                    {moment(item?.createdAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td className="text-left">
                                    {item?.consultationId?.form_title
                                      .substring(0, 20)
                                      .trimEnd() + "..." || "N/A"}
                                  </td>
                                  <td>Online Consultation</td>
                                  <td>
                                    <NavLink
                                      to={`/view_consultation_form/${Encryptedid(
                                        item?._id
                                      )}`}
                                    >
                                      View
                                    </NavLink>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                          {appointmentHistory2?.map((item, i) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    {moment(item?.date).format("DD/MM/YYYY")}{" "}
                                    {item?.time}
                                  </td>
                                  <td className="text-left">
                                    {item?.description
                                      .substring(0, 20)
                                      .trimEnd() + "..."}
                                  </td>
                                  <td>
                                    {item?.appointment_type == 0
                                      ? "Video Consultation"
                                      : "Salon Visit"}
                                  </td>
                                  <td>
                                    {item?.appointment_type == 0 ? (
                                      <Nav.Link
                                        as={Link}
                                        to={`/video_consultation/${Encryptedid(
                                          item?._id
                                        )}`}
                                      >
                                        View
                                      </Nav.Link>
                                    ) : (
                                      "View"
                                    )}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </>
                      ) : (
                        <p className="no-information">No information to show</p>
                      )}
                    </table>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} className="view-medical-history">
        <Modal.Header closeButton>
          <Modal.Title>Medical History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="date-stamp">
            {/* <h3>{moment(clientDetail?.createdAt).format("DD/MM/YYYY")}</h3> */}
            <h4>
              Last Updated:{" "}
              {moment(customerDetail?.updatedAt).format("MMMM D, YY")}
            </h4>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Medical History</Accordion.Header>
              <Accordion.Body>
                <div className="accordian-sec">
                  {questionlist?.map((item, i) => {
                    return (
                      <>
                        <Row className="d-flex align-items-center">
                          <Col lg={9} md={9} sm={9}>
                            <h3>{item?.title}</h3>
                          </Col>
                          <Col lg={3} md={3} sm={3}>
                            <div className="toggle-btns justify-content-end">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name={"flexRadioDefault" + i}
                                  id={"flexRadioDefault1" + i}
                                  checked={customermedicalhistory?.find((obj) => obj?.medicalquestion_id?.toString() === item?._id?.toString())?.status === 1}
                                  onClick={() => {
                                    updatethestatus(item._id, 1);
                                  }}
                                />
                                <label
                                  class="form-check-label"
                                  for={"flexRadioDefault1" + i}
                                >
                                  Yes
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  checked={customermedicalhistory?.find((obj) => obj?.medicalquestion_id?.toString() === item?._id?.toString())?.status === 0}
                                  name={"flexRadioDefault" + i}
                                  id={"flexRadioDefault1" + i}
                                  onClick={() => {
                                    updatethestatus(item._id, 0);
                                  }}
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </Col>
                          {customermedicalhistory?.find((obj) => obj?.medicalquestion_id?.toString() === item?._id?.toString())?.status == 1 && (
                            <Col lg={12} className={isHidden ? "d-block" : "d-block"} >
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>
                                    Please provide details
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Type Here.."
                                    value={customermedicalhistory?.find((obj) => obj?.medicalquestion_id?.toString() == item?._id?.toString())?.notes}
                                    onChange={(e) => { updatethestatus(item._id, null, e.target.value); }}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                          )}
                        </Row>
                      </>
                    );
                  })}
                  <Row className="d-flex align-items-center">
                    <Col lg={12} className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="save-btn-treat"
                        onClick={updatemedicalhistory}
                      >
                        Save
                      </button>
                    </Col>
                  </Row>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Medication</Accordion.Header>
              <Accordion.Body>
                <div className="accordian-sec">
                  {medications?.map((medication, index) => (
                    <Row key={index} className="d-flex align-items-center">
                      <Col lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Medication Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Write Here.."
                            name="name"
                            value={medication.name}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Dosage</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Optional"
                            name="dosage"
                            value={medication.dosage}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        {" "}
                        <Form.Group className="mb-3">
                          <Form.Label>Length of use</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Type Here.."
                            value={medication.lengthuses}
                            onChange={(e) => handleChange(index, e)}
                            name="lengthuses"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}

                  <Row className="d-flex align-items-center">
                    <Col lg={12} className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="save-btn-treat"
                        onClick={handleAddMore}
                      >
                        Add more
                      </button>
                      <button
                        type="button"
                        className="save-btn-treat"
                        onClick={handleSaveData}
                      >
                        Save Data
                      </button>
                    </Col>
                  </Row>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};
export default Clientview;
