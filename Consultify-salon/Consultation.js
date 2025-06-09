import React, { useCallback, useEffect } from "react";
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
  getCategory,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SendToClientModal from "../components/Modals/SendToClientModal";
import DeletePopup from "../components/Modals/DeletePopup";
import toast from "react-hot-toast";
import moment from "moment";

const Consultation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selecteddrop, setSelected] = useState(0);
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

        setTotalPreconsultation(totalobject?.length);
      }
    });
  }, []);

  const consultationform = useSelector(
    (state) => state.myaccount.consultationlists
  );

  const allCustomers = useSelector((state) => state.myaccount.salonClients);

  var handelconsultationform = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/consultation_form/" + encodedEncrypted);
  }, []);

  var handelconsultationformedit = useCallback((id, type) => {
    const encodedEncrypted = Encryptedid(id);
    if (type == "view") {
      return navigate(
        "/edit-consultaion-form?id=" + encodedEncrypted + "&view=only_view"
      );
    }
    navigate("/edit-consultaion-form?id=" + encodedEncrypted);
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

  var category = useSelector((state) => state.myaccount.category);

  var category = category?.category?.map((cat) => {
    const { _id: id1 } = cat;

    // Find the corresponding category count object in consultationform.categoryCounts

    var totalobject = consultationFormData?.data?.filter(function (formobject) {
      var userIdIncluded = formobject?.salonActiveArr.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );
      const hasFormCreatedByAdminPanel = formobject.hasOwnProperty(
        "formcreatedbyadminPanel"
      );

      return (
        ((userIdIncluded &&
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

      return (
        (userIdIncluded &&
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

      return (
        (userIdIncluded &&
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
      console.log(
        consutationid.value,
        clientid.value,
        "jjjjjjjjjjjjjjjjjjjjjjjjj"
      );
      navigate(
        `/consultation_form/${Encryptedid(clientid.value)}/${Encryptedid(
          consutationid.value
        )}`
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
  }, []);

  const handleDateChange = (dates) => {
    console.log(dates, "dates");
    setDateRangeValue(dates);
    if (dates?.length > 0) {
      const filtered = result?.filter((item) => {
        return (
          new Date(dates[0]) <= new Date(item?.createdAt) &&
          new Date(item?.createdAt) <= new Date(dates[1])
        );
      });

      setResult(filtered);
    }
    if (dates == null) {
      setResult(completed_consultation);
    }
  };

  useEffect(() => {
    setResult(completed_consultation);
  }, [completed_consultation]);

  const handleEnterFilter = (val) => {
    if (val?.length > 1) {
      const filteredData = result?.filter((element) => {
        //console.log(element?.consultationId?.form_title,"element?.consultationId?.form_title");

        if (element?.formCompletedBy == "salon") {
          return (
            (element?.salonId?.firstname + " " + element?.salonId?.lastname)
              ?.toLowerCase()
              ?.includes(val?.toLowerCase()) ||
            element?.consultationId?.form_title
              ?.toLowerCase()
              ?.includes(val?.toLowerCase())
          );
        } else if (element?.formCompletedBy == "customer") {
          return (
            (
              element?.customerId?.first_name +
              " " +
              element?.customerId?.last_name
            )
              ?.toLowerCase()
              ?.includes(val?.toLowerCase()) ||
            element?.consultationId?.form_title
              ?.toLowerCase()
              ?.includes(val?.toLowerCase())
          );
        } else {
          return false;
        }
      });
      setResult(filteredData);
    }
    if (val == "") {
      return setResult(completed_consultation);
    }
  };

  return (
    <Layout>
      {/* tab-links */}
      <section className="margin-top-set">
        <Row>
          <Col lg={6}>
            <div className="cmn-sec-left">
              <h2>Consultations</h2>
              <p>
                These instructions are an overview of pre and post care for
                treatments. Medical & health checks should be checked on an
                individual basis and advice given on a personal basis. Please
                share these prior to treatment.{" "}
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-end align-items-start">
            <div className="button-link">
              <NavLink
                to="#"
                className="white-box-link  create_white-box-link"
                onClick={handleShow2}
              >
                Start New Consultation
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>

      <section className="tab-links">
        <ul className="m-0">
          <li>
            <Nav.Link
              as={Link}
              to="#"
              onClick={() => {
                setSelected(0);
              }}
              className="colored-btn"
            >
              New Consultation
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={Link}
              // to="/completed_consultation"
              className="uncolored-btn ms-3"
              onClick={() => {
                setSelected(1);
              }}
            >
              Completed{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_4502_265)">
                  <path
                    d="M7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM6.66665 11.3334L3.33331 8.00004L4.27331 7.06004L6.66665 9.44671L11.7266 4.38671L12.6666 5.33337L6.66665 11.3334Z"
                    fill="#427272"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4502_265">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Nav.Link>
          </li>
        </ul>
      </section>
      {/* tab-links */}

      {/* new consultation  */}
      {/* search list */}
      <section>
        <div className="consultation-presents-tabs mt-4">
          <div className="d-flex">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setCategoryselected(e.target.value);
              }}
            >
              <option value="">All Categories ({totalPreconsultation})</option>
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
              <Form.Control placeholder="Search...." onChange={handleSearch} />
            </InputGroup>
          </div>
        </div>
      </section>
      {selecteddrop == 0 && (
        <section className="search-list-part">
          {arrayconsultation?.map(function (formobject, i) {
            return (
              <div className="search-list-box" key={i}>
                <Row className="d-flex align-items-end">
                  <Col xs={12} md={5} sm={6}>
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
                  <Col xs={12} md={7} sm={6}>
                    <div className="search-content-right">
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
                        className="green-box-link-fill"
                        onClick={() => {
                          setModalShow(true);
                          setModalType("start");
                          setConsultationId(formobject?._id);
                          //  handelconsultationform(formobject?._id);
                        }}
                      >
                        Start
                      </button>
                    </div>
                  </Col>
                </Row>
                <div className="consultation-box-btns">
                  <button
                    className="consult-view"
                    onClick={() => {
                      handelconsultationformedit(formobject?._id, "view");
                    }}
                  >
                    {/* <img src={require("../assets/img/aankh.svg").default} /> */}
                    View /
                  </button>
                  <button
                    className="consult-edit"
                    onClick={() => {
                      handelconsultationformedit(formobject?._id);
                    }}
                  >
                    {/* <img
                      src={require("../assets/img/pencil-edit.svg").default}
                    /> */}
                    Edit
                  </button>
                  {/* {!formobject?.formcreatedbyadminPanel && (
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
                  )} */}
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
      )}

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
                  <label>Search for clients</label>
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
      />

      <DeletePopup
        delModalShow={delModalShow}
        setDelModalShow={setDelModalShow}
        cunsultationId={cunsultationId}
      />
      {/*end new consultation  */}

      {/*Start complete consultation  */}
      {selecteddrop == 1 && (
        <section className="search-list-part">
          {result?.map((item, i) => {
            return (
              <>
                <div className="search-list-box">
                  <Row className="d-flex align-items-center">
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
                      <div className="search-content-right">
                        <Nav.Link href="#" className="white_btn p-0 m-0">
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
              </>
            );
          })}
        </section>
      )}

      {/*end complete consultation  */}
    </Layout>
  );
};
export default Consultation;
