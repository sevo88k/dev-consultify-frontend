import React, { useEffect } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate } from "react-router-dom";
import LayoutHome from "../../Layout/LayoutHome";
import { useDispatch, useSelector } from "react-redux";
import { getWebsiteBlogs } from "../../../Redux/Actions/user/userAll";
export default function About() {
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.consultaions.websiteBlogs);
  useEffect(() => {
    dispatch(getWebsiteBlogs());
  }, []);
  const handleDentistClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/symptom-checker-start");
    } else {
      navigate("/userlogin");
    }
  };
  return (
    <LayoutHome>
      <div className="wrapper aboutUs toothaid-problem_page">
        <section className="banner-img ">
          <div className="container-fluid container_inner_width">
            <div className="banner-content">
              <h1 className="mb-0">About Us</h1>
            </div>
          </div>
        </section>

        <section className="trust_wrapper position-relative">
          <div className="banner_btm">
            <div className="btm_logo d-none">
              <img src={logoMain} alt="bottom-logo" className="img-fluid" />
            </div>

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

        <section className="section-divide p-120">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className=" main_section_title">
                  <h2 className="text-center mb-5 mx-width-700">
                    ToothAid: Expert Consultations On Demand
                  </h2>
                  <p className="text-center large_parah mb-0">
                    Evidence shows that almost everyone will experience
                    toothache or dental health issues at some point in their
                    life. With toothache being classified as one of the most
                    debilitating pains to experience, we here at Toothaid have
                    created on online service to offer you instant help advise
                    online from a registered UK dentist without having to wait
                    weeks to book an appointment into you local branch.{" "}
                  </p>
                  <div className="booking_btn">
                    <Link to="/userlogin" className="white-btn download_btn">
                      Book a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="box_shadow">
          <div className="container-fluid padding_none">
            <div className="row align-items-center">
              <div className="col-lg-6 p-0">
                <div className="team-img">
                  <img
                    src={require("../../../assets/images/about-us/team.png")}
                    alt="team"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main_section_title  absolute_card team_inner_details">
                  <h2 className="text-center mb-5 mx-width-700">The Team</h2>
                  <p className="text-center large_parah mb-0 mx-width-700">
                    This movement started during the covid pandemic in which
                    people were unable to get professional help and were
                    resorting to self treatment at home! A group of dentists
                    came together and decided enough was enough and how an
                    online dental service was vital to providing holistic oral
                    health care to the nation. This realisation has become more
                    apparent even after a pandemic as dental waiting lists are
                    ever growing and the NHS system is on the brink of collapse.
                  </p>
                  <div className="booking_btn">
                    <Link to="/userlogin" className="white-btn download_btn">
                      Meet the Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divide about_feature_sec">
          <div className="container padding_none ">
            <div className="row align-items-center">
              <div className="col-lg-6 p-120 padding_none">
                <div className="team-img">
                  <img
                    src={require("../../../assets/images/about-us/feature-1.png")}
                    alt="team"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main_section_title absolute_card">
                  <h2 className="text-center mb-5 mx-width-700">
                    Reputation Matters
                  </h2>
                  <p className="text-center large_parah mb-0 mx-width-700">
                    Seeing a dentist and making sure your health advice is
                    legitimate is of our utmost priority and so all online
                    consultations are carried out by GDC registered and
                    certified dental surgeons.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center feature_inner">
              <div className="col-lg-6 p-120  ">
                <div className="main_section_title absolute_card">
                  <h2 className="text-center mb-5 mx-width-700">
                    Complete clarity and openness to the patient
                  </h2>
                  <p className="text-center large_parah mb-0 mx-width-700">
                    At ToothAid, we strongly uphold the principle of complete
                    transparency. Therefore, we guarantee that all users and
                    patients have unrestricted access to their data, including
                    records of previous online consultations, prescriptions, and
                    provisional diagnoses.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 padding_none">
                <div className="team-img">
                  <img
                    src={require("../../../assets/images/about-us/feature-2.png")}
                    alt="team"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divide p-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className=" main_section_title">
                  {/* <h2 className="text-center mb-5 mx-width-700">Lorum Ipsum1</h2> */}
                  {/* <p className="text-center large_parah mb-3">
                    We are four dentists, two pairs of brothers with the twin
                    vision of making emergency and routine dental care
                    accessible to everyone.{" "}
                  </p> */}
                  <p className="text-center large_parah mb-3">
                    We are four dentists, two pairs of brothers with the twin
                    vision of making emergency and routine dental care
                    accessible to everyone. Our mission is not just to give you
                    affordable and fast access to expert dental advice and
                    practices but to provide you, the patient, with all the
                    tools needed to understand your dental problem to help
                    manage it and most importantly prevent it from happening
                    again!{" "}
                  </p>

                  <p className="text-center large_parah mb-0">
                    Between us we have worked in NHS and private general dental
                    care, emergency dental care, and the hospital sector
                    including A+E and maxillofacial surgery. Having worked in
                    the UK as well as Australia and South-East Asia, we have
                    experienced first-hand how dental care is delivered across
                    the world.{" "}
                  </p>
                  <p className="text-center large_parah mb-0">
                    The world has become an ever more remote and online place
                    and the dental sector has yet to catch up. We decided there
                    must be an easier way of finding out what the source of your
                    dental pain was, than picking up the phone and calling 111
                    or waiting on hold to try and get an appointment with your
                    busy dentist. Anyone with an internet connection should be
                    able to access dental care within a few clicks. So then we
                    teamed up with a team of tech bros and the idea of ToothAid
                    was born! Book a consultation with us now to help rapidly
                    diagnose and treat your dental pain.{" "}
                  </p>

                  <div className="booking_btn">
                    <Link to="/userlogin" className="white-btn download_btn">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-divide p-120">
          <div className="container">
            <div className="row">
              {blogs?.length > 0 ? (
                <div className="col-md-12">
                  <div className="blog_inner_part">
                    <ul className="blogs_details d-flex justify-content-center single_blog">
                      {blogs?.slice(0, 2)?.map((blog) => {
                        return (
                          <li key={blog?.id}>
                            <img
                              src={HOST_NAME + blog?.img}
                              // src={require("../../../assets/images/blogs/blog-1.png")}
                              alt="blog"
                              className="img-fluid"
                            />
                            <div className="blog_inner">
                              <div className="blog_title">
                                <h4>{blog?.title}</h4>
                                <p>{blog?.author}</p>
                              </div>
                              <div className="read_more_btn latest_updates_btn">
                                <Link
                                  to={`/blog/${blog?.id}`}
                                  className="light_btn"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="booking_btn">
                    <Link to="/allBlogs" className="white-btn download_btn">
                      See all Blogs
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section> */}
      </div>
    </LayoutHome>
  );
}
