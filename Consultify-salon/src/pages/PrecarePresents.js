import React from "react";
import { Col, Row, Form, Modal, ModalHeader } from "react-bootstrap";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  SavepostcareAction,
  deletePresetAction,
  getpostcarelistAction,
} from "../Redux/Actions/user/salon";
import { useState } from "react";
export default function PreCarePresents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [delModalShow, setDelModalShow] = React.useState(false);
  const [presetId, setPresetId] = React.useState();
  const [isdelete, setdetlete] = useState(false);

  useEffect(() => {
    dispatch(getpostcarelistAction({ search: search })).then((res) => {
      if(res?.payload?.data) {
        setdetlete(false);
      }
    })
  }, [search, isdelete]);

  var postcarelistData = useSelector((state) => state?.myaccount?.postcarelist);

  var postcarelistData = postcarelistData?.filter((formobject) => {
    return (
      formobject?.salon_id == localStorage.getItem("userId") ||
      formobject.admin_id?._id != undefined
    );
  });

  console.log(postcarelistData);

  return (
    <MyAcoountLayout>
      <section className="cmn-sec-headings">
        <Row>
          <Col lg={9}>
            <div className="cmn-sec-left">
              <h2>Pre & Post Care Templates</h2>
              <p>
                Browse through Consultify's library of pre-built post and pre
                care forms. You have the ability to edit each form and replace
                the existing one, make a change and duplicate it, or create a
                brand new form from scratch.
                <br /> Please use the tick boxes to select all forms that you
                wish to have show on your default client consultation list over
                in the main consultation menu.
                <br /> To remove them from your default list, please de-select
                them.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <div className="consultation-presets-tabs d-block">
          <Row className="column-reverse">
            <Col lg={4}>
              <button type="button" className="active-tab mob-hide">
                View All <span>({postcarelistData?.length})</span>
              </button>
            </Col>
            <Col lg={5} className="d-flex justify-content-end">
              <div className="search-input">
                <InputGroup className="mb-3">
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
            <Col lg={3}>
              <div className="button-link">
                <NavLink
                  to="/add-edit-precare"
                  className="white-box-link  create_white-box-link mt-0 mb-0"
                >
                  Create your own
                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <Row>
        <Col lg={12}>
          <div className="d-flex justify-content-end add-tick pt-2">
            <p>Tick box to add</p>
          </div>
        </Col>
      </Row>

      {postcarelistData?.map(function (object, i) {
        return (
          <section className="search-list-part presents" key={i}>
            <div className="search-list-box">
              <>
                <div
                  style={{ cursor: "pointer" }}
                  className="cross-preset"
                  onClick={() => {
                    setDelModalShow(true);
                    setPresetId(object?._id);
                  }}
                >
                  <img src={require("../assets/img/closeconsult.png")} />{" "}
                </div>
              </>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={8} sm={8}>
                  <div
                    className="search-content-left"
                  // onClick={() => {
                  //   navigate("/edit-precare/" + object?._id);
                  // }}
                  >
                    <h2>{object?.treatmentname}</h2>
                    <div className="sub-heading">
                      Pre & Post Treatment Care Advice
                    </div>
                    <p>{object?.description}</p>
                  </div>
                </Col>
                <Col
                  xs={10}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-center"
                >
                  <button
                    className="viw-btn"
                    onClick={() => {
                      navigate("/edit-precare/" + object?._id);
                    }}
                  // onClick={() => {
                  //   navigate("/view-precare/" + object?._id);
                  // }}
                  >
                    Edit
                  </button>
                </Col>
                <Col
                  xs={2}
                  md={1}
                  sm={1}
                  className="d-flex justify-content-center"
                >
                  <div class="form-check px-0">
                    {object?.admin_id?._id != undefined ? (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={object?.salonActiveArr.find((obj) => obj?.salon_id === localStorage.getItem("userId"))?.status == 1 ? 0 : 1}
                        checked={ object?.salonActiveArr.find((obj) => obj?.salon_id === localStorage.getItem("userId"))?.status == 1}
                        onChange={() => {
                          dispatch(
                            SavepostcareAction({
                              id: object?._id,
                              status: object?.salonActiveArr.find((obj) => obj?.salon_id === localStorage.getItem("userId"))?.status == 1  ? 0 : 1,
                            })
                          );
                        }}
                        id={"flexCheckDefault"}
                      />
                    ) : (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={object?.status == 1 ? 0 : 1}
                        checked={object?.status == 1}
                        onChange={() => {
                          dispatch(
                            SavepostcareAction({
                              id: object?._id,
                              status: object?.status == 1 ? 0 : 1,
                            })
                          );
                        }}
                        id="flexCheckDefault"
                      />
                    )}
                  </div>
                </Col>
              </Row>

              {/* <div className="consultation-box-btns">
                <div style={{ cursor: "pointer" }} className="consult-edit">
                  <img src={require("../assets/img/pencil-edit.svg").default} />
                </div>
               
              </div> */}
            </div>
          </section>
        );
      })}

      <Modal
        show={delModalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader
          onClick={function () {
            setDelModalShow(false);
          }}
          closeButton
        ></ModalHeader>
        <Modal.Body>
          <div className="delete-modal">
            <p>Are You Sure?</p>
            <div className="d-flex">
              <button
                className="delete-yes"
                onClick={() => {
                  dispatch(
                    deletePresetAction({
                      id: presetId,
                    })
                  ).then(function () {
                    setDelModalShow(false);
                    setdetlete(true);
                  });
                }}
              >
                Delete
              </button>
              <button
                className="delete-cancel"
                onClick={function () {
                  setDelModalShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </MyAcoountLayout>
  );
}
