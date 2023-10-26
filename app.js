// app.js
const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

module.exports = app;
