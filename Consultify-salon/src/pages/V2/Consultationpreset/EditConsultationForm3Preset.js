import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
} from "react-bootstrap";
import {
  SavepostcareAction,
  getCategory,
  getpostcarelistAction,
} from "../../../Redux/Actions/user/salon";

export default function EditConsultationForm3Preset({
  formDatavalue,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    dispatch(getpostcarelistAction({ search: search }));
  }, [search, dispatch]);

  let postcarelistData = useSelector(
    (state) => state?.myaccount?.postcarelist || []
  );

  postcarelistData = postcarelistData.filter((object) => object.status === 1);

  const formik = useFormik({
    initialValues: {
      pre_care_setarray: formDatavalue?.pre_care_setarray || [],
    },
    validationSchema: Yup.object({
      pre_care_setarray: Yup.array(),
    }),
    onSubmit: (values) => {
      console.log(values, "valuesvaluesvalues");
      setFormData({
        ...formDatavalue,
        ...values,
      });
      nextStep();
    },
  });

  console.log(formDatavalue);

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
          <NavLink className="exit_btn" to="/consultation-presents">
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <h2 className="form_cmn_heading">Create a new consultation form</h2>
          <div className="steps mb-0 two">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
          <p className="w-50">
            Would you like to add pre/post care instructions to the consultation
            forms? This will be emailed to your customer when we notify them of
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

        <form className="mb-4 pb-4" onSubmit={formik.handleSubmit}>
          {postcarelistData.map((object, i) => (
            <section className="search-list-part presents" key={i}>
              <div className="search-list-box">
                <Row className="d-flex align-items-center">
                  <Col xs={12} md={9} sm={9}>
                    <div className="search-content-left">
                      <h2>{object?.treatmentname}</h2>
                      <div className="sub-heading">
                        Pre & Post Treatment Care Advice
                      </div>
                      <p>{object?.description}</p>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={3}
                    sm={3}
                    className="d-flex justify-content-center"
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={formik?.values?.pre_care_setarray?.some(
                          (item) => item.pre_care_id === object._id
                        )}
                        onChange={() => {
                          const existingIndex =
                            formik.values.pre_care_setarray.findIndex(
                              (item) => item.pre_care_id === object._id
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

          <div className="create_tab new-fixed-btns mb-4">
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
                  <button type="submit" className="lg-btn w-set">
                    Preview Form
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
