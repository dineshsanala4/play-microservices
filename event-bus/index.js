const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(event);

  // Sending an api call to Post service
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // Sending an api call to omments service
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  // Sending an api call to Query service
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
});

app.listen(4006, () => {
  console.log("Event Bus is running & listning on post: 4006");
});
