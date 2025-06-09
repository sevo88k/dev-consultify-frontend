import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./payment_style.css";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentIntent } from "../../../Redux/Actions/admin/adminPanel";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function MainPay({ consInfo }) {
  const clientSecret = useSelector((state) => state.adminPanel.clientSecret);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createPaymentIntent({ itemCode: "b59a26" }));
    // api
    //   .post("http://localhost:4000/api/pay/create-payment-intent", {
    //     items: [{ id: "xl-tshirt" }],
    //   })
    //   .then((response) => setClientSecret(response.data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div id="app">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm consInfo={consInfo} itemCode={"b59a26"} />
        </Elements>
      )}
    </div>
  );
}
