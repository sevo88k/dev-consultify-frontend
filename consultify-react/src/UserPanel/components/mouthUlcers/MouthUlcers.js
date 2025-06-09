import React, { useState, useEffect } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import Modal from "react-bootstrap/Modal";
import OtherCommonIssues from "../common_issues/OtherCommonIssues";

const MouthUlcers = () => {
  const { type } = useParams();
  const [viewVal, setShowVal] = useState(false);
  useEffect(() => {
    if (type == "pd") {
      setShowVal(true);
    }
  }, []);

  const handleClose = () => {
    setShowVal(false);
  };
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
        <Modal
          show={viewVal}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="admin-popup provisional-popup"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h4> Provisional Diagnosis</h4>
            <div className="table-responsive table-defaut-design text_inner">
              From the information you've provided, we have concluded a
              provisional diagnosis. For a more accurate diagnosis, please book
              a consultation with one of our team.
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className="btn_submit ">
              <button
                onClick={handleClose}
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
              >
                Okay
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <div id="wrapper">
          {/* <!-- header start --> */}
          {/* <!-- header end -->

       <!-- banner  start --> */}
          <section className="gum-disease">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-2">Mouth Ulcers</h1>
                {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                <p>
                  The skin that lines your mouth is referred to as oral
                  epithelium. A full thickness break in the lining of this
                  epithelium results in an ulcer.
                </p>
                <p>
                  <span className="fw-500">Appearance:</span> Circular red outer
                  ring with a white/yellow/grey centre
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
          {/* <section className="section-divide">
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
                      arcu, in ultricies mauris molestie non. Integer tincidunt
                      tellus quis dolor sagittis, in hendrerit ligula egestas.
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis viverra mi et diam cursus consectetur.
                              Etiam ac congue nunc. Aenean id dignissim nulla.
                              Vivamus suscipit iaculis turpis, vel ornare diam.
                              Mauris blandit dapibus arcu, in ultricies mauris
                              molestie non. Integer tincidunt tellus quis dolor
                              sagittis, in hendrerit ligula egestas.
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis viverra mi et diam cursus consectetur.
                              Etiam ac congue nunc. Aenean id dignissim nulla.
                              Vivamus suscipit iaculis turpis, vel ornare diam.
                              Mauris blandit dapibus arcu, in ultricies mauris
                              molestie non. Integer tincidunt tellus quis dolor
                              sagittis, in hendrerit ligula egestas.
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis viverra mi et diam cursus consectetur.
                              Etiam ac congue nunc. Aenean id dignissim nulla.
                              Vivamus suscipit iaculis turpis, vel ornare diam.
                              Mauris blandit dapibus arcu, in ultricies mauris
                              molestie non. Integer tincidunt tellus quis dolor
                              sagittis, in hendrerit ligula egestas.
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
          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Causes & Treatment</h2>
              </div>
              <div className="row ">
                <div className="col-lg-6 mb-4">
                  <div className="causes_box_shadow treatment_detail">
                    <div>
                      <h4>Causes:</h4>
                      <ul className="causes-detail">
                        <li>
                          <span>Traumatic</span>-This can be: thermal e.g. burns
                          from hot food; chemical e.g. aspirin burn; an allergy
                          e.g. to foods; or mechanical e.g. repeated rubbing
                          against a sharp tooth/filling.
                        </li>
                        <li>
                          <span>Infective</span>-This can be viral or bacterial
                          e.g. HIV.
                        </li>
                        <li>
                          <span>Blood Disorders</span>-B12/Iron deficiency,
                          Anaemia, Leukaemia.
                        </li>
                        <li>
                          <span>Autoimmune disorders</span>-e.g.Behcet's
                          disease, Crohn’s disease, Chronic ulcerative
                          stomatitis.
                        </li>
                        <li>
                          <span>Idiopathic (ulcers of unknown cause)</span>o
                          Recurrent ulcers of unknown cause are a condition
                          known as recurrent apthous stomatitis (RAS). This can
                          be broken down into 3 types.
                          <ul>
                            <li>
                              Major RAS-Large ulcers {">"}1cm in diameter, take
                              several weeks to heal and leave behind scarring.
                            </li>
                            <li>
                              Minor RAS-Smaller ulcers {"<"}1cm that appear in
                              small groups and normally heal within 14 days.
                            </li>
                            <li>
                              Herpetiform RAS-Groups of very small ulcers
                              usually {"<"}3mm in diameter that can merge
                              forming a large sore, typically healing within 10.
                              days
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span>Cancer</span>-Oral cancer may present as an
                          ulcerated region in the mouth.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="causes_box_shadow treatment_detail">
                    <h4>Treatment:</h4>
                    <ul className="causes-detail">
                      <li>
                        If the ulcer is traumatic, removing the cause will allow
                        the ulcer to heal e.g. smooth a sharp part of the tooth.
                      </li>
                      <li>
                        For initial therapy, dentists can prescribe topical
                        analgesics, topical antimicrobials, topical
                        corticosteroids (mouth rinses). Organising a blood test
                        to see if you have any blood deficiencies should also be
                        carried out.
                      </li>
                      <li>
                        For recurrent cases where first line therapy has failed,
                        oral medicine specialists can prescribe systemic
                        corticosteroids and immuno-suppressants.
                      </li>
                      <li>
                        Hot, spicy, salty and acidic foods should be avoided.
                      </li>
                    </ul>
                    <h4 className="pt-4">
                      When to urgently refer to oral medicine:
                    </h4>
                    <ul className="causes-detail">
                      <li>
                        A non-healing ulcer that has been present for {">"}3
                        weeks with unknown cause.
                      </li>
                      <li>Raised, rolled or firm margin.</li>
                      <li>
                        Social history that puts you at a higher risk of oral
                        cancer e.g. smoking, alcohol use, chewing tobacco, high
                        intake of spicy foods.
                      </li>
                      <li>
                        Recurrent ulcers that are negatively impacting a
                        patient’s quality of life
                      </li>
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
      <OtherCommonIssues />
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

export default MouthUlcers;
