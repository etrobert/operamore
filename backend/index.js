const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors()); // TODO restrict access

let dates = [];
let nextId = 0;

const filename = "dates.json";

fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  dates = JSON.parse(data);
});

function updateFile() {
  fs.writeFile(filename, JSON.stringify(dates), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/dates", (req, res) => {
  const date = { id: nextId++, ...req.body };
  dates.push(date);
  updateFile();
  res.send(date);
});

app.get("/dates", (req, res) => {
  res.send(dates);
});

app.delete("/dates/:id", (req, res) => {
  const index = dates.findIndex((date) => date.id == req.params.id);
  if (index != -1) dates.splice(index, 1);
  updateFile();
  res.send("OK");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
