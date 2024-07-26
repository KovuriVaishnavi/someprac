const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: 600 } }, // Expires after 10 minutes
});

module.exports = mongoose.model('Otp', otpSchema);
