import React from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
const DrySocket = () => {
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
                <h1 className="mb-2">Dry socket/Infected socket</h1>
                {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                <p>
                  A dry socket is a painful condition that occurs when a blood
                  clot fails to form in the tooth socket following a tooth
                  extraction, or if the blood clot becomes dislodged or is
                  removed. This usually happens within the first 3 to 5 days
                  after the extraction procedure.
                </p>
                <p>
                  Background information: Typically, a blood clotforms in the
                  socket, this protects the socket as it heals and forms the
                  foundation for new bone and soft tissue.
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
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail">
                    <div>
                      <h4>Causes:</h4>
                      <ul className="causes-detail">
                      <li>
                        Fail to follow your dentist's instructions after the
                        procedure
                      </li>
                      <li>Are a smoker</li>
                      <li>Have had a dry socket before</li>
                      <li>Are over 25 years old</li>
                      <li>Have poorly controlled diabetes</li>
                      <li>Or if the extraction was difficult or complicated</li>
                    </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail h-100">
                    <h4>Symptoms:</h4>
                    <ul className="causes-detail">
                      <li>
                        Severe ache/ throbbing pain in your jaw or gum– can
                        resemble a toothache
                      </li>
                      <li>Local swelling of the gum</li>
                      <li>Halitosis (bad breath)</li>
                      <li>Bad metallic taste</li>
                      <li>
                        Tooth socket looks empty (you may see bone instead of a
                        blood clot)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Treatment & Prevention</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail treatment_box_height">
                    <h4>Treatment:</h4>
                    <ul className="causes-detail">
                      <li>
                        See your dentist or surgeon if you think you have dry
                        socket
                      </li>
                      <li>
                        A dentist will wash out (irrigate) any debris or bony
                        fragments from the socket and then place a soothing
                        antiseptic dressing inside
                      </li>
                      <li>
                        If the pain persists after a week, this may have to be
                        repeated
                      </li>
                      <li>
                        Note: dry socket is NOT an infection, therefore
                        antibiotics are not required unless there is also an
                        infection. Your dentist will assess the need for
                        antibiotics based on your general healthand the clinical
                        presentation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail treatment_box_height">
                    <h4>Prevention:</h4>
                    <ul className="causes-detail">
                      <li>Gentle warm saltwater mouth rinses 4 times a day</li>
                      <li> Maintaining good oral hygiene</li>
                      <li>Taking regular pain relief if required</li>
                      <li>
                        Avoiding smoking and use of tobacco products or vapes
                      </li>
                      <li>Drinking plenty of clear fluids</li>
                      <li>Maintaining a healthy diet</li>
                    </ul>
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

export default DrySocket;
