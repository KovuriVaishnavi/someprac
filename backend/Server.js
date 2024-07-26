const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

const otpRoutes = require('./Routes/otpRoutes'); // Import the OTP routes // Import the OTP verification routes

mongoose
    .connect("mongodb://127.0.0.1:27017/food-bank")
    .then(() => console.log("Connected to DataBase successfully..."));

// Connecting API endpoints to routes


app.use('/api/otp', otpRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
