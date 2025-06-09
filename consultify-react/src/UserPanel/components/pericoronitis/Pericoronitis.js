import React, { useRef, useState } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import OtherCommonIssues from "../common_issues/OtherCommonIssues";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const Pericoronitis = () => {
  const ref=useRef()
  const [pericoronitis]=useState("PERICORONITIS")
  const navigate = useNavigate();
  const handleDentistClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/symptom-checker-start");
    } else {
      navigate("/userlogin");
    }
  };

    const handleDownloadPdf = async () => {
      const element = ref.current;
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF('p', 'px', 'a4');
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =pdf.internal.pageSize.getHeight()
        // (imgProperties.height * pdfWidth) / imgProperties.width;
        // console.log(pdfHeight,pdfWidth);
   
      pdf.addImage(data, 'PNG', 0, 0, pdfWidth,pdfHeight);
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
                <h1 className="mb-2">Pericoronitis</h1>
                {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                <p>
                  Inflammation of the soft tissues surrounding a partially
                  erupted wisdom tooth. Bacteria enters the space between the
                  overlying flap of gum (operculum) and the erupting tooth
                  causing inflammation, which can leadto infection.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- banner  end --> 
     
        
        <!-- common banner bottom part start --> */}
          <section className="trust_wrapper position-relative">
            <div className="banner_btm">
              <div className="btm_logo d-none">
                <img
                  src={logoMain}
                  alt="bottom-logo"
                  classNameName="img-fluid"
                />
              </div>

              <div className="btm_ques">
                <p onClick={()=>handleDentistClick()} className="book_dentist_link">
                 Having issues? Book in online {" "}
                  <img src={expand_right} alt="right-arrow" />
                </p>
              </div>
            </div>
          </section>
          {/* <!-- common banner bottom part end -->

        <!--Reason for Teeth Problem Start--> */}

          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Types & Treatment</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail type-box-height">
                    <div>
                      <h4 className="mb-2">Types and Appearance:</h4>
                      <ul className="causes-detail">
                        <li>
                          <span>Mild pericoronitis</span>-Gum around the tooth
                          appears red and swollen, with tenderness
                        </li>
                        <li>
                          <span>
                            Moderate pericoronitis with infected operculum
                          </span>
                          -Pus, discharge, along with bad taste from this region
                        </li>
                        <li>
                          <span>Severe pericoronitis- </span>
                          The above is accompanied with facial swelling +/-
                          limited mouth opening
                        </li>
                        <li>
                          <span>Very severe pericoronitis- </span>
                          Swelling spreads to the neck or towards the eye,
                          eventually leading to trouble swallowing or breathing
                          (emergency)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail type-box-height">
                    <h4 className="mb-2">Treatment:</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Mild pericoronitis-</span>
                        Irrigation (washing out) of the space between the
                        infected gum area and the partially erupted wisdom tooth
                        using saline or corsydl.
                      </li>
                      <li>
                        <span>Moderate pericoronitis-</span>
                        Irrigation along with a course of antibiotics.
                      </li>
                      <li>
                        <span>Severe pericoronitis-</span>
                        Irrigation, antibiotics, along with removal of the
                        tooth.
                      </li>
                      <li>
                        <span>Very severe pericoronitis-</span>
                        Requires urgent medical attention in A&E. IV
                        antibiotics, removal of the tooth and hospital admission
                        is potentially need.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--Reason for Teeth Problem / End-->

  

        
         <!--blue line start--> */}
          {/* <section className="section-divide">
            <div className="container-fluid p-0">
              <img
                src={require("../../../assets/images/line.png")}
                className="line_divide"
                alt="line"
              />
            </div>
          </section> */}
          {/* <!--blue line end-->

     
        <!--Treatment & prevention start--> */}
          {/* <section className="section-divide">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="m-90 main_section_title">
                    <h2 className="text-center mb-3">Treatment & Prevention</h2>
                    <p className="text-center large_parah mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis viverra mi et diam cursus consectetur. Etiam ac
                      congue nunc. Aenean id dignissim nulla. Vivamus suscipit
                      iaculis turpis, vel ornare diam. Mauris blandit dapibus
                      arcu, in ultricies mauris molestie non. Integer tincidunt
                      tellus quis dolor sagittis, in hendrerit ligula egestas.{" "}
                    </p>
                  </div>
                  <div className="main_section_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="reason-cards position-relative">
                          <img
                            src={require("../../../assets/images/treatment/1.png")}
                            alt="treatment"
                            className="img-fluid position-relative"
                          />
                          <div className="p-3">
                            <h3 className="text-start mb-3">
                              Good oral hygiene:
                            </h3>
                            <p className="large_parah mb-0">
                              Brush x2/day, for 2 mins with fluoridated
                              toothpaste combined with daily interdental
                              cleaning (e.g., flossing or TePe brushes). Ensure
                              the tooth brushes covers the gum line.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="reason-cards position-relative">
                          <img
                            src={require("../../../assets/images/treatment/1.png")}
                            alt="treatment"
                            className="img-fluid position-relative"
                          />
                          <div className="p-3">
                            <h3 className="text-start mb-3">
                              Visits to your dentist{" "}
                            </h3>
                            <p className="large_parah mb-0">
                              3 to 6 mostly visits to your hygienist/dentist for
                              a scale and polish. This removes hard calculus and
                              plaque from the gum line, allowing the gums to
                              heal. Good oral hygiene will prevent calculus from
                              forming again
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <!--Treatment & prevention end-->
                                     
        <!-- Guide Section Start --> */}
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
      <OtherCommonIssues pericoronitis={pericoronitis} />
          {/* <section className="section-divide p-120">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main_section_title">
                    <h2 className="text-center mb-5">Other Common Issues</h2>
                  </div>
                  <div className="main_section_content ">
                    <div className="row">
                      <div className="col-md-3">
                        <Link
                          className="common_issues_inner position-relative"
                          to="/tooth-decay"
                        >
                          <img
                            src={require("../../../assets/images/problems/imp-issues.png")}
                            alt="bbc-logo"
                            className="img-fluid"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Tooth <br />
                            Decay
                          </h3>
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <Link
                          className="common_issues_inner position-relative"
                          to="/jaw-problems"
                        >
                          <img
                            src={require("../../../assets/images/problems/imp-issues.png")}
                            alt="daily-mail"
                            className="img-fluid"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Jaw <br />
                            Problems
                          </h3>
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <Link
                          className="common_issues_inner position-relative"
                          to="/missing-teeth"
                        >
                          <img
                            src={require("../../../assets/images/problems/imp-issues.png")}
                            alt="guardian-logo"
                            className="img-fluid"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Missing <br />
                            Teeth
                          </h3>
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <Link
                          className="common_issues_inner position-relative"
                          to="/bad-breath"
                        >
                          <img
                            src={require("../../../assets/images/problems/imp-issues.png")}
                            alt="cosmopolitan"
                            className="img-fluid"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Bad <br /> Breath
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
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

export default Pericoronitis;
