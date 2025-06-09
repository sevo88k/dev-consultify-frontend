import React from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LayoutHome from "../../Layout/LayoutHome";
import LayoutSymtom from "../../Layout/LayoutSymtom";
import LpSymtomCheckerTwo from "../lp_symtom_checker/LpSymtomCheckerTwo";
import TrustPilot from "./TrustPilot";

export default function Homepage() {
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
      <LayoutHome>
        <div id="wrapper">
          <section className="banner-img">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-0">
                  Get Expert Advice <br />
                  for Dental Emergencies
                </h1>
                <h2 className="mt-3">Get a free diagnosis within minutes</h2>
                <Link
                  to="/lp-symtom-checker-one"
                  className="btn btn-primary white-btn"
                >
                  Free Symptom Checker
                </Link>
              </div>
            </div>
          </section>
          {/* <!-- banner  end --> 
        <!-- common banner bottom part start --> */}
          <section className="trust_wrapper position-relative">
            <div className="banner_btm">
              <div className="btm_logo">
           
           
                {/* <img src={logoMain} alt="bottom-logo" className="img-fluid" /> */}
              </div>
              <TrustPilot />
              <div className="btm_ques">
                <p
                onClick={()=>handleDentistClick()} className="book_dentist_link"
                >
                  Having issues? Book in online{" "}
                  <img src={expand_right} alt="right-arrow" />
                </p>
              </div>
            </div>
          </section>
          {/* <!-- common banner bottom part end -->
        
        <!-- Tooth-aid problems start --> */}
          <section className="tooth-aid-prblms common-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center mb-5">
                    Are you experiencing any of the following?
                  </h2>
                  <div className="problems-content hm-prblm-sect">
                    <div className="row">
                      <div className="col-md-6 inner_prblm_detail inner-prblm_img d-flex justify-content-end prblm_img">
                        <div
                          onClick={() =>
                            navigate("/lp-symtom-checker-dental-pain")
                          }
                          className="position-relative img_text"
                        >
                          <img
                            src={require("../../../assets/images/problems/filling-issue.png")}
                            className="img-fluid"
                            alt="tooth-ache"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Dental pain
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-6 inner_prblm_detail inner-prblm_img_end d-flex justify-content-start prblm_img">
                        <div
                          onClick={() =>
                            navigate("/lp-symtom-checker-jaw-ache")
                          }
                          className="position-relative img_text"
                        >
                          <img
                            src={require("../../../assets/images/problems/abcesses.png")}
                            className="img-fluid"
                            alt="abcesses"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Jaw Ache
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-6 inner_prblm_detail inner-prblm_img d-flex justify-content-end prblm_img">
                        <div
                          onClick={() =>
                            navigate("/lp-symtom-checker-headaches-migration")
                          }
                          className="position-relative img_text"
                        >
                          <img
                            src={require("../../../assets/images/problems/tooth-ache.png")}
                            className="img-fluid"
                            alt="filling-issue"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Headaches/Migraines
                          </h3>
                        </div>
                      </div>
                      <div className="col-md-6 inner_prblm_detail inner-prblm_img_end d-flex justify-content-start prblm_img">
                        <div
                          onClick={() => navigate("/lp-symtom-checker-ulcers")}
                          className="position-relative img_text"
                        >
                          <img
                            src={require("../../../assets/images/problems/ulcers.png")}
                            className="img-fluid"
                            alt="ulcers"
                          />
                          <h3 className="position-absolute absolute-txt">
                            Ulcers
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="problems-content">
                  <div className="row">
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/tooth-ache.png")}
                          className="img-fluid"
                          alt="tooth-ache"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Tooth Ache
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/ulcers.png")}
                          className="img-fluid"
                          alt="ulcers"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Ulcers
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/imp-issues.png")}
                          className="img-fluid"
                          alt="imp-issues"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Implant Issues
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/dent-issue.png")}
                          className="img-fluid"
                          alt="denture-isssue"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Denture Issues
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/swelling.png")}
                          className="img-fluid"
                          alt="swelling"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Swelling
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/abcesses.png")}
                          className="img-fluid"
                          alt="abcesses"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Abcesses
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/bleeding-gums.png")}
                          className="img-fluid"
                          alt="bleeding-gums"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Bleeding Gums
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/cracked-tooth.png")}
                          className="img-fluid"
                          alt="cracked-tooth"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Cracked Tooth
                        </h3>
                      </a>
                    </div>
                    <div onClick={() => navigate("/lp-symtom-checker-one")} className="col-4 inner_prblm_detail">
                      <a href="#" className="position-relative img_text">
                        <img
                          src={require("../../../assets/images/problems/filling-issue.png")}
                          className="img-fluid"
                          alt="filling-issue"
                        />
                        <h3 className="position-absolute absolute-txt">
                          Filling Issues
                        </h3>
                      </a>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Tooth-aid problems end -->

        <!-- About-us start --> */}
          <section className="about-us common-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6 justify-content-center align-items-center d-flex logo_none logo_width">
                  <img
                    src={require("../../../assets/images/blck-logo.png")}
                    alt="black-logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="about-us-title d-flex justify-content-between align-items-center mb-3">
                    <h2>What we do</h2>
                    <div className="side_logo">
                      <img
                        src={require("../../../assets/images/logo-short.png")}
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <p>
                  We have worked hard to be able to bring you the Formula 1 of emergency dental treatment. Book with us now to help rapidly diagnose and treat your dental pain.{" "}
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis viverra mi et diam cursus consectetur. Etiam ac congue
                    nunc. Aenean id dignissim nulla. Vivamus suscipit iaculis
                    turpis, vel ornare diam. Mauris blandit dapibus arcu, in
                    ultricies mauris molestie non. Integer tincidunt tellus quis
                    dolor sagittis, in hendrerit ligula egestas.{" "}
                  </p> */}
                  <div className="d-flex justify-content-end learn_more_btn">
                    <Link to="/about" className="btn btn-primary white-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About-us end -->

        <!-- Video-Section start --> */}
          <section className="video_data position-relative">
            <div className="videoCoverImage">
              <div onClick={() => {}}>
                <img
                  className="thumb"
                  style={{ cursor: "pointer" }}
                  src={require("../../../assets/images/blogs/video-thumb.png")}
                />
              </div>
              <div id="thevideo" style={{ display: "none" }}>
                <iframe
                  width="100%"
                  height="640"
                  src="https://www.youtube.com/embed/fm208EgQUoU"
                  frameBorder="0"
                  allowFullScreen=""
                  include=""
                  control=""
                ></iframe>
              </div>
            </div>
          </section>
          {/* <!-- Video-Section end -->

        <!-- Discover-Section start --> */}
          <section className="discover common-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center mb-5">Discover</h2>
                  <div className="discover-content">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-2 col-4 features">
                       
                          <img
                            src={require("../../../assets/images/discover/video-consultation.png")}
                            className="img-fluid"
                            alt="video-consultation"
                          />
                          <h3>
                            Video <br />
                            Consultation
                          </h3>
                        
                      </div>
                      <div className="col-md-2 col-4 features">
                        
                          <img
                            src={require("../../../assets/images/discover/online-prescription.png")}
                            className="img-fluid"
                            alt="online-prescription"
                          />
                          <h3>
                            Online <br />
                            Prescriptions
                          </h3>
                      
                      </div>
                      <div className="col-md-2 col-4 features">
                       
                          <img
                            src={require("../../../assets/images/discover/industry-updates.png")}
                            className="img-fluid"
                            alt="industry-updates"
                          />
                          <h3>
                            Industry <br />
                            Updates
                          </h3>
                      
                      </div>
                      <div className="col-md-2 col-4 features">
                        
                          <img
                            src={require("../../../assets/images/discover/expert-guidance.png")}
                            className="img-fluid"
                            alt="expert-guidance"
                          />
                          <h3>
                            Expert <br />
                            Guidance
                          </h3>
                       
                      </div>
                      <div className="col-md-2 col-4 features">
                          <img
                            src={require("../../../assets/images/discover/treatment-advice.png")}
                            className="img-fluid"
                            alt="treatments-advice"
                          />
                          <h3>
                            Treatments & <br />
                            Advice
                          </h3>                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Discover-Section end -->

        <!-- Logos-Section start --> */}
          <section className="logos common-padding">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div className="logo-img">
                    <img
                      src={require("../../../assets/images/logos/bbc-logo.png")}
                      alt="bbc-logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="logo-img">
                    <img
                      src={require("../../../assets/images/logos/daily-mail.png")}
                      alt="daily-mail"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="logo-img">
                    <img
                      src={require("../../../assets/images/logos/guardian-logo.png")}
                      alt="guardian-logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="logo-img">
                    <img
                      src={require("../../../assets/images/logos/cosmopolitan.png")}
                      alt="cosmopolitan"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--  Logos-Section end -->

        <!-- Testimonial start --> */}
          <section className="testimonial ">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-4  d-none d-lg-block">
                  <ol className="carousel-indicators tabs">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/1.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/2.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/3.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                  </ol>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <div
                    id="carouselExampleIndicators"
                    data-interval="false"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/1-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/2-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/3-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/4-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/5-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="quote-wrapper">
                          <img
                            src={require("../../../assets/images/testimonial/6-lg.png")}
                            className="img-fluid"
                            alt="testimonial-img"
                          />
                          <p>
                            “ ToothAid came to the rescue when I couldn’t get an
                            appointment with my local practitioner. Great
                            service. “
                          </p>
                          <h3>Tim, Suffolk</h3>
                        </div>
                      </div>
                    </div>
                    <ol className="carousel-indicators indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-4  d-none d-lg-block">
                  <ol className="carousel-indicators tabs">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/4.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/5.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="5"
                    >
                      <figure>
                        <img
                          src={require("../../../assets/images/testimonial/6.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                      </figure>
                    </li>
                  </ol>
                  {/* <!-- <ol className="carousel-indicators indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                            </ol> --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Testimonial start / end-->
            
        <!-- Call-to-action start --> */}
          {/* <!-- Call-to-action end -->
        
        <!-- Footer Start --> */}
          {/* <!-- Footer End --> */}
        </div>
      </LayoutHome>
    </>
  );
}
