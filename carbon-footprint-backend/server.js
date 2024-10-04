// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to calculate carbon footprint
app.post('/calculate', (req, res) => {
    const { transportation, electricity, waste } = req.body;

    // Calculate CO2 emissions
    const transportationCO2 = transportation * 0.21; // Transportation CO2
    const electricityCO2 = electricity * 0.527;     // Electricity CO2
    const wasteCO2 = waste * 0.2;                   // Waste CO2

    const totalCO2 = transportationCO2 + electricityCO2 + wasteCO2;

    // Respond with the result
    res.json({ carbonFootprint: totalCO2 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
