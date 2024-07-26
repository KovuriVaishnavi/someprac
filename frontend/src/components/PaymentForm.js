// PaymentForm.js
import React from 'react';

const PaymentForm = () => {
  const handlePayment = async () => {
    const { orderId } = await fetch('http://localhost:3001/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 10000 })  // Amount in paise (10000 paise = ₹100)
    }).then((res) => res.json());

    var options = {
      key: 'YOUR_RAZORPAY_KEY_ID',  // Replace with your Razorpay Key ID
      amount: 10000,  // Amount in paise
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: orderId,
      handler: function (response) {
        alert('Payment successful: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9876543210'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with UPI</button>
    </div>
  );
};

export default PaymentForm;
