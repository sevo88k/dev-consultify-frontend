import React, { useEffect, useState } from "react";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import {
  Col,
  Container,
  InputGroup,
  Modal,
  Navbar,
  Row,
} from "react-bootstrap";
import { Form, Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { preCareList1Action, preCareListAction } from "../Redux/Action/CustomerAuthAction";
import { PreCareCustomerAcknowedgementData } from "../Redux/Action/CustomerRestAction";
import toast from "react-hot-toast";

const PrePostCared = () => {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const preCareData = useSelector((state) => state.customer?.preCareListDetail);
  const userToken = window.localStorage.getItem("accessToken");

  // useEffect(() => {
  //  dispatch(getpostcarelistAction({ search: search }));
  // }, [search]);

  useEffect(() => {
    dispatch(preCareList1Action());
  }, []);

  //     let postcarelistData = useSelector((state) => state?.myaccount?.postcarelist);
  //   let postcarelistDatadata = useSelector(
  //     (state) => state?.myaccount?.postcarelist
  //   );

  //   postcarelistData = postcarelistData.filter((object) => {
  //     var userIdIncluded = object?.salonActiveArr.find(
  //       (obj) => obj?.salon_id === localStorage.getItem("userId")
  //     );

  //     if (
  //       (userIdIncluded?.status == 1 && object?.admin_id?._id != undefined) ||
  //       (object?.salon_id == localStorage?.getItem("userId") &&
  //         object?.status == 1)
  //     ) {
  //       return object;
  //     }
  //   });

  //   useEffect(() => {
  //     dispatch(fetchAllCustomers());
  //   }, []);
  //   const allCustomerslist = useSelector((state) => state.myaccount.allCustomers);
  //   const options = allCustomerslist?.map((item) => {
  //     return {
  //       label: item?.first_name + " " + item?.last_name,
  //       value: item?._id,
  //     };
  //   });
  //   const options2 = postcarelistDatadata?.map((item) => {
  //     return {
  //       label: item?.treatmentname,
  //       value: item,
  //     };
  //   });
  //   console.log(
  //     allCustomerslist,
  //     "allCustomersallCustomersallCustomersallCustomers"
  //   );

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setActiveItem(null);
  };
  const handleShow = (item) => {
    setActiveItem(item);
    setShow(true);
  };

  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    const initialStatuses = preCareData.reduce((acc, object) => {
      acc[object._id] = !!object.acknowledgedAt; // Use boolean for easier handling
      return acc;
    }, {});
    setStatuses(initialStatuses);
  }, [preCareData]);

  const handleStatusChange = (id) => {
    // const currentStatus = statuses[id];
    // const newStatus = !currentStatus;

    // setStatuses((prevStatuses) => ({
    //   ...prevStatuses,
    //   [id]: newStatus,
    // }));

    if (statuses[id]) {
      return;
    }

    const newStatus = true;

    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: newStatus,
    }));

    dispatch(PreCareCustomerAcknowedgementData(id)).then((res) => {
      if (res?.payload?.status === 200) {
        toast.success("Acknowledged.");
      }
    });
  };

  return (
    <MyAcoountLayout>
      <section className="margin-top-set mt-0">
        <Row>
          <Col lg={12}>
            <div className="cmn-sec-left">
              <div className="custom-select-container precare">
                <div className="custom-select-selected ">
                  <h2 className="mb-0">Pre & Post Treatment Care</h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="d-flex justify-content-end">
        {/* <div className="d-flex justify-content-end mt-4 search-box-client">
          <img src={require("../assets/img/search.svg").default} />
          <input
            type="search"
            className="form-control"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div> */}
      </section>
      {preCareData?.map(function (object, i) {
        return (
          <div className="container">
            <section className="search-list-part">
              <div className="search-list-box">
                <Row className="d-flex align-items-end">
                  <Col xs={12} md={5} sm={6}>
                    <div className="search-content-left">
                      <h2>{object?.precare_id?.treatmentname}</h2>
                      <div className="sub-heading">
                        Pre & Post Treatment Care Advice
                      </div>
                      <p>{object?.precare_id?.description}</p>
                    </div>
                  </Col>
                  <Col xs={12} md={7} sm={6}>
                    <div className="search-content-right">
                      <button
                        className="green-box-link-fill"
                        onClick={() => {
                          handleShow(object);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
        );
      })}

      {activeItem && (
        <Modal show={show} onHide={handleClose} className="client-consult">
          <Modal.Header
            closeButton
            className="consult-header-mob"
          ></Modal.Header>
          <Modal.Body
          // ref={componentRef}
          >
            <div className="treat-box h-100" style={{ border: "none" }}>
              {/* <h2 className="text-center">{precare.treatmentname}</h2> */}
              <Row>
                <Col lg={6}>
                  <div className="left-instruct">
                    <h3>Pre Care Instructions</h3>
                    <div className="instruct-inner-scroll">
                      <p style={{ textWrap: "pre-line" }}>
                        {activeItem?.precare_id?.pre_care_advice}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="right-instruct">
                    <h3>Post Care Instructions</h3>
                    <div className="instruct-inner-scroll">
                      <p style={{ textWrap: "pre-line" }}>
                        {activeItem?.precare_id?.after_care_advice}
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="right-instruct text-center">
                    <h3>Notes</h3>
                    <div className="instruct-inner-scroll">
                      <p style={{ textWrap: "pre-line" }}>
                        {" "}
                        {activeItem?.precare_id?.notes}
                      </p>
                    </div>
                  </div>
                </Col>

                <div className="form-checkbox mb-3">
                  <input
                    style={{ width: "15px", height: "17px" }}
                    type="checkbox"
                    checked={statuses[activeItem._id]}
                    onChange={() => handleStatusChange(activeItem._id)}
                    id="flexCheckDefault"
                  />

                  <label>
                    I confirm I acknowledge the pre and post care instructions.
                  </label>
                </div>

                <Col lg={12} className="d-flex justify-content-center">
                  {" "}
                  <div className="d-flex justify-content-center left-instruct outer">
                    <button
                      type="button"
                      className="mt-1"
                      //   onClick={handlePrint}
                    >
                      View / Print
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </MyAcoountLayout>
  );
};

export default PrePostCared;
