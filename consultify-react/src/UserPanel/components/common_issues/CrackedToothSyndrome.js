import React, { useRef, useState } from 'react'
import { LayoutBlackTop } from '../../Layout/LayoutBlackTop'
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import OtherCommonIssues from './OtherCommonIssues';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import TrustPilot from '../homepage/TrustPilot';
const CrackedToothSyndrome = () => {
  const ref = useRef()
  const [crackedTooth] = useState("CRACKED_TOOTH")
  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'px', 'a4');
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight()
    // (imgProperties.height * pdfWidth) / imgProperties.width;
    // console.log(pdfHeight,pdfWidth);

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Toothaid.pdf');

  };

  return (
    <>
      <LayoutBlackTop>
        <div id="wrapper">

          <div ref={ref}>
            <section className="gum-disease common_issues_detailPage">
              <div className="container-fluid container_inner_width">
                <div className="banner-content">
                  <h1 className="mb-2">Cracked tooth syndrome </h1>
                  {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                  <p>
                    A crack starting in the outer surface of the tooth, resulting in sharp pain on biting or release of bite due to movements in the tooth. These movements, in combination with bacteria being allowed to enter the tooth, lead to irritation of the nerve.
                  </p>
                </div>
              </div>
            </section>

            <section className="trust_wrapper position-relative">
              <div className="banner_btm">
                <div className="btm_logo d-none">
                  <img
                    src={logoMain}
                    alt="bottom-logo"
                    classNameName="img-fluid"
                  />
                </div>
                <TrustPilot />

                <div className="btm_ques">
                  <p onClick={() => handleDentistClick()} className="book_dentist_link">
                    Having issues? Book in online {" "}
                    <img src={expand_right} alt="right-arrow" />
                  </p>
                </div>
              </div>
            </section>

            <section className="section-divide">
              <div className="container">

                <div className='d-flex justify-content-center align-items-center mb-5'>
                  <ul className="img-section-row d-flex align-items-center">
                    <li className="list-style-none">
                      <img
                        src={require("../../../assets/images/prevention-education/teeth_prblm-2.jpg")}
                        alt=""
                      />
                      <img
                        src="images/tooth_prblm-3.jpg"
                        alt=""
                        className="ml-30"
                      />
                    </li>
                    <li className="list-style-none">
                      <img
                        src={require("../../../assets/images/prevention-education/tooth_prblm_4_new.jpg")}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="m-60 main_section_title">
                  <h2 className="text-center ">Symptoms & Causes</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="causes_box_shadow treatment_detail h-100">
                      <div>
                        <h4 className="mb-2">Symptoms</h4>
                        <ul className="causes-detail">
                          <li>
                            Pain on biting/release of bite
                          </li>
                          <li>

                            May get sensitivity to hot and cold
                          </li>
                          <li>
                            Pain may be infrequent
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="causes_box_shadow treatment_detail h-100">
                      <h4 className="mb-2">Causes</h4>
                      <ul className="causes-detail">
                        <li>
                          Grinding of teeth together
                        </li>
                        <li>
                          Teeth with large fillings, especially amalgam (metal), are weaker and more susceptible to cracking
                        </li>
                        <li>
                          Biting very hard foods
                        </li>
                        <li>
                          Trauma
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
                  <h2 className="text-center ">Treatment</h2>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="causes_box_shadow treatment_detail">
                      <div>

                        <ul className="causes-detail">
                          <li>
                            In early stages it may be managed with an adhesive restoration such as composite in combination with cuspal coverage (i.e. cover the biting surface of the tooth).
                          </li>
                          <li>

                            However, if the cracked tooth leads to the nerve of the tooth to become irreversibly inflamed the only solution for the pain would be either root canal treatment + crown or removal of the tooth.
                          </li>
                          <li>
                            If the crack extends too below the gum line or into the root the tooth may become unsavable and require extraction
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
          <OtherCommonIssues crackedTooth={crackedTooth} />

        </div>
      </LayoutBlackTop>
    </>
  )
}

export default CrackedToothSyndrome