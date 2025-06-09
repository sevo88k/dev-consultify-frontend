import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { useDispatch, useSelector } from "react-redux";
import { getcontraindicationdetails } from "../Redux/Actions/user/salon";

const DetailScreen = () => {
  let queryData = new URL(document.location).search;
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const dispatch = useDispatch();
  const { id, search } = useParams();

  var idvalue = Decryptedid(atob(id));
  console.log(idvalue);

  useEffect(() => {
    dispatch(getcontraindicationdetails(idvalue));
  }, [idvalue]);

  const contraindicationdetails = useSelector(
    (state) => state?.myaccount?.contraindicationdetails
  );
  console.log(search);
  return (
    <div className="result_view">
      {/* Header Start */}
      <Navbar
        expand="lg"
        className={
          scroll
            ? "bg-body-tertiary header-blck active"
            : "bg-body-tertiary header-blck"
        }
      >
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-center">
              <Nav.Link href="/Consultation">Consultations</Nav.Link>
              <Nav.Link href="#">My Clients</Nav.Link>
              <Nav.Link href="#">Schedule</Nav.Link>
              <Nav.Link href="#" className="white-btn">
                My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      <section className="product_view details">
        <div className="container">
          <div className="productmain_wrap detail-screen">
            <div className="row">
              <div className="col-lg-12">
                <div className="prev_main">
                  <img
                    src={
                      require("../../src/assets/img/right-arrow.svg").default
                    }
                    alt="arrow"
                    className="arrow-next-green"
                  />
                  <NavLink class="search" to={"/search_results" + queryData}>
                    Back to search results
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="top_info">
                  <h1 className="mb-0">{contraindicationdetails.title}</h1>
                  <p className="entry-type mb-0">
                    <b>{contraindicationdetails?.entery_id?.title}</b>
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="products">
                  <h2 className="hdngs">What’s it used for?</h2>
                  <p className="common-space">
                    {contraindicationdetails?.description}
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="medical_info">
                  <h2 className="hdngs">Contradiction</h2>
                  <ul>
                    {contraindicationdetails?.contraindication_advice?.map(
                      function (contraindication_advice_object, i) {
                        return (
                          <li>
                            <div className="sub_hdng">
                              {contraindication_advice_object?.area?.title} -{" "}
                              {contraindication_advice_object?.answer}{" "}
                              <a
                                href={"#" + contraindication_advice_object?._id}
                                className="below_lnk"
                              >
                                (see below)
                              </a>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product_ingredient">
                  <h2 className="hdngs">Side Effects relevant to treatments</h2>
                  <ul>
                    {contraindicationdetails?.side_effect?.map(function (
                      object,
                      i
                    ) {
                      return <li>{object?.value?.title}</li>;
                    })}
                  </ul>

                  {/* <ul>
                                        <li>
                                            Dermatological effects including reddening of face, bruising / skin discolouration, impaired wound healing, thinning of skin, skin rash, fluid build up and abnormal hair growth
                                        </li>
                                   
                                    </ul> */}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contradict">
                  <h2 className="hdngs">Contraindication Advice</h2>

                  {contraindicationdetails?.contraindication_advice?.map(
                    function (contraindication_advice_object, i) {
                      return (
                        contraindication_advice_object?.source && (
                          <li>
                            <div className="sub_hdng">
                              <h4>
                                <b>
                                  {contraindication_advice_object?.area?.title}{" "}
                                </b>
                              </h4>
                            </div>
                            <p>{contraindication_advice_object?.source}</p>
                          </li>
                        )
                      );
                    }
                  )}
                  {/* {
                                        contraindicationdetails?.contraindication_advice?.map(function(contraindication_advice_object,i){
                                            return(
                                               <>
                                               <h3>{contraindication_advice_object?.area?.title}</h3>
                                                <p className="common-space" id={contraindication_advice_object?._id}>{contraindication_advice_object?.source}</p>
                                              
                                                        </>
                                            )
                                        })
                                    } */}
                </div>
              </div>

              <div className="col-md-12">
                <div className="contradict">
                  <h2 className="hdngs">Links</h2>
                  {contraindicationdetails?.link?.map(function (
                    link_object,
                    i
                  ) {
                    return (
                      <>
                        <span className="mt-4">
                          {" "}
                          {link_object?.source?.title} Website link:{" "}
                          <NavLink className="link" to={link_object?.url}>
                            {link_object?.url}
                          </NavLink>
                        </span>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DetailScreen;
