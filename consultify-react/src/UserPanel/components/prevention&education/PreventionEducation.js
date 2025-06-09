import React, { useState } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import LayoutHome from "../../Layout/LayoutHome";
import { NavLink } from "react-router-dom";
import TrustPilot from "../homepage/TrustPilot";

export default function PreventionEeducation() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const handleDentistClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/symptom-checker-start");
    } else {
      navigate("/userlogin");
    }
  };
  return (
    <LayoutHome>
      <div id="wrapper">
        <section className="PreventionEeducation">
          <div className="container-fluid container_inner_width">
            <div className="banner-content">
              <h1 className="mb-0">Prevention & Education</h1>
              <h2 className="mt-3">Our guides to enhanced oral health.</h2>
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
                onClick={() => handleDentistClick()}
                className="book_dentist_link"
              >
                Having issues? Book in online
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
                <div className="m-60 main_section_title">
                  <h2 className="text-center ">Common Issues</h2>
                  {/* <p className="text-center large_parah mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis viverra mi et diam cursus consectetur. Etiam ac congue
                    nunc. Aenean id dignissim nulla. Vivamus suscipit iaculis
                    turpis, vel ornare diam. Mauris blandit dapibus arcu, in
                    ultricies mauris molestie non. Integer tincidunt tellus quis
                    dolor sagittis, in hendrerit ligula egestas.{" "}
                  </p> */}
                </div>
                <div className="main_section_content">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">Tooth Cavity</h3>
                          <p className="large_parah mb-0">
                            A hole in in the tooth that has formed as a result
                            of tooth decay (caries) overtime.
                          </p>
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/tooth-decay" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">Jaw Post-Op Pain</h3>
                          <p className="large_parah mb-0">
                            Pain/Sensitivity in the weeks following the
                            placement of a filling (restoration).
                          </p>
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/jaw-problems" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">
                            Dry or Infected Socket Teeth
                          </h3>
                          <p className="large_parah mb-0">
                            A dry socket is a painful condition that occurs when
                            a blood clot fails to form in the tooth socket
                            following a tooth extraction, or if the blood clot
                            becomes dislodged or is removed. This usually
                            happens within the first 3 to 5 days after the
                            extraction procedure.
                          </p>
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/missing-teeth" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">Mouth Ulcers</h3>
                          <p className="large_parah mb-0">
                            The skin that lines your mouth is referred to as
                            oral epithelium. A full thickness break in the
                            lining of this epithelium results in an ulcer.
                          </p>
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/bad-breath" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">Dental Abscess</h3>
                          <p className="large_parah mb-0">
                            A gum swelling due to a collection of pus. This
                            infection is caused by bacterium at the bottom of
                            the root of your tooth or bacteria in the
                            surrounding gum.
                          </p>
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/dental-abscess" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/problems/swelling.png")}
                          alt="jaw-problems"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">
                            Irreversible pulpitis
                          </h3>
                          <p className="large_parah mb-0">
                            When the nerve of the tooth becomes so inflamed to
                            the point that it can’t be saved and returned to a
                            healthy state. This will occur if pulpitis remains
                            untreated.
                          </p>
                          {/* <h5 className="mt-2">Types and presentation:</h5>
                          <ul className="causes-detail">
                            <li>
                              <b>Myofascial TMD</b>This is caused by overworking
                              the muscles that control jaw movement.
                            </li>
                          </ul> */}
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link
                              to="/irreversible-pulpitis"
                              className="white-btn "
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/problems/ulcers.png")}
                          alt="Missing-teeth"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">
                            Cracked tooth syndrome{" "}
                          </h3>
                          <p className="large_parah mb-0">
                            A crack starting in the outer surface of the tooth,
                            resulting in sharp pain on biting or release of bite
                            due to movements in the tooth. These movements, in
                            combination with bacteria being allowed to enter the
                            tooth, lead to irritation of the nerve.
                          </p>
                          {/* <h5 className="mt-2">Causes:</h5>
                          <ul className="causes-detail">
                            <li>
                              <b>Traumatic</b>-This can be: thermal e.g. burns
                              from hot food; chemical
                            </li>
                          </ul> */}
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link
                              to="/cracked-tooth-syndrome"
                              className="white-btn"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/problems/dent-issue.png")}
                          alt="Missing-teeth"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">
                            Reversible pulpitis
                          </h3>
                          <p className="large_parah mb-0">
                            Reversible inflammation of the nerve of the tooth
                          </p>

                          {/* <h5 className="mt-2">Causes:</h5>
                          <ul className="causes-detail">
                            <li>
                              fail to follow your dentist's instructions after
                              the procedure
                            </li>
                          </ul> */}
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link
                              to="/reversible-pulpitis"
                              className="white-btn "
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="gum-disease"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">TMD</h3>
                          <p className="large_parah mb-0">
                            Temporomandibular joint disorder (TMD) is
                            characterised by pain or dysfunction around the
                            joint that controls jaw movement. This can be on one
                            or both sides of the jaw. The source of this pain
                            and dysfunction can be muscular (myofascial), an
                            issue within the joint itself (arthrogenic), or a
                            combination of the two.
                          </p>
                          {/* <h5 className="mt-2">Most common causes: </h5>
                          <ul className="causes-detail">
                            <li>
                              Plaque induced as a consequence of poor oral
                              hygiene
                            </li>
                            <li>Smoking</li>
                            <li>Genetics</li>
                          </ul> */}
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/tmd/tmd" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="reason-cards position-relative disease_detail_card">
                        <img
                          src={require("../../../assets/images/prevention-education/1.png")}
                          alt="gum-disease"
                          className="img-fluid position-relative"
                        />
                        <div className="p-4">
                          <h3 className="text-center mb-3">Pericoronitis</h3>
                          <p className="large_parah mb-0">
                            Inflammation of the soft tissues surrounding a
                            partially erupted wisdom tooth. Bacteria enters the
                            space between the overlying flap of gum (operculum)
                            and the erupting tooth causing inflammation, which
                            can lead to infection.
                          </p>
                          {/* <h5 className="mt-2">Most common causes: </h5>
                          <ul className="causes-detail">
                            <li>
                              Plaque induced as a consequence of poor oral
                              hygiene
                            </li>
                            <li>Smoking</li>
                            <li>Genetics</li>
                          </ul> */}
                          <div className="mt-4 d-flex justify-content-center align-items-center">
                            <Link to="/perico" className="white-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center learn_more_btn_link">
                    <button
                      onClick={() => navigate("/diagnosis")}
                      className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn learn_more_btn_link"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Reason for Teeth Problem / End-->

        <!-- Testimonial start --> */}
        <section className="testimonial ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 d-none d-lg-block">
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
                    <div
                      className={
                        slide == 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <div className="quote-wrapper">
                        <img
                          src={require("../../../assets/images/testimonial/1-lg.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                        <p>
                          “ ToothAid came to the rescue when I couldn’t get an
                          appointment with my local practitioner. Great service.
                          “
                        </p>
                        <h3>Tim, Suffolk</h3>
                      </div>
                    </div>
                    <div
                      className={
                        slide == 1 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <div className="quote-wrapper">
                        <img
                          src={require("../../../assets/images/testimonial/2-lg.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                        <p>
                          “ ToothAid came to the rescue when I couldn’t get an
                          appointment with my local practitioner. Great service.
                          “
                        </p>
                        <h3>Tim, Suffolk</h3>
                      </div>
                    </div>
                    <div
                      className={
                        slide == 2 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <div className="quote-wrapper">
                        <img
                          src={require("../../../assets/images/testimonial/3-lg.png")}
                          className="img-fluid"
                          alt="testimonial-img"
                        />
                        <p>
                          “ ToothAid came to the rescue when I couldn’t get an
                          appointment with my local practitioner. Great service.
                          “
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
                          appointment with my local practitioner. Great service.
                          “
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
                          appointment with my local practitioner. Great service.
                          “
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
                          appointment with my local practitioner. Great service.
                          “
                        </p>
                        <h3>Tim, Suffolk</h3>
                      </div>
                    </div>
                  </div>
                  <ol className="carousel-indicators indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className={slide == 0 ? "active" : ""}
                      onClick={() => setSlide(0)}
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                      className={slide == 1 ? "active" : ""}
                      onClick={() => setSlide(1)}
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                      className={slide == 2 ? "active" : ""}
                      onClick={() => setSlide(2)}
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
  );
}
