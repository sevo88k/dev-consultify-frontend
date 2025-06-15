import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Row,
  Container,
  Modal,
} from "react-bootstrap";
import {
  SavepostcareAction,
  addConsultationAction,
  getCategory,
  getpostcarelistAction,
} from "../../../Redux/Actions/user/salon";

export default function EditConsultationForm3Preset({
  formDatavalue,
  setFormData,
  nextStep,
  idconsultaion,
  prevStep,
  view,
}) {
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [precare, setPrecare] = useState({});
  const { path } = useParams();
  const [searchParams] = useSearchParams();

  searchParams.get("path");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    dispatch(getpostcarelistAction({ search: search }));
  }, [search, dispatch]);

  let postcarelistData = useSelector((state) => state?.myaccount?.postcarelist);

  postcarelistData = postcarelistData.filter((object) => object.status === 1);

  postcarelistData.filter((formobject) => {
    return (
      formobject?.salon_id == localStorage.getItem("userId") ||
      formobject.admin_id?._id != undefined
    );
  });

  const formik = useFormik({
    initialValues: {
      pre_care_setarray: formDatavalue?.pre_care_setarray,
      submittype: 0,
    },
    validationSchema: Yup.object({
      pre_care_setarray: Yup.array(),
    }),
    onSubmit: (values) => {
      console.log(formDatavalue, "valuesvaluesvalues");
      setFormData({
        ...formDatavalue,
        ...values,
      });

      if (values.submittype == 0) {
        nextStep();
      } else if (values.submittype == 1) {
        formDatavalue.idconsultaion = "";
        formDatavalue.pre_care_setarray = values?.pre_care_setarray;

        delete formDatavalue._id;
        dispatch(addConsultationAction(formDatavalue)).then(function () {

          navigate("/" + searchParams.get("path"));

        });
      } else if (values.submittype == 2) {
        if (formDatavalue?.formcreatedbyadminPanel != null) {
          formDatavalue.consultationid = formDatavalue?._id;
          formDatavalue.pre_care_setarray = values?.pre_care_setarray;
          formDatavalue.id = formDatavalue.formcreatedbyadminPanel
          formDatavalue.is_modified = 1
          dispatch(addConsultationAction(formDatavalue)).then(function () {


            navigate("/" + searchParams.get("path"));
          });
        } else {
          formDatavalue.id = formDatavalue.formcreatedby._id
          formDatavalue.pre_care_setarray = values?.pre_care_setarray;
          formDatavalue.is_modified = 1
          dispatch(addConsultationAction(formDatavalue)).then(function () {
    

            navigate("/" + searchParams.get("path"));
          });
        }
      }
    },
  });

  // const submitform = () => {

  //   dispatch(addConsultationAction(formDatavalue)).then(function () {
  //     navigate("/consultation-presets");
  //   });
  // };

  console.log(formik?.values?.pre_care_setarray, "dfdfdffddf");

  const handleClose = () => setShow(false);
  return (
    <div className="consulation_form one">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../../../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to={"/" + searchParams.get("path")}>
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Edit consultation form</h2>
          <div className="steps two w-75">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
          <p>
            Would you like to add pre/post care instructions to the consultation
            forms?
            <br /> This will be emailed to your customer when we notify them of
            their consultation.
          </p>
        </div>

        <Row className="mt-4 pt-4">
          <Col lg={5}>
            <div className="search-input">
              <InputGroup className="mb-3">
                <InputGroup.Text className="group-box-search">
                  <img
                    src={require("../../../assets/img/search.svg").default}
                    alt="search"
                  />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search...."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </div>
          </Col>
          <Col lg={7}>
            <div className="d-flex justify-content-end add-tick">
              <p>Tick box to add</p>
            </div>
          </Col>
        </Row>

        <form
          className="mb-4 pb-4 edit-form-mob"
          onSubmit={formik.handleSubmit}
        >
          {postcarelistData.map((object, i) => (
            <section className="search-list-part presents" key={i}>
              <div className="search-list-box">
                <Row className="d-flex align-items-center">
                  <Col xs={12} md={8} sm={8}>
                    <div className="search-content-left">
                      <h2>{object?.treatmentname}</h2>
                      <div className="sub-heading">
                        Pre & Post Treatment Care Advice
                      </div>
                      <p>{object?.description}</p>
                    </div>
                  </Col>
                  <Col
                    xs={8}
                    md={3}
                    sm={3}
                    className="d-flex justify-content-center"
                  >
                    <Link
                      to=""
                      className="consult-view-btn"
                      onClick={() => {
                        setPrecare(object);
                        setShow(true);
                      }}
                    >
                      View
                    </Link>
                  </Col>
                  <Col
                    xs={4}
                    md={1}
                    sm={1}
                    className="d-flex justify-content-center"
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formik?.values?.pre_care_setarray?.some(
                          (item) =>
                            (item.pre_care_id?._id == undefined
                              ? item.pre_care_id
                              : item.pre_care_id?._id) === object._id
                        )}
                        onChange={() => {
                          const existingIndex =
                            formik.values.pre_care_setarray.findIndex(
                              (item) =>
                                (item.pre_care_id?._id == undefined
                                  ? item.pre_care_id
                                  : item.pre_care_id?._id) === object._id
                            );

                          if (existingIndex === -1) {
                            // Item not found in the array, so we push the new item
                            const newArray = [
                              ...formik.values.pre_care_setarray,
                              { pre_care_id: object._id },
                            ];
                            formik.setFieldValue("pre_care_setarray", newArray);
                          } else {
                            // Item found in the array, so we remove the item
                            const newArray = [
                              ...formik.values.pre_care_setarray,
                            ];
                            newArray.splice(existingIndex, 1);
                            formik.setFieldValue("pre_care_setarray", newArray);
                          }
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          ))}

          <div className="create_tab new-fixed-btns edit-form mb-4">
            <div className="row align-items-center">
              <div className="col-12 d-flex justify-content-between">
                <span>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="lg-btn back w-set"
                  >
                    Back
                  </button>
                </span>

                <span>
                  <div className="d-flex justify-content-end">
                    <div className="tab-fixmob-btns">
                      <button
                        className="cmn-button-consult"
                        onClick={() => {
                          formik.setFieldValue("submittype", 2);
                        }}
                      >
                        Replace current form
                      </button>
                      <button
                        className="cmn-button-consult ms-2"
                        onClick={() => {
                          formik.setFieldValue("submittype", 1);
                        }}
                      >
                        Save as a new form
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="lg-btn w-set ms-2"
                        onClick={() => {
                          formik.setFieldValue("submittype", 0);
                        }}
                      >
                        Preview Form
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Modal show={show} onHide={handleClose} className="client-consult">
        <Modal.Body>
          <div className="treat-box h-100">
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
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
