import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { userAddConsultations } from "../../../Redux/Actions/user/userAll";
import { toastSuccess } from "../../../Redux/Reducers/user/ConsultationSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function CheckoutForm({ consInfo, itemCode }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(consInfo);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          console.log(clientSecret);
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: "http://localhost:3000",
      },
      redirect: "if_required",
    });
    const { error, paymentIntent } = response;
    if (paymentIntent?.status == "succeeded") {
      console.log(paymentIntent.client_secret);
      const dateobj = consInfo?.date + " " + consInfo?.time;
      const isoDate = moment(dateobj, "DD/MM/YYYY hh:mm a").toISOString();
      const responseObject = {
        date: isoDate,
        client_secret: paymentIntent.client_secret,
        payment_id: paymentIntent.id,
        payment_method: paymentIntent.payment_method,
        itemCode: itemCode,
      };
      dispatch(userAddConsultations(responseObject)).then(
        navigate("/accountHome")
      );
    }

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error?.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        className="stripe-button"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
