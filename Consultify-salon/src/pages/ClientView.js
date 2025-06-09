import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import AppointmentModal from "../components/Modals/AppointmentModal";
import ConsultationModal from "../components/Modals/ConsultationModal";
import InvoiceModal from "../components/Modals/InvoiceModal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { parseISO, format, isValid } from "date-fns";
import Select from "react-select";
import {
  clientupdateinformationAction,
  consultationformlists,
  createConsultationForm,
  fetchAllAppointments,
  fetchAllCustomers,
  fetchClientById,
  fetchCompletedConsultation,
  filedeleteAction,
  getpostcarelistAction,
  medicalhistoryquestionAction,
  salondeletenotesAction,
  salonfetchClientsAction,
  salonupdateClientAction,
  salonupdatenotesAction,
  sendtocustomerAction,
  updatemedicalhistoryAction,
} from "../Redux/Actions/user/salon";
import { Decryptedid, Encryptedid } from "../utils/BcruptEncyptid";
import moment from "moment";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, ModalFooter, Row } from "react-bootstrap";
import { medicalHistoryData } from "../utils/rawData";
import Layout from "../components/Layout/Layout";
import toast from "react-hot-toast";
import DateOfBirthPicker from "../components/DateOfBirthPicker";
import useGetAddressIO from "../Hooks/getAddressIo";
const ClientView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  var clientId = Decryptedid(atob(id));
  const [medications, setMedications] = useState([{ name: "", dosage: "" }]);
  const [formupdatedata, setformupdatedata] = useState();
  const [dob, setDOB] = useState();
  const [prevImg2, setPrevImg2] = useState("");
  const [profileimage, Setprofileimage] = useState("");
  const [customermedicalhistory, Setcustomermedicalhistory] = useState([]);
  const [noteid, setNotesid] = useState("");
  const [deletednotesid, setDeletednotesid] = useState("");
  const [consultationFormData, setConsultationFormData] = React.useState();
  const [doucumentid, setdoucumentid] = useState("");

  const [sendconsultationview, setSendconsultationview] = useState(false);

  const [filepermission, setfilepermission] = useState("0");
  const [pdfFile, setPdfFile] = useState("");
  const [title, settitle] = useState("");
  const [client_document, setclient_document] = useState("");
  const [document_title, setdocument_title] = useState("");
  const [file, setfile] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShownew, setModalShownew] = React.useState(false);
  const [modalShowvideo, setModalShowvideo] = React.useState(false);
  const [scroll, setScroll] = useState(false);
  const [fileexists, setfileexists] = useState("");
  const { addressData, getAddress } = useGetAddressIO();
  //Send new consultation
  const [precareset, setprecareset] = useState("");
  const [days, setdays] = useState("");
  const [notes, setnotes] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  const {
    clientDetail,
    salonClients,
    appointmentHistory,
    upcomingSchedule,
    completed_consultation,
    questionlist,
    upcomingSchedule2,
    appointmentHistory2
  } = useSelector((state) => ({
    clientDetail: state.myaccount.clientDetail,
    questionlist: state.myaccount.questionlist,
    salonClients: state.myaccount.salonClients,
    upcomingSchedule: state.myaccount.upcomingSchedule,

    upcomingSchedule2: state.myaccount?.upcomingSchedule2,
    appointmentHistory2: state.myaccount?.appointmentHistory2,

    appointmentHistory: state.myaccount.appointmentHistory,
    completed_consultation: state.myaccount.completed_consultation,
  }));

  const allCustomerslist = useSelector((state) => state.myaccount.allCustomers);

  useEffect(() => {
    dispatch(fetchCompletedConsultation());
    dispatch(getpostcarelistAction({ search: "" }));

    dispatch(consultationformlists()).then((data) => {
      if (data?.payload?.data) {
        setConsultationFormData(data?.payload?.data);

        var totalobject = data?.payload?.data?.data?.filter(function (
          formobject
        ) {
          var userIdIncluded = formobject?.salonActiveArr.find(
            (obj) => obj?.salon_id === localStorage.getItem("userId")
          );
          const hasFormCreatedByAdminPanel = formobject.hasOwnProperty(
            "formcreatedbyadminPanel"
          );

          return (
            (userIdIncluded &&
              userIdIncluded.consulationformstatus == 0 &&
              hasFormCreatedByAdminPanel) ||
            !hasFormCreatedByAdminPanel
          );
        });
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    dispatch(salonfetchClientsAction());
    // dispatch(fetchAllAppointments());
    dispatch(medicalhistoryquestionAction());
  }, []);

  useEffect(() => {
    dispatch(fetchClientById(clientId));
  }, [clientId]);

  useEffect(() => {
    Setcustomermedicalhistory(clientDetail?.customermedicalhistory);
    setMedications(clientDetail?.medications);
  }, [clientDetail]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [newconsultationview, setnewconsultationview] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const birthDate = moment(clientDetail?.dob);
  const today = moment();
  const calculatedAge = today.diff(birthDate, "years");

  const handleClose2 = () => {
    setShow2(false);
    setdocument_title("");
    setclient_document("");
    setPrevImg2("");
    setfile("");
    setdoucumentid("");
  };

  const handleShow2 = () => setShow2(true);

  //document upload functionality
  const uploadnewdocument = (selectedFile) => {
    if (document_title != "") {
      let formdata = new FormData();
      formdata.append("id", clientDetail._id);
      formdata.append("client_document", file);
      formdata.append("doucumentid", doucumentid);
      formdata.append("document_title", document_title);
      formdata.append("filepermission", filepermission);

      dispatch(salonupdateClientAction(formdata)).then(function () {
        dispatch(fetchClientById(clientDetail._id));
        setdocument_title("");
        setfilepermission("0");
        setclient_document("");
        setdoucumentid("");
        setPrevImg2("");
        setfile("");
        setShow2(false);
      });
    } else {
      toast.error("Document title is required");
    }
  };

  const updatedocumentpermission = (object) => {
    let formdata = new FormData();
    formdata.append("id", clientDetail._id);
    formdata.append("doucumentid", object?._id);
    formdata.append("filepermission", object?.filepermission == 0 ? 1 : 0);

    dispatch(salonupdateClientAction(formdata)).then(function () {
      dispatch(fetchClientById(clientDetail._id));
      setdocument_title("");
      setclient_document("");
      setdoucumentid("");
      setfilepermission("0");
      setPrevImg2("");
      setfile("");
      setShow2(false);
    });
  };

  //notes add functionality
  const addnotes = () => {
    if (title != "") {
      dispatch(
        salonupdatenotesAction({
          title: title,
          id: clientId,
          notesid: noteid,
        })
      ).then(function () {
        settitle("");
        setNotesid("");
        dispatch(fetchClientById(clientDetail._id));
        handleCloseAdd();
      });
    } else {
      toast.error("Title is required");
    }
  };

  //Add and update medical history
  const updatemedicalhistory = () => {
    dispatch(
      updatemedicalhistoryAction({
        customer_id: clientId,
        customermedicalhistory: customermedicalhistory,
      })
    ).then(function () {
      Setcustomermedicalhistory(customermedicalhistory);
      setShow(false);
      dispatch(fetchClientById(clientDetail._id));
    });
  };
  const updatethestatus = (id, status, notes) => {
    // Find the index of the item
    const index = customermedicalhistory?.findIndex(
      (obj) => obj?.medicalquestion_id?.toString() === id?.toString()
    );

    if (index !== -1) {
      // If the item exists, update its status
      const updatedHistory = customermedicalhistory?.map((item, i) =>
        i === index ? { ...item, status: status, notes } : item
      );
      Setcustomermedicalhistory(updatedHistory);
    } else {
      // If the item does not exist, add a new item
      Setcustomermedicalhistory([
        ...customermedicalhistory,
        { medicalquestion_id: id, status: status, notes },
      ]);
    }
  };

  const handleAddMore = () => {
    setMedications([...medications, { name: "", dosage: "", lengthuses: "" }]);
  };

  const handleDelete = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
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
        customer_id: clientId,
        medications: medications,
        customermedicalhistory: customermedicalhistory,
      })
    ).then(function (res) {
      Setcustomermedicalhistory(customermedicalhistory);
      setMedications(medications);
      toast.success(res?.payload?.message)
      // setShow(false);
      dispatch(fetchClientById(clientDetail._id));
    });

    console.log("Saving data...", medications);
  };

  //end medical history
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [file2, setFile2] = useState("");
  function handleChange2(e) {
    console.log(e.target.files);
    Setprofileimage(e.target.files[0]);
    setFile2(URL.createObjectURL(e.target.files[0]));
  }

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const [countries, setCountries] = useState([]);
  const [isData, setIsData] = useState(1);
  const [option, setOption] = useState("");

  const [showPreCare, setShowPreCare] = useState(false);
  const [precare, setPrecare] = useState({});

  const handleClosePreCare = () => setShowPreCare(false);
  const handleShowPreCare = () => setShowPreCare(true);

  const [consutationid, setConsultationid] = useState("");
  //update client information

  // useEffect(() => {
  //   if (clientDetail?.otherCountries === "United Kingdom") {
  //     setIsData(1);
  //   } else {
  //     setIsData(2);
  //   }
  // }, []);

  useEffect(() => {
    if (clientDetail && clientDetail?.otherCountries) {
      if (clientDetail.otherCountries === "United Kingdom") {
        setIsData(1);
      } else {
        setIsData(2);
      }
    }
  }, [clientDetail]);



  useEffect(() => {
    if (clientDetail && clientDetail?.pin_code) {
      getAddress(clientDetail?.pin_code);
    }
  }, [clientDetail]);

  const formik = useFormik({
    initialValues: {
      first_name: clientDetail?.first_name || "",
      phone_number: "",
      last_name: "",
      email: "",
      pronouns: "",

      first_line_address: "",
      second_line_address: "",
      city: "",

      gender: "6",
      self_describe: "",
      otherCountries: clientDetail?.otherCountries || "",
      zip_code: "",
      address: clientDetail?.address || ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name  is required"),

      last_name: Yup.string().required("Surname   is required"),

      self_describe: Yup.string().when("gender", {
        is: "3", // Condition: Require 'self_describe' if 'gender' is 3
        then: Yup.string().required("Self describe is required."),
        otherwise: Yup.string(), // 'self_describe' is optional otherwise
      }),

      email: Yup.string().email().required("Email   is required"),
      first_line_address: Yup.string().required(
        "One Line  address  is required"
      ),
      phone_number: Yup.string().required("Phone number  is required"),
      city: Yup.string().required("City  is required"),
    }),
    onSubmit: (values) => {
      values.customer_id = clientDetail?._id;
      values.profileimage = profileimage;
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      setformupdatedata(formData);
      // handleShow4();
      handleClose3();
      dispatch(clientupdateinformationAction(formData)).then(function (data) {
        dispatch(fetchClientById(clientDetail._id));
      });

      // Handle step 1 submission
    },
  });
  useEffect(() => {
    for (let key in clientDetail) {
      if (clientDetail[key] != null) {
        formik.setFieldValue(key, clientDetail[key], { strict: false });
      }
    }
  }, [clientDetail]);
  //clientupdateinformationAction

  const saveinformation = () => {
    dispatch(clientupdateinformationAction(formupdatedata)).then(function (
      data
    ) {
      dispatch(fetchClientById(clientDetail._id));
      handleClose4();
    });
  };

  console.log(customermedicalhistory, "clientDetail");

  //delete the notes

  const salondeletenotes = () => {
    dispatch(
      salondeletenotesAction({
        notesid: deletednotesid,
      })
    ).then(function (data) {
      dispatch(fetchClientById(clientDetail._id));
      handleClose5();
      settitle("");
      setDeletednotesid("");
    });
  };

  const navigate = useNavigate();

  const [consultationIds, setConsultationIds] = useState([]);

  //all consultation list
  const optionconsultations = consultationFormData?.data?.map((item) => {
    return {
      label: item?.form_title,
      value: item?._id,
    };
  });

  const handleSelectChange = (selectedOptions) => {
    setConsultationIds(selectedOptions);

    if (selectedOptions && selectedOptions.length > 0) {
      setConsultationIds(selectedOptions?.value);
    } else {
      // setConsultationid("");
    }
  };

  const startconsultation = () => {
    console.log(consultationIds, "asdasdasdasdasd")
    if (consultationIds != "") {
      navigate(
        `/consultation_form/${Encryptedid(consultationIds?.value)}/${Encryptedid(
          clientId
        )}/client_view`
      );
    } else {
      toast.error("Please select client and consultation");
    }
  };

  let postcarelistDatadata = useSelector(
    (state) => state?.myaccount?.postcarelist
  );
  const options2 = postcarelistDatadata?.map((item) => {
    return {
      label: item?.treatmentname,
      value: item,
    };
  });

  const sendconsultation = () => {
    if (consultationIds != "") {
      const currentDate = new Date();
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + Number(days));

      const consultationDateISO = futureDate.toISOString();

      dispatch(
        createConsultationForm({
          salonId: localStorage.getItem("userId"),
          customerId: clientId,
          postcare_id: precareset,
          msg_for_client: notes,
          days: Number(days),
          consultationId: consultationIds?.value,
          formCompletedBy: "customer",
          consultationDate: consultationDateISO,
          requiredoption: option,
        })
      ).then(function () {
        setSendconsultationview(false);
        // setConsultationid("");
        setConsultationIds([])
        setdays("");
        toast.success("Consultation Sent");
      });
    } else {
      toast.error("Please select consultation");
    }
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange3 = (e) => {
    setSelectedValue(e.target.value);
  };

  const [selectedValue4, setSelectedValue4] = useState("");

  const handleChange4 = (e) => {
    setSelectedValue4(e.target.value);
  };

  const [selectedValue3, setSelectedValue3] = useState("");

  const handleChange5 = (e) => {
    setSelectedValue3(e.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const englishSpeakingCountries = data.filter(
          (country) =>
            country.languages &&
            (Object.values(country.languages).includes("English") ||
              country.name.common === "United Kingdom")
        );
        setCountries(englishSpeakingCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const options = countries.map((country) => ({
    value: country.cca3,
    label: country.name.common,
  }));



  useEffect(() => {
    dispatch(fetchAllAppointments(clientId));
  }, [clientId])

  const optionsAllCustomer = allCustomerslist?.map((item) => {
    return {
      label: item?.first_name + " " + item?.last_name,
      value: item?._id,
    };
  });

  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, []);


  useEffect(() => {
    if (clientId) {
      const defaultClient = optionsAllCustomer.find((client) => client.value === clientId);
      setSelectedClient(defaultClient);
    }
  }, [clientId]);


  return (
    <Layout>
      <div className="result_view">
        <section className="product_view">
          <div className="productmain_wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="prev_main">
                      <img
                        src={
                          require("../../src/assets/img/right-arrow.svg")
                            .default
                        }
                        alt="arrow"
                        className="arrow-next-green"
                      />
                      <NavLink className="prev_result" to="/myclient">
                        Back
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end align-items-center"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="user_info bod_cmn client-box-info">
                      <div className="schedule_top">
                        <h2 className="client_cmn_heading mx-0"> Client Info </h2>
                        <div className="Edit-btn remove-edit">
                          <button onClick={handleShow3}>Edit</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-5 col-sm-5 col-12 ">
                          <img
                            src={
                              clientDetail?.profileimage == undefined
                                ?
                                // require("../assets/img/logo-circle.png")
                                require("../assets/img/circlelogo.svg").default
                                : process.env.REACT_APP_HOST_NAME +
                                clientDetail?.profileimage
                            }
                            alt="arrow"
                            className="logo-main"
                          />
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-7 col-12 client-box">
                          <div className="row">
                            <div className="col-lg-12 col-sm-7">
                              <h2 className="client_cmn_heading">
                                {clientDetail?.first_name +
                                  " " +
                                  clientDetail?.last_name}
                              </h2>

                              <p>
                                {clientDetail?.first_line_address}
                                <br />
                                {clientDetail?.second_line_address} <br />
                                {clientDetail?.city}
                                <br />
                                {clientDetail?.pin_code}
                              </p>
                              <p>
                                {" "}
                                {(() => {
                                  if (clientDetail?.gender == 3) {
                                    return clientDetail?.self_describe; // Render self_describe if gender is 3
                                  } else if (clientDetail?.gender == 4) {
                                    return "Prefer not to say";
                                  } else if (clientDetail?.gender == 2) {
                                    return "Non Binary";
                                  } else if (clientDetail?.gender == 1) {
                                    return "Female";
                                  } else if (clientDetail?.gender == 0) {
                                    return "Male";
                                  }
                                })()}{" "}
                                {clientDetail?.pronouns}
                              </p>
                            </div>
                            <div className="col-lg-12 col-sm-5">
                              {/* <span className="profile-view-mob"></span> */}
                              <p>
                                <a href={"mailto:" + clientDetail?.email}>
                                  {clientDetail?.email}
                                </a>
                              </p>
                              <p>
                                +44{" "}
                                <a
                                  href={"tel:+44" + clientDetail?.phone_number}
                                >
                                  {clientDetail?.phone_number}
                                </a>
                              </p>
                              {clientDetail?.dob && (
                                <p>
                                  Age: {calculatedAge} (
                                  {moment(clientDetail?.dob).format(
                                    "DD/MM/YYYY"
                                  )}
                                  )
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="view-medical mb-4">
                      <button type="button" onClick={handleShow}>
                        View Medical History
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <div className="schedule bod_cmn set activity-tab">
                      <div className="schedule_top">
                        <h2 className="client_cmn_heading mx-0">
                          Consultations
                        </h2>
                        <div className="schedule_top px-0 set-new-btn-align">
                          <Nav.Link
                            as={Link}
                            onClick={() => {
                              setnewconsultationview(true);
                            }}
                          >
                            New Consultation
                          </Nav.Link>

                          <Nav.Link as={Link}
                            // to="/pre-care"
                            onClick={() => {
                              setShowPreCare(true);
                              // setPrecare(object);
                            }}
                          >
                            Send Pre/Post Care
                          </Nav.Link>
                        </div>{" "}
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
                                      <td className="text-left description-set">
                                        {item?.consultationId?.form_title
                                          .substring(0, 20)
                                          .trimEnd() + "..." || "N/A"}
                                      </td>
                                      <td>Online Consultation</td>
                                      <td>
                                        {customermedicalhistory?.length > 0 ? (
                                          <>
                                            <Nav.Link
                                              as={Link}
                                              to={`/viewconsultation/${Encryptedid(item?._id)}`}
                                            >
                                              View
                                            </Nav.Link>

                                            {/* <NavLink
                                        to={`/viewconsultation/${
                                          item?.consultationId?._id
                                        }/${item?._id}`}
                                      >
                                        View
                                      </NavLink> */}
                                          </>

                                        ) : (
                                          <Nav.Link
                                            onClick={() => {
                                              toast.error(
                                                "Must complete the medical history"
                                              );
                                            }}
                                          >
                                            View
                                          </Nav.Link>
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
                                      <td className="text-left description-set">
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
                                            )}/${Encryptedid(
                                              item?.clientId?._id
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
                                        <Nav.Link
                                          as={Link}
                                          to={`/viewconsultation/${Encryptedid(
                                            item?._id 
                                          )}`}
                                        >
                                          View
                                        </Nav.Link>
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
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">

                    <div className="appointment set notes">
                      <div className="schedule_top pb-1">
                        <h2 className="client_cmn_heading">
                          Notes ({clientDetail?.notes?.length})
                        </h2>
                        <div className="d-flex justify-content-center">
                          <button onClick={handleShowAdd} className="mt-0">
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="notes-inner notes-ht">
                        {clientDetail?.notes
                          ?.slice()
                          .reverse()
                          .map(function (object) {
                            return (
                              <div className="notes-add">
                                <div className="d-flex justify-content-end align-items-center flex-wrap mb-1 position-relative">
                                  <div className="notes-buttons">
                                    <button
                                      onClick={() => {
                                        setNotesid(object?._id);
                                        settitle(object.title);
                                        handleShowAdd();
                                      }}
                                    >
                                      <img
                                        src={
                                          require("../assets/img/pencil-edit.svg")
                                            .default
                                        }
                                      />
                                    </button>
                                    <button
                                      onClick={() => {
                                        setShow5(true);
                                        setDeletednotesid(object?._id);
                                      }}
                                    >
                                      {" "}
                                      <img
                                        src={require("../assets/img/closeconsult.png")}
                                      />
                                    </button>
                                  </div>
                                </div>
                                <h5>
                                  {moment(object?.createdAt).format(
                                    "DD/MM/YYYY"
                                  )}
                                </h5>
                                <p>{object?.title}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-6">
                    <div className="schedule bod_cmn set">
                      <div className="schedule_top">
                        <h2 className="client_cmn_heading">Uploads </h2>
                        <div className="buttnm">
                          <Nav.Link onClick={handleShow2}>
                            Add Document
                          </Nav.Link>
                        </div>
                      </div>

                      <div className="docs-add-sec">
                        <div className="row justify-content-center">
                          {clientDetail?.documentfile?.map(function (object) {
                            return (
                              <>
                                <div className="col-lg-12 mt-2">
                                  {/* <div className="d-flex justify-content-end me-4 pe-2 documents-show-customer">
                                    <Form>
                                      {["checkbox"].map((type) => (
                                        <div
                                          key={`default-${type}`}
                                          className="d-flex"
                                        >
                                          <Form.Check
                                            className="mb-0"
                                            type={type}
                                            id={`default-${type}`}
                                            label="Share with Client"
                                            onClick={() => {
                                              updatedocumentpermission(object);
                                            }}
                                            checked={
                                              parseInt(
                                                object?.filepermission
                                              ) == 1
                                            }
                                          />
                                        </div>
                                      ))}
                                    </Form>
                                  </div> */}
                                  <div className="upload-doc-main">
                                    <div className="uploaded-doc-box">
                                      <div>
                                        <h2>{object?.document_title}</h2>
                                      </div>
                                      <div className="d-flex align-items-center docs-right-options">
                                        <p>
                                          {object?.client_document
                                            .substring(
                                              object?.client_document.lastIndexOf(
                                                "/"
                                              ) + 1
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
                                        <p
                                          style={{ cursor: "pointer" }}
                                          onClick={() => {
                                            setShow2(true);
                                            setdocument_title(
                                              object?.document_title
                                            );
                                            setfilepermission(
                                              object?.filepermission
                                            );
                                            setfileexists(1);
                                            setdoucumentid(object?._id);
                                            setclient_document(
                                              process.env.REACT_APP_HOST_NAME +
                                              object?.client_document
                                            );
                                            setPrevImg2(
                                              object?.client_document
                                                .substring(
                                                  object?.client_document.lastIndexOf(
                                                    "/"
                                                  ) + 1
                                                )
                                                .split(".")
                                                .pop()
                                            );
                                          }}
                                        >
                                          Edit
                                        </p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        dispatch(
                                          filedeleteAction({
                                            doucumentid: object?._id,
                                          })
                                        ).then(function () {
                                          dispatch(fetchClientById(clientId));
                                        });
                                      }}
                                    >
                                      <img
                                        src={require("../assets/img/closeconsult.png")}
                                      />
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invoice popup */}
        <InvoiceModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          salonClients={salonClients}
        />

        {/* Schedule new appointment */}
        <AppointmentModal
          show={modalShownew}
          onHide={() => setModalShownew(false)}
          salonClients={salonClients}
          clientId={clientId}
        />

        {/* Schedule video consultation */}
        <ConsultationModal
          show={modalShowvideo}
          onHide={() => setModalShowvideo(false)}
          salonClients={salonClients}
        />

        <Modal
          show={show}
          onHide={handleClose}
          className="view-medical-history"
        >
          <Modal.Header closeButton>
            <Modal.Title>Medical History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="date-stamp">
              {/* <h3>{moment(clientDetail?.createdAt).format("DD/MM/YYYY")}</h3> */}
              <h4>
                Last Updated:{" "}
                {moment(clientDetail?.updatedAt).format("MMMM D, YYYY")}
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
                                    checked={
                                      customermedicalhistory?.find(
                                        (obj) =>
                                          obj?.medicalquestion_id?.toString() ===
                                          item?._id?.toString()
                                      )?.status === 1
                                    }
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
                                    checked={
                                      customermedicalhistory?.find(
                                        (obj) =>
                                          obj?.medicalquestion_id?.toString() ===
                                          item?._id?.toString()
                                      )?.status === 0
                                    }
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
                            {customermedicalhistory?.find(
                              (obj) =>
                                obj?.medicalquestion_id?.toString() ===
                                item?._id?.toString()
                            )?.status == 1 && (
                                <Col
                                  lg={12}
                                  className={isHidden ? "d-block" : "d-block"}
                                >
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
                                        value={
                                          customermedicalhistory?.find(
                                            (obj) =>
                                              obj?.medicalquestion_id?.toString() ===
                                              item?._id?.toString()
                                          )?.notes
                                        }
                                        onChange={(e) => {
                                          updatethestatus(
                                            item._id,
                                            1,
                                            e.target.value
                                          );
                                        }}
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
                            <Form.Label>Length of Use</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Type Here.."
                              value={medication.lengthuses}
                              onChange={(e) => handleChange(index, e)}
                              name="lengthuses"
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={6} className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="save-btn-treat"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
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
                          Save
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Add Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="client_consulation">
              {" "}
              <div className="sign-detail-input">
                <label>Document Title</label>
                <input
                  className="form-control"
                  placeholder="Type here"
                  name="document_title"
                  value={document_title}
                  onChange={(e) => {
                    setdocument_title(e.target.value);
                  }}
                />
                <label>Document</label>
                <div className="img-upld-box">
                  {prevImg2 != "pdf" &&
                    client_document == "string" &&
                    !client_document?.includes("pdf") && (
                      <>
                        <img
                          className="upload-img-icon"
                          src={require("../assets/img/uplod-img.svg").default}
                        />
                        <p>Upload Insurance</p>
                      </>
                    )}
                  {prevImg2 == "" && (
                    <img
                      className="place-img"
                      src={require("../assets/img/uploaddocimage.svg").default}
                    />
                  )}

                  <input
                    name="client_document"
                    type="file"
                    onChange={(e) => {
                      const selectedFile = e.target.files[0];

                      if (selectedFile) {
                        if (selectedFile.type === "application/pdf") {
                          setPrevImg2("pdf"); // Clear image preview
                          setPdfFile(selectedFile);
                        } else {
                          setPrevImg2(URL.createObjectURL(selectedFile));
                        }
                      }

                      setfile(selectedFile);
                    }}
                  />

                  {prevImg2 ? (
                    prevImg2 == "pdf" ? (
                      <p className="mt-0">Document Uploaded ✅</p>
                    ) : (
                      <img
                        className="view-img"
                        src={fileexists == 1 ? client_document : prevImg2}
                      />
                    )
                  ) : client_document &&
                    typeof client_document == "string" &&
                    client_document?.includes("pdf") ? (
                    <p className="mt-0">Document Uploaded ✅</p>
                  ) : (
                    client_document && (
                      <img className="view-img" src={client_document} />
                    )
                  )}
                </div>

                {prevImg2 && prevImg2 == "pdf" && (
                  <a
                    className="upload-btn"
                    target="_blank"
                    href={
                      fileexists == 1
                        ? client_document
                        : URL.createObjectURL(file)
                    }
                  >
                    View Document
                  </a>
                )}
              </div>
              {/* <div className="d-flex justify-content-end me-4 pe-2 documents-show-customer popup mb-3">
                <div key={`default-checkbox`} className="d-flex">
                  <Form.Check
                    className="mb-0 p-0"
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label="Make visible to client"
                    checked={filepermission == 1}
                    value={filepermission == 1 ? 0 : 1}
                    onChange={(e) => {
                      setfilepermission(e.target.value);
                    }}
                  />
                </div>
              </div> */}
            </div>
          </Modal.Body>
          <ModalFooter className="d-flex justify-content-center">
            {" "}
            <div className="submit-btn consult-form p-0">
              <button
                type="submit"
                class="btn mb-3 px-2"
                onClick={uploadnewdocument}
              >
                Save Changes
              </button>
            </div>
            <div
              className="submit-btn consult-form inverted p-0"
              onClick={handleClose2}
            >
              <button type="submit" class="btn mb-3">
                Cancel
              </button>
            </div>
          </ModalFooter>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="edit-client-pop">
          <Modal.Header closeButton>
            <Modal.Title>Edit Client Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={formik.handleSubmit}>
              <div className="account_form edit-details">
                <div className="row">
                  <div className="col-lg-6">
                    <label>Profile Picture</label>
                    <div className="profile-upload">
                      <input type="file" onChange={handleChange2} />
                      {(file2 != "" ||
                        clientDetail?.profileimage != undefined) && (
                          <img
                            src={
                              file2 == ""
                                ? process.env.REACT_APP_HOST_NAME +
                                clientDetail?.profileimage
                                : file2
                            }
                          />
                        )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label>First Name *</label>

                    <input
                      className="form-control"
                      placeholder="First Name"
                      name="first_name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.first_name && formik.errors.first_name && (
                      <span className="error">{formik.errors.first_name}</span>
                    )}

                    <label>Surname *</label>
                    <input
                      className="form-control"
                      placeholder="Surname"
                      name="last_name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.submitCount > 0 &&
                      formik.touched.last_name &&
                      formik.errors.last_name && (
                        <span className="error">{formik.errors.last_name}</span>
                      )}
                  </div>
                  <div className="col-lg-6">
                    <label>Gender</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="gender"
                      className={`form-control ${formik.values.gender === ""
                        ? "dif-color"
                        : "other-color"
                        }`}
                      value={formik.values.gender}
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleChange3(e);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option
                        value=""
                        selected
                        className={
                          selectedValue === "" ? "dif-color" : "other-color"
                        }
                      >
                        Please Select
                      </option>
                      <option value="0" className="other-color">
                        Male
                      </option>
                      <option value="1" className="other-color">
                        Female
                      </option>
                      <option value="2" className="other-color">
                        Non Binary
                      </option>
                      <option value="3" className="other-color">
                        Others{" "}
                      </option>
                      <option value="4" className="other-color">
                        Prefer not to say{" "}
                      </option>
                    </select>
                    {formik.submitCount > 0 &&
                      formik.touched.gender &&
                      formik.errors.gender && (
                        <span className="error">{formik.errors.gender}</span>
                      )}
                  </div>
                  {formik.values.gender == 3 && (
                    <div className="col-lg-6">
                      <label>Self-Describe </label>
                      <input
                        className="form-control"
                        placeholder=""
                        name="self_describe"
                        value={formik.values.self_describe}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.submitCount > 0 &&
                        formik.touched.self_describe &&
                        formik.errors.self_describe && (
                          <span className="error">
                            {formik.errors.self_describe}
                          </span>
                        )}
                    </div>
                  )}
                  <div className="col-lg-6">
                    <label>Pronouns</label>
                    <select
                      class="form-select"
                      className={`form-control ${formik.values.pronouns == ""
                        ? "dif-color"
                        : "other-color"
                        }`}
                      aria-label="Default select example"
                      name="pronouns"
                      value={formik.values.pronouns}
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleChange4(e);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option
                        selected
                        className={
                          selectedValue4 == "" ? "dif-color" : "other-color"
                        }
                        value=""
                      >
                        Please Select
                      </option>
                      <option value="She/Her" className="other-color">
                        She/Her
                      </option>
                      <option value="He/Him" className="other-color">
                        He / Him
                      </option>
                      <option value="They/Them" className="other-color">
                        They / Them
                      </option>
                      <option value="Others" className="other-color">
                        Others{" "}
                      </option>
                    </select>

                    {formik.submitCount > 0 &&
                      formik.touched.pronouns &&
                      formik.errors.pronouns && (
                        <span className="error">{formik.errors.pronouns}</span>
                      )}
                  </div>
                  {/* <div className="col-lg-6">
                        <label>DOB</label>
                        <DateOfBirthPicker dob={dob} setDOB={setDOB} />
                      </div> */}
                  <div className="col-lg-6">
                    <label>Email Address *</label>
                    <input
                      className="form-control"
                      placeholder="Type to search"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.submitCount > 0 &&
                      formik.touched.email &&
                      formik.errors.email && (
                        <span className="error">{formik.errors.email}</span>
                      )}
                  </div>
                  <div className="col-lg-6">
                    <label>Phone *</label>
                    {/* <input
                      className="form-control"
                      placeholder="Type Here"
                      name="phone_number"
                      value={"0" + formik.values.phone_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    /> */}
                    <input
                      className="form-control"
                      placeholder="Type Here"
                      name="phone_number"
                      value={formik.values.phone_number} 
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ""); 
                        if (value.length > 0 && value[0] !== "0") {
                          value = "0" + value; 
                        }
                        formik.setFieldValue("phone_number", value);
                      }}
                      onBlur={formik.handleBlur}
                    />

                    {formik.submitCount > 0 &&
                      formik.touched.phone_number &&
                      formik.errors.phone_number && (
                        <span className="error">
                          {formik.errors.phone_number}
                        </span>
                      )}
                  </div>

                  <div className="col-lg-6">
                    <label>Choose Country </label>
                    <Select
                      className="react-select-countries"
                      name="otherCountries"
                      onChange={(e) => {
                        formik.setFieldValue(
                          "otherCountries",
                          e ? e.label : ""
                        );
                        setIsData(e.label === "United Kingdom" ? 1 : 2);
                      }}
                      value={options.find(
                        (e) => e.label === formik.values.otherCountries
                      )}
                      options={options}
                    />
                  </div>

                  {isData === 1 && (
                    <>
                      <div className="col-lg-6">
                        {" "}
                        <div className="row">
                          <div className="col-lg-6 ">
                            <label>Post Code Search</label>
                            <input
                              className="form-control"
                              placeholder="Post Code"
                              name="pin_code"
                              value={formik.values.pin_code}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-end">
                            <button
                              className="w-100"
                              type="button"
                              onClick={() => {
                                getAddress(formik.values.pin_code);
                              }}
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <select
                          name="address"
                          className={`form-control ${selectedValue3 === "2" ? "dif-color" : "other-color"
                            }`}
                          aria-label="Default select example"
                          onChange={(e) => {
                            formik.handleChange(e);

                            handleChange5(e);

                            const data = addressData?.addresses?.find(
                              (element) =>
                                element?.formatted_address?.toString() ==
                                e.target.value?.toString()
                            );
                            console.log(data, "datadatadata");

                            formik.setFieldValue(
                              "first_line_address",
                              data?.line_1
                            );
                            formik.setFieldValue(
                              "second_line_address",
                              data?.line_2
                            );
                            formik.setFieldValue("city", data?.town_or_city);
                          }}
                          value={formik.values.address}
                        >
                          <option
                            value="2"
                            className={
                              selectedValue3 === "2"
                                ? "dif-color"
                                : "other-color"
                            }
                          >
                            Confirm Address
                          </option>
                          {addressData?.addresses?.map((item) => {
                            return (
                              <option
                                value={item?.formatted_address}
                                className="other-color"
                              >
                                {item?.formatted_address
                                  ?.filter((item) => item !== "")
                                  .join(",")}
                              </option>
                            );
                          })}
                        </select>
                        {formik.submitCount > 0 && formik.errors.address && (
                          <span>{formik.errors.address}</span>
                        )}
                      </div>
                    </>
                  )}

                  {isData === 2 && (
                    <>
                      <div className="col-lg-6 ">
                        <label>Address</label>
                        <input
                          className="form-control mb-2"
                          placeholder="First Line "
                          name="first_line_address"
                          value={formik.values.first_line_address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.first_line_address &&
                          formik.errors.first_line_address && (
                            <span className="error">
                              {formik.errors.first_line_address}
                            </span>
                          )}
                        <input
                          className="form-control mb-2"
                          placeholder="Second Line "
                          name="second_line_address"
                          value={formik.values.second_line_address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.second_line_address &&
                          formik.errors.second_line_address && (
                            <span className="error">
                              {formik.errors.second_line_address}
                            </span>
                          )}
                        <input
                          className="form-control"
                          placeholder="City"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <input
                          className="form-control"
                          placeholder="Zip or Post Code"
                          name="zip_code"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          value={formik.values.zip_code}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.city &&
                          formik.errors.city && (
                            <span className="error">{formik.errors.city}</span>
                          )}
                      </div>
                    </>
                  )}

                  <div className="col-lg-12 mx-auto  ">
                    {" "}
                    <div className="submit-btn">
                      <button class="btn mb-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <Modal show={show4} onHide={handleClose4} className="">
          <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
          <Modal.Body>
            <div className="permission-popup">
              <p>
                {" "}
                Do you have permission from the customer to update these
                details?
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer
            className="d-flex justify-content-center"
            style={{ border: "0" }}
          >
            <div className="submit-btn schedule p-0">
              <button type="submit" class="btn mb-3" onClick={saveinformation}>
                Save Changes
              </button>
            </div>
            <div className="cancel-btn" onClick={handleClose4}>
              <button type="submit" class="btn mb-3">
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={show5} onHide={handleClose5} className="">
          <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
          <Modal.Body>
            <div className="permission-popup text-center">
              <p> Are You Sure to Delete This Note</p>
            </div>
          </Modal.Body>
          <Modal.Footer
            className="d-flex justify-content-center"
            style={{ border: "0" }}
          >
            <div className="submit-btn schedule p-0">
              <button type="submit" class="btn mb-3" onClick={salondeletenotes}>
                Delete
              </button>
            </div>
            <div className="cancel-btn" onClick={handleClose5}>
              <button type="submit" class="btn mb-3">
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showAdd} onHide={handleCloseAdd} className="">
          <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
          <Modal.Body>
            <b className="permission-popup text-center">
              {noteid == "" ? "Add" : "Update"} Note
            </b>
            <div className="text-field px-3 mt-3 mb-2">
              <textarea
                rows={3}
                placeholder="Type Here.."
                name="notes"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              >
                {title}
              </textarea>
            </div>
          </Modal.Body>
          <Modal.Footer
            className="d-flex justify-content-center"
            style={{ border: "0" }}
          >
            <div className="submit-btn schedule p-0">
              <button type="submit" class="btn mb-3" onClick={addnotes}>
                {noteid == "" ? "Add" : "Update"}
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal
          show={newconsultationview}
          onHide={() => {
            setnewconsultationview(false);
            setConsultationIds([]);
          }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="client-consult precare"
        >
          <Modal.Header
            closeButton
            style={{ border: "0" }}
            className="close-btn-set"
          ></Modal.Header>
          <Modal.Body>
            <div className="client_consulation pt-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <label>Search for Consultation</label>
                    <Select
                      name="customerId"
                      options={optionconsultations}
                      class="form-select"
                      aria-label="Default select example"
                      //  onChange={(e) => setConsultationid(e)}
                      value={consultationIds}
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <Row>
                    <Col lg={6} xs={6}>
                      <div className="submit-btn consult-form">
                        <button
                          type="submit"
                          class="btn mb-3"
                          onClick={() => {
                            startconsultation();
                          }}
                        >
                          Start
                        </button>
                      </div>
                    </Col>
                    <Col lg={6} xs={6}>
                      <div className="submit-btn consult-form inverted">
                        <button
                          type="submit"
                          class="btn mb-3"
                          onClick={() => {
                            setSendconsultationview(true);
                            setnewconsultationview(false);
                          }}
                        >
                          Send to Client
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={sendconsultationview}
          onHide={() => {
            setSendconsultationview(false);
            setConsultationIds([]);
            setdays("");
          }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="client-consult precare"
        >
          <Modal.Body closeButton>
            <div className="client_consulation">
              <h2>Send Consultation to Client</h2>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <label>Search for Consultation</label>
                    <Select
                      name="customerId"
                      options={optionconsultations}
                      class="form-select"
                      aria-label="Default select example"
                      // onChange={(e) => setConsultationid(e)}
                      value={consultationIds}
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Add Pre-care / Aftercare Advice (Optional)
                    </label>
                    <p>
                      You can opt to attach Treatment Advice to the email we
                      send to the client{" "}
                    </p>
                    <Select
                      name="postcare_id"
                      options={options2}
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setprecareset(e?.value?._id);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Leave a note (optional)
                    </label>
                    <textarea
                      name="msg_for_client"
                      type="text"
                      rows={3}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Type here.. "
                      onChange={(e) => {
                        setnotes(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <label>Required by (Optional)</label>
                    <select
                      style={{ appearance: "auto" }}
                      class="form-select mb-3"
                      aria-label="Default select example"
                      name="requiredoption"
                      onChange={(e) => setOption(e.target.value)}
                    >
                      <option selected>No option</option>
                      <option value="1">
                        {days == ""
                          ? "Complete within [x] days from sending"
                          : `Complete within ${days} days from sending`}
                      </option>
                      <option value="2">
                        {days == ""
                          ? "Complete [x] days before appointment"
                          : `  Complete ${days} days before appointment`}
                      </option>
                    </select>
                    <input
                      name="days"
                      type="number"
                      className="form-control "
                      placeholder="No. days"
                      onChange={(e) => {
                        setdays(e.target.value);
                      }}
                      value={days}
                    />
                    {/* {errors.days && (
                              <span className="error_valid">
                                {errors.days}
                              </span>
                            )} */}
                  </div>
                </div>

                <div className="col-lg-12">
                  <Row>
                    <Col lg={6} xs={6}>
                      <div className="submit-btn consult-form">
                        <button
                          type="submit"
                          class="btn mb-3"
                          onClick={() => {
                            setSendconsultationview(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </Col>
                    <Col lg={6} xs={6}>
                      <div className="submit-btn consult-form inverted">
                        <button
                          type="submit"
                          class="btn mb-3"
                          onClick={() => {
                            sendconsultation();
                          }}
                        >
                          Send Consultation
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* send pre/post care modal */}

        <Modal
          show={showPreCare}
          onHide={handleClosePreCare}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="client-consult precare"
        >
          <Modal.Body closeButton>
            <div className="client_consulation">
              <div className="container">
                <div className="row">
                  {/* <div className="col-lg-12">
                    <label>Search for clients</label>
                    <Select
                      name="customerId"
                      options={optionsAllCustomer}
                      value={selectedClient} 
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setConsultationid(e.value)}
                    />
                  </div> */}
                  <div className="col-lg-12">
                    <label>Search for Pre & Post Treatment Care </label>
                    <Select
                      name="customerId"
                      options={options2}
                      class="form-select"
                      aria-label="Default select example"
                      defaultInputValue={precare.treatmentname}
                      onChange={(e) => setPrecare(e.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <Row>
                    <Col lg={6} xs={6}>
                      <div className="cancel-btn">
                        <button
                          type="button"
                          class="btn mb-3"
                          onClick={() => {
                            setShowPreCare(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </Col>
                    <Col lg={6} xs={6}>
                      <div className="submit-btn">
                        <button
                          type="submit"
                          class="btn mb-3"
                          onClick={() => {
                            dispatch(
                              sendtocustomerAction({
                                id: clientId,
                                precarid: precare?._id,
                              })
                            ).then(function () {
                              setShowPreCare(false);
                              toast.success("Successfully sent to the client.");
                            });
                          }}
                        >
                          Send to Client
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </Layout>
  );
};
export default ClientView;
