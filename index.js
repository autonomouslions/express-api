const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

let status = app.use(express.static("public"));

const busy = "#f02c2e";
const booked = "#ffce5d";
const free = "#5ac5b2";

// app.get("/pois", (req, res) =>
//   res.send(
//     request("poidump.json", (err, resp, body) => {
//       console.log(err);
//       console.log(body);
//     })
//   )
// );

let spotStatus = free;

app.get("/status", (req, res) => {
  console.log("called status");
  res.json({ status: spotStatus });
});

app.get("/free", (req, res) => {
  console.log("called free");
  spotStatus = free;
  res.sendStatus(200);
});

app.get("/busy", (req, res) => {
  console.log("called busy");
  spotStatus = busy;

  res.sendStatus(200);
});

app.get("/booked", (req, res) => {
  console.log("called booked");
  spotStatus = booked;

  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//10.1.128.207
