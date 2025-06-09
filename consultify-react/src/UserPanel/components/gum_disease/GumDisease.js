import React from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
export default function GumDisease() {
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
                <h1 className="mb-2">Gum Disease</h1>
                {/* <h2 className="mt-3"></h2> */}
                <p>
                  Reversible inflammation of the gums. The medical term for this
                  early reversible stage of gum disease is gingivitis.
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
                  Having issues? Book in with a dentist{" "}
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
                <h2 className="text-center ">Causes & Symptoms</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow causes_inner_detail">
                    <div>
                      <h4>Most common causes: </h4>
                      <ul className="causes-detail">
                        <li>
                          Plaque induced as a consequence of poor oral hygiene
                        </li>
                        <li>Smoking</li>
                        <li>Genetics</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Less common causes: </h4>
                      <ul className="causes-detail">
                        <li>
                          Plaque induced as a consequence of poor oral hygiene
                        </li>
                        <li>Smoking</li>
                        <li>Genetics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow causes_inner_detail ">
                    <h4>Signs and symptoms: </h4>
                    <ul className="causes-detail">
                      <li>Red, puffy, swollen gums</li>
                      <li>Bleeding gums when brushing/flossing</li>
                      <li>Bad breath</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--Reason for Teeth Problem / End-->

            <!--Reason for Teeth Problem Start--> */}

          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Treatment & Prevention</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="causes_box_shadow causes_inner_detail">
                    <div>
                      <h4> Good oral hygiene:</h4>
                      <p className="large_parah mb-0">
                        Brush x2/day, for 2 mins with fluoridated toothpaste
                        combined with daily interdental cleaning (e.g., flossing
                        or TePe brushes). Ensure the tooth brushes covers the
                        gum line.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-start mb-3">
                        Visits to your dentist{" "}
                      </h4>
                      <p className="large_parah mb-0">
                        3 to 6 mostly visits to your hygienist/dentist for a
                        scale and polish. This removes hard calculus and plaque
                        from the gum line, allowing the gums to heal. Good oral
                        hygiene will prevent calculus from forming again
                      </p>
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
}
