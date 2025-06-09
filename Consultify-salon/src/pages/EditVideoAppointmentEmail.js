import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EmaildetailscustomconetentAction, SaveCustomemailAction } from "../Redux/Actions/user/salon";
import toast from "react-hot-toast";
import { useEffect } from "react";
export default function EditVideoAppointmentEmail() {
  const dispatch = useDispatch();
  const [emailtext, setEmailtext] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(EmaildetailscustomconetentAction({type:5})).then(function(object){
    
      setEmailtext(object?.payload?.data?.description)
    
    })
      },[])

  const Submittheform = () => {
    if (emailtext != "") {
      dispatch(
        SaveCustomemailAction({
          description: emailtext,
          emailtype:5
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
          <h2>Update Video Appointment Email</h2>
          <p className="mx-0" style={{ color: "#000" }}>
            Update these details for emails sent from Consultify
          </p>
          <div className="row">
            <div className="col-lg-12">
              <label>Email Subject</label>
              <p>[Your Salon Name] </p>
            </div>
            <div className="col-lg-12">
              <label>Email Body</label>
              <p>Dear [Your Customer Name],</p>
            </div>
            <div className="col-lg-12">
              <label>Custom Text (You can edit this if required)</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Thank you for joining Consultify. Lorum ipsum.. "
                name="Emailsub"
                value={emailtext}
                onChange={(e) => {
                  setEmailtext(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12">
              <div className="mail-template">
                <p>Your log in details are as follows:</p>
                <p className="spacing-top">Email: samplemail@yopmail.com</p>
                <p>Password: samplepassword123 </p>
                <p className="spacing-top">Warm Regards </p>
                <p className="spacing-top">Consultify</p>
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
