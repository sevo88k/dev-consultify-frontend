import React from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";

const Senstivity = () => {
  const navigate = useNavigate();
  const handleDentistClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/symptom-checker-start");
    } else {
      navigate("/userlogin");
    }
  };
  return (
    <>
      <LayoutBlackTop>
        <div id="wrapper">
          {/* <!-- header start --> */}
          {/* <!-- header end -->

       <!-- banner  start --> */}
          <section className="gum-disease common_issues_detailPage">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-2">Post-operative sensitivity</h1>
                {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                <p>
                  Pain/Sensitivity in the weeks following the placement of a
                  filling (restoration).
                </p>
                <p>
                  Background information: A filling is placed to repair a cavity
                  (hole) in the tooth typically caused by decay or chipping. In
                  some cases, the discomfort is simply a reaction to the process
                  of repairing the tooth. In other instances, there may be some
                  intervention required by the dentist.
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
                <h2 className="text-center ">Symptoms and Management</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="causes_box_shadow treatment_detail">
                    <div>
                      <ul className="causes-detail">
                        <li>
                          <span>Pain on biting</span>-The filling may be
                          disrupting the way your teeth normally bite together
                          (e.g. filling is too high). This can be painful to
                          bite down on due to extra pressure on that tooth. This
                          can be adjusted by your dentist.
                        </li>
                        <li>
                          <span>Toothache/sensitivity</span>-Heat produced by
                          the drill used to shape the cavity can cause
                          inflammation of the pulp (the central part of the
                          tooth containing the nerve and blood supply). As a
                          result of this, in the days following your treatment,
                          the tooth may be sensitive to sensations such as hot
                          and cold or from the pressure of biting.
                          <>
                            Note: sometimes with very deep or old fillings the
                            pulp may be unable to heal, and the pain can get
                            worse over time. In these occasions the tooth will
                            most likely need root canal treatment or extraction
                            to settle the symptoms.
                          </>
                        </li>
                        <li>
                          <span>
                            Pain from other areas of your jaw (referred pain)
                          </span>
                          -It is common to feel pain in the teeth surrounding
                          the treated tooth. This is due to the anatomy of our
                          nerves in our face and jaws and results in a
                          phenomenon called referred pain. Single nerves provide
                          sensations from multiple areas and therefore signals
                          can get confused by the brain.
                        </li>
                        <li>
                          <span>Sore gums</span>-The gums around the tooth
                          treated can be sore and tender for a few days after
                          treatment, extra bruising can also be present around
                          the area where the anaesthetic was administered
                        </li>
                        <li>
                          <span>Discomfort when chewing</span>
                          -One should try and refrain from chewing on the site of
                          any fillings for up to 24 hours after they have been
                          applied. It can take some time for the mouth to get
                          used to the new bite surface.
                        </li>
                        <li>
                          <span>Electric shock sensation</span>-This is a very
                          rare situation and occurs as a sharp pain, almost like
                          an electric shock, when two teeth with metal surfaces
                          touch. For example, when one tooth has a gold crown,
                          and the tooth above or below it has a silver filling
                          it can create a little electric shock. This typically
                          wears off after a while
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--Reason for Teeth Problem / End-->

     
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
                    Duis viverra mi et diam cursus consectetur. Etiam ac congue
                    nunc. Aenean id dignissim nulla. Vivamus suscipit iaculis
                    turpis, vel ornare diam. “
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <Link to="/about" className="white-btn download_btn">
                      Download Our Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Guide Section end -->
        

      <!--other common issues image start--> */}
          <section className="section-divide p-120">
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
          </section>
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

export default Senstivity;
