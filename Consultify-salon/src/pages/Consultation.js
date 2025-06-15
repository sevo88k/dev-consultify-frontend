import React, { useCallback, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  consultationFormDelete,
  consultationformlists,
  fetchAllCustomers,
  fetchCompletedConsultation,
  getAllCompletedConsultation,
  getCategory,
  preCareAsPerConsultationId,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SendToClientModal from "../components/Modals/SendToClientModal";
import DeletePopup from "../components/Modals/DeletePopup";
import toast from "react-hot-toast";
import moment from "moment";
import { DateRangePicker } from "rsuite";
import { Dropdown } from "react-bootstrap";

const Consultation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show2, setShow2] = useState(false);
  const [categoryselected, setCategoryselected] = useState("");
  const [totalPreconsultation, setTotalPreconsultation] = useState("");
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [delModalShow, setDelModalShow] = React.useState(false);
  const [modalType, setModalType] = React.useState();
  const [cunsultationId, setConsultationId] = React.useState();
  const [consultationFormData, setConsultationFormData] = React.useState();
  const [consutationid, setConsultationid] = useState("");
  const [clientid, setClientid] = useState("");
  useEffect(() => {
    dispatch(fetchAllCustomers());
    dispatch(consultationformlists()).then((data) => {
      if (data?.payload?.data) {
        setConsultationFormData(data?.payload?.data);

        var totalobject = data?.payload?.data?.data?.filter(function (formobject) {
          var userIdIncluded = formobject?.salonActiveArr.find((obj) => obj?.salon_id === localStorage.getItem("userId"));
          const hasFormCreatedByAdminPanel = formobject.hasOwnProperty("formcreatedbyadminPanel");
          var userIdIncludedhide = formobject?.salonActiveArrforhide.find((obj) => obj?.salon_id === localStorage.getItem("userId"));

          return (
            (userIdIncluded && !userIdIncludedhide && userIdIncluded.consulationformstatus == 0 && hasFormCreatedByAdminPanel) || !hasFormCreatedByAdminPanel);
        });

        setTotalPreconsultation(totalobject?.length);
      }
    });
  }, []);

  const consultationform = useSelector((state) => state.myaccount.consultationlists);
  const allCustomers = useSelector((state) => state.myaccount.salonClients);
  const allConsultation_Completed_list = useSelector((state) => state.myaccount.completed_consultation_List);

  var handelconsultationform = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/consultation_form/" + encodedEncrypted);
  }, []);

  var handelconsultationformedit = useCallback((id, type) => {
    const encodedEncrypted = Encryptedid(id);
    if (type == "view") {
      return navigate(
        "/consultation-preset-view/" + encodedEncrypted + "/consultation"
      );
    }
    navigate(
      "/edit-consultation-presets-form?id=" +
      encodedEncrypted +
      "&path=consultation"
    );
  }, []);

  const handleSearch = (e) => {
    let { value } = e.target;

    if (value == "") {
      setConsultationFormData(consultationform);
    }

    if (value?.length > 1) {
      const filteredData = consultationform?.data?.filter((element) => {
        if (element?.form_title) {
          return (element?.form_title)
            .toLowerCase()
            .includes(value?.toLowerCase());
        }
      });

      filteredData.data = filteredData;
      setConsultationFormData(filteredData);
    }
  };

  useEffect(() => {
    dispatch(
      getCategory({
        page: 1,
        limit: 1000000000000,
        search: "",
      })
    );
  }, []);

  useEffect(() => {
    if (cunsultationId) {
      dispatch(preCareAsPerConsultationId({ consultation_id: cunsultationId }))
    }
  }, [cunsultationId, dispatch]);

  var category = useSelector((state) => state.myaccount.category);

  var category = category?.category?.map((cat) => {
    const { _id: id1 } = cat;

    // Find the corresponding category count object in consultationform.categoryCounts

    var totalobject = consultationFormData?.data?.filter(function (formobject) {
      var userIdIncluded = formobject?.salonActiveArr.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );

      var userIdIncludedhide = formobject?.salonActiveArrforhide.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );

      const hasFormCreatedByAdminPanel = formobject.hasOwnProperty(
        "formcreatedbyadminPanel"
      );

      return (
        ((userIdIncluded &&
          !userIdIncludedhide &&
          userIdIncluded.consulationformstatus == 0 &&
          hasFormCreatedByAdminPanel) ||
          !hasFormCreatedByAdminPanel) &&
        formobject.category === id1
      );
    });

    // If categoryCount is found, append the count value to the category object
    if (totalobject?.length) {
      return {
        ...cat,
        count: totalobject?.length ?? 0, // Append the count value to the category object
      };
    } else {
      return cat; // Return the original category object if no corresponding count is found
    }
  });

  if (categoryselected != "") {
    var filterdata = consultationFormData?.data?.filter(function (formobject) {
      var userIdIncluded = formobject?.salonActiveArr.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );
      const hasFormCreatedByAdminPanel = formobject.hasOwnProperty(
        "formcreatedbyadminPanel"
      );

      var userIdIncludedhide = formobject?.salonActiveArrforhide.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );
      return (
        (userIdIncluded &&
          !userIdIncludedhide &&
          userIdIncluded.consulationformstatus == 0 &&
          hasFormCreatedByAdminPanel) ||
        !hasFormCreatedByAdminPanel
      );
    });

    var arrayconsultation = filterdata?.filter((object) => {
      const categoryId = object?.category?.toString(); // Convert category_id to string (if defined)
      const selectedCategory = categoryselected.toString(); // Convert categoryselected to string

      return categoryId === selectedCategory;
    });
  } else {
    var arrayconsultation = consultationFormData?.data?.filter(function (
      formobject
    ) {
      var userIdIncluded = formobject?.salonActiveArr.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );

      const hasFormCreatedByAdminPanel = formobject.hasOwnProperty(
        "formcreatedbyadminPanel"
      );

      var userIdIncludedhide = formobject?.salonActiveArrforhide.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );
      return (
        (userIdIncluded &&
          !userIdIncludedhide &&
          userIdIncluded.consulationformstatus == 0 &&
          hasFormCreatedByAdminPanel) ||
        !hasFormCreatedByAdminPanel
      );
    });
  }

  //all customer
  const options = allCustomers?.map((item) => {
    return {
      label: item?.first_name + " " + item?.last_name,
      value: item?._id,
    };
  });

  //all consultation list
  const optionconsultations = consultationFormData?.data?.map((item) => {
    return {
      label: item?.form_title,
      value: item?._id,
    };
  });

  const startconsultation = () => {
    if (consutationid != "" && clientid != "") {
      navigate(
        `/consultation_form/${Encryptedid(clientid.value)}/${Encryptedid(
          consutationid.value
        )}/consultation`
      );
    } else {
      toast.error("Please select client and consultation");
    }
  };

  //completed consultation

  const [dateRange, setDateRangeValue] = useState([]);
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  const { completed_consultation } = useSelector((state) => ({
    completed_consultation: state.myaccount.completed_consultation,
  }));

  useEffect(() => {
    dispatch(fetchCompletedConsultation());
    dispatch(getAllCompletedConsultation());
    if (localStorage.getItem("selectoption") == null) {
      localStorage.setItem("selectoption", 0);
    }
  }, []);

  // const handleDateChange = (dates) => {
  //   console.log(dates, "dates");
  //   setDateRangeValue(dates);
  //   if (dates?.length > 0) {
  //     const filtered = result?.filter((item) => {
  //       return (
  //         new Date(dates[0]) <= new Date(item?.createdAt) &&
  //         new Date(item?.createdAt) <= new Date(dates[1])
  //       );
  //     });

  //     setResult(filtered);
  //   }
  //   if (dates == null) {
  //     setResult(completed_consultation);
  //   }
  // };

  useEffect(() => {
    setResult(completed_consultation);
  }, [completed_consultation]);

  // const handleEnterFilter = (val) => {
  //   if (val?.length > 1) {
  //     const filteredData = result?.filter((element) => {
  //       //console.log(element?.consultationId?.form_title,"element?.consultationId?.form_title");

  //       if (element?.formCompletedBy == "salon") {
  //         return (
  //           (element?.salonId?.firstname + " " + element?.salonId?.lastname)
  //             ?.toLowerCase()
  //             ?.includes(val?.toLowerCase()) ||
  //           element?.consultationId?.form_title
  //             ?.toLowerCase()
  //             ?.includes(val?.toLowerCase())
  //         );
  //       } else if (element?.formCompletedBy == "customer") {
  //         return (
  //           (
  //             element?.customerId?.first_name +
  //             " " +
  //             element?.customerId?.last_name
  //           )
  //             ?.toLowerCase()
  //             ?.includes(val?.toLowerCase()) ||
  //           element?.consultationId?.form_title
  //             ?.toLowerCase()
  //             ?.includes(val?.toLowerCase())
  //         );
  //       } else {
  //         return false;
  //       }
  //     });
  //     setResult(filteredData);
  //   }
  //   if (val == "") {
  //     return setResult(completed_consultation);
  //   }
  // };


  const [search1, setSearch1] = useState(""); 




  // const handleEnterFilter = (val) => {
  //   setSearch1(val); // Update search state
    
  //   if (val?.length > 1) {
  //     const filteredData = completed_consultation?.filter((element) => {
  //       if (!element) return false;
        
  //       // Prepare search terms based on who completed the form
  //       const title = element?.consultationId?.form_title?.toLowerCase() || "";
  //       let name = "";
        
  //       if (element?.formCompletedBy === "salon") {
  //         name = `${element?.salonId?.firstname || ''} ${element?.salonId?.lastname || ''}`.toLowerCase();
  //       } else if (element?.formCompletedBy === "customer") {
  //         name = `${element?.customerId?.first_name || ''} ${element?.customerId?.last_name || ''}`.toLowerCase();
  //       }
        
  //       const searchLower = val.toLowerCase();
        
  //       // Return true if either title or name includes search term
  //       return title.includes(searchLower) || name.includes(searchLower);
  //     });
  //     setResult(filteredData || []);
  //   }
    
  //   // Reset to original data when search is empty
  //   if (val === "") {
  //     setResult(completed_consultation);
  //   }
  // };

  const handleEnterFilter = (val) => {
    setSearch1(val); 
  };

  const handleDateChange = (dates) => {
    if (dates) {
      setDateRangeValue(dates); 
    } else {
      setDateRangeValue([]); 
    }
  };

  const filterConsultations = (list) => {
    let filteredList = [...list]; 
  
    if (search1 && search1.length > 1) {
      filteredList = filteredList?.filter((element) => {
        if (!element) return false;
  
        const title = element?.form_title?.toLowerCase() || "";
        let completedByName = "";
        const clientName = `${element?.customerId?.first_name || ''} ${element?.customerId?.last_name || ''}`.toLowerCase();
  
        if (element?.formCompletedBy === "salon") {
          completedByName = `${element?.salonid?.firstname || ''} ${element?.salonid?.lastname || ''}`.toLowerCase();
        } else if (element?.formCompletedBy === "customer") {
          completedByName = `${element?.customerId?.first_name || ''} ${element?.customerId?.last_name || ''}`.toLowerCase();
        }
  
        const searchLower = search1.toLowerCase();
  
        return (
          title.includes(searchLower) ||
          completedByName.includes(searchLower) ||
          clientName.includes(searchLower)
        );
      });
    }
  
    // Apply date range filter if dates are selected
    if (dateRange && dateRange.length === 2) {
      const startDate = new Date(dateRange[0]);
      startDate.setHours(0, 0, 0, 0); // Normalize to start of the day
  
      const endDate = new Date(dateRange[1]);
      endDate.setHours(23, 59, 59, 999); // Normalize to end of the day
  
  
      filteredList = filteredList?.filter((item) => {
        if (!item) return false;
  
        // Determine displayDate using matchingResult logic
        const matchingResult = result?.find(
          (result) =>
            result?.salonId?._id === item?.salonid?._id &&
            item?.consultationid === result?.consultationId?._id
        );
        const displayDate = matchingResult ? matchingResult?.createdAt : item?.createdAt;
  
        // Validate displayDate
        if (!displayDate) return false;
        const itemDate = new Date(displayDate);
        if (isNaN(itemDate.getTime())) return false; // Skip invalid dates
  
        // Apply date range filter
        return startDate <= itemDate && itemDate <= endDate;
      });
  
      console.log(filteredList, "filteredList after date range filter");
    }
  
    return filteredList;
  };
  // const filterConsultations = (list) => {
  //   if (!search1 || search1.length <= 1) return list;

  //   return list?.filter((element) => {
  //     if (!element) return false;

  //     const title = element?.form_title?.toLowerCase() || "";
  //     let completedByName = "";
  //     const clientName = `${element?.customerId?.first_name || ''} ${element?.customerId?.last_name || ''}`.toLowerCase();

  //     if (element?.formCompletedBy === "salon") {
  //       completedByName = `${element?.salonid?.firstname || ''} ${element?.salonid?.lastname || ''}`.toLowerCase();
  //     } else if (element?.formCompletedBy === "customer") {
  //       completedByName = `${element?.customerId?.first_name || ''} ${element?.customerId?.last_name || ''}`.toLowerCase();
  //     }

  //     const searchLower = search1.toLowerCase();

  //     return (
  //       title.includes(searchLower) ||
  //       completedByName.includes(searchLower) ||
  //       clientName.includes(searchLower)
  //     );
  //   });
  // };

  const [isOpen, setIsOpen] = useState(false);


  const [selecteddrop, setSelected] = useState(0);
  const options2 = ["New Consultations", "Completed Consultations"];

  const customSelectRef = useRef(null);

  const handleSelect = (index) => {
    setSelected(index);
    localStorage.setItem("selectoption", index);
    setIsOpen(false);
  };
  useEffect(() => {
    setSelected(localStorage.getItem("selectoption"));
  }, []);

  // Function to close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      customSelectRef.current &&
      !customSelectRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <Layout>
      {/* tab-links */}
      <section className="margin-top-set">
        <Row>
          <Col lg={7}>
            <div className="cmn-sec-left">
              <div className="custom-select-container" ref={customSelectRef}>
                <div
                  className="custom-select-selected add-new-drop-arrow"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <input
                    readOnly
                    type="text"
                    value={options2[selecteddrop]}
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}

                  />
                  <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
                  <div>
                  </div>
                </div>
                {isOpen && (
                  <div className="custom-select-options">
                    {options2.map((option, index) => (
                      <div
                        key={index}
                        className="custom-select-option"
                        onClick={() => handleSelect(index)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* <Form.Select
aria-label="Default select example"
onChange={(e) => {
setSelected(e.target.value);
}}
>
<option
value="0"
className="options-select"
style={{ fontSize: "14px" }}
>
New Consultations
</option>
<option
value="1"
className="options-select"
style={{ fontSize: "14px" }}
>
Completed
</option>
</Form.Select> */}

              <p>
                View all your available default consultation forms <br />
                Send to clients via email to fill out prior to their salon visit
                or start them in salon. <br />
                To edit forms or to add a new one to your default list, please
                head to the consultation tab in the settings menu.
              </p>
            </div>
          </Col>
          <Col lg={5} className="d-flex justify-content-end align-items-start">
            <Link to="/consultation-presets" className="consult-btn mob-hide">
              Consultation Settings
            </Link>
            <div className="button-link ms-2">
              <NavLink
                to="#"
                className="create_white-box-link"
                onClick={handleShow2}
              >
                Start New Consultation
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>

      {/* new consultation */}
      {/* search list */}
      {selecteddrop == 0 && (
        <>
          <section>
            <div className="consultation-presets-tabs mt-4">
              <div className="d-flex">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setCategoryselected(e.target.value);
                  }}
                >
                  <option value="">
                    All Categories ({totalPreconsultation})
                  </option>
                  {category?.map((categoryobject, i) => (
                    <option key={i} value={categoryobject?._id}>
                      {categoryobject.title} (
                      {categoryobject?.count == undefined
                        ? 0
                        : categoryobject?.count}
                      )
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="expand-field">
                <InputGroup>
                  <InputGroup.Text className="group-box-search">
                    <img
                      src={require("../assets/img/search.svg").default}
                      alt="search"
                    />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search...."
                    onChange={handleSearch}
                  />
                </InputGroup>
              </div>
            </div>
          </section>
          <section className="search-list-part">
            {arrayconsultation?.map(function (formobject, i) {
              return (
                <div className="search-list-box" key={i}>
                  <span
                    className="mobile-view-bth"
                    onClick={() => {
                      handelconsultationformedit(formobject?._id, "view");
                    }}
                  ></span>
                  <div className="d-flex consults-btn-set">
                    <button
                      onClick={() => {
                        handelconsultationformedit(formobject?._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handelconsultationformedit(formobject?._id, "view");
                      }}
                    >
                      View
                    </button>
                  </div>
                  <Row className="d-flex align-items-end">
                    <Col xs={12} md={5} sm={12}>
                      <div className="search-content-left">
                        <h2>{formobject?.form_title}</h2>
                        <div className="sub-heading">
                          {formobject?.question?.length}{" "}
                          {formobject?.question?.length == 1
                            ? "Question"
                            : "Questions"}
                        </div>
                        <p style={{ textWrap: "pre-line" }}>
                          {formobject?.form_description}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={7} sm={12}>
                      <div className="search-content-right flex-column align-items-end mobile-view">
                        <div className="d-flex">
                          <Nav.Link
                            as={Link}
                            //to="/send_consulation"
                            className="white-box-link-outline "
                            onClick={() => {
                              setModalShow(true);
                              setModalType("send_to_client");
                              setConsultationId(formobject?._id);
                            }}
                          >
                            Send to Client
                          </Nav.Link>

                          <button
                            className="green-box-link-fill me-0"
                            onClick={() => {
                              setModalShow(true);
                              setModalType("start");
                              setConsultationId(formobject?._id);
                              // handelconsultationform(formobject?._id);
                            }}
                          >
                            Start
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  {/* <div className="consultation-box-btns">
{!formobject?.formcreatedbyadminPanel && (
<div
className="consult-delete"
onClick={() => {
setDelModalShow(true);
setConsultationId(formobject?._id);
}}
onClick={() => {
dispatch(consultationFormDelete(formobject?._id));
}}
>
<img src={require("../assets/img/closeconsult.png")} />
</div>
)}
</div> */}
                  <div className="pre-care attached d-flex justify-content-between align-items-center mt-3">
                    {formobject?.pre_care_setarray.length > 0 && (
                      <h3 className="mb-0">
                        Pre Care:{" "}
                        {formobject?.pre_care_setarray.length == 1
                          ? formobject?.pre_care_setarray?.map(
                            (item) => item?.pre_care_id?.treatmentname
                          )
                          : "Multiple"}
                      </h3>
                    )}
                  </div>
                </div>
              );
            })}

            {consultationFormData?.length == 0 && (
              <div className="search-results-text">
                <p>No Search Results Found</p>
              </div>
            )}
          </section>
        </>
      )}

      {/* Completed Consultation */}
      {selecteddrop == 1 && (
        <section className="search-header mt-4">
          <Row>
            <Col xs={12} md={4}>
              <div className="search-input full-width-in">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="group-box-search">
                    <img
                      src={require("../assets/img/search.svg").default}
                      alt="search"
                    />
                  </InputGroup.Text>
                  <input
                    placeholder="Search for a Title or Client"
                    name="search"
                    value={search1}
                    onChange={(e) => handleEnterFilter(e.target.value)}
                  // onKeyDown={(e) => handleEnterFilter(e)}
                  // handleEnterFilter
                  />
                </InputGroup>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="search-input">
                <DateRangePicker
                  className="mt-0"
                  placeholder="Date Range"
                  value={dateRange}
                  onChange={handleDateChange}
                  cleanable={true}
                />
              </div>
            </Col>
          </Row>
        </section>
      )}
      {/* End Completed Consultation */}
      <Modal
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="client-consult precare"
      >
        <Modal.Body closeButton>
          <div className="client_consulation">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <label>Search for Clients</label>
                  <Select
                    name="customerId"
                    options={options}
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setConsultationid(e)}
                  />
                </div>
                <div className="col-lg-12">
                  <label>Search for Consultation</label>
                  <Select
                    name="customerId"
                    options={optionconsultations}
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setClientid(e)}
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <Row>
                  <Col lg={12} xs={12}>
                    <div className="submit-btn">
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
                </Row>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SendToClientModal

        modalShow={modalShow}
        setModalShow={setModalShow}
        modalType={modalType}
        cunsultationId={cunsultationId}
        path={"consultation"}
      />

      <DeletePopup
        delModalShow={delModalShow}
        setDelModalShow={setDelModalShow}
        cunsultationId={cunsultationId}
      />
      {/*end new consultation */}

      {/*Start complete consultation */}

      {/* {selecteddrop == 1 && (
        <section className="search-list-part">
          {result?.map((item, i) => {
            return (
              <div className="completed_consultaion pt-0">
                <div className="search-list-box">
                  <Row className="d-flex align-items-start">
                    <Col xs={12} md={7}>
                      <div className="search-content-left">
                        <h2>{item?.consultationId?.form_title}</h2>
                        <div className="sub-heading">
                          Completed by:{" "}
                          {item?.formCompletedBy == "salon"
                            ? item?.salonId?.firstname +
                            " " +
                            item?.salonId?.lastname
                            : item?.customerId?.first_name +
                            " " +
                            item?.customerId?.last_name}
                        </div>
                        <div className="sub-heading">
                          Client Name:{" "}
                          {item?.formCompletedBy == "salon"
                            ? item?.customerId?.first_name +
                            " " +
                            item?.customerId?.last_name
                            : item?.customerId?.first_name +
                            " " +
                            item?.customerId?.last_name}
                        </div>
                        <p style={{ textWrap: "pre-line" }}>
                          {item?.consultationId?.form_description}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={5}>
                      <div className="search-content-right d-flex justify-content-end remove-the-mg">
                        <Nav.Link
                          href="#"
                          className="white_btn p-0 m-0 text-end"
                        >
                          Completed:{" "}
                          {moment(item?.createdAt).format("DD/MM/YYYY")}
                        </Nav.Link>

                        <Nav.Link
                          href={`/view_consultation_form/${Encryptedid(
                            item?._id
                          )}`}
                          role="button"
                          data-rr-ui-event-key="#"
                          className="white-btn-back nav-link"
                          tabindex="0"
                        >
                          View
                        </Nav.Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
        </section>
      )} */}

{selecteddrop == 1 && (
    <section className="search-list-part">
        {filterConsultations(allConsultation_Completed_list)?.map((item, i) => {

         const matchingResult = result?.find(result =>  result?.salonId?._id === item?.salonid?._id && item?.consultationid === result?.consultationId?._id );
         const displayDate = matchingResult  ? matchingResult?.createdAt  : item?.createdAt;

            return (
                <div className="completed_consultaion pt-0" key={i}>
                    <div className="search-list-box">
                        <Row className="d-flex align-items-start">
                            <Col xs={12} md={7}>
                                <div className="search-content-left">
                                    <h2>{item?.form_title}</h2>
                                    <div className="sub-heading">
                                        Completed by:{" "}
                                        {item?.formCompletedBy == "salon"
                                            ? item?.salonid?.firstname +
                                            " " +
                                            item?.salonid?.lastname
                                            : item?.customerId?.first_name +
                                            " " +
                                            item?.customerId?.last_name}
                                    </div>
                                    <div className="sub-heading">
                                        Client Name:{" "}
                                        {item?.customerId?.first_name +
                                        " " +
                                        item?.customerId?.last_name}
                                    </div>
                                    <p style={{ textWrap: "pre-line" }}>
                                        {item?.form_description}
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={5}>
                                <div className="search-content-right d-flex justify-content-end remove-the-mg">
                                    <Nav.Link
                                        href="#"
                                        className="white_btn p-0 m-0 text-end"
                                    >
                                        Completed:{" "}
                                        {/* {moment(item?.createdAt).format("DD/MM/YYYY")} */}
                                        {moment(displayDate).format("DD/MM/YYYY")}
                                    </Nav.Link>

                                    {/* <Nav.Link
                                        href={`/view_consultation_form/${Encryptedid(
                                            item?._id
                                        )}`}
                                        role="button"
                                        data-rr-ui-event-key="#"
                                        className="white-btn-back nav-link"
                                        tabIndex="0"
                                    >
                                        View
                                    </Nav.Link> */}
                                      <Nav.Link
                                        href={`/view_completed_consultation_form/${Encryptedid(
                                            item?._id
                                        )}`}
                                        role="button"
                                        data-rr-ui-event-key="#"
                                        className="white-btn-back nav-link"
                                        tabIndex="0"
                                    >
                                        View
                                    </Nav.Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        })}
    </section>
)}

      {/*end complete consultation */}
    </Layout>
  );
};
export default Consultation;
