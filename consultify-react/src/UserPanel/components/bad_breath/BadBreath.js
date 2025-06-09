import React, { useRef, useState } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import OtherCommonIssues from "../common_issues/OtherCommonIssues";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import TrustPilot from "../homepage/TrustPilot";
export default function BadBreath() {
  const ref = useRef();
  const [badBreath] = useState("BAD_BREATH");
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
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "px", "a4");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Toothaid.pdf");
  };
  return (
    <div>
      <LayoutBlackTop>
        <div id="wrapper">
          {/* <!-- header start --> */}

          {/* <!-- header end -->
       <!-- banner  start --> */}
          <div ref={ref}>
            <section className="banner-img2">
              <div className="container-fluid container_inner_width">
                <div className="banner-content">
                  <h1 className="mb-0">Mouth Ulcers</h1>
                  <h2 className="mt-3">A Short Subheading will go here</h2>
                  <p>
                    The skin that lines your mouth is referred to as oral
                    epithelium. A full thickness break in the lining of this
                    epithelium results in an ulcer.
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- banner  end -->        
      <!-- common banner bottom part start --> */}
            <section className="trust_wrapper position-relative">
              <div className="banner_btm">
                <div className="btm_logo d-none">
                  {/* <img src={logoMain} alt="bottom-logo" className="img-fluid" /> */}
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
            {/* <!-- common banner bottom part end -->
        <!--Reason for Teeth Problem Start--> */}
            <section className="section-divide">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="m-90 main_section_title">
                      <h2 className="text-center mb-3">How it occurs</h2>
                      <p className="text-center large_parah mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis viverra mi et diam cursus consectetur. Etiam ac
                        congue nunc. Aenean id dignissim nulla. Vivamus suscipit
                        iaculis turpis, vel ornare diam. Mauris blandit dapibus
                        arcu, in ultricies mauris molestie non. Integer
                        tincidunt tellus quis dolor sagittis, in hendrerit
                        ligula egestas.
                      </p>
                    </div>
                    <div className="main_section_content">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="reason-cards position-relative">
                            <span className="position-absolute absolute-txt number">
                              1.
                            </span>
                            <img
                              src={require("../../../assets/images/problems/tooth-ache.png")}
                              alt="sugary-foods"
                              className="img-fluid position-relative"
                            />
                            <div className="p-3">
                              <h3 className="text-center mb-3">Sugary Foods</h3>
                              <p className="large_parah mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis viverra mi et diam cursus
                                consectetur. Etiam ac congue nunc. Aenean id
                                dignissim nulla. Vivamus suscipit iaculis
                                turpis, vel ornare diam. Mauris blandit dapibus
                                arcu, in ultricies mauris molestie non. Integer
                                tincidunt tellus quis dolor sagittis, in
                                hendrerit ligula egestas.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="reason-cards position-relative">
                            <span className="position-absolute absolute-txt number">
                              2.
                            </span>
                            <img
                              src={require("../../../assets/images/problems/tooth-ache.png")}
                              alt="sugary-foods"
                              className="img-fluid position-relative"
                            />
                            <div className="p-3">
                              <h3 className="text-center mb-3">Sugary Foods</h3>
                              <p className="large_parah mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis viverra mi et diam cursus
                                consectetur. Etiam ac congue nunc. Aenean id
                                dignissim nulla. Vivamus suscipit iaculis
                                turpis, vel ornare diam. Mauris blandit dapibus
                                arcu, in ultricies mauris molestie non. Integer
                                tincidunt tellus quis dolor sagittis, in
                                hendrerit ligula egestas.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="reason-cards position-relative">
                            <span className="position-absolute absolute-txt number">
                              3.
                            </span>
                            <img
                              src={require("../../../assets/images/problems/tooth-ache.png")}
                              alt="sugary-foods"
                              className="img-fluid position-relative"
                            />
                            <div className="p-3">
                              <h3 className="text-center mb-3">Sugary Foods</h3>
                              <p className="large_parah mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis viverra mi et diam cursus
                                consectetur. Etiam ac congue nunc. Aenean id
                                dignissim nulla. Vivamus suscipit iaculis
                                turpis, vel ornare diam. Mauris blandit dapibus
                                arcu, in ultricies mauris molestie non. Integer
                                tincidunt tellus quis dolor sagittis, in
                                hendrerit ligula egestas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--Reason for Teeth Problem / End-->

        <!--risk factors start--> */}
            <section className="section-divide risk_factors">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="p-185">
                      <div className="p-3 risk_factors_list">
                        <h2 className="mb-4">Risk Factors</h2>
                        <p className="large_parah mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis viverra mi et diam cursus consectetur.
                          Etiam ac congue nunc. Aenean id dignissim nulla.
                          Vivamus suscipit iaculis turpis, vel ornare diam.
                          Mauris blandit dapibus arcu, in ultricies mauris
                          molestie non. Integer tincidunt tellus quis dolor
                          sagittis, in hendrerit ligula egestas.
                        </p>
                        <ul className="common-pointers">
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                          <li>List of risk factors</li>
                        </ul>
                        <div className="d-flex duo-buttons mt-100">
                          <a href="#" className="white-btn">
                            Get in touch
                          </a>
                          <Link to="/userlogin" className="white-btn ml-80">
                            Book a Consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="d-flex justify-content-end side-img">
                      <img
                        src={require("../../../assets/images/bad-breathe/1.png")}
                        className="img-fluid"
                        alt="bad-breathe-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--risk factors end-->
         <!--blue line start--> */}
            <section className="section-divide">
              <div className="container-fluid p-0">
                <img
                  src={require("../../../assets/images/line.png")}
                  className="line_divide"
                  alt="line"
                />
              </div>
            </section>
            {/* <!--blue line end-->
        <!--Treatment & prevention start--> */}
            <section className="section-divide treatment_prevention">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="m-90 main_section_title">
                      <h2 className="text-center mb-3">
                        Treatment & Prevention
                      </h2>
                      <p className="text-center large_parah mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis viverra mi et diam cursus consectetur. Etiam ac
                        congue nunc. Aenean id dignissim nulla. Vivamus suscipit
                        iaculis turpis, vel ornare diam. Mauris blandit dapibus
                        arcu, in ultricies mauris molestie non. Integer
                        tincidunt tellus quis dolor sagittis, in hendrerit
                        ligula egestas.{" "}
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
                              <h3 className="text-center mb-3">
                                This is a treatment title
                              </h3>
                              <p className="large_parah mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis viverra mi et diam cursus
                                consectetur. Etiam ac congue nunc. Aenean id
                                dignissim nulla. Vivamus suscipit iaculis
                                turpis, vel ornare diam. Mauris blandit dapibus
                                arcu, in ultricies mauris molestie non. Integer
                                tincidunt tellus quis dolor sagittis, in
                                hendrerit ligula egestas.
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
                              <h3 className="text-center mb-3">
                                This is a treatment title
                              </h3>
                              <p className="large_parah mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis viverra mi et diam cursus
                                consectetur. Etiam ac congue nunc. Aenean id
                                dignissim nulla. Vivamus suscipit iaculis
                                turpis, vel ornare diam. Mauris blandit dapibus
                                arcu, in ultricies mauris molestie non. Integer
                                tincidunt tellus quis dolor sagittis, in
                                hendrerit ligula egestas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis viverra mi et diam cursus consectetur. Etiam ac
                      congue nunc. Aenean id dignissim nulla. Vivamus suscipit
                      iaculis turpis, vel ornare diam. “
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a
                        onClick={handleDownloadPdf}
                        className="white-btn download_btn"
                      >
                        Download Our Guide
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <!-- Guide Section end -->
        

        <!--other common issues image start--> */}
          <OtherCommonIssues badBreath={badBreath} />
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
                        onClick={()=>{window.scroll(0,0)}}
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
    </div>
  );
}
