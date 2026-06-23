require("dotenv").config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});