import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { informationlistAction } from "../Redux/Action/CustomerRestAction";
export default function HelpAndContact() {
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(informationlistAction())
  },[])
  const faqlist = useSelector(
    (state) => state.customer?.faqlist
  );

  return (
    <MyAcoountLayout>
      <div className="col-lg-10 mx-auto">
        <div className="customer-faqs">
        <h2 className="text-center mb-3">FAQs</h2>
          <Accordion defaultActiveKey="0">
          {faqlist?.length === 0 ? (
              <div className="faqs-wrapper">
                <p>No FAQs Available</p>
              </div>
            ) : (
              faqlist?.map(function (object, i) {
                return (
                <Accordion.Item eventKey={i}>
              <Accordion.Header>{object?.question}</Accordion.Header>
              <Accordion.Body>
              {  JSON.parse(object?.answer).blocks?.map(block => block.text)}
              </Accordion.Body>
            </Accordion.Item>
              )
            })
          )}

        
      
          </Accordion>
        </div>
      </div>
    </MyAcoountLayout>
  );
}
