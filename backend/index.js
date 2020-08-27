const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // TODO restrict access

const dates = [];
let nextId = 0;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/dates", (req, res) => {
  const date = { id: nextId++, ...req.body };
  dates.push(date);
  res.send(date);
});

app.get("/dates", (req, res) => {
  res.send(dates);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
