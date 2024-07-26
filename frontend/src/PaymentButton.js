import React from 'react';

const PaymentButton = ({ amount }) => {
  const handlePayment = () => {
    const options = {
      key:'rzp_test_sFUyNU88MCtoFf',
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#F37254',
      },
      modal: {
        ondismiss: function () {
          alert('Payment cancelled or failed. Please try again.');
        }
      }
    };

    const rzp = new window.Razorpay(options);

    rzp.on('payment.failed', function (response) {
      alert(`Payment failed due to: ${response.error.description}`);
    });

    rzp.open();
  };

  return (
    <button className="btn btn-primary" onClick={handlePayment}>
      Make Payment
    </button>
  );
};

export default PaymentButton;
