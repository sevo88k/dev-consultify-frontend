// PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setPaymentStatus("in-progress");

    try {
      const { token, error } = await stripe.createToken(
        elements.getElement(CardElement)
      );

      if (error) {
        console.error(error);
        setPaymentStatus("failed");
      } else {
        // Send the token to your server for payment processing
        setPaymentStatus("in-progress");
        await handlePayment(token.id);
        setPaymentStatus("success");
      }
    } catch (error) {
      console.error(error);
      setPaymentStatus("failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={paymentStatus === "in-progress"}>
          Pay Now
        </button>
      </form>
      {paymentStatus === "in-progress" && <p>Payment in progress...</p>}
      {paymentStatus === "success" && <p>Payment successful!</p>}
      {paymentStatus === "failed" && <p>Payment failed. Please try again.</p>}
    </div>
  );
};

export default CheckoutForm;
