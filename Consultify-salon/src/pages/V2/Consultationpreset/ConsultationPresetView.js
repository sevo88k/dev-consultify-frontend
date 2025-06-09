import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { usePDF } from "react-to-pdf";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
  addConsultationAction,
  editGetdetailsConsultationAction,
} from "../../../Redux/Actions/user/salon";
import html2canvas from "html2canvas";
import { Decryptedid } from "../../../utils/BcruptEncyptid";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
export default function ConsultationPresetView() {
  const [formData, setFormData] = useState({});
  const { id, path } = useParams();
  const { toPDF, targetRef } = usePDF({
    filename: Date.now() + ".pdf",
    options: { margin: "20px" },
  });
  const [show, setShow] = useState(false);
  const [precare, setPrecare] = useState({});

  var idvalue = Decryptedid(atob(id));

  useEffect(() => {
    dispatch(editGetdetailsConsultationAction(idvalue)).then(function (data) {
      if (data.payload) {
        setFormData(data.payload);
      }
    });
  }, [idvalue]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile] = useState();

  const handleClose = () => setShow(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  const printDocument = () => {
    setTimeout(() => {
    html2canvas(document.querySelector("#divToPrint"), {
      logging: true,
      allowTaint: true,
      useCORS: true,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      scale: window.devicePixelRatio || 2, 
    })
    .then((canvas) => {
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    
    const a4Width = 210;
    
    const margin = 10;
    const contentMaxWidth = a4Width - margin * 2;
    
    const pxToMm = 0.264583;
    const contentWidthMm = contentWidth * pxToMm;
    
    const scale = contentMaxWidth / contentWidthMm;
    
    const requiredHeightMm = contentHeight * pxToMm * scale;
    
    const a4HeightPx = requiredHeightMm / pxToMm;

    if(requiredHeightMm < 220 ) {

      var doc = new jsPDF("p", "mm", 'a4');
    
    var pageData = canvas.toDataURL("image/png", 1.0);
    
    const xOffset = margin;
    const yOffset = margin;
    
    doc.addImage(pageData, "PNG", xOffset, yOffset, contentMaxWidth, requiredHeightMm - margin * 2);
    doc.save("file.pdf");

    } else {
    
    var doc = new jsPDF("p", "mm", [a4Width, requiredHeightMm], true);
    
    var pageData = canvas.toDataURL("image/png", 1.0);
    
    const xOffset = margin;
    const yOffset = margin;
    
    doc.addImage(pageData, "PNG", xOffset, yOffset, contentMaxWidth, requiredHeightMm - margin * 2);
    doc.save("file.pdf");
    }
    })
    }, 500);
    };

    // const printDocument = () => {
    //   setTimeout(() => {
    //   html2canvas(document.querySelector("#divToPrint"), {
    //     logging: true,
    //     allowTaint: true,
    //     useCORS: true,
    //     scrollX: -window.scrollX,
    //     scrollY: -window.scrollY,
    //     scale: 3 
    //   }).then((canvas) => {
    //     const contentWidth = canvas.width;
    //     const contentHeight = canvas.height;
    
    //     const a4Width = 210;
    //     const a4Height = 297;  
    //     const margin = 10;
    
    //     const pxToMm = 0.264583;
    
    //     const contentWidthMm = contentWidth * pxToMm;
    //     const contentHeightMm = contentHeight * pxToMm;
    
    //     let scale = Math.min(
    //       (a4Width - 2 * margin) / contentWidthMm, 
    //       (a4Height - 2 * margin) / contentHeightMm 
    //     );

    //     scale = Math.min(scale, 1);
    
    //     const scaledWidthMm = contentWidthMm * scale;
    //     const scaledHeightMm = contentHeightMm * scale;
    
    //     const doc = new jsPDF("p", "mm", "a4"); 
    
    //     const pageData = canvas.toDataURL("image/png", 1.0);
    
    //     const xOffset = (a4Width - scaledWidthMm) / 2; 
    //     const yOffset = margin; 
    
    //     doc.addImage(pageData, "PNG", xOffset, yOffset, scaledWidthMm, scaledHeightMm);
    //     doc.save("file.pdf");
    //   }).catch((error) => {
    //     console.error("Error generating canvas:", error);
    //   });
    // }, 500);
    // };


  return (
    <div className="consulation_form three pt-4">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand  as={Link} to="/dashboard">
            <img
              className="main-logo"
              // src={require("../../../assets/img/newconsultlogo.webp")}
              src={require("../../../assets/img/consultify-black-logo.svg").default}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to={"/" + path}>
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
      <style>
        {`
          @media print {
            @page {
              margin: 0 10px;
            }
          }
        `}
      </style>
        <div ref={componentRef} className="pdf-download">
          <div className="button-link ms-2 d-flex align-items-end justify-content-end pdf-download-btns">
            <Nav.Link
              className="white-box-link"
              onClick={() => printDocument()}
            >
              Download
            </Nav.Link>

            <Nav.Link
              onClick={handlePrint}
              href="#"
              className="white-box-link ms-2"
            >
              Print
            </Nav.Link>
          </div>
          <div ref={targetRef} id="divToPrint">
            <div className="row">
              <div className="col-lg-9">
                <div className="consultationform_tab d-flex justify-content-between pt-0">
                  <div>
                    <h2 className="form_cmn_heading">
                      {formData?.formcreatedby?.salonname}
                    </h2>
                    <h2 className="form_cmn_heading">{formData?.form_title}</h2>
                    <p className="mt-3 mb-0 consult-description">
                      {formData?.form_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-0">
              {formData?.question?.map(function (question, index) {
                return (
                  <div className="form_card" key={index}>
                    <h2>{question.optiontype == 5 ? "" : question.question}</h2>

                    {(() => {
                      if (question.optiontype == 4) {
                        return (
                          <div className="create_new_form">
                            <div className="row">
                              <div className="col-6">
                                <div className="upload_img_div">
                                  Upload image
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="upload_img_div">
                                  Upload image
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else if (question.optiontype == 5) {
                        return (
                          <div className="declaration">
                            <label>Declaration</label>
                            <p style={{ whiteSpace: "pre-line" }}>
                              {question.question}
                            </p>
                            <div className="d-flex justify-content-end">
                              <label>
                                {question.confirmation || "I Confirm"}{" "}
                              </label>
                              <input type="checkbox" />
                            </div>
                          </div>
                        );
                      } else if (question.optiontype == 6) {
                        return (
                          <div className="sign_box">
                            <p>{question.question}</p>
                          </div>
                        );
                      }
                    })()}

                    {question.optiontype == 2 ? (
                      <div className="options_form">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Enter your answer here"
                        ></textarea>
                      </div>
                    ) : (
                      (question.optiontype == 0 ||
                        question.optiontype == 1 ||
                        question.optiontype == 3) && (
                        <div className="options_form">
                          <div
                            className={
                              question.optiontype == 3
                                ? "d-flex justify-content-between  create_new_form"
                                : " "
                            }
                          >
                            {question?.options?.map(function (
                              option,
                              optionindex
                            ) {
                              return (
                                <div
                                  className="form-check"
                                  key={optionindex}
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title={
                                    option?.formOptiontitle == 1
                                      ? "Proceed"
                                      : option?.formOptiontitle == 2
                                      ? "Cannot Proceed"
                                      : option?.formOptiontitle == 3 &&
                                        "Proceed With Message"
                                  }
                                >
                                  {(() => {
                                    if (question.optiontype == 3) {
                                      return (
                                        <img
                                          src={
                                            option[
                                              `imagename${optionindex + 1}`
                                            ] != ""
                                              ? process.env
                                                  .REACT_APP_HOST_NAME +
                                                "/Adminquestionimage" +
                                                option[
                                                  `imagename${optionindex + 1}`
                                                ]
                                              : option[
                                                  `imageurl${optionindex + 1}`
                                                ]
                                          }
                                          alt={option.imageurl1}
                                          className="option_image"
                                        />
                                      );
                                    } else {
                                      return (
                                        <>
                                          <input
                                            className="form-check-input"
                                            type={
                                              question.optiontype === "0"
                                                ? "radio"
                                                : "checkbox"
                                            }
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="flexRadioDefault1"
                                          >
                                            {option?.optiontitle}
                                          </label>
                                        </>
                                      );
                                    }
                                  })()}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </div>
            {formData?.pre_care_setarray?.map(function (object, i) {
              if (object?.pre_care_id?.treatmentname != undefined) {
                return (
                  <section className="search-list-part">
                    <div className="search-list-box">
                      <Row className="d-flex align-items-end" key={i}>
                        <Col xs={12} md={9} sm={9}>
                          <div className="search-content-left">
                            <h2>{object?.pre_care_id?.treatmentname}</h2>
                            <div className="sub-heading">
                              Pre & Post Treatment Care Advice
                            </div>
                            <p>{object?.pre_care_id?.description}</p>
                          </div>
                        </Col>

                        <Col
                          xs={12}
                          md={3}
                          sm={3}
                          className="d-flex justify-content-center"
                        >
                          <Link
                            to=""
                            className="consult-view-btn"
                            onClick={() => {
                              setPrecare(object?.pre_care_id);
                              setShow(true);
                            }}
                          >
                            View
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </section>
                );
              }
            })}
          </div>
        </div>

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
