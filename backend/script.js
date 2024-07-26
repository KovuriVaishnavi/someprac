const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

// Dummy location data
const location = {
  lat: 37.7749, // Example latitude
  lng: -122.4194 // Example longitude
};

app.get('/location', (req, res) => {
  res.json(location);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
