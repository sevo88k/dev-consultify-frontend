import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editProfile, userLogin } from "../Redux/Actions/user/auth";
import { toast } from "react-hot-toast";

const SignUp_subscription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [discountpromocode,setDiscountpromocode]=useState("")
  const dispatch = useDispatch();
  const subscrtiption_data = useSelector(
    (state) => state?.myaccount?.subscription_data
  );

  const submitSubscription = (value) => {
    dispatch(editProfile({ id: params.id, subscription: value })).then(
      (data) => {
        if (data?.payload?.success) {
          //  localStorage.setItem("token",data?.payload?.data?.token);
          //  localStorage.setItem("userId",data?.payload?.data?._id);
          //  localStorage.setItem("firstname",data?.payload?.data?.firstname);
          //  localStorage.setItem("lastename",data?.payload?.data?.lastname);
          //-> toast.success(data?.payload?.message);
          // window.location.href = "/signin";
          navigate("/signin");
        }
      }
    );
  };

  const handlePayment = async (price, type) => {
    // Replace 'your_price_id' with the actual Stripe price ID for the selected subscription tier
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/other/createSubscription`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: params?.id,
          priceId: price,
          subscriptionType: type,
          couponId:discountpromocode,
          leaveformstep:3
          
          
          //"PQ7SiLPd"
        }),
      }
    );

    const result = await response.json();

    if (result?.session?.url) {
      window.location.href = result?.session?.url;
    } else {
      toast.error(result?.msg);
    }

    console.log(result);
  };

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Navbar.Brand href="https://consultifyapp.com" target="_blank">
            <img
               className="main-logo"
              // src={require("../assets/img/logo-white.svg").default}
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"

            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <p>Already have an account?</p>
              <Nav.Link href="/signin" className="white-btn">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* Subscription Start */}
      <section className="signup-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-inner">
                <h2>Choose your subscription</h2>
                <div className="subscription-plan">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6">
                      <div className="subscription-content standard-plan">
                        <div className="subscription-type">
                          <div className="subscription-img">
                            <img
                              src={
                                require("../assets/img/subscription-img.svg")
                                  .default
                              }
                              alt="img"
                            />
                          </div>
                          <div className="plan-type-name">
                            <h3>Standard</h3>
                            <h3>£14.99 per month</h3>
                          </div>
                        </div>
                        <ul className="plan-features">
                     
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Dedicated Account Manager</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Unlimited Consultations</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Unlimited Clients</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Cancel Anytime</h3>
                          </li>
                        </ul>

                   
                        <div className="submit-btn">
                          <div
                            onClick={() => {
                              //submitSubscription(1);
                              handlePayment(
                                process.env.REACT_APP_PRICE_KEY,
                                1
                              );
                            }}
                            type="submit"
                            className="lg-btn"
                          >
                            Choose Plan
                          </div>
                        </div>
                      </div>
           
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="subscription-content">
                        <div className="badge">
                          <p>Most popular</p>
                        </div>
                        <div className="subscription-type">
                          <div className="subscription-img">
                            <img
                              src={
                                require("../assets/img/subscription-img.svg")
                                  .default
                              }
                              alt="img"
                            />
                          </div>
                          <div className="plan-type-name">
                            <h3>Pro</h3>
                            <h3>£19.99 per month</h3>
                          </div>
                        </div>
                        <ul className="plan-features">
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Unlimited searches</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Access to our entire database</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Unlimited User Logins</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Full Consultation Access</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Create Custom Consultations</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Manage Clients </h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Schedule Appointments</h3>
                          </li>
                          <li>
                            <img
                              src={
                                require("../assets/img/drk-tick.svg").default
                              }
                              alt="img"
                            />
                            <h3>Host Video Consultations</h3>
                          </li>
                        </ul>
                        <div className="submit-btn">
                          <button
                            onClick={() => {
                              handlePayment("price_1OedvoFbPDSMnk9txAiItNy2",2);
                              //submitSubscription(2)
                            }}
                            type="submit"
                            className="lg-btn"
                          >
                            Choose Plan
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subscription End */}
    </div>
  );
};
export default SignUp_subscription;
