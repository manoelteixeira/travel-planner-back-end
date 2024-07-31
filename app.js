// app.js
// DEPENDENCIES
const { error } = require("console");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Trip Planner App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found." });
});

module.exports = app;
