import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  EmaildetailscustomconetentAction,
  SaveCustomemailAction,
} from "../Redux/Actions/user/salon";
import toast from "react-hot-toast";
export default function EditEmail() {
  const dispatch = useDispatch();
  const [emailtext, setEmailtext] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(EmaildetailscustomconetentAction({ type: 1 })).then(function (
      object
    ) {
      setEmailtext(object?.payload?.data?.description);
    });
  }, []);

  const Submittheform = () => {
    if (emailtext != "") {
      dispatch(
        SaveCustomemailAction({
          description: emailtext,
          emailtype: 1,
        })
      );
      navigate("/custom-email");
    } else {
      toast.error("Custom Text is required");
    }
  };
  return (
    <MyAcoountLayout>
      <div className="col-lg-9">
        <div className="account_form edit-mail">
          <h2>Update Welcome Email Content</h2>
          <p className="mx-0" style={{ color: "#000" }}>
            Update these details for emails sent from Consultify
          </p>
          <div className="row">
            <div className="col-lg-12">
              <label>Email Subject</label>
              <p>Welcome To Consultify</p>
            </div>
            <div className="col-lg-12">
              <label>Email Body</label>
              <img
                className="email-logo"
                src={require("../assets/img/newconsultlogo.webp")}
              />
              <h3>Welcome to Consultify</h3>
              <p>
                Thank you for choosing Consultify as your Online Consultation
                Platform. Here’s some information to help you get started!
              </p>
              <h3>Login Instructions</h3>
              <p>Email Address: [Salons registered email address]</p>
              <p>Please confirm your email address using the button below:</p>
              <button className="ms-3">Confirm Your Email Address </button>
              <p>
                The web address for future logins (if you wish to save as an app
                icon on your smart phone / tablet home screen) is
                <Link to="https://salon.consultifyapp.com">
                  https://salon.consultifyapp.com
                </Link>
              </p>
              <img src={require("../assets/img/mobileimg.jpg")} />
              <h3>Dedicated Account Manager</h3>
              <p>
                Here at Consultify, each user is allocated a dedicated account
                manager, free of charge, to help set up & manager their account.
              </p>
              <ul>
                <li>Your account manager is: ANNE</li>
                <li>
                  Anne is available via business WhatsApp on +44 7591 346700
                </li>
                <li>Business Hours: Monday to Saturday 8am - 8pm</li>
              </ul>
              <p>
                Your account manager will reach out to you soon via WhatsApp /
                Text Message / Email to see if there is anything they can assist
                you with.
              </p>
            </div>
            <div className="col-lg-12">
              <label>Custom Text (You can edit this if required)</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Thank you for joining Consultify."
                name="Emailsub"
                value={emailtext}
                onChange={(e) => {
                  setEmailtext(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12">
              <div className="mail-template">
                <p className="spacing-top mb-2">
                  You can contact any other team member for help via:{" "}
                </p>
                <ul>
                  <li>Email: support@consultifyapp.com</li>
                  <li>Telephone: 0330 223 2723</li>
                </ul>
                <p className="spacing-top">
                  Once again, we thank you for choosing Consultify!
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="editmail-btns">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/custom-email");
                  }}
                >
                  Cancel
                </button>
                <button type="button" onClick={Submittheform}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
