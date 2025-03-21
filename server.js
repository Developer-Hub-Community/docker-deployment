const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Express API!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
