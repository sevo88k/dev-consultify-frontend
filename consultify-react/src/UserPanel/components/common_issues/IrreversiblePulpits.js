import React, { useRef, useState } from "react";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import OtherCommonIssues from "./OtherCommonIssues";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import TrustPilot from "../homepage/TrustPilot";

const IrreversiblePulpits = () => {
  const [irreversible] = useState("IRREVERDIBLE");
  const ref = useRef()
  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Toothaid.pdf');
  };
  return (
    <>
      <LayoutBlackTop>
        <div id="wrapper">

          {/* <!-- header start --> */}
          {/* <!-- header end -->
     <!-- banner  start --> */}
     <div ref={ref}>
          <section className="gum-disease common_issues_detailPage">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-2">Irreversible pulpitis </h1>
                 
                <p>
                  When the nerve of the tooth becomes so inflamed to the point
                  that it can’t be saved and returned to a healthy state. This
                  will occur if pulpitis remains untreated.
                </p>
              </div>
            </div>
          </section>
         
          <section className="trust_wrapper position-relative">
            <div className="banner_btm">
              <div className="btm_logo d-none">
              </div>
                <TrustPilot />
              <div className="btm_ques">
                <p
                  onClick={() => handleDentistClick()}
                  className="book_dentist_link"
                >
                  Having issues? Book in online{" "}
                  <img src={expand_right} alt="right-arrow" />
                </p>
              </div>
            </div>
          </section>
          

          <section className="section-divide irreversible_pulpitis">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Symptoms & Treatment</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail h-400">
                    <div>
                      <h4 className="mb-2">Symptoms</h4>
                      <ul className="causes-detail">
                        <li>
                          A generalised, spontaneous, constant and at times dull
                          throbbing pain from/around the affected tooth
                        </li>
                        <li>
                          The pain is usually stimulated by hot and cold and can
                          linger for a few minutes and even up to a few hours.
                        </li>
                        <li>sleep may become disturbed</li>
                        <li>painkillers begin to have little to no effect</li>
                        <li>
                          The pain becomes more localised as the infection
                          starts to spread to the tissues surrounding the apex
                          of the tooth.
                        </li>
                        <li>Tooth becomes painful to bite on.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail h-400">
                    <h4 className="mb-2">Treatment</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Short term- </span>A dentist can open the roof of
                        the nerve chamber, releasing the pressure as well as
                        removing some of the infected nerve tissue and place a
                        dressing to temporarily reduce the inflammation and
                        resolve the pain. This is known as{" "}
                        <span>extirpation</span>
                      </li>
                      <li>
                        <span>Long term- </span>
                        the source of the infection (i.e the infected nerve
                        tissue) needs to be removed. There are two to achieve
                        this
                        <ul>
                          <li>
                            <span>Root canal treatment- </span>which involves
                            the complete removal of the nerve and the
                            disinfection of the canal(s) that the infected nerve
                            tissues were once in; with the addition of a cap on
                            the tooth (a crown) to protect the tooth from
                            breaking in the majority of cases.
                          </li>
                          <li>
                            <span>Removal of the tooth</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
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
          {/* <!-- Guide Section end -->
      

    <!--other common issues image start--> */}
    </div>
          <OtherCommonIssues irreversible={irreversible} />
           
          {/* <!--other common issues image end-->

<!-- Call-to-action start --> */}
          {/* <!-- Call-to-action end -->

   <!-- Footer Start --> */}

          {/* <!-- Footer End --> */}
        </div>
      </LayoutBlackTop>
    </>
  );
};

export default IrreversiblePulpits;
