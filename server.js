import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const username = process.env.METEOMATICS_USERNAME; // Your Meteomatics username
const password = process.env.METEOMATICS_API_KEY;  // Your Meteomatics API key

const weatherUrl = `https://${username}:${password}@api.meteomatics.com/2024-10-01T19:25:00.000-04:00--2024-10-05T19:25:00.000-04:00:PT1H/t_5cm:C/43.8554425,-79.6392832_43.5796082,-79.1132193:0.1,0.1/json?model=mix`;


app.use(cors());

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(weatherUrl);
    console.log('Weather data retrieved:', response.data); // Log the response data
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Meteomatics:', error);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});