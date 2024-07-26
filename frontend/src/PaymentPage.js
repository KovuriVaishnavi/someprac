import React from 'react';

const PaymentPage = () => {
  const handlePayment = () => {
    const paymentLink = 'https://razorpay.me/@careercube8246'; // Your Razorpay payment link
    window.location.href = paymentLink;
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
