import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  ModalHeader,
  Row,
} from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import {
  consultationformlists,
  deleteConsultationAction,
  getCategory,
  presetconsultationformlistlists,
  updateConsultationForm,
  updatepreConsultationForm,
  updatepreConsultationFormhideAction,
} from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Encryptedid } from "../utils/BcruptEncyptid";

export default function ConsultationPresents() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState();
  const [isdelete, setdetlete] = useState(false);

  const [delModalShow, setDelModalShow] = React.useState(false);
  const [cunsultationId, setConsultationId] = React.useState();
  const [search, setSearch] = useState("");
  var consultationform = useSelector(
    (state) => state.myaccount.preconsultationlists
  );
  const [consultationFormData, setConsultationFormData] = React.useState();

  const [categoryselected, setCategoryselected] = useState("");
  const [totalPreconsultation, setTotalPreconsultation] = useState("");

  useEffect(() => {
    dispatch(
      presetconsultationformlistlists({ getdata: "0,1", search: search })
    ).then((data) => {
      if (data?.payload?.data) {
        setConsultationFormData(data?.payload?.data);

        var totalobject = data?.payload?.data?.data?.filter(function (
          formobject
        ) {
          var userIdIncluded = formobject?.salonActiveArrforhide.find(
            (obj) => obj?.salon_id === localStorage.getItem("userId")
          );

          return !userIdIncluded;
        });

        setTotalPreconsultation(totalobject?.length);
        setdetlete(false);
      }
    });
  }, [search, isdelete]);

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
    const categoryCount = consultationform?.data?.filter(function (item) {
      var userIdIncluded = item?.salonActiveArrforhide.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );

      if (item.category == id1 && !userIdIncluded) {
        return item;
      }
    });

    console.log(categoryCount);

    // If categoryCount is found, append the count value to the category object
    if (categoryCount) {
      return {
        ...cat,
        count: categoryCount.length ?? 0, // Append the count value to the category object
      };
    } else {
      return cat; // Return the original category object if no corresponding count is found
    }
  });

  let arraypreconsultation;

  if (categoryselected != "") {
    arraypreconsultation = consultationform.data?.filter((object) => {
      const categoryId = object?.category?.toString(); // Convert category_id to string (if defined)
      const selectedCategory = categoryselected.toString(); // Convert categoryselected to string

      return categoryId === selectedCategory;
    });

    const consultationid = [];

    for (let i = 0; i < arraypreconsultation?.length; i++) {
      if (arraypreconsultation[i].consultationid !== undefined) {
        consultationid.push(arraypreconsultation[i].consultationid);
      }
    }

    arraypreconsultation = arraypreconsultation?.filter((item) => {
      return !consultationid.includes(item._id);
    });

    arraypreconsultation = arraypreconsultation?.filter(function (formobject) {
      var userIdIncluded = formobject?.salonActiveArrforhide.find(
        (obj) => obj?.salon_id === localStorage.getItem("userId")
      );

      return !userIdIncluded;
    });
  } else {
    arraypreconsultation = consultationform.data;
    const consultationid = [];

    for (let i = 0; i < arraypreconsultation?.length; i++) {
      if (arraypreconsultation[i].consultationid !== undefined) {
        consultationid.push(arraypreconsultation[i].consultationid);
      }
    }

    arraypreconsultation = arraypreconsultation?.filter((item) => {
      return !consultationid.includes(item._id);
    });
  }

  var handelconsultationformedit = useCallback((id, type) => {
    const encodedEncrypted = Encryptedid(id);

    navigate(
      "/edit-consultation-presets-form?id=" +
        encodedEncrypted +
        "&path=consultation-presets"
    );
  }, []);

  return (
    <MyAcoountLayout>
      <section className="cmn-sec-headings">
        <Row>
          <Col lg={9} xs={12}>
            <div className="cmn-sec-left">
              <h2>Consultation Templates</h2>
              <p>
                Browse through Consultify's library of pre-built consultation
                forms. You have the ability to edit each form and replace the
                existing one, make a change and duplicate it, or create a brand
                new form from scratch. <br />
                Please use the tick boxes to select all forms that you wish to
                have show on your default client consultation list over in the
                main consultation menu. <br />
                To remove them from your default list, please de-select them.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            xs={12}
            className="d-flex justify-content-end align-items-end mob-btn-set"
          >
            <div className="button-link">
              <NavLink
                to="/consultation-presets-form"
                className="white-box-link  create_white-box-link mt-0 mb-4 presets "
              >
                Create your own
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <div className="consultation-presets-tabs">
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
              <Form.Control
                placeholder="Search...."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </InputGroup>
          </div>
        </div>
      </section>

      <Row>
        <Col lg={12}>
          <div className="d-flex justify-content-end add-tick">
            <p>Tick box to add</p>
          </div>
        </Col>
      </Row>
      {arraypreconsultation?.map((item, i) => {
        return (
          <section
            className={
              item?.salonActiveArrforhide.some(
                (obj) => obj?.salon_id == localStorage.getItem("userId")
              )
                ? "search-list-part presents Disable"
                : "search-list-part presents"
            }
          >
            <div className="search-list-box">
              <Row className="d-flex align-items-center">
                <Col xs={12} md={8} sm={8}>
                  <div className="search-content-left">
                    <h2>{item?.form_title}</h2>
                    <div className="sub-heading">
                      {item?.question?.length}{" "}
                      {item?.question?.length == 1 ? "Question" : "Questions"}
                    </div>
                    <p style={{ textWrap: "pre-line" }}>
                      {item?.form_description}
                    </p>
                  </div>
                </Col>
                <Col
                  xs={10}
                  md={3}
                  sm={3}
                  className="d-flex justify-content-center"
                >
                  <Link
                    to={
                      "/consultation-preset-view/" +
                      Encryptedid(item?._id) +
                      "/consultation-presets"
                    }
                  >
                    View
                  </Link>
                </Col>
                <Col
                  xs={2}
                  md={1}
                  sm={1}
                  className="d-flex justify-content-center"
                >
                  <div class="form-check px-0">
                    {item?.formcreatedbyadminPanel?._id != undefined ? (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={
                          item?.salonActiveArr.find(
                            (obj) =>
                              obj?.salon_id == localStorage.getItem("userId")
                          )?.consulationformstatus == 0
                            ? 1
                            : 0
                        }
                        checked={
                          item?.salonActiveArr.find(
                            (obj) =>
                              obj?.salon_id === localStorage.getItem("userId")
                          )?.consulationformstatus == 0
                        }
                        onChange={() => {
                          dispatch(
                            updatepreConsultationForm({
                              id: item?._id,
                              consulationformstatus:
                                item?.salonActiveArr.find(
                                  (obj) =>
                                    obj?.salon_id ==
                                    localStorage.getItem("userId")
                                )?.consulationformstatus == 0
                                  ? 1
                                  : 0,
                            })
                          );
                        }}
                        id={"flexCheckDefault"}
                      />
                    ) : (
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={item?.status == 0 ? 1 : 0}
                        checked={item?.consulationformstatus == 0}
                        onChange={() => {
                          dispatch(
                            updatepreConsultationForm({
                              id: item?._id,
                              consulationformstatus:
                                item?.consulationformstatus == 0 ? 1 : 0,
                            })
                          );
                        }}
                        id="flexCheckDefault"
                      />
                    )}
                  </div>
                </Col>
              </Row>
              <div className="consultation-box-btns">
                {item?.draft == 0 && <b>Draft</b>}
                <div
                  style={{ cursor: "pointer" }}
                  className="consult-edit"
                  onClick={() => {
                    handelconsultationformedit(item?._id);
                  }}
                >
                  <img src={require("../assets/img/pencil-edit.svg").default} />
                </div>
                {item?.formcreatedby?._id == localStorage.getItem("userId") && (
                  <>
                    <div
                      style={{ cursor: "pointer" }}
                      className="consult-delete"
                      onClick={() => {
                        setDelModalShow(true);
                        setConsultationId(item?._id);
                      }}
                    >
                      <img src={require("../assets/img/closeconsult.png")} />{" "}
                    </div>
                  </>
                )}
                {item?.formcreatedby?._id != localStorage.getItem("userId") && (
                  <>
                    <div
                      style={{ cursor: "pointer" }}
                      className="consult-delete"
                      onClick={() => {
                        dispatch(
                          updatepreConsultationFormhideAction({ id: item?._id })
                        ).then(function () {
                          setdetlete(true);
                        });
                      }}
                    >
                      <img
                        src={require("../assets/img/closeconsult.png")}
                      />{" "}
                    </div>
                  </>
                )}

                {item?.formcreatedby?._id == localStorage.getItem("userId") && (
                  <>
                    <div
                      style={{ cursor: "pointer" }}
                      className="consult-delete"
                      onClick={() => {
                        setDelModalShow(true);
                        setConsultationId(item?._id);
                      }}
                    >
                      <img src={require("../assets/img/closeconsult.png")} />{" "}
                    </div>
                  </>
                )}
              </div>
              <div className="pre-care attached d-flex justify-content-between align-items-center">
                {item?.pre_care_setarray.length > 0 && (
                  <h3 className="mb-0">
                    Pre Care:
                    {item?.pre_care_setarray.length == 1
                      ? item?.pre_care_setarray?.map(
                          (item) => item?.pre_care_id?.treatmentname
                        )
                      : "Multiple"}
                  </h3>
                )}

                {/* <Link
                  to={
                    "/attach-presets-view/" +
                    Encryptedid(item?._id) +
                    "/consultation-presets"
                  }
                >
                  View
                </Link> */}
              </div>
            </div>
          </section>
        );
      })}

      {arraypreconsultation?.length == 0 && (
        <div className="search-results-text">
          <p>No Search Results Found</p>
        </div>
      )}

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
                    deleteConsultationAction({
                      idconsultaion: cunsultationId,
                      see_preset_tab:1
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
