import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import { usePDF, Resolution, Margin } from "react-to-pdf";
import html2canvas from "html2canvas";
import {
  DeleteimagesandNotesAction,
  adddocumentAction,
  addimagesandNotesAction,
  consultationformdetails,
  fetchCompletedConsultationById,
} from "../Redux/Actions/user/salon";
import { useFormik } from "formik";
import Signaturecompo from "../components/Signaturecompo";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";
import jsPDF from "jspdf";
import moment from "moment";
import SignatureComponentSIgned from "../components/SignatureComponentSIgned";

const ViewConsultationForClient = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { toPDF, targetRef } = usePDF({ filename: Date.now() + ".pdf" });
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [keynotessection, setKeynotes] = useState("");
  const [imagess, setImagess] = useState([]);
  const [imagesshow, Setimagesshow] = useState([]);
  const [notes, setNotes] = useState("");
  const [entry_type, setentry_type] = useState("");
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const [showEdit, setshowEdit] = useState(false);
  const handleCloseEdit = () => setshowEdit(false);
  const handleShowEdit = () => setshowEdit(true);
  const [notesedit, setnotesedit] = useState("");

  const [documentid, setdocumentid] = useState("");
  const [entry_typeedit, setentry_typeedit] = useState("");



  var idvalue = Decryptedid(atob(id));
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const completed_consultation_by_id = useSelector(
    (state) => state.myaccount.completed_consultation_by_id
  );

  const consultationquestion = completed_consultation_by_id?.consultationId;

  useEffect(() => {
    dispatch(fetchCompletedConsultationById(idvalue));
  }, [idvalue]);

  useEffect(() => {
    setNotes(completed_consultation_by_id?.notes);
    setentry_type(completed_consultation_by_id?.entry_type);

    if (completed_consultation_by_id?.images?.length > 0) {
      const imageUrls = completed_consultation_by_id?.images?.map(
        (file) =>
          process.env.REACT_APP_HOST_NAME +
          "completedconsultationimages/" +
          file
      );
      Setimagesshow(imageUrls);
    }
  }, [completed_consultation_by_id]);

  const initialValues = {
    // Set other static initial values here
  };

  // Dynamically add fields to initialValues
  for (let i = 0; i < consultationquestion?.question?.length; i++) {
    console.log(
      consultationquestion?.question,
      "consultationquestion?.question"
    );
    if (consultationquestion?.question[i]?.optiontype == 1) {
      //  0-radio 1-multile 2-input
      initialValues[`checkBoxQues${i + 1}`] = [];
    } else if (consultationquestion?.question[i]?.optiontype == 0) {
      initialValues[`radioQues${i + 1}`] = "";
    } else if (consultationquestion?.question[i]?.optiontype == 6) {
      initialValues[`signature${i + 1}`] = "";
    } else if (consultationquestion?.question[i]?.optiontype == 4) {
      initialValues[`clientImage${i + 1}`] = { img1: "", img2: "" };
    } else {
      initialValues[`dynamicQues${i + 1}`] = "";
    }
  }

  const formik = useFormik({
    initialValues: completed_consultation_by_id?.answers || initialValues,
    enableReinitialize: true,
  });

  const toggleCheckbox = (options, option) => {
    if (options?.some((data) => data.answer == option.answer)) {
      return options?.filter((item) => item?.answer !== option?.answer);
    } else {
      return [...options, option];
    }
  };

  const addimagesandNotes = () => {
    if (entry_type !== "" && entry_type !== undefined) {
      let formdata = new FormData();
      formdata.append("id", idvalue);
      // formdata.append("documentid", documentid);

      for (let i = 0; i < imagess.length; i++) {
        formdata.append("images", imagess[i]);
      }
      formdata.append("entry_type", entry_type);
      formdata.append("notes", notes);

      dispatch(addimagesandNotesAction(formdata)).then(function () {
        dispatch(fetchCompletedConsultationById(idvalue));

        setentry_type("");
        setNotes("");
        setdocumentid("");
        setImagess([]);
        setImages([]);
      });
    } else {
      toast.error("Entry type is required");
    }
  };


  const addimagesandNotesupdate = () => {
    if (entry_typeedit !== "" && entry_typeedit !== undefined) {
      let formdata = new FormData();
      formdata.append("id", idvalue);
      formdata.append("documentid", documentid);

      for (let i = 0; i < imagess.length; i++) {
        formdata.append("images", imagess[i]);
      }
      formdata.append("entry_type", entry_typeedit);
      formdata.append("notes", notesedit);

      dispatch(addimagesandNotesAction(formdata)).then(function () {
        dispatch(fetchCompletedConsultationById(idvalue));
        setshowEdit(false);

        setentry_typeedit("");
        setdocumentid("");
        setnotesedit("");
        setImagess([]);
        setImages([]);
      });
    } else {
      toast.error("Entry type is required");
    }
  };



  const printDocument = () => {
    // Base64 encoded logo (replace with actual Base64 if needed)
    //  const logoBase64 = "data:image/png;base64, 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";


    const input = document.getElementById("divToPrint");
    const elementToRemove = input.querySelector("#multiple");

    const images = input.querySelectorAll("img");
    const promises = Array.from(images).map(img => {
      if (!img.complete) {
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject; // Handle image loading errors
        });
      }
      return Promise.resolve();
    });

    Promise.all(promises)
      .then(() => {
        if (elementToRemove) {
          elementToRemove.style.display = "none";
        }

        return html2canvas(input, {
          useCORS: true, // Enable CORS for external images
          allowTaint: false, // Disallow tainted canvases
          scrollX: -window.scrollX,
          scrollY: -window.scrollY,
          scale: 3, // High scale for better quality
        });
      })
      .then(canvas => {
        const contentWidth = canvas.width;
        const contentHeight = canvas.height;

        const a4Width = 210; // A4 width in mm
        const margin = 10; // Margin in mm
        const contentMaxWidth = a4Width - margin * 2;

        const pxToMm = 0.264583; // Conversion factor from pixels to mm
        const contentWidthMm = contentWidth * pxToMm;
        const scaleToFitWidth = contentMaxWidth / contentWidthMm;
        const requiredHeightMm = contentHeight * pxToMm * scaleToFitWidth;

        // Add extra space for the logo at the top
        const logoHeight = 15; // Height of the logo in mm
        const totalHeight = requiredHeightMm + logoHeight + margin;

        const pdf = new jsPDF("p", "mm", [a4Width, totalHeight], true);

        // Add logo at the top-left corner
        const logoWidth = 30; // Width of the logo in mm
        // pdf.addImage(logoBase64, "PNG", margin, margin, logoWidth, logoHeight);

        // Add content below the logo
        const yOffset = margin + logoHeight; // Push content below the logo
        const imageData = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imageData, "JPEG", margin, yOffset, contentWidthMm * scaleToFitWidth, requiredHeightMm);

        if (elementToRemove) {
          elementToRemove.style.display = "block";
        }

        pdf.save(`document_${Date.now()}.pdf`);
      })
      .catch(err => {
        console.error("Error processing images or generating PDF:", err);
      });
  };


  return (
    <div className="consulting_form">

      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-blck">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to={"/consultation"}>
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* search header */}
      <section className="search-header print-form">
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
          <div ref={componentRef}>
            <Row>
              <div className="col-lg-12">
                <div className="prev_main">
                  <img
                    src={
                      require("../../src/assets/img/right-arrow.svg").default
                    }
                    alt="arrow"
                    className="arrow-next-green"
                  />
                  <NavLink onClick={() => navigate(-1)} class="prev_result">
                    Back
                  </NavLink>
                </div>
              </div>
              <div className="hide">
                <img src={require("../assets/img/logo.png")} alt="logo" />
              </div>
              <Col xs={12} md={12}>
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
              </Col>
            </Row>
            <div ref={targetRef} id="divToPrint">
              <Row>
                <Col xs={12} md={9}>
                  <div>
                    <h2 style={{ marginBottom: "10px" }}>{completed_consultation_by_id?.salonId?.salonname}</h2>
                    <h2 style={{ marginBottom: "10px" }}>{completed_consultation_by_id?.form_title}</h2>
                    <p className="mt-3 mb-0" style={{ lineHeight: "20px", fontSize: "16px" }}>
                      {
                        completed_consultation_by_id?.consultationId
                          ?.form_description
                      }
                    </p>
                    <p className="mt-2" >
                      Client:{" "}
                      {completed_consultation_by_id?.customerId?.first_name +
                        " " +
                        completed_consultation_by_id?.customerId?.last_name}
                    </p>
                  </div>
                </Col>
              </Row>

              <form
                onSubmit={formik.handleSubmit}
                className="symptoms_form consult-form mt-4"
              >
                <div className="row">

                  {completed_consultation_by_id?.consultationId?.question?.map(function (
                    question_object,
                    i
                  ) {
                    return (
                      <>
                        {
                          <div className="col-lg-12 printable-item" key={i}>
                            <div className="form_box">
                              {
                                <label>
                                  <span>{i + 1}.</span>{" "}
                                  {question_object.optiontype == 5
                                    ? ""
                                    : question_object.question}
                                </label>
                              }
                              {(() => {
                                if (question_object.optiontype == 4) {
                                  return (
                                    <div className="create_new_form">
                                      <div className="row">
                                        {
                                          // formik.values[`clientImage${i + 1}`]
                                          //     ?.img1 &&
                                          <div className="col-6">
                                            <div className="upload_img_div">
                                              {formik.values[
                                                `clientImage${i + 1}`
                                              ]?.img1 ? (
                                                <img
                                                  src={
                                                    process.env
                                                      .REACT_APP_HOST_NAME +
                                                    "Adminquestionimage/" +
                                                    formik.values[
                                                      `clientImage${i + 1}`
                                                    ]?.img1
                                                  }
                                                />
                                              ) : (
                                                <p>Upload image</p>
                                              )}
                                            </div>
                                          </div>
                                        }
                                        {
                                          // formik.values[`clientImage${i + 1}`]
                                          //     ?.img2 &&
                                          <div className="col-6">
                                            <div className="upload_img_div">
                                              {formik.values[
                                                `clientImage${i + 1}`
                                              ]?.img2 ? (
                                                <img
                                                  src={
                                                    process.env
                                                      .REACT_APP_HOST_NAME +
                                                    "Adminquestionimage/" +
                                                    formik.values[
                                                      `clientImage${i + 1}`
                                                    ]?.img2
                                                  }
                                                />
                                              ) : (
                                                <p>Upload image</p>
                                              )}
                                            </div>
                                          </div>
                                        }
                                      </div>
                                    </div>
                                  );
                                } else if (question_object.optiontype == 5) {
                                  return (
                                    <div className="declaration">
                                      <label>Declaration</label>
                                      <p> {question_object.question}</p>
                                      <div className="d-flex justify-content-end">
                                        <label>
                                          {question_object?.confirmation ||
                                            "I Confirm"}
                                        </label>
                                        <input
                                          type="checkbox"
                                          name={`dynamicQues${i + 1}`}
                                          value={
                                            formik.values[`dynamicQues${i + 1}`]
                                          }
                                          checked={
                                            formik.values[`dynamicQues${i + 1}`]
                                          }
                                        />
                                      </div>
                                    </div>
                                  );
                                } else if (question_object.optiontype == 6) {
                                  const isSignatureCompleted = formik.values[`signature${i + 1}`];
                                  return (
                                    // <Signaturecompo
                                    //   formik={formik}
                                    //   index={i}
                                    //   isCompleted={isSignatureCompleted}
                                    // />
                                    <SignatureComponentSIgned
                                      formik={formik}
                                      index={i}
                                      isCompleted={isSignatureCompleted}
                                    />

                                  );
                                }
                              })()}

                              {question_object.optiontype == 2 ? (
                                <div className="consult_form">
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="2"
                                    placeholder="Enter your answer here"
                                    name={`dynamicQues${i + 1}`}
                                    value={formik.values[`dynamicQues${i + 1}`]}
                                    disabled
                                  ></textarea>
                                </div>
                              ) : (
                                (question_object.optiontype == 0 ||
                                  question_object.optiontype == 1 ||
                                  question_object.optiontype == 3) && (
                                  <div
                                    className={
                                      question_object.optiontype == 3
                                        ? " options-form-images"
                                        : " options_form"
                                    }
                                  >
                                    {question_object?.options?.map(function (
                                      option,
                                      optionindex
                                    ) {
                                      return (
                                        <>
                                          <div
                                            className="form-check"
                                            key={optionindex}
                                          >
                                            {(() => {
                                              if (
                                                question_object.optiontype == 3
                                              ) {
                                                return (
                                                  <img
                                                    src={
                                                      process.env
                                                        .REACT_APP_HOST_NAME +
                                                      "/Adminquestionimage" +
                                                      option[
                                                      `imagename${optionindex + 1
                                                      }`
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
                                                      className={
                                                        question_object.optiontype ==
                                                          0
                                                          ? "form-radio-input"
                                                          : "form-check-input"
                                                      }
                                                      type={
                                                        question_object.optiontype ==
                                                          0
                                                          ? "radio"
                                                          : "checkbox"
                                                      }
                                                      name={
                                                        question_object.optiontype ==
                                                          0
                                                          ? `radioQues${i + 1}`
                                                          : `checkBoxQues${i + 1
                                                          }`
                                                      }
                                                      value={`option${optionindex + 1
                                                        }`}
                                                      checked={
                                                        question_object.optiontype ==
                                                          0
                                                          ? formik.values[
                                                            `radioQues${i + 1
                                                            }`
                                                          ]?.answer ==
                                                          `option${optionindex + 1
                                                          }`
                                                          : formik.values[
                                                            `checkBoxQues${i + 1
                                                            }`
                                                          ]?.some(
                                                            (data) =>
                                                              data.answer ==
                                                              `option${optionindex +
                                                              1
                                                              }`
                                                          )
                                                      }
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
                                          <div className="error_msg consult-view">
                                            {question_object.optiontype == 0
                                              ? formik.values[
                                                `radioQues${i + 1}`
                                              ]?.answer ==
                                              `option${optionindex + 1}` &&
                                              option?.custommessage
                                              : formik.values[
                                                `checkBoxQues${i + 1}`
                                              ]?.includes(
                                                `option${optionindex + 1}`
                                              ) && option?.custommessage}
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        }
                      </>
                    );
                  })}
                </div>

                <h2
                  className="mb-2"
                  style={{ fontSize: "17px", textAlign: "center" }}
                >
                  After Treatment Notes
                </h2>

                {completed_consultation_by_id?.documents?.map(function (object) {

                  const createdAt = moment(object?.createdAt);
                  const now = moment();
                  const isEditable = now.diff(createdAt, "minutes") <= 60;

                  return (
                    <div className="form_card print-hide">
                      <div className="past-consult-add">
                        <div className="notes-buttons">

                          {isEditable && (
                            <>
                              <button
                                onClick={() => {
                                  setentry_typeedit(object?.entry_type);
                                  setnotesedit(object?.notes);
                                  setdocumentid(object?._id);

                                  setImages();

                                  const imageUrls = object?.images?.map(
                                    (file) =>
                                      process.env.REACT_APP_HOST_NAME +
                                      "completedconsultationimages/" +
                                      file
                                  );

                                  setImages(imageUrls); //

                                  handleShowEdit();
                                }}
                              >
                                <img
                                  src={
                                    require("../assets/img/pencil-edit.svg").default
                                  }
                                />
                              </button>

                              <button
                                onClick={() => {
                                  setdocumentid(object?._id);
                                  handleShow();
                                }}
                              >
                                {" "}
                                <img
                                  src={require("../assets/img/closeconsult.png")}
                                />
                              </button>
                            </>
                          )}

                        </div>
                        <h3>
                          {/* {moment(object?.createdAt).format(
                            "DD/MM/YYYY HH:MM A"
                          )} */}
                          {moment(object?.createdAt).local().format("DD/MM/YYYY HH:mm A")}

                        </h3>
                        <h2>{object?.entry_type}</h2>
                        <p>
                          {object?.notes == "undefined" ? "" : object?.notes}
                        </p>
                        <div className="view-images-set">
                          {object?.images?.map(function (file) {
                            return (
                              <img
                                src={
                                  process.env.REACT_APP_HOST_NAME +
                                  "completedconsultationimages/" +
                                  file
                                }
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div id="multiple">
                  <div
                    className={
                      "form_card past-consult-section " + keynotessection
                    }
                  >
                    {" "}
                    <div className="row">
                      <div className="col-12  text-center justify-content-center">
                        <h2 className="mb-2">New Entry</h2>
                        {/* <p className="mt-0 text-center" style={{ color: "#000" }}>
                        Please include any after photos & detail any products
                        used, any adverse reactions
                      </p> */}
                      </div>
                    </div>
                    <div className="notes-add-field">
                      <input
                        type="text"
                        placeholder="Entry Type"
                        className="form-control"
                        value={entry_type}
                        onChange={(e) => {
                          setentry_type(e.target.value);
                        }}
                      />{" "}
                    </div>
                    <div className="notes-add-field">
                      <div className="text-field">
                        <textarea
                          rows={3}
                          placeholder="Add Notes"
                          value={notes}
                          onChange={(e) => {
                            setNotes(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-left mt-0 mx-auto">
                      <div className="view-images-set">
                        {notesedit == "" &&
                          images?.map(function (file) {
                            return <img src={file} />;
                          })}
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center mt-0 mx-auto">
                      <div className="upload-consult-main">
                        <button className="upload-images-consult">
                          Upload Images
                        </button>
                        <input
                          type="file"
                          className="form-control upload-input"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files);
                            setImagess(files);
                            const imageUrls = files.map((file) =>
                              URL.createObjectURL(file)
                            );
                            console.log(imageUrls);
                            setImages(imageUrls); // Assuming setImages expects an array of URLs
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center mt-4 mx-auto">
                      <button
                        className="white-box-link nav-link"
                        onClick={addimagesandNotes}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>


              </form>
            </div>
          </div>
        </div>
      </section>

      {/* search list */}

      <Modal show={showEdit} onHide={handleCloseEdit} className="" size="lg">
        <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
        <Modal.Body>
          {" "}
          <div className="form_card mt-0 pt-0" style={{ border: "0" }}>
            {" "}
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <h2>Edit Entry</h2>
              </div>
            </div>
            <div className="notes-add-field">
              <input
                type="text"
                placeholder="Entry Type"
                className="form-control"
                value={entry_typeedit}
                onChange={(e) => {
                  setentry_typeedit(e.target.value);
                }}
              />{" "}
            </div>
            <div className="notes-add-field">
              <div className="text-field">
                <textarea
                  rows={3}
                  placeholder="Add Notes"
                  value={notesedit}
                  onChange={(e) => {
                    setnotesedit(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-left mt-0 mx-auto">
              <div className="view-images-set">
                {images.map(function (file) {
                  return <img src={file} />;
                })}
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center mt-0 mx-auto">
              <div className="upload-consult-main">
                <button className="upload-images-consult">Upload Images</button>
                <input
                  type="file"
                  className="form-control upload-input"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setImagess(files);
                    const imageUrls = files.map((file) =>
                      URL.createObjectURL(file)
                    );
                    console.log(imageUrls);
                    setImages(imageUrls); // Assuming setImages expects an array of URLs
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center mt-4 mx-auto">
              <button
                className="white-box-link nav-link"
                onClick={addimagesandNotesupdate}
              >
                Update
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
        <Modal.Body>
          <div className="permission-popup text-center">
            <p> Are You Sure to Delete This Note</p>
          </div>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-center"
          style={{ border: "0" }}
        >
          <div className="submit-btn schedule p-0">
            <button
              type="submit"
              class="btn mb-3"
              onClick={() => {
                dispatch(
                  DeleteimagesandNotesAction({
                    documentid: documentid,
                  })
                ).then(function () {
                  dispatch(fetchCompletedConsultationById(idvalue));
                  setshow(false);
                });
              }}
            >
              Delete
            </button>
          </div>
          <div className="cancel-btn" onClick={handleClose}>
            <button type="submit" class="btn mb-3">
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewConsultationForClient;
