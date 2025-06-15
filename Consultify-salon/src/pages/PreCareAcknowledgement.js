import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import { Col, Row, Form } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import {
  fetchAllCustomers,
  getpostcarelistAction,
  sendtocustomerAction,
} from "../Redux/Actions/user/salon";
import Select from "react-select";
import toast from "react-hot-toast";
export default function PreCareAcknowledgement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [consutationid, setConsultationid] = useState("");
  const [show2, setShow2] = useState(false);
  const [precare, setPrecare] = useState({});

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getpostcarelistAction({ search: search }));
  }, [search]);

  let postcarelistData = useSelector((state) => state?.myaccount?.postcarelist);
  let postcarelistDatadata = useSelector(
    (state) => state?.myaccount?.postcarelist
  );

  postcarelistData = postcarelistData.filter((object) => {
    var userIdIncluded = object?.salonActiveArr.find(
      (obj) => obj?.salon_id === localStorage.getItem("userId")
    );

    if (
      (userIdIncluded?.status == 1 && object?.admin_id?._id != undefined) ||
      (object?.salon_id == localStorage?.getItem("userId") &&
        object?.status == 1)
    ) {
      return object;
    }
  });

  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, []);
  const allCustomerslist = useSelector((state) => state.myaccount.allCustomers);
  const options = allCustomerslist?.map((item) => {
    return {
      label: item?.first_name + " " + item?.last_name,
      value: item?._id,
    };
  });
  const options2 = postcarelistDatadata?.map((item) => {
    return {
      label: item?.treatmentname,
      value: item,
    };
  });
  console.log(
    allCustomerslist,
    "allCustomersallCustomersallCustomersallCustomers"
  );

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [isOpen, setIsOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("Select an option");

  const [selecteddrop, setSelected] = useState(0);
  const options3 = [
    "Pre & Post Treatment Care Advice & Instructions",
    "Pre & Post Treatment Care Acknowledgement",
  ];

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
      {" "}
      <section className="margin-top-set">
        <Row>
          <Col lg={12}>
            <div className="cmn-sec-left">
              <div
                className="custom-select-container precare"
                ref={customSelectRef}
              >
                <div
                  className="custom-select-selected "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <input
                    readOnly
                    type="text"
                    value={options3[selecteddrop]}
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}
                  />
                </div>
                {isOpen && (
                  <div className="custom-select-options">
                    {options3.map((option, index) => (
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
              <p>
                View all your available default pre & post care forms
                <br /> Send to clients via email prior to their salon visit{" "}
                <br />
                To edit forms or to add a new one to your default list, please
                head to the pre care tab in the setting menu
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-end align-items-start">
            {/* <Link to="/precare-presents" className="consult-btn">
              Find More Consultation Options in Settings
            </Link> */}
          </Col>
        </Row>
      </section>
      {/* tab-links */}
      {/* search header */}
      <section className="mb-4 consultation-presets-tabs d-block">
        <Row>
          <Col
            xs={12}
            md={2}
            sm={12}
            className="d-flex justify-content-end align-items-center"
          >
            <Form.Select aria-label="Default select example">
              <option value="">Sort By </option>
            </Form.Select>
          </Col>
          <Col xs={12} md={10} sm={12}>
            <Row>
              <Col
                xs={12}
                md={5}
                sm={4}
                className="d-flex justify-content-end align-items-center"
              >
                <div className="preacknowledgement-box">
                  <p>Sent: dd/mm/yyyy</p>
                </div>
              </Col>
              <Col
                xs={12}
                md={3}
                sm={4}
                className="d-flex justify-content-end align-items-center"
              >
                <Form.Select aria-label="Default select example">
                  <option value="">View All </option>
                </Form.Select>
              </Col>
              <Col
                xs={12}
                md={4}
                sm={4}
                className="d-flex justify-content-end align-items-center"
              >
                <div className="search-input w-100">
                  <InputGroup>
                    <InputGroup.Text className="group-box-search">
                      <img
                        src={require("../assets/img/search.svg").default}
                        alt="search"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search...."
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      {postcarelistData?.map(function (object, i) {
        return (
          <section className="search-list-part">
            <div className="search-list-box">
              <Row className="d-flex align-items-center" key={i}>
                <Col xs={12} lg={9} md={8} sm={6}>
                  <div className="search-content-left">
                    <h2>{object?.treatmentname}</h2>
                    <div className="sub-heading">
                      Pre & Post Treatment Care Advice
                    </div>
                    <p>{object?.description}</p>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={3} sm={6} className="">
                  <div className="search-list-acknowledgement ">
                    <Row>
                      <Col xs={6} md={6} sm={6}>
                        <h2>Client: </h2>
                      </Col>
                      <Col xs={6} md={6} sm={6}>
                        <h2>Sam Smith </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} md={6} sm={6}>
                        <p>Sent: </p>
                        <p> Acknowledged:</p>
                      </Col>
                      <Col xs={6} md={6} sm={6}>
                        <p>22/06/2024 </p>
                        <p style={{ color: "#3EAF3F" }}> 22/06/2024</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        );
      })}
      <Modal show={show} onHide={handleClose} className="client-consult">
        <Modal.Header closeButton className="consult-header-mob"></Modal.Header>
        <Modal.Body ref={componentRef}>
          <div className="treat-box h-100" style={{ border: "none" }}>
            <h2 className="text-center">{precare.treatmentname}</h2>
            <Row>
              <Col lg={6}>
                <div className="left-instruct">
                  <h3>Pre Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>
                      {precare.pre_care_advice}
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="right-instruct">
                  <h3>Post Care Instructions</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>
                      {precare.after_care_advice}
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={12}>
                <div className="right-instruct text-center">
                  <h3>Notes</h3>
                  <div className="instruct-inner-scroll">
                    <p style={{ textWrap: "pre-line" }}>{precare.notes}</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className="d-flex justify-content-center left-instruct outer">
                  <button type="button" className="mt-1" onClick={handlePrint}>
                    View / Print
                  </button>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className="d-flex justify-content-center right-instruct">
                  <button
                    type="button"
                    className="mt-1"
                    onClick={() => {
                      setShow2(true);
                      setShow(false);
                      setPrecare(precare);
                    }}
                  >
                    Send to Client
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
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
                  <input
                    name=""
                    type="search"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type to search"
                  />
                </div>
                <div className="col-lg-12">
                  <label>Search for Advice</label>
                  <input
                    name=""
                    type="search"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type to search"
                  />
                </div>
              </div>
              {/* 
              <div className="col-lg-12">
                <Row>
                  <Col lg={6} xs={6}>
                    <div className="cancel-btn">
                      <button type="button" class="btn mb-3">
                        Cancel
                      </button>
                    </div>
                  </Col>
                  <Col lg={6} xs={6}>
                    <div className="submit-btn">
                      <button type="submit" class="btn mb-3">
                        Send Client
                      </button>
                    </div>
                  </Col>
                </Row>
              </div> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
                    onChange={(e) => setConsultationid(e.value)}
                  />
                </div>
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
                          setShow2(false);
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
                              id: consutationid,
                              precarid: precare?._id,
                            })
                          ).then(function () {
                            setShow2(false);
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
    </Layout>
  );
}
