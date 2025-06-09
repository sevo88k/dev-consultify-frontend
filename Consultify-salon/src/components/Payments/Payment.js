// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Niz4WESaKUdNmBq2cqruxMB381559GrWPSFiyofWnlYnn4pDUHWK7lp0Kvs0Io1Ac0H8YF8ZJQhG4KhTNNwreLt00w4rFOrjU');

const Payment = () => {
    const handlePayment = async (tokenId) => {
        // Replace 'your_price_id' with the actual Stripe price ID for the selected subscription tier
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/other/createSubscription`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: tokenId, priceId: process.env.REACT_APP_PRICE_KEY }),
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <stripe-pricing-table pricing-table-id="prctbl_1OebWYESaKUdNmBq9qkdoq6n"
            publishable-key="pk_test_51Niz4WESaKUdNmBq2cqruxMB381559GrWPSFiyofWnlYnn4pDUHWK7lp0Kvs0Io1Ac0H8YF8ZJQhG4KhTNNwreLt00w4rFOrjU">
        </stripe-pricing-table>
    );
};

export default Payment;
