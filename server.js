const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const dbConfig = require("./config/config");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const path = require("path");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node Express Server Started at ${port}!`)); 