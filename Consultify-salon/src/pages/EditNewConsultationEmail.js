import React, { useState } from "react";
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
import { useEffect } from "react";
export default function EditNewConsultationEmail() {
  const dispatch = useDispatch();
  const [emailtext, setEmailtext] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(EmaildetailscustomconetentAction({ type: 2 })).then(function (
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
          emailtype: 2,
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
          <h2>Update Consultation Email Content</h2>
          <p className="mx-0" style={{ color: "#000" }}>
            Update these details for emails sent from Consultify
          </p>
          <div className="row">
            <div className="col-lg-12">
              <label>Email Subject</label>
              <p>
                Consultation Form For Your Upcoming Appointment At [Salon Name]
              </p>
            </div>
            <div className="col-lg-12">
              <label>Email Body</label>
              <p>Hi [Client Name],</p>
              <p>
                You have a “[Consultation Form Name]” Consultation Form to
                complete in preparation for your upcoming appointment at [Salon
                Name]
              </p>
              <p>Please click the button below to complete the form.</p>
              <button>Complete Form </button>
              <p>
                Please complete this form within [Number of Days] days of
                receiving this email, to allow your treatment provider to review
                prior to your treatment.
              </p>
              <p>
                Please complete this form at least [Number of Days] days prior
                to your appointment, to allow your treatment provider to review
                prior to your treatment.
              </p>
              <p>
                Click the button below to view the relevant treatment Pre / Post
                Care:{" "}
              </p>
              <button>Pre/Post Care Form </button>
              <p>
                Please acknowledge within the form that you have read the
                information carefully. This will ensure your treatment runs
                smoothly on the day.
              </p>
            </div>
            <div className="col-lg-12">
              <label>Custom Text (You can edit this if required)</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Thank you for joining Consultify. "
                name="Emailsub"
                value={emailtext}
                onChange={(e) => {
                  setEmailtext(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12">
              <div className="mail-template">
                <p>
                  If you have any further questions, please contact [Salon Name]
                  directly.
                </p>

                <p className="spacing-top">Kind Regards, </p>
                <p className="spacing-top">The Consultify Team</p>
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
