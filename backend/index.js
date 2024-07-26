// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',  // Replace with your Razorpay Key ID
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET'  // Replace with your Razorpay Key Secret
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body; // Amount in paise

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      payment_capture: '1'  // '1' for automatic capture, '0' for manual
    });
    
    res.send({ orderId: order.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
