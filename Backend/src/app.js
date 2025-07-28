const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Database connect
connectDB();

// Routes
app.get('/api', (req, res) => {
  res.json({ message: "API is working" });
});

// React build serve (baad mein add karenge)
module.exports = app;
