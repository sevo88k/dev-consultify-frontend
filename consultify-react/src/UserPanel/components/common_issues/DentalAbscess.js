import React, { useRef, useState } from "react";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import OtherCommonIssues from "./OtherCommonIssues";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import TrustPilot from "../homepage/TrustPilot";
const DentalAbscess = () => {
  const [dentalAb] = useState("DENTAL_AB")
  const ref = useRef()
  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'px', 'a4');
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Toothaid.pdf');

  };

  return (
    <>

      <LayoutBlackTop>

        <div ref={ref} id="wrapper">
          <section className="gum-disease common_issues_detailPage">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-2">Dental Abscess</h1>

                <p>
                  A gum swelling due to a collection of pus. This infection is
                  caused by bacterium at the bottom of the root of your tooth or
                  bacteria in the surrounding gum.
                </p>
              </div>
            </div>
          </section>
          <section className="trust_wrapper position-relative">
            <div className="banner_btm">
              <div className="btm_logo d-none">
                {/* <img
                  src={logoMain}
                  alt="bottom-logo"
                  classNameName="img-fluid"
                /> */}
              </div>
              <TrustPilot />

              <div className="btm_ques">
                <p
                  onClick={() => handleDentistClick()}
                  className="book_dentist_link"
                >
                  Having issues? Book in online {" "}
                  <img src={expand_right} alt="right-arrow" />
                </p>
              </div>
            </div>
          </section>


          <section className="section-divide">
            <div className="container">
              <div className="d-flex justify-content-center align-items-center mb-5">
                <img
                  src={require("../../../assets/images/prevention-education/tooth_prblm_6.jpg")}
                  alt="tooth-decay"
                  className="img-fluid position-relative"
                />
              </div>
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Causes & Treatment</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail abscess-box-height">
                    <div>
                      <h4 className="mb-2">Causes</h4>
                      <ul className="causes-detail">
                        <li>
                          <span>Periapical abscess- </span>This is an abscess
                          that forms at the bottom of the root of a tooth.
                          Origin- Overtime bacteria that cause tooth decay work
                          their way down the root canal of the tooth and then
                          collect at the bottom of the root tip. Your body
                          fights this bacterium using white blood cells. Pus is
                          a combination of white blood cells, dead tissue, and
                          bacteria. Pus can eventually work its way through the
                          bone surrounding the root tip into the surrounding gum
                          forming a swelling (abscess)
                        </li>

                        <li>
                          <span>Periodontal abscess- </span>A collection of pus
                          in the gum around a tooth. Origin- Gum disease
                          overtime cause swollen gums which pull away from the
                          tooth forming pockets of space for bacteria to enter
                          around the tooth. As these pockets deepen and bacteria
                          work their way down, pus will collect in the gum
                          around the tooth forming an abscess
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail abscess-box-height">
                    <h4 className="mb-2">Treatment</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>For periapical abscess</span>
                        <ul>
                          <li>Root canal treatment</li>
                          <li>
                            Extraction if root canal not possible or has failed
                          </li>
                          <li>Incise and drainage</li>
                          <li>Antibiotics oral or I.V.</li>
                        </ul>
                      </li>
                      <li>
                        <span>For periodontal abscess</span>
                        <ul>
                          <li>
                            A deep clean around the gums (root surface
                            debridement)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Symptoms & Types</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail abscess-symptom-box">
                    <h4 className="mb-2">Symptoms</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Acute dental abscess-</span>
                        Mild to severe pain, localised red swelling, tooth is
                        raised, tenderness to biting, pus discharge when
                        swelling is pressed, fever and raised lymph nodes
                        (systemic involvement)
                      </li>
                      <li>
                        <span>Symptoms of chronic dental abscess-</span>
                        No pain or dull pain, slightly raised tooth, tooth may
                        be loose, intermittent pus discharge through a swelling
                        near the tooth (sinus tract), usually without systemic
                        involvement, present for weeks/months/years
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail abscess-symptom-box">
                    <div>
                      <h4 className="mb-2">Types</h4>
                      <ul className="causes-detail">
                        <li>
                          <span>Acute- </span>a sudden flare up with pain and
                          swelling due to a bacterial infection
                        </li>

                        <li>
                          <span>Chronic- </span>a slower developing infection
                          that has been present for a long time, but the body’s
                          immune defence has managed to stop the infection from
                          flaring acutely so far
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-divide p-120-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 justify-content-center align-items-center d-flex short-logo">
                  <img
                    src={require("../../../assets/images/logo-short.png")}
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="about-us-title d-flex justify-content-center align-items-center mb-3">
                    <h2>Dr. Adam Patel Says</h2>
                  </div>
                  <p>
                    Almost all problems can be avoided by attending for your
                    regular 6 monthly checkups and ensuring good quality oral
                    hygiene methods at home!
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <a onClick={handleDownloadPdf} className="white-btn download_btn">
                      Download Our Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <OtherCommonIssues dentalAb={dentalAb} />

      </LayoutBlackTop>

    </>
  );
};

export default DentalAbscess;
