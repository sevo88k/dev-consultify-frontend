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
export default function AttachpresetsView() {
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
    const input = document.getElementById("divToPrint");
  
    // Ensure all images are fully loaded
    const images = input.querySelectorAll("img");
    const promises = Array.from(images).map(img => {
      if (!img.complete) {
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      }
      return Promise.resolve();
    });
  
    Promise.all(promises).then(() => {
    
  
      html2canvas(input, {
        useCORS: true, // Ensure CORS is handled
        allowTaint: true, // Allow cross-origin images to be used
      }).then((canvas) => {
        // A4 dimensions in points
        const a4Width = 595.28;
        const a4Height = 841.89;
  
        // Calculate scale to fit content within A4 dimensions
        const scaleX = a4Width / canvas.width;
        const scaleY = a4Height / canvas.height;
        const scale = Math.min(scaleX, scaleY);
  
        // Scale canvas dimensions to fit A4 dimensions
        const pdfWidth = canvas.width * scale;
        const pdfHeight = canvas.height * scale;
  
        const pdf = new jsPDF();
        console.log(pdfHeight)
  
        pdf.addImage(canvas.toDataURL("image/jpeg"), "JPEG",10, 10, 180, 250);
        pdf.save(Date.now() + ".pdf");
  
        // Optionally reset any changes made to the DOM
        // setKeynotes('')
      });
    });
  };
  return (
    <div className="consulation_form three pt-4">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand to="/dashboard">
            <img
              className="main-logo"
              src={require("../../../assets/img/newconsultlogo.webp")}
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
        <div ref={componentRef} className="pdf-download">
     
          <div ref={targetRef} id="divToPrint">
        

           
     
            {formData?.pre_care_setarray?.map(function (object, i) {
              if (object?.pre_care_id?.treatmentname != undefined) {
                return (
                  <section className="search-list-part">
                    <div className="search-list-box">
                      <Row className="d-flex align-items-end" key={i}>
                        <Col xs={4} md={9} sm={9}>
                          <div className="search-content-left">
                            <h2>{object?.pre_care_id?.treatmentname}</h2>
                            <div className="sub-heading">
                              Pre & Post Treatment Care Advice
                            </div>
                            <p>{object?.pre_care_id?.description}</p>
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
