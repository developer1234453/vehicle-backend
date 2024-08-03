const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const vehicleData = [
  {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
  {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
  {"latitude": 17.385050, "longitude": 78.486675, "timestamp": "2024-07-20T10:00:10Z"},
  {"latitude": 17.385060, "longitude": 78.486680, "timestamp": "2024-07-20T10:00:15Z"},
  {"latitude": 17.385075, "longitude": 78.486690, "timestamp": "2024-07-20T10:00:20Z"},
  {"latitude": 17.385090, "longitude": 78.486700, "timestamp": "2024-07-20T10:00:25Z"},
  {"latitude": 17.385110, "longitude": 78.486715, "timestamp": "2024-07-20T10:00:30Z"},
  {"latitude": 17.385130, "longitude": 78.486730, "timestamp": "2024-07-20T10:00:35Z"},
  {"latitude": 17.385150, "longitude": 78.486745, "timestamp": "2024-07-20T10:00:40Z"},
  {"latitude": 17.385170, "longitude": 78.486760, "timestamp": "2024-07-20T10:00:45Z"},
  {"latitude": 17.385190, "longitude": 78.486775, "timestamp": "2024-07-20T10:00:50Z"},
  {"latitude": 17.385210, "longitude": 78.486790, "timestamp": "2024-07-20T10:00:55Z"},
  {"latitude": 17.385230, "longitude": 78.486805, "timestamp": "2024-07-20T10:01:00Z"},
  {"latitude": 17.385250, "longitude": 78.486820, "timestamp": "2024-07-20T10:01:05Z"},
  {"latitude": 17.385270, "longitude": 78.486835, "timestamp": "2024-07-20T10:01:10Z"},
  {"latitude": 17.385290, "longitude": 78.486850, "timestamp": "2024-07-20T10:01:15Z"},
  {"latitude": 17.385310, "longitude": 78.486865, "timestamp": "2024-07-20T10:01:20Z"},
  {"latitude": 17.385330, "longitude": 78.486880, "timestamp": "2024-07-20T10:01:25Z"},
  {"latitude": 17.385350, "longitude": 78.486895, "timestamp": "2024-07-20T10:01:30Z"},
  {"latitude": 17.385370, "longitude": 78.486910, "timestamp": "2024-07-20T10:01:35Z"},
  {"latitude": 17.385390, "longitude": 78.486925, "timestamp": "2024-07-20T10:01:40Z"},
  {"latitude": 17.385410, "longitude": 78.486940, "timestamp": "2024-07-20T10:01:45Z"},
  {"latitude": 17.385430, "longitude": 78.486955, "timestamp": "2024-07-20T10:01:50Z"},
  {"latitude": 17.385450, "longitude": 78.486970, "timestamp": "2024-07-20T10:01:55Z"}
];

app.get('/api/vehicle', (req, res) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
